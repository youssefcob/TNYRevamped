<?php

use App\Http\Controllers\JobSeekerController;
use App\Http\Controllers\Views\EmployerViewsController;
use App\Http\Controllers\Views\JobSeekerViewsController;
use App\Http\Controllers\Views\VacancyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




    
Route::prefix('employer')->middleware(['auth:user', 'scope:employer'])->group(function () {
    Route::post('/profile/update', [EmployerViewsController::class, 'createOrUpdateEmployerProfile'])->name('update.profile.employer');
});

Route::get('/post-vacancy', [EmployerViewsController::class, 'postVacancyView'])
    ->middleware('auth.view:employer')
    ->name('post-vacancy');

Route::post('/post-vacancy', [VacancyController::class, 'postVacancy'])
    ->middleware('auth.view:employer')
    ->name('post-vacancy.submit');