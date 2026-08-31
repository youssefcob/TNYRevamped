<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;

class AuthenticationServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Passport::tokensCan([
            'job-seeker' => 'Seek Jobs',
            'employer' => 'Employ',
            'admin' => 'Manage System',
            'super-admin' => 'Manage Admins',
        ]);
    }
}
