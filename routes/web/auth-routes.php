<?php

use App\Http\Controllers\Views\Auth\LoginController;
use App\Http\Controllers\Views\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [LoginController::class, 'index'])
->name('login.web');

Route::post('/login', [LoginController::class, 'login'])
->name('login.submit');

Route::get('/register', [RegisterController::class, 'index'])
->name('register');

Route::post('/register', [RegisterController::class, 'submit'])
->name('register.submit');