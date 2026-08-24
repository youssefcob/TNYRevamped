<?php

use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\Views\Auth\LoginController;
use App\Http\Controllers\Views\Auth\RegisterController;
use App\Http\Controllers\Views\DashboardController;
use App\Http\Controllers\Views\HomeController;
use App\Http\Controllers\Views\ProfileController;
use App\Http\Controllers\Views\TalentsController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

// Route::get('{any}', [HomeController::class, 'view'])
// ->name('home');

require __DIR__ . '/web/auth-routes.php';

require __DIR__ . '/web/employer-web.php';
require __DIR__ . '/web/job-seeker-web.php';
require __DIR__ . '/web/content-routes.php';




Route::get('/services',[HomeController::class, 'services'])
->name('services');

Route::get('/about',[HomeController::class, 'about'])
->name('about');

Route::get('/employers', [HomeController::class, 'employers'])
->name('employers');

Route::get('/candidates', [HomeController::class, 'candidates'])
->name('candidates');

Route::get('/apply/{position?}', [HomeController::class, 'apply'])
->name('apply');

Route::get('/requestService/{service?}', [HomeController::class, 'requestService'])
->name('request-service');

Route::get('/solutions', [HomeController::class, 'solutions'])
->name('solutions');

Route::get('/contact', [HomeController::class, 'contact'])
->name('contact');

Route::get('/resources', [HomeController::class, 'resources'])
->name('resources');

Route::get('/news/{url?}', [HomeController::class, 'news'])
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
Route::get('/talents', [TalentsController::class, 'talents'])->name('talents');

Route::get('/profile', [ProfileController::class, 'index'])
    ->middleware('auth.view:any')
    ->name('profile');

Route::get('/profile/edit', [ProfileController::class, 'editView'])
    ->middleware('auth.view:any')
    ->name('profile.edit');

Route::get('/', [HomeController::class, 'view'])
->name('home');

Route::get('/home-v2', [HomeController::class, 'homeV2'])
->name('home-v2');

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')
    ->middleware('auth.view:any');

Route::get('/{any?}', [HomeController::class, 'view'])
->where('any', '.*');