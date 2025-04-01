<?php

use App\Http\Controllers\Views\HomeController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

// Route::get('/', [HomeController::class, 'view']);

Route::get('/services', [HomeController::class, 'view']);
Route::get('/{any?}', [HomeController::class, 'view'])
->where('any', '.*');
// Route::get('{any}', [HomeController::class, 'view']);


// Route::get('/about', function () {
//     return Inertia::render('About');
// });