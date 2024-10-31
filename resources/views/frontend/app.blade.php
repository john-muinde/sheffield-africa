@php
    $config = [
        'appName' => config('app.name'),
        'locale' => $locale = app()->getLocale(),
        'locales' => config('app.locales'),
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ $locale }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="google-site-verification" content="MDV6HhOKIgKRjiLA7URFOhZc0eOmt5-pZiZ7zvtKyGQ" />
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-PDBMDPJZ');</script>
	<!-- End Google Tag Manager -->
	<meta name="google-site-verification" content="HTu3UM8rSXb95ng7ySUN6dIa0OTHQtzcZiJa7C9T1pk" />
	<style type="text/css">
		/*[v-cloak] > * { display:none }
 		[v-cloak]::before { 
 			content: url('/storage/sheffield_loading.gif');
		    display: block;
		    width: 100px; 
		    height: 100px;
		    margin: 0 auto; 
 		}*/
	</style>

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

	@vite('resources/js/frontend-main.js')
	@vite('node_modules/jquery/src/jquery.js')
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
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDBMDPJZ"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->

</body>
</html>
