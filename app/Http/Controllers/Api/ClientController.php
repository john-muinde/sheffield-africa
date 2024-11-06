<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientRequest;
use App\Http\Resources\ClientResource;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
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
        $clients = Client::when(request('search_id'), function ($query) {
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
            ->paginate(5000);
        return ClientResource::collection($clients);
    }

    public function store(StoreClientRequest $request)
    {
        $this->authorize('client-create');

        // Check if the client with the same name already exists
        $existingClient = Client::where('name', $request->name)->first();
        if ($existingClient) {
            return response()->json(['errors' => ['name' => ['Client with the same name already exists.']]], 409);
        }

        $validatedData = $request->validated();
        $validatedData['created_by'] = auth()->user()->id;

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_client_' . $request->file('main_image')->getClientOriginalName();
            $file_path = 'uploads/' . $file_name;

            // Resize and optimize the image
            $image = Image::make($file)->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->encode('jpg', 85); // Specify the desired encoding format and quality (80% in this example)

            // Store the optimized image
            Storage::disk('public')->put($file_path, $image);
            //$file_path = $request->file('main_image')->storeAs('uploads', $file_name, 'public');

            $validatedData['main_image_path'] = $file_path;
        }

        $client = Client::create($validatedData);

        return new ClientResource($client);
    }

    public function show(Client $client)
    {
        $this->authorize('client-edit');
        return new ClientResource($client);
    }

    public function update(Client $client, StoreClientRequest $request)
    {
        $this->authorize('client-edit');

        // Check if the client with the same name already exists (excluding the current client)
        $existingClient = Client::where('name', $request->name)
            ->where('id', '!=', $client->id)
            ->first();
        if ($existingClient) {
            return response()->json(['errors' => ['name' => ['Client with the same name already exists.']]], 409);
        }
        $validatedData = $request->validated();

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_client_' . $request->file('main_image')->getClientOriginalName();
            $file_path = 'uploads/' . $file_name;

            // Resize and optimize the image
            $image = Image::make($file)->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->encode('jpg', 85); // Specify the desired encoding format and quality (80% in this example)

            // Store the optimized image
            Storage::disk('public')->put($file_path, $image);
            //$file_path = $request->file('main_image')->storeAs('uploads', $file_name, 'public');

            $validatedData['main_image_path'] = $file_path;
        }

        $client->update($validatedData);

        return new ClientResource($client);
    }

    public function destroy(Client $client)
    {
        $this->authorize('client-delete');
        $client->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return ClientResource::collection(Client::all());
    }


    public function getClients(){
        $clients = Client::get();

        return $clients;
    }
    
}
