@php
    // Function to clean and truncate description
    function cleanDescription($description, $maxLength = 160)
    {
        // Remove HTML tags
        $cleanText = strip_tags($description);

        // Decode HTML entities
        $cleanText = html_entity_decode($cleanText);

        // Trim to max length
        if (strlen($cleanText) > $maxLength) {
            $cleanText = substr($cleanText, 0, $maxLength) . '...';
        }

        // Ensure no special characters break the meta tag
        $cleanText = htmlspecialchars($cleanText, ENT_QUOTES, 'UTF-8');

        return $cleanText;
    }

    $promotionalProducts = [];
    $currentProduct = null;
    // Fetch promotional products
    $promotionalProducts = \App\Models\Product::whereHas('productCategories', function ($query) {
        $query->where('category_id', 371);
    })
        ->where('is_published', true)
        ->with('productBrand', 'productCategories')
        ->get();

    $promoProducts = \App\Http\Resources\ProductResource::collection($promotionalProducts);

    // Check if there's a current product (if on a product detail page)
$currentProductId = request()->route('id');
$currentProduct = $currentProductId
    ? \App\Models\Product::with('productBrand', 'productCategories')->find($currentProductId)
    : null;

// Combine current product and promotional products
$productsForSchema = collect();
if ($currentProduct) {
    $currentProduct = \App\Http\Resources\ProductResource::make($currentProduct);
    $productsForSchema->push($currentProduct);
}
$productsForSchema = $productsForSchema->merge($promotionalProducts)->unique('id');
foreach ($productsForSchema as &$product) {
    $product->productImages;
}

// Customize meta tags based on whether a specific product is being viewed
$metaTitle = $currentProduct
    ? $currentProduct->name . ' | Sheffield Steel Systems'
    : 'Sheffield Steel Systems | Commercial Kitchen, Laundry & Steel Solutions';

$metaDescription = $currentProduct
    ? 'Explore ' .
        $currentProduct->name .
        ' - A high-quality solution from Sheffield Steel Systems. Part of our comprehensive range of commercial kitchen, laundry, and steel equipment.'
    : "Discover Sheffield Steel Systems, East Africa's leader in commercial kitchen equipment, laundry solutions, coldrooms, steel fabrication. Trusted by top brands.";

$ogTitle = $currentProduct
    ? $currentProduct->name . ' - Sheffield Steel Systems'
    : 'Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities';

// Clean and truncate description
$ogDescription = $currentProduct
    ? ($currentProduct->description
        ? cleanDescription($currentProduct->description)
        : $metaDescription)
    : "East Africa's leading solution and service provider for Commercial Kitchen, commercial equipment, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization. We have served clients like Java, Big Square, Sarova, and many more.";

// Prepare product images for schema and Open Graph
$primaryImage =
    $currentProduct && $currentProduct->productImages->first()
        ? $currentProduct->productImages->first()->name
        : url('assets/images/logo.png');
@endphp

<!-- Primary Meta Tags -->
<title>{{ $metaTitle }}</title>
<meta name="description" content="{{ $metaDescription }}">
<meta name="author" content="Sheffield Steel Systems Limited">
<meta name="designer" content="Sheffield Steel Systems Limited">
<meta name="publisher" content="Sheffield Steel Systems Limited">
<meta name="copyright" content="Sheffield Steel Systems Limited">
<meta name="rating" content="general">
<meta name="distribution" content="global">
<meta name="revisit-after" content="1 day">
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large">

