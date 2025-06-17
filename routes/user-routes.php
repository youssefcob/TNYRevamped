<?php

use App\Http\Controllers\JobSeekerController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Views\Auth\LoginController;
use App\Http\Controllers\Views\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::prefix('user')->group(function () {
    // Public routes
    // Route::post('/register', [UserAuthController::class, 'register']);
    // Route::post('/login', [UserAuthController::class, 'login']);

    Route::get('/',fn()=> Auth::user())->middleware('auth:user');

    Route::post('/register', [RegisterController::class, 'ApiSubmit']);
    Route::post('/login', [LoginController::class, 'Apilogin']);

   

    Route::get('hello', function () {
        return Auth::guard('user')->user();
    })->middleware(['auth:user', 'scope:job-seeker']);
});
