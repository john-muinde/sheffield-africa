<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTestimonialRequest;
use App\Http\Resources\TestimonialResource;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
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
        $testimonials = Testimonial::when(request('search_id'), function ($query) {
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
        return TestimonialResource::collection($testimonials);
    }

    public function store(StoreTestimonialRequest $request)
    {
        $this->authorize('testimonial-create');

        // Check if the testimonial with the same name already exists
        $existingTestimonial = Testimonial::where('name', $request->name)->first();
        if ($existingTestimonial) {
            return response()->json(['errors' => ['name' => ['Testimonial with the same name already exists.']]], 409);
        }

        $validatedData = $request->validated();
        $validatedData['created_by'] = auth()->user()->id;

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_testimonial_' . $request->file('main_image')->getClientOriginalName();
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

        $testimonial = Testimonial::create($validatedData);

        return new TestimonialResource($testimonial);
    }

    public function show(Testimonial $testimonial)
    {
        $this->authorize('testimonial-edit');
        return new TestimonialResource($testimonial);
    }

    public function update(Testimonial $testimonial, StoreTestimonialRequest $request)
    {
        $this->authorize('testimonial-edit');

        // Check if the testimonial with the same name already exists (excluding the current testimonial)
        $existingTestimonial = Testimonial::where('name', $request->name)
            ->where('id', '!=', $testimonial->id)
            ->first();
        if ($existingTestimonial) {
            return response()->json(['errors' => ['name' => ['Testimonial with the same name already exists.']]], 409);
        }
        $validatedData = $request->validated();

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_testimonial_' . $request->file('main_image')->getClientOriginalName();
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

        $testimonial->update($validatedData);

        return new TestimonialResource($testimonial);
    }

    public function destroy(Testimonial $testimonial)
    {
        $this->authorize('testimonial-delete');
        $testimonial->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return TestimonialResource::collection(Testimonial::all());
    }
}