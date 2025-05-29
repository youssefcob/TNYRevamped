<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\Views\Auth\AuthenticatedUserController;
use App\Http\Controllers\Views\Auth\RegisterController;
use Illuminate\Support\Facades\Auth;

Route::prefix('user')->group(function () {
    // Public routes
    // Route::post('/register', [UserAuthController::class, 'register']);
    // Route::post('/login', [UserAuthController::class, 'login']);

    Route::post('/register',[RegisterController::class,'submit']);
    Route::post('/login',[AuthenticatedUserController::class,'login']);
    
    // Protected routes
    Route::middleware(['auth.user'])->group(function () {
        // Route::post('/logout', [UserAuthController::class, 'logout']);
        Route::get('/profile', function(){
            return Auth::guard('user')->user();
        });
        // Add other user-specific routes here
    });

    Route::get('hello', function () {
            return Auth::guard('user')->user();
    })->middleware(['auth:user','scope:job-seeker']);
});