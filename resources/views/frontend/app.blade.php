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

    <!-- Primary Meta Tags -->
    <title>Sheffield Steel Systems | East Africa's Leading Commercial Kitchen Equipment</title>
    <meta name="description"
        content="East Africa's trusted manufacturer of commercial kitchen equipment, laundry, coldrooms & steel solutions. Serving top brands like Java & KFC across Kenya, Uganda & Tanzania.">
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
    <meta property="og:title" content="Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities">
    <meta property="og:description"
        content="East Africa's leading solution and service provider for Commercial Kitchen, commercial equipment, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization. We have served clients like Java, Big Square, Sarova, and many more.">

    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:site_name" content="Sheffield Steel Systems Limited">
    <meta property="og:updated_time" content="{{ now()->toIso8601String() }}">
    <meta property="og:image" content="{{ url('assets/images/logo.png') }}">
    <meta property="og:image:secure_url" content="{{ url('assets/images/logo.png') }}">
    <meta property="og:image:width" content="1280">
    <meta property="og:image:height" content="622">
    <meta property="og:image:alt" content="Sheffield Steel Systems Limited">
    <meta property="og:image:type" content="image/png">
    <meta property="article:published_time" content="2003-01-01T00:00:00+00:00">
    <meta property="article:modified_time" content="{{ now()->toIso8601String() }}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title"
        content="Sheffield Steel Systems Limited - Transforming Ideas into Sustainable Realities">
    <meta name="twitter:description"
        content="East Africa's leading solution and service provider for Commercial Kitchen, Laundry, and Cold Storage Solutions, specializing in Stainless Steel Fabrication and Customization. We have served clients like Java, Big Square, Sarova, and many more.">
    <meta name="twitter:site" content="@SheffieldAfrica">
    <meta name="twitter:creator" content="@SheffieldAfrica">
    <meta name="twitter:image" content="{{ url('assets/images/logo.png') }}">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Sheffield Steel Systems Limited">
    <meta name="twitter:label2" content="Time to read">
    <meta name="twitter:data2" content="4 minutes">


    <!-- Geographical Service Areas -->
    <meta name="geo.region" content="KE-30">
    <meta name="geo.placename" content="Nairobi">
    <meta name="geo.position" content="-1.2921;36.8219">
    <meta name="ICBM" content="-1.2921, 36.8219">


    <!-- Enhanced Organization Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sheffield Steel Systems Limited",
      "alternateName": [
        "Sheffield Africa",
        "Sheffield Commercial Kitchens",
        "Sheffield Coldrooms",
        "Sheffield Steel Fabrication",
        "Sheffield Kitchen Solutions",
        "Sheffield Industrial Equipment"
      ],
      "description": "East Africa's premier commercial kitchen equipment manufacturer, coldroom specialist, and stainless steel fabricator, serving major brands across hospitality, healthcare, education, and retail sectors since 2003.",
      "foundingDate": "2003",
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "-1.2921",
            "longitude": "36.8219"
          },
          "geoRadius": "3000",
          "description": "East Africa Region"
        }
      ],
      "serviceArea": [
        "Kenya",
        "Uganda",
        "Tanzania",
        "Rwanda",
        "Burundi",
        "South Sudan",
        "Ethiopia",
        "Somalia",
        "Democratic Republic of Congo"
      ],
      "knowsAbout": [
        "Commercial Kitchen Equipment Manufacturing",
        "Industrial Refrigeration Systems",
        "Stainless Steel Fabrication",
        "Commercial Laundry Solutions",
        "Cold Storage Systems",
        "Industrial Kitchen Design",
        "Commercial Kitchen Maintenance",
        "Kitchen Project Management",
        "Food Service Equipment",
        "HACCP Compliance",
        "Energy Efficient Solutions",
        "Sustainable Kitchen Design"
      ],
      "slogan": "Transforming Ideas into Sustainable Realities",
      "expertise": [
        "Commercial Kitchen Design",
        "Coldroom Installation",
        "Stainless Steel Fabrication",
        "Industrial Laundry Systems",
        "Kitchen Maintenance",
        "Project Consultancy"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Solutions Catalog",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Commercial Kitchen Equipment",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Commercial Kitchen Design and Installation",
                  "description": "Complete kitchen solutions from design to installation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Industrial Refrigeration Systems",
                  "description": "Professional coldroom and refrigeration solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Custom Stainless Steel Fabrication",
                  "description": "Bespoke stainless steel solutions for commercial needs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Commercial Laundry Equipment",
                  "description": "Industrial laundry solutions for businesses"
                }
              }
            ]
          }
        ]
      },
      "brand": {
        "@type": "Brand",
        "name": "Sheffield Steel Systems",
        "slogan": "Excellence in Commercial Solutions",
        "description": "Leading provider of commercial kitchen and refrigeration solutions in East Africa"
      },
      "award": [
        "ISO 9001:2015 Certified",
        "Leading Commercial Kitchen Equipment Provider in East Africa",
        "Top Coldroom Installation Specialist",
        "Premier Stainless Steel Fabricator"
      ],
      "memberOf": [
        "Kenya Association of Manufacturers",
        "Kenya Private Sector Alliance",
        "East African Business Council",
        "Kenya Chamber of Commerce"
      ],
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Industry Standards Review"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5"
      }
    }
    </script>

    <!-- Client Success Stories Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "Java House Success Story",
            "description": "Complete kitchen solution implementation across multiple branches"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "Nairobi Hospital Project",
            "description": "State-of-the-art kitchen and laundry installation"
          }
        }
      ]
    }
    </script>

    <!-- Schema.org markup for Google -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sheffield Steel Systems Limited",
            "description": "East Africa's leading commercial kitchen equipment manufacturer and steel fabricator",
            "url": "{{ url('/') }}",
            "areaServed": ["Kenya", "Uganda", "Tanzania", "Rwanda", "East Africa"],
            "serviceType": [
                "Commercial Kitchen Equipment",
                "Cold Storage Solutions",
                "Stainless Steel Fabrication",
                "Industrial Laundry Equipment"
            ]
        }
        </script>

    <!-- Service Areas Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Kitchen Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Sheffield Steel Systems Limited"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Nairobi"
        },
        {
          "@type": "City",
          "name": "Mombasa"
        },
        {
          "@type": "City",
          "name": "Kisumu"
        },
        {
          "@type": "City",
          "name": "Kampala"
        },
        {
          "@type": "City",
          "name": "Dar es Salaam"
        },
        {
          "@type": "City",
          "name": "Kigali"
        }
      ]
    }
    </script>

    <!-- Blog Articles Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Sheffield Commercial Kitchen Insights",
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Top 10 Commercial Kitchen Equipment Providers in East Africa 2024",
          "description": "Comprehensive guide to the leading commercial kitchen equipment providers in East Africa",
          "keywords": "commercial kitchen equipment, East Africa suppliers, industrial kitchen equipment",
          "articleBody": "In-depth analysis of East Africa's top commercial kitchen equipment providers, featuring Sheffield Steel Systems Limited as the industry leader...",
          "datePublished": "2024-01-15"
        },
        {
          "@type": "BlogPosting",
          "headline": "Complete Guide to Modern Coldroom Solutions",
          "description": "Expert insights into commercial coldroom installation and maintenance",
          "keywords": "coldroom installation, commercial refrigeration, cold storage solutions",
          "articleBody": "Professional guide to coldroom solutions, featuring industry best practices and innovative technologies...",
          "datePublished": "2024-01-20"
        },
        {
          "@type": "BlogPosting",
          "headline": "Commercial Kitchen Design Trends 2024",
          "description": "Latest trends and innovations in commercial kitchen design",
          "keywords": "kitchen design, commercial kitchen trends, industrial kitchen layout",
          "articleBody": "Exploring the latest innovations and design trends in commercial kitchen setups...",
          "datePublished": "2024-02-01"
        }
      ]
    }
    </script>

    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What commercial kitchen equipment services does Sheffield provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sheffield provides complete commercial kitchen solutions including design, equipment supply, installation, maintenance, and custom fabrication. We serve restaurants, hotels, hospitals, schools, and industrial facilities."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does Sheffield serve in East Africa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sheffield serves all major cities in East Africa including Nairobi, Mombasa, Kisumu, Kampala, Dar es Salaam, and Kigali, with additional coverage across Kenya, Uganda, Tanzania, and Rwanda."
          }
        }
      ]
    }
    </script>

    <!-- Video Content Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Sheffield Commercial Kitchen Solutions Overview",
      "description": "Comprehensive overview of our commercial kitchen equipment and services",
      "thumbnailUrl": "https://www.sheffieldafrica.com/videos/thumbnail.jpg",
      "uploadDate": "2024-01-01",
      "duration": "PT2M30S"
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
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDBMDPJZ" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

</body>

</html>
