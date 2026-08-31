<?php

use App\Http\Middleware\AuthView;
use App\Http\Middleware\CompleteProfile;
use App\Http\Middleware\ForceJsonResponse;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\RequestLogger;
use App\Http\Middleware\UserAuthenticate;
use App\Providers\AuthenticationServiceProvider;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Laravel\Passport\Http\Middleware\CheckForAnyScope;
use Laravel\Passport\Http\Middleware\CheckScopes;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->append(ForceJsonResponse::class);
        $middleware->append(RequestLogger::class);
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
        $middleware->alias([
            'auth.user' => UserAuthenticate::class,
            'scope' => CheckForAnyScope::class,
            'scopes' => CheckScopes::class,
            'auth.view' => AuthView::class,
            'complete.profile' => CompleteProfile::class,
        ]);
    })
    ->withProviders([
        AuthenticationServiceProvider::class,
    ])
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
