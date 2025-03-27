<?php

use App\Http\Controllers\Views\HomeController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

// Route::get('/', [HomeController::class, 'view']);

// Route::get('/services', [HomeController::class, 'viewServices']);
Route::get('/{any?}', [HomeController::class, 'view'])
->where('any', '.*')
->name('my-spa-route');

// Route::get('{any}', [HomeController::class, 'view']);


// Route::get('/about', function () {
//     return Inertia::render('About');
// });