@php
    $config = [
        'appName' => config('app.name'),
        'locale' => ($locale = app()->getLocale()),
        'locales' => config('app.locales'),
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ $locale }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description"
        content="Sheffield Steel Systems Limited is East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.">
    <meta name="keywords"
        content="coldrooms in Kenya, commercial kitchens in Kenya, Sheffield Africa, stainless steel fabrication, commercial laundry solutions, cold storage solutions">
    <meta name="author" content="Sheffield Steel Systems Limited">
    <meta name="google-site-verification" content="MDV6HhOKIgKRjiLA7URFOhZc0eOmt5-pZiZ7zvtKyGQ" />
    <meta name="google-site-verification" content="HTu3UM8rSXb95ng7ySUN6dIa0OTHQtzcZiJa7C9T1pk" />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities">
    <meta property="og:description"
        content="East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.">
    <meta property="og:image" content="{{ asset('images/logo.png') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Sheffield Steel Systems Limited">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title"
        content="Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities">
    <meta name="twitter:description"
        content="East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.">
    <meta name="twitter:image" content="{{ asset('images/logo.png') }}">
    <meta name="twitter:site" content="@SheffieldAfrica">
    <meta name="twitter:creator" content="@SheffieldAfrica">

    <!-- JSON-LD Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sheffield Steel Systems Limited",
        "url": "{{ url()->current() }}",
        "logo": "{{ asset('images/sheffield-logo.png') }}",
        "sameAs": [
            "https://www.facebook.com/SheffieldAfrica",
            "https://twitter.com/SheffieldAfrica",
            "https://www.linkedin.com/company/sheffield-africa"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254-20-232-0000",
            "contactType": "Customer Service",
            "areaServed": "KE",
            "availableLanguage": "en"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sheffield Steel Systems Limited, Nairobi",
            "addressLocality": "Nairobi",
            "addressRegion": "Nairobi",
            "postalCode": "00100",
            "addressCountry": "KE"
        },
        "description": "Sheffield Steel Systems Limited is East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.",
        "founder": {
            "@type": "Person",
            "name": "Dr. Suresh Kanotra"
        },
        "foundingDate": "2003",
        "foundingLocation": "Nairobi, Kenya"
    }
    </script>

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('favicon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon.png') }}">

    @vite('resources/css/app.css')
    @vite('resources/js/apps/frontend/assets/css/bootstrap.min.css')
    @vite('resources/js/apps/frontend/assets/css/plugins/owl-carousel/owl.carousel.css')
    @vite('node_modules/vue3-carousel/dist/carousel.css')
    @vite('resources/js/apps/frontend/assets/css/plugins/jquery.countdown.css')
    @vite('resources/js/apps/frontend/assets/css/style.css')
    @vite('resources/js/apps/frontend/assets/css/skins/skin-demo-14.css')
    @vite('resources/js/apps/frontend/assets/css/demos/demo-14.css')
    @vite('resources/js/apps/frontend/assets/css/demos/demo-4.css')
</head>

<body>
    <div id="app" v-cloak>
        <div id="breadcrumb"></div>
    </div>

    <script>
        window.config = @json($config);
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>

    @vite('resources/js/frontend-main.js')

    @vite('resources/js/apps/frontend/assets/js/bootstrap.bundle.min.js?commonjs-entry')
    @vite('resources/js/apps/frontend/assets/js/jquery.hoverIntent.min.js?commonjs-entry')
    @vite('resources/js/apps/frontend/assets/js/jquery.waypoints.min.js')
    @vite('resources/js/apps/frontend/assets/js/superfish.min.js')
    @vite('resources/js/apps/frontend/assets/js/bootstrap-input-spinner.js')
    @vite('resources/js/apps/frontend/assets/js/jquery.plugin.min.js')
    @vite('resources/js/apps/frontend/assets/js/jquery.countdown.min.js')
    @vite('resources/js/apps/frontend/assets/js/jquery.elevateZoom.min.js')
    @vite('resources/js/apps/frontend/assets/js/main.js')
    @vite('resources/js/apps/frontend/assets/js/demos/demo-14.js')
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDBMDPJZ" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

</body>

</html>
