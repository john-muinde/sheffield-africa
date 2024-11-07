@php
    $config = [
        'appName' => config('app.name'),
        'locale' => ($locale = app()->getLocale()),
        'locales' => config('app.locales'),
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ $locale }}" prefix="og: https://ogp.me/ns#">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <!-- Search Engine Optimization -->
    <title>Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities</title>
    <meta name="description" content="Sheffield Steel Systems Limited is East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.">
    <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large">
    <link rel="canonical" href="{{ url()->current() }}">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities">
    <meta property="og:description" content="East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:site_name" content="Sheffield Steel Systems Limited">
    <meta property="og:updated_time" content="{{ now()->toIso8601String() }}">
    <meta property="og:image" content="{{ url('images/logo.png') }}">
    <meta property="og:image:secure_url" content="{{ url('images/logo.png') }}">
    <meta property="og:image:width" content="1280">
    <meta property="og:image:height" content="622">
    <meta property="og:image:alt" content="Sheffield Steel Systems Limited">
    <meta property="og:image:type" content="image/png">
    <meta property="article:published_time" content="2003-01-01T00:00:00+00:00">
    <meta property="article:modified_time" content="{{ now()->toIso8601String() }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities">
    <meta name="twitter:description" content="East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.">
    <meta name="twitter:site" content="@SheffieldAfrica">
    <meta name="twitter:creator" content="@SheffieldAfrica">
    <meta name="twitter:image" content="{{ url('images/logo.png') }}">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Sheffield Steel Systems Limited">
    <meta name="twitter:label2" content="Time to read">
    <meta name="twitter:data2" content="4 minutes">

    <!-- JSON-LD Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Place",
                "@id": "{{ url()->current() }}#place",
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "-1.286389",
                    "longitude": "36.817223"
                },
                "hasMap": "https://www.google.com/maps/search/?api=1&query=-1.286389,36.817223",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sheffield Steel Systems Limited, Nairobi",
                    "addressLocality": "Nairobi",
                    "addressRegion": "Nairobi",
                    "postalCode": "00100",
                    "addressCountry": "KE"
                }
            },
            {
                "@type": "Organization",
                "@id": "{{ url()->current() }}#organization",
                "name": "Sheffield Steel Systems Limited",
                "url": "{{ url()->current() }}",
                "sameAs": [
                    "https://www.facebook.com/SheffieldAfrica",
                    "https://twitter.com/SheffieldAfrica",
                    "https://www.linkedin.com/company/sheffield-africa"
                ],
                "email": "info@sheffieldafrica.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sheffield Steel Systems Limited, Nairobi",
                    "addressLocality": "Nairobi",
                    "addressRegion": "Nairobi",
                    "postalCode": "00100",
                    "addressCountry": "KE"
                },
                "logo": {
                    "@type": "ImageObject",
                    "@id": "{{ url('images/logo.png') }}",
                    "url": "{{ url('images/logo.png') }}",
                    "contentUrl": "{{ url('images/logo.png') }}",
                    "caption": "Sheffield Steel Systems Limited",
                    "inLanguage": "en-US",
                    "width": "300",
                    "height": "79"
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+254-20-232-0000",
                        "contactType": "customer support"
                    }
                ],
                "location": {
                    "@id": "{{ url()->current() }}#place"
                }
            },
            {
                "@type": "WebSite",
                "@id": "{{ url()->current() }}#website",
                "url": "{{ url()->current() }}",
                "name": "Sheffield Steel Systems Limited",
                "alternateName": "Sheffield Africa",
                "publisher": {
                    "@id": "{{ url()->current() }}#organization"
                },
                "inLanguage": "en-US",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "{{ url()->current() }}?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "WebPage",
                "@id": "{{ url()->current() }}#webpage",
                "url": "{{ url()->current() }}",
                "name": "Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities",
                "datePublished": "2003-01-01T00:00:00+00:00",
                "dateModified": "{{ now()->toIso8601String() }}",
                "about": {
                    "@id": "{{ url()->current() }}#organization"
                },
                "isPartOf": {
                    "@id": "{{ url()->current() }}#website"
                },
                "primaryImageOfPage": {
                    "@id": "{{ url('images/logo.png') }}"
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "Person",
                "@id": "{{ url()->current() }}#author",
                "name": "Sheffield Steel Systems Limited",
                "image": {
                    "@type": "ImageObject",
                    "@id": "{{ url('images/logo.png') }}",
                    "url": "{{ url('images/logo.png') }}",
                    "caption": "Sheffield Steel Systems Limited",
                    "inLanguage": "en-US"
                },
                "sameAs": [
                    "{{ url()->current() }}"
                ],
                "worksFor": {
                    "@id": "{{ url()->current() }}#organization"
                }
            },
            {
                "@type": "Article",
                "headline": "Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities",
                "keywords": "coldrooms in Kenya, commercial kitchens in Kenya, Sheffield Africa, stainless steel fabrication, commercial laundry solutions, cold storage solutions",
                "datePublished": "2003-01-01T00:00:00+00:00",
                "dateModified": "{{ now()->toIso8601String() }}",
                "author": {
                    "@id": "{{ url()->current() }}#author",
                    "name": "Sheffield Steel Systems Limited"
                },
                "publisher": {
                    "@id": "{{ url()->current() }}#organization"
                },
                "description": "Sheffield Steel Systems Limited is East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization.",
                "name": "Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities",
                "@id": "{{ url()->current() }}#richSnippet",
                "isPartOf": {
                    "@id": "{{ url()->current() }}#webpage"
                },
                "image": {
                    "@id": "{{ url('images/logo.png') }}"
                },
                "inLanguage": "en-US",
                "mainEntityOfPage": {
                    "@id": "{{ url()->current() }}#webpage"
                }
            }
        ]
    }
    </script>

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ url('favicon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ url('favicon.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('favicon.png') }}">

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
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDBMDPJZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

</body>

</html>