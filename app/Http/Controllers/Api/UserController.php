<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

use App\Mail\ContactUs;
use App\Mail\Career;
use App\Mail\RequestQuote;

class UserController extends Controller
{

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


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
        $this->authorize('user-create');

        $attributes = $request->validate([
            'name' => 'required|string|max:255|min:3',
            'role' => 'required',
            'email' => ['required', 'email', 'unique:users'],
            'password' => 'required',
        ]);

        $user_role = $attributes["role"];

        $created_user = User::create($attributes);

        $created_user->assignRole((int)$user_role);

        return new UserResource($created_user);
    }


    public function show(User $user)
    {
        $this->authorize('user-list');
        return new UserResource($user);
    }


    public function edit(Request $request, $id)
    {
        //

    }


    public function update(Request $request, $id)
    {
        $this->authorize('user-edit');

        $user = User::findOrFail($id);

        $attributes = $request->validate([
            'name' => 'required',
            'role' => 'required',
            'email' => ['required', 'email'],
            // optional password
            'password' => ['nullable', 'min:6'],
        ]);

        $user_role = $attributes["role"];

        $user->update($attributes);

        $user->syncRoles([(int)$user_role]);

        return new UserResource($user);
    }


    public function destroy(User $user)
    {
        $this->authorize('user-delete');
        $user->delete();

        return response()->noContent();
    }


    public function contactUs(Request $request)
    {

        $recaptchaToken = $request->input('recaptchaToken');

        $recaptchaSecret = '6Ldyw1wpAAAAAIvn2LJHPIGK4JsebS2FvVZkN-Pk';
        $recaptchaValueFromClient = $recaptchaToken;

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
