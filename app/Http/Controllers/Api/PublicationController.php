<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePublicationRequest;
use App\Http\Requests\UpdatePublicationRequest;
use App\Http\Resources\PublicationResource;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Models\Publication;
use Illuminate\Http\Request;

class PublicationController extends Controller
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
        $publications = Publication::when(request('search_id'), function ($query) {
                $query->where('id', request('search_id'));
            })
            ->when(request('search_title'), function ($query) {
                $query->where('name', 'like', '%' . request('search_title') . '%');
            })
            ->when(request('search_parent_id'), function ($query) {
                $query->where('parent_id', 'like', '%' . request('search_parent_id') . '%');
            })
            ->when(request('search_global'), function ($query) {
                $query->where(function ($q) {
                    $q->where('id', request('search_global'))
                        ->orWhere('name', 'like', '%' . request('search_global') . '%');
                });
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(10000);
        return PublicationResource::collection($publications);
    }

    public function store(StorePublicationRequest $request)
    {
        $this->authorize('blog-create');

        //dd($request);

        // Check if the publication with the same name already exists
        $existingPublication = Publication::where('name', $request->name)->first();
        if ($existingPublication) {
            return response()->json(['errors' => ['name' => ['Publication with the same name already exists.']]], 409);
        }


        $validatedData = $request->validated();
        $validatedData['created_by'] = auth()->user()->id;

        if ($request->hasFile('main_image')) {

            $file_name = time().'_'.$request->file('main_image')->getClientOriginalName();
            $file_path = $request->file('main_image')->storeAs('uploads', $file_name, 'public');
            $validatedData['publication_file'] = $file_path;
        }       

        $publication = Publication::create($validatedData);


        return new PublicationResource($publication);
    }

    public function show(Publication $publication)
    {
        $this->authorize('blog-edit');
        return new PublicationResource($publication);
    }

    public function update(Publication $publication, UpdatePublicationRequest $request)
    {
        $this->authorize('blog-edit');

        $validatedData = $request->validated();


        // Check if the publication with the same name already exists (excluding the current publication)
        $existingPublication = Publication::where('name', $request->name)
            ->where('id', '!=', $publication->id)
            ->first();
        if ($existingPublication) {
            return response()->json(['errors' => ['name' => ['Publication with the same name already exists.']]], 409);
        }


        if ($request->hasFile('main_image')) {

            $file_name = time().'_'.$request->file('main_image')->getClientOriginalName();
            $file_path = $request->file('main_image')->storeAs('uploads', $file_name, 'public');
            $validatedData['publication_file'] = $file_path;
        }


        $publication->update($validatedData);

        //dd("test");

        return new PublicationResource($publication);
    }

    public function destroy(Publication $publication)
    {
        $this->authorize('blog-delete');
        $publication->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return PublicationResource::collection(Publication::all());
    }

    public function getPublications()
    {
        $publications = Publication::get();

        return response()->json($publications);
    }

    public function getPublication()
    {

        $publication_id = request('publication_id', 1);

        $publication = Publication::find($publication_id);

        return new PublicationResource($publication);
    }
}