<!-- Comprehensive Keywords List -->
<meta name="keywords"
    content="
        commercial kitchen equipment kenya, industrial kitchen supplier east africa, commercial kitchen manufacturer africa,
        coldroom installation nairobi, industrial refrigeration kenya, cold storage solutions east africa,
        stainless steel fabrication kenya, custom steel work nairobi, metal fabrication east africa,

        commercial kitchen equipment, industrial kitchen design, kitchen installation services,
        commercial refrigeration systems, walk-in coldrooms, blast freezers, chillers,
        stainless steel counters, steel fixtures, custom fabrication,
        industrial laundry equipment, commercial washing machines, industrial dryers,

        restaurant kitchen equipment, hotel kitchen solutions, hospital kitchen systems,
        school cafeteria equipment, industrial canteen setup, food processing equipment,
        bakery equipment, butchery equipment, supermarket installations,

        commercial ovens, industrial cookers, professional grills,
        food prep stations, commercial fridges, freezer rooms,
        dishwashing systems, ventilation hoods, cooking ranges,

        kitchen consultancy, project management, maintenance services,
        equipment repair, spare parts supply, warranty services,
        kitchen design, layout optimization, workflow planning,

        HACCP compliant kitchens, food safety equipment, hygiene systems,
        energy-efficient solutions, sustainable kitchen design, green technologies,
        kitchen automation, monitoring systems, smart kitchen solutions,

        Java House kitchen systems, KFC equipment supplier, Carrefour installations,
        Sarova Hotels kitchen partner, Big Square equipment, Artcaffe solutions,
        Nairobi Hospital systems, AKUH installations, Karen Hospital equipment,
        Kenya Airways catering, Hilton Hotels supplier, Radisson installations,
        Kenchic industrial, Standard Chartered facilities, Naivas solutions,
        Gertrudes Hospital, MP Shah equipment, Muthaiga Country Club,
        Karen Country Club, Capital Club, Vetlab Club installations,
        East African Breweries, Strathmore University, USIU facilities,

        nairobi commercial kitchens, mombasa restaurant equipment,
        kisumu kitchen installations, eldoret coldroom solutions,
        nakuru steel fabrication, nyeri kitchen equipment,
        kampala uganda installations, dar es salaam solutions,
        kigali rwanda equipment, arusha tanzania systems,
        juba south sudan partner, bujumbura burundi supplier,

        hotel kitchen equipment, restaurant solutions, hospital systems,
        school cafeteria installations, industrial kitchen setups,
        supermarket refrigeration, butchery equipment, bakery solutions,

        commercial kitchen maintenance, equipment repair services,
        spare parts supplier, warranty support, technical assistance,
        project consulting, kitchen design services, layout planning,

        industrial cooking equipment, commercial food prep,
        kitchen storage solutions, ventilation systems,
        food service equipment, catering solutions,

        coldroom installation, freezer room setup,
        blast chiller systems, refrigeration solutions,
        temperature control systems, cold storage,

        stainless steel fabrication, custom metal work,
        steel kitchen equipment, metalwork solutions,
        custom countertops, steel fixtures,

        laundry equipment, commercial washers,
        industrial dryers, laundry solutions,
        cleaning equipment systems,

        restaurant chain solutions, hotel group equipment,
        hospital kitchen systems, school catering equipment,
        industrial facility solutions, commercial setups">

<!-- Open Graph / Facebook -->
<link rel="canonical" href="{{ url()->current() }}">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="website">
<meta property="og:title" content="{{ $ogTitle }}">
<meta property="og:description" content="{{ $ogDescription }}">

<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:site_name" content="Sheffield Steel Systems Limited">
<meta property="og:updated_time" content="{{ now()->toIso8601String() }}">
<meta property="og:image" content="{{ $primaryImage }}">
<meta property="og:image:secure_url" content="{{ $primaryImage }}">
<meta property="og:image:width" content="1280">
<meta property="og:image:height" content="622">
<meta property="og:image:alt" content="Sheffield Steel Systems Limited">
<meta property="og:image:type" content="image/png">
<meta property="article:published_time" content="2003-01-01T00:00:00+00:00">
<meta property="article:modified_time" content="{{ now()->toIso8601String() }}">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ $ogTitle }}">
<meta name="twitter:description" content="{{ $ogDescription }}">
<meta name="twitter:site" content="@SheffieldAfrica">
<meta name="twitter:creator" content="@SheffieldAfrica">
<meta name="twitter:image" content="{{ $primaryImage }}">
<meta name="twitter:label1" content="Written by">
<meta name="twitter:data1" content="Sheffield Steel Systems Limited">
<meta name="twitter:label2" content="Time to read">
<meta name="twitter:data2" content="4 minutes">

<!-- Geographical Service Areas -->
<meta name="geo.region" content="KE-30">
<meta name="geo.placename" content="Nairobi">
<meta name="geo.position" content="-1.3553028;36.9004438">
<meta name="ICBM" content="-1.3553028, 36.9004438">

@include('frontend.scripts')
