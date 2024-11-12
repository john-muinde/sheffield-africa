<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Resources\NewsResource;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NewsController extends Controller
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
        $newss = News::when(request('search_id'), function ($query) {
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
        return NewsResource::collection($newss);
    }

    public function store(StoreNewsRequest $request)
    {
        $this->authorize('product-create');

        // Check if the news with the same name already exists
        $existingNews = News::where('name', $request->name)->first();
        if ($existingNews) {
            return response()->json(['errors' => ['name' => ['News with the same name already exists.']]], 409);
        }

        $validatedData = $request->validated();
        $validatedData['created_by'] = auth()->user()->id;

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_news_' . $request->file('main_image')->getClientOriginalName();
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

        if ($request->hasFile('file_path')) {

            $file_name = time() . '_' . $request->file('file_path')->getClientOriginalName();
            $file_path = $request->file('file_path')->storeAs('uploads', $file_name, 'public');
            $validatedData['file_path'] = $file_path;
        }

        $news = News::create($validatedData);

        return new NewsResource($news);
    }

    public function show(News $news)
    {
        $this->authorize('product-edit');
        return new NewsResource($news);
    }

    public function update(News $news, StoreNewsRequest $request)
    {
        $this->authorize('product-edit');

        // Check if the news with the same name already exists (excluding the current news)
        $existingNews = News::where('name', $request->name)
            ->where('id', '!=', $news->id)
            ->first();
        if ($existingNews) {
            return response()->json(['errors' => ['name' => ['News with the same name already exists.']]], 409);
        }

        $validatedData = $request->validated();

        //dd("ik1o");

        if ($request->hasFile('main_image')) {

            //dd("iko");

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_news_' . $request->file('main_image')->getClientOriginalName();
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

        if ($request->hasFile('file_path')) {

            $file_name = time() . '_' . $request->file('file_path')->getClientOriginalName();
            $file_path = $request->file('file_path')->storeAs('uploads', $file_name, 'public');
            $validatedData['file_path'] = $file_path;
        }

        $news->update($validatedData);

        return new NewsResource($news);
    }

    public function destroy(News $news)
    {
        $this->authorize('product-delete');
        $news->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return NewsResource::collection(News::all());
    }
}
