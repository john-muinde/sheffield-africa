<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Http\Resources\VideoResource;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
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
        $videos = Video::when(request('search_id'), function ($query) {
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
        return VideoResource::collection($videos);
    }

    public function store(StoreVideoRequest $request)
    {
        $this->authorize('blog-create');

        //dd($request);

        // Check if the video with the same name already exists
        $existingVideo = Video::where('name', $request->name)->first();
        if ($existingVideo) {
            //return response()->json(['errors' => ['name' => ['Video with the same name already exists.']]], 409);
        }


        $validatedData = $request->validated();
        $validatedData['created_by'] = auth()->user()->id;


        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time().'_'.$request->file('main_image')->getClientOriginalName();
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

            $file_name = time().'_'.$request->file('file_path')->getClientOriginalName();
            $file_path = $request->file('file_path')->storeAs('uploads', $file_name, 'public');
            $validatedData['file_path'] = $file_path;

        }   

        //dd($validatedData);    

        $video = Video::create($validatedData);


        return new VideoResource($video);
    }

    public function show(Video $video)
    {
        $this->authorize('blog-edit');
        return new VideoResource($video);
    }

    public function update(Video $video, UpdateVideoRequest $request)
    {
        $this->authorize('blog-edit');

        $validatedData = $request->validated();


        // Check if the video with the same name already exists (excluding the current video)
        $existingVideo = Video::where('name', $request->name)
            ->where('id', '!=', $video->id)
            ->first();
        if ($existingVideo) {
           // return response()->json(['errors' => ['name' => ['Video with the same name already exists.']]], 409);
        }

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time().'_'.$request->file('main_image')->getClientOriginalName();
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

            $file_name = time().'_'.$request->file('file_path')->getClientOriginalName();
            $file_path = $request->file('file_path')->storeAs('uploads', $file_name, 'public');
            $validatedData['file_path'] = $file_path;
        }


        $video->update($validatedData);

        //dd("test");

        return new VideoResource($video);
    }

    public function destroy(Video $video)
    {
        $this->authorize('blog-delete');
        $video->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return VideoResource::collection(Video::all());
    }

    public function getVideos()
    {
        $videos = Video::get();

        return response()->json($videos);
    }

    public function getVideo()
    {

        $video_id = request('video_id', 1);

        $video = Video::find($video_id);

        return new VideoResource($video);
    }
}
