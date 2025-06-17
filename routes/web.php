<?php

use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\Views\Auth\LoginController;
use App\Http\Controllers\Views\Auth\RegisterController;
use App\Http\Controllers\Views\HomeController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

// Route::get('{any}', [HomeController::class, 'view'])
// ->name('home');

require __DIR__ . '/web/auth-routes.php';




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

// Route::get('/login', [LoginController::class, 'login'])
// ->name('login.submit');

Route::get('/job-seekers', [HomeController::class, 'jobSeekers'])
->name('job-seekers')
->middleware('auth.view:job-seeker');

// Route::post('/web-login', [UserAuthController::class, 'loginWeb'])
// ->name('login.web');
Route::get('/talents', [HomeController::class, 'talents']);

Route::get('/', [HomeController::class, 'view'])
->name('home');


Route::get('/{any?}', [HomeController::class, 'view'])
->where('any', '.*');