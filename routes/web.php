<?php

use App\Http\Controllers\Views\Auth\RegisterController;
use App\Http\Controllers\Views\HomeController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

// Route::get('{any}', [HomeController::class, 'view'])
// ->name('home');

require __DIR__ . '/web/job-seeker-web.php';


Route::get('login', [HomeController::class, 'login'])
->name('login');

Route::get('register', [HomeController::class, 'register'])
->name('register');

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

Route::post('/register', [RegisterController::class, 'submit'])
->name('register.submit');

Route::get('/{any?}', [HomeController::class, 'view'])
->where('any', '.*');
