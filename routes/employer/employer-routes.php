<?php

use App\Http\Controllers\Employer\EmployerController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::middleware(['auth:user', 'scope:employer'])
    ->prefix('employer')
    ->group(function () {

        Route::prefix('profile')->group(function () {
            Route::post('/update', [EmployerController::class, 'update']);

        });


    });
