<?php

use App\Http\Controllers\Content\ServiceController as ContentServiceController;
use App\Http\Controllers\Content\TeamController;
use App\Http\Controllers\Content\TestimonialsController;

use App\Http\Controllers\Content\ClientsController;
use App\Http\Controllers\Content\EmployerController;
use App\Http\Controllers\Content\HeroController;
use App\Http\Controllers\Content\JobsController;
use App\Http\Controllers\Content\NewsController;

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'hero'], function () {
    // Route::get('/', [HeroController::class, 'get']);
    Route::post('/', [HeroController::class, 'submit']);
    // Route::put('/', [HeroController::class, 'put']);
    Route::delete('/{id}', [HeroController::class, 'delete']);
});


Route::group(['prefix' => 'service'], function () {
    Route::post('/', [ContentServiceController::class, 'submit']);
});

Route::group(['prefix' => 'employer'], function () {
    Route::post('/', [EmployerController::class, 'submit']);
    Route::delete('/{id}', [EmployerController::class, 'delete']);
});

Route::group(['prefix' => 'jobs'], function () {
    Route::post('/', [JobsController::class, 'submit']);
    Route::delete('/{id}', [JobsController::class, 'delete']);
});

Route::group(['prefix' => 'news'], function () {
    Route::post('/', [NewsController::class, 'submit']);
    Route::delete('/{id}', [NewsController::class, 'delete']);
});

Route::group(['prefix' => 'clients'], function () {
    Route::post('/', [ClientsController::class, 'submit']);
    Route::delete('/{id}', [ClientsController::class, 'delete']);
});

Route::group(['prefix' => 'testimonials'], function () {
    Route::post('/', [TestimonialsController::class, 'submit']);
    Route::delete('/{id}', [TestimonialsController::class, 'delete']);
});

Route::group(['prefix' => 'team'], function () {
    Route::post('/', [TeamController::class, 'submit']);
    Route::delete('/{id}', [TeamController::class, 'delete']);
    Route::get('/', [TeamController::class, 'getWithFormattedResponse']);
    Route::post('/updateTeamMember/{id}', [TeamController::class, 'upadteWithFormattedResponse']);
});