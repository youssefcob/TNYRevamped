<?php

use App\Http\Controllers\AdminAtuhController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:api');


Route::post('/login', [AdminAtuhController::class, 'login']);