<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class ProductController extends Controller
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
        $products = Product::when(request('search_id'), function ($query) {
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
        return ProductResource::collection($products);
    }

    public function store(StoreProductRequest $request)
    {
        $this->authorize('product-create');

        // Check if the product with the same name already exists
        $existingProduct = Product::where('name', $request->name)->first();
        if ($existingProduct) {
            return response()->json(['errors' => ['name' => ['Product with the same name already exists.']]], 409);
        }


        $validatedData = $request->validated();
        $validatedData['created_by'] = auth()->user()->id;

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . $request->file('main_image')->getClientOriginalName();
            $file_path = 'uploads/' . $file_name;

            // Resize and optimize the image
            $image = Image::make($file)->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->encode('jpg', 85); // Specify the desired encoding format and quality (80% in this example)

            // Store the optimized image
            Storage::disk('public')->put($file_path, $image);
            $validatedData['main_image_path'] = $file_path;
        }

        if ($request->hasFile('document')) {

            $file_name = time() . '_' . $request->file('document')->getClientOriginalName();
            $file_path = $request->file('document')->storeAs('uploads', $file_name, 'public');
            $validatedData['document_path'] = $file_path;
        }


        $product = Product::create($validatedData);


        if ($request->has('categories')) {
            $categories = $request->input('categories');

            $categoryIds = explode(',', $categories);

            foreach ($categoryIds as $categoryId) {

                $product->productCategories()->create([
                    'category_id' => $categoryId,
                ]);
            }
        }



        if ($request->hasFile('product_gallery')) {

            $productGallery = collect($request->file('product_gallery'))->map(function ($file) {

                $file_name = time() . '_' . '_gallery_' . $file->getClientOriginalName();
                $file_path = 'uploads/' . $file_name;

                // Resize and optimize the image
                $image = Image::make($file)->resize(800, null, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->encode('jpg', 85); // Specify the desired encoding format and quality (80% in this example)

                // Store the optimized image
                Storage::disk('public')->put($file_path, $image);


                return $file_path;
            })->toArray();


            foreach ($productGallery as $imagePath) {
                $product->productImages()->create([
                    'name' => $imagePath,
                ]);
            }
        }

        return new ProductResource($product);
    }

    public function show(Product $product)
    {
        $this->authorize('product-edit');
        return new ProductResource($product);
    }

    public function update(Product $product, UpdateProductRequest $request)
    {
        $this->authorize('product-edit');

        $validatedData = $request->validated();


        // Check if the product with the same name already exists (excluding the current product)
        $existingProduct = Product::where('name', $request->name)
            ->where('brand', '=', $product->brand)
            ->where('id', '!=', $product->id)
            ->first();
        if ($existingProduct) {
            return response()->json(['errors' => ['name' => ['Product with the same name already exists.']]], 409);
        }

        if ($request->hasFile('main_image')) {

            $file = $request->file('main_image');

            $file_name = time() . '_' . $request->file('main_image')->getClientOriginalName();
            $file_path = 'uploads/' . $file_name;

            $image = Image::make($file)->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->encode('jpg', 85);
            Storage::disk('public')->put($file_path, $image);

            $validatedData['main_image_path'] = $file_path;
        }

        if ($request->hasFile('document')) {

            $file_name = time() . '_' . $request->file('document')->getClientOriginalName();
            $file_path = $request->file('document')->storeAs('uploads', $file_name, 'public');
            $validatedData['document_path'] = $file_path;
        }


        //\DB::enableQueryLog();
        $product->update($validatedData);
        //dd(\DB::getQueryLog());

        if ($request->has('categories')) {

            $product->productCategories()->delete();

            $categories = $request->input('categories');

            $categoryIds = explode(',', $categories);

            foreach ($categoryIds as $categoryId) {

                $product->productCategories()->create([
                    'category_id' => $categoryId,
                ]);
            }
        }



        if ($request->hasFile('product_gallery')) {

            $productGallery = collect($request->file('product_gallery'))->map(function ($file) {

                $file_name = time() . '_' . '_gallery_' . $file->getClientOriginalName();
                $file_path = 'uploads/' . $file_name;

                // Resize and optimize the image
                $image = Image::make($file)->resize(800, null, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->encode('jpg', 85); // Specify the desired encoding format and quality (80% in this example)

                // Store the optimized image
                Storage::disk('public')->put($file_path, $image);


                return $file_path;
            })->toArray();


            foreach ($productGallery as $imagePath) {
                $product->productImages()->create([
                    'name' => $imagePath,
                ]);
            }
        }


        //dd("test");

        return new ProductResource($product);
    }

    public function destroy(Product $product)
    {

        // $this->authorize(ability: 'product-delete');
        $product->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return ProductResource::collection(Product::all());
    }

    public function getProducts()
    {
        $perPage = request('per_page', 12);
        $categoryId = request('category_id', 21);
        $checkedCategories = request('checkedCategories');
        $checkedBrands = request('checkedBrands');
        $selectedSortOption = request('selectedSortOption');

        $allChildrenIds = [];

        $category = Category::find($categoryId);
        $the_category = $category;
        $allChildrenIds = $category->getAllChildrenIds();

        if (!isset($checkedCategories[$categoryId])) {

            $the_category_ids = $allChildrenIds;
        } else {

            $allcats = [];

            foreach ($checkedCategories[$categoryId] as  $key => $value) {

                $categorycat = Category::find($value);
                $allChildrenIdscat = $categorycat->getAllChildrenIds();
                $allcats = array_merge($allcats, [$value]);
                $allcats = array_merge($allcats, $allChildrenIdscat);
            }

            $the_category_ids =  $allcats;
        }

        $allbrands = [];

        if (isset($checkedBrands[$categoryId])) {

            $allbrands = $checkedBrands[$categoryId];
        }


        $category_products = Category::whereIn('id', $the_category_ids);

        if (!isset($checkedCategories[$categoryId])) {

            $category_products = $category_products->orWhere('id', '=', $categoryId);
        }

        $category_products = $category_products->with(['products' => function ($query) use ($allbrands, $selectedSortOption) {

            if (count($allbrands) > 0) {
                $query = $query->WhereIn("brand", $allbrands);
            }


            $query = $query->with('productBrand');

            if ($selectedSortOption != null) {

                // if($selectedSortOption == "name_asc"){

                //     $query = $query->orderBy('name', 'ASC');

                // }

                // if($selectedSortOption == "name_desc"){

                //     $query = $query->orderBy('name', 'DESC');
                // }

                // if($selectedSortOption == "created_at_asc"){

                //     $query = $query->orderBy('created_at', 'ASC');
                // }

                // if($selectedSortOption == "created_at_desc"){

                //     $query = $query->orderBy('created_at', 'DESC');
                // }

            } else {

                $query = $query->orderBy('order_index');
            }
        }])
            ->orderBy('order_index')
            ->get();

        // Number of products per page
        $page = request()->get('page', 1); // Get the current page from the request

        // Manually paginate the products
        $allProducts = $category_products->flatMap->products;
        $total = $allProducts->count();
        $products = $allProducts->slice(($page - 1) * $perPage, $perPage)->all();


        $products = new LengthAwarePaginator($products, $total, $perPage, $page);


        $category = Category::withCount('categoryProducts')->Where('parent_id', $categoryId)->orderBy('order_index', 'ASC')->get();

        $productBrands = Product::with('productBrand')
            ->whereHas('productCategories', function ($query) use ($categoryId, $allChildrenIds) {
                $query->whereIn('category_id', $allChildrenIds);
                $query->orWhere('category_id', '=', $categoryId);
            })
            ->select('brand')
            ->orderBy('brand', 'ASC')
            ->groupBy('brand')->get();

        // $productBrands = $products_main_query->select('brand')
        //     ->orderBy('brand', 'ASC')
        //     ->groupBy('brand')->get();

        $result = [
            'products' => $products,
            'categories' => $category,
            'brands' => $productBrands,
            'the_category' => $the_category,
        ];

        return response()->json($result);
    }


    public function getproductsAdmin()
    {
        $perPage = request('per_page', 20);
        $categoryId = request('category_id', 21);
        $mainCategory = request('mainCategory');
        $filter_category_id = request('filter_category_id');
        $search = request('search');

        if (isset($mainCategory) && !isset($search)) {

            $perPage = 1000;
        }

        //dd($perPage);

        $Product = Product::with('productBrand');

        if ($search != "") {

            $Product = $Product->Where('name', 'like', '%' . $search . '%')
                ->orWhere('model_number', 'like', '%' . $search . '%');
        }

        if ($mainCategory != "" && $filter_category_id == "") {

            $Product = $Product->whereHas('productCategories', function ($query) use ($mainCategory) {
                //$query->whereIn('category_id', $mainCategory);
                $query->Where('category_id', '=', $mainCategory);
            });
        }

        if ($mainCategory != "" && $filter_category_id != "") {

            $Product = $Product->whereHas('productCategories', function ($query) use ($filter_category_id) {
                //$query->whereIn('category_id', $mainCategory);
                $query->Where('category_id', '=', $filter_category_id);
            });
        }


        $Product = $Product->OrderBy('order_index', 'ASC')->paginate($perPage);



        $result = [

            'categories' => $Product
        ];

        return response()->json($result);
    }

    public function getFeaturedProducts()
    {

        //kitchen

        $products_kitchen_id = 88; //

        $category = Category::find($products_kitchen_id);
        $allChildrenIds = $category->getAllChildrenIds();

        $products_kitchen = Product::with('productBrand')->with('productCategories')
            ->whereHas('productCategories', function ($query) use ($products_kitchen_id, $allChildrenIds) {
                $query->whereIn('category_id', $allChildrenIds);
                $query->orWhere('category_id', '=', $products_kitchen_id);
            })
            ->take(10)->get();

        //laundry

        $products_laundry_id = 100; //dishwash;

        $category = Category::find($products_laundry_id);
        $allChildrenIds = $category->getAllChildrenIds();

        $products_laundry = Product::with('productBrand')->with('productCategories')
            ->whereHas('productCategories', function ($query) use ($products_laundry_id, $allChildrenIds) {
                $query->whereIn('category_id', $allChildrenIds);
                $query->orWhere('category_id', '=', $products_laundry_id);
            })
            ->take(10)->get();

        //cold room

        $products_cold_room_id = 22; //refregiration

        $category = Category::find($products_cold_room_id);
        $allChildrenIds = $category->getAllChildrenIds();

        $products_cold_room = Product::with('productBrand')->with('productCategories')
            ->whereHas('productCategories', function ($query) use ($products_cold_room_id, $allChildrenIds) {
                $query->whereIn('category_id', $allChildrenIds);
                $query->orWhere('category_id', '=', $products_cold_room_id);
            })
            ->take(10)->get();

        $result = [
            'products_kitchen' => $products_kitchen,
            'products_laundry' => $products_laundry,
            'products_coldroom' => $products_cold_room,
        ];

        return response()->json($result);
    }

    public function getProduct()
    {

        $product_id = request('product_id', 1);

        $product = Product::find($product_id);

        return new ProductResource($product);
    }


    public function productEnquiry()
    {

        return response()->json(['success' => ['name' => ['Product with the same name already exists.']]], 409);
    }

    public function searchProduct($searchProduct)
    {

        $products = Product::Where('name', 'like', '%' . $searchProduct . '%')->orderByRaw("LOCATE('$searchProduct', name)")->get();

        return ProductResource::collection($products);
    }

    public function postNewOrderProducts()
    {

        $data = request('data');

        foreach ($data as $key => $value) {

            $product_id = $value;

            $Product = Product::find($product_id);

            //print_r($Category);

            // Update the order
            if ($Product) {
                $Product->order_index = $key + 1;
                $Product->save();
            }
        }
    }
}
