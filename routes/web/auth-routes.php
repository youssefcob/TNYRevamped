<?php

use App\Http\Controllers\Views\Auth\ForgetPasswordController;
use App\Http\Controllers\Views\Auth\LoginController;
use App\Http\Controllers\Views\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [LoginController::class, 'index'])
->name('login');

Route::post('/login', [LoginController::class, 'login'])
->name('login.submit');

Route::get('/register', [RegisterController::class, 'index'])
->name('register');

Route::post('/register', [RegisterController::class, 'submit'])
->name('register.submit');

Route::get('/forget-password', [ForgetPasswordController::class, 'index'])
->name('forget-password');

Route::post('/forget-password', [ForgetPasswordController::class, 'submitForgetPassword'])
->name('forget-password.submit');

Route::post('/reset-password', [ForgetPasswordController::class, 'submitResetPassword'])
->name('reset-password.submit');
