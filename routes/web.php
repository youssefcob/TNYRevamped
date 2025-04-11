<?php

use App\Http\Controllers\Views\HomeController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

// Route::get('{any}', [HomeController::class, 'view'])
// ->name('home');

Route::get('/services',[HomeController::class, 'services'])
->name('services');

Route::get('/about',[HomeController::class, 'about'])
->name('about');

Route::get('/employers', [HomeController::class, 'employers'])
->name('employers');

Route::get('/apply/{position?}', [HomeController::class, 'apply'])
->name('apply');

Route::get('/requestService/{service?}', [HomeController::class, 'requestService'])
->name('request-service');

Route::get('/news/{id?}', [HomeController::class, 'news'])
->name('news');

Route::get('/{any?}', [HomeController::class, 'view'])
->where('any', '.*');
