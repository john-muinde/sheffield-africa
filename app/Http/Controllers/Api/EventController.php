<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEventRequest;
use App\Http\Resources\EventResource;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
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
        $events = Event::when(request('search_id'), function ($query) {
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
        return EventResource::collection($events);
    }

    public function store(StoreEventRequest $request)
    {
        $this->authorize('event-create');

        // Check if the event with the same name already exists
        $existingEvent = Event::where('name', $request->name)->first();
        if ($existingEvent) {
            return response()->json(['errors' => ['name' => ['Event with the same name already exists.']]], 409);
        }

        $validatedData = $request->validated();
        $validatedData['created_by'] = auth()->user()->id;

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_event_' . $request->file('main_image')->getClientOriginalName();
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

        $event = Event::create($validatedData);

        return new EventResource($event);
    }

    public function show(Event $event)
    {
        $this->authorize('event-edit');
        return new EventResource($event);
    }

    public function update(Event $event, StoreEventRequest $request)
    {
        $this->authorize('event-edit');

        // Check if the event with the same name already exists (excluding the current event)
        $existingEvent = Event::where('name', $request->name)
            ->where('id', '!=', $event->id)
            ->first();
        if ($existingEvent) {
            return response()->json(['errors' => ['name' => ['Event with the same name already exists.']]], 409);
        }
        $validatedData = $request->validated();

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . '_event_' . $request->file('main_image')->getClientOriginalName();
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

        $event->update($validatedData);

        return new EventResource($event);
    }

    public function destroy(Event $event)
    {
        $this->authorize('event-delete');
        $event->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return EventResource::collection(Event::all());
    }

    public function getEvents()
    {
<<<<<<< HEAD

=======
       
>>>>>>> b1327f8448e14b925438ec1cdeed9a33675301cb
        $events = Event::Where('end_date', '>=', now())->get();

        return response()->json($events);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> b1327f8448e14b925438ec1cdeed9a33675301cb
