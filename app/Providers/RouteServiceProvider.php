<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    public const HOME = '/dashboard';

    /**
     * IPs that should be excluded from rate limiting
     */
    protected $excludedIps = [
        '127.0.0.1', 
        '41.139.134.175'
    ];

    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }

    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            $ip = $request->ip();

            // Skip rate limiting for excluded IPs
            if (in_array($ip, $this->excludedIps)) {
                return Limit::none();
            }

            return Limit::perMinute(60)->by($request->user()?->id ?: $ip);
        });
    }
}
