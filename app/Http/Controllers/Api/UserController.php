<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use PharIo\Manifest\Email;

use App\Mail\ContactUs;
use App\Mail\Career;
use App\Mail\RequestQuote;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $orderColumn = request('order_column', 'created_at');
        if (!in_array($orderColumn, ['id', 'name', 'created_at'])) {
            $orderColumn = 'created_at';
        }
        $orderDirection = request('order_direction', 'desc');
        if (!in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'desc';
        }
        $users = User::when(request('search_id'), function ($query) {
            $query->where('id', request('search_id'));
        })
            ->when(request('search_title'), function ($query) {
                $query->where('name', 'like', '%' . request('search_title') . '%');
            })
            ->when(request('search_global'), function ($query) {
                $query->where(function ($q) {
                    $q->where('id', request('search_global'))
                        ->orWhere('name', 'like', '%' . request('search_global') . '%');
                });
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(50);

        return UserResource::collection($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $attributes = $request->validate([
            'name' => 'required',
            'role' => 'required',
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        $user_role = $attributes["role"];

        $created_user = User::create($attributes);

        $created_user->assignRole($user_role);

        return new UserResource($created_user);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
        $this->authorize('product-edit');
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        //

        $user = User::findOrFail($id); // Assuming $id is the id of the user you want to update

        $attributes =  $request->validate([
            'name' => 'required',
            'role' => 'required',
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        $user_role = $attributes["role"];

        $user->update($attributes);

        $user->syncRoles([$user_role]); // If you want to replace the user's roles with the new one

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

        $user = User::findOrFail($id);

        $attributes = $request->validate([
            'name' => 'required',
            'role' => 'required',
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        $user_role = $attributes["role"];

        $user->update($attributes);

        $user->syncRoles([$user_role]); // If you want to replace the user's roles with the new one

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $this->authorize('product-delete');
        $user->delete();

        return response()->noContent();
    }


    public function contactUs(Request $request)
    {

        $recaptchaToken = $request->input('recaptchaToken');

        $recaptchaSecret = '6Ldyw1wpAAAAAIvn2LJHPIGK4JsebS2FvVZkN-Pk'; // Replace with your actual reCAPTCHA secret key
        $recaptchaValueFromClient = $recaptchaToken; // Replace with the actual reCAPTCHA value from the client

        $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify?' . http_build_query([
            'secret' => $recaptchaSecret,
            'response' => $recaptchaValueFromClient,
        ]);

        $responseData = json_decode(file_get_contents($recaptchaUrl), true);


        if (!$responseData['success']) {

            return response()->json(['message' => 'reCAPTCHA verification failed', 'status' => 'error']);
        } else {

            $request_type = $request->input('request_type');
            $area_of_interest = $request->input('area_of_interest');
            $surname = $request->input('surname');
            $email = $request->input('email');
            $company_name = $request->input('company_name');
            $business_type = $request->input('business_type');
            $country = $request->input('country');
            $message_request = $request->input('request');
            $code = $request->input('code');
            $firstname = $request->input('firstname');
            $phone_number = $request->input('phone_number');
            $accept_terms_conditions = $request->input('accept_terms_conditions');

            $formData = [
                'request_type' => $request_type,
                'area_of_interest' => $area_of_interest,
                'surname' => $surname,
                'email' => $email,
                'company_name' => $company_name,
                'business_type' => $business_type,
                'country' => $country,
                'message_request' => $message_request,
                'code' => $code,
                'firstname' => $firstname,
                'phone_number' => $phone_number,
                'accept_terms_conditions' => $accept_terms_conditions,

            ];


            try {

                Mail::to('sheffieldafricamarketing@gmail.com')->cc($email)->send(new ContactUs($formData));

                return response()->json(['message' => 'Your message has been received', 'status' => 'success']);
            } catch (\Exception $exception) {
                return response()->json(['message' => $exception->getMessage(), 'status' => 'success']);
            }
        }
    }


    public function careerCv(Request $request)
    {

        $recaptchaToken = $request->input('recaptchaToken');

        $recaptchaSecret = '6Ldyw1wpAAAAAIvn2LJHPIGK4JsebS2FvVZkN-Pk'; // Replace with your actual reCAPTCHA secret key
        $recaptchaValueFromClient = $recaptchaToken; // Replace with the actual reCAPTCHA value from the client

        $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify?' . http_build_query([
            'secret' => $recaptchaSecret,
            'response' => $recaptchaValueFromClient,
        ]);

        $responseData = json_decode(file_get_contents($recaptchaUrl), true);


        if (!$responseData['success']) {

            return response()->json(['message' => 'reCAPTCHA verification failed', 'status' => 'error']);
        } else {

            $name = $request->input('name');
            $email = $request->input('email');
            $phone_number = $request->input('phone_number');
            $message = $request->input('message');
            $job_title = $request->input('job_title');

            $cvFile = $request->file('cv');
            $supportingDocument = $request->file('supporting_document');


            $formData = [
                'name' => $name,
                'email' => $email,
                'phone_number' => $phone_number,
                'message' => $message,
                'job_title' => $job_title,

                'cv' => [
                    'name' => $cvFile->getClientOriginalName(),
                    'contents' => file_get_contents($cvFile->getRealPath()),
                ],

                'supporting_document' => [
                    'name' => $supportingDocument->getClientOriginalName(),
                    'contents' => file_get_contents($supportingDocument->getRealPath()),
                ],

            ];


            try {

                Mail::to('sheffieldafricamarketing@gmail.com')->cc($email)->send(new Career($formData));

                return response()->json(['message' => 'Your submission has been received', 'status' => 'success']);
            } catch (\Exception $exception) {
                return response()->json(['message' => $exception->getMessage(), 'status' => 'success']);
            }
        }
    }


    public function requestQuote(Request $request)
    {

        $recaptchaToken = $request->input('recaptchaToken');

        $recaptchaSecret = '6Ldyw1wpAAAAAIvn2LJHPIGK4JsebS2FvVZkN-Pk'; // Replace with your actual reCAPTCHA secret key
        $recaptchaValueFromClient = $recaptchaToken; // Replace with the actual reCAPTCHA value from the client

        $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify?' . http_build_query([
            'secret' => $recaptchaSecret,
            'response' => $recaptchaValueFromClient,
        ]);

        $responseData = json_decode(file_get_contents($recaptchaUrl), true);


        if (!$responseData['success']) {

            return response()->json(['message' => 'reCAPTCHA verification failed', 'status' => 'error']);
        } else {


            $surname = $request->input('surname');
            $email = $request->input('email');
            $company_name = $request->input('company_name');
            $business_type = $request->input('business_type');
            $country = $request->input('country');
            $location = $request->input('location');
            $code = $request->input('code');
            $firstname = $request->input('firstname');
            $phone_number = $request->input('phone_number');

            $shipping = $request->input('shipping');
            $installation = $request->input('installation');
            $cartItems = $request->input('cartItems');
            $cartItems = json_decode($cartItems, true);



            $formData = [
                'shipping' => $shipping,
                'installation' => $installation,
                'surname' => $surname,
                'email' => $email,
                'company_name' => $company_name,
                'business_type' => $business_type,
                'country' => $country,
                'location' => $location,
                'code' => $code,
                'firstname' => $firstname,
                'phone_number' => $phone_number,
                'cartItems' => $cartItems,

            ];


            try {

                Mail::to('sheffieldafricamarketing@gmail.com')->cc($email)->send(new RequestQuote($formData));

                return response()->json(['message' => 'Your Request Quote has been received', 'status' => 'success']);
            } catch (\Exception $exception) {
                return response()->json(['message' => $exception->getMessage(), 'status' => 'success']);
            }
        }
    }
}
