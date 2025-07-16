<?php

use App\Http\Controllers\Content\EmployerController as ContentEmployerController;
use App\Http\Controllers\Employer\EmployerController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::prefix('employer')->group(function () {
    Route::middleware(['auth:user', 'scope:employer'])
        ->prefix('profile')
        ->group(function () {
            Route::post('/update', [EmployerController::class, 'update']);
        });

    Route::middleware(['auth:user', 'scope:admin'])
        ->prefix('admin')
        ->group(function () {
            Route::get('/', [EmployerController::class, 'getWithFormattedResponse']);
        });
});

require __DIR__ . '/vacancies-routes.php';

