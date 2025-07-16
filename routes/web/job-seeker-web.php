<?php

use App\Http\Controllers\JobSeekerController;
use App\Http\Controllers\Views\DashboardController;
use App\Http\Controllers\Views\JobSeekerViewsController;
use App\Http\Controllers\Views\VacancyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('js')->middleware(['auth:user', 'scope:job-seeker'])->group(function () {

    Route::get('/', [JobSeekerViewsController::class, 'home']);
});

Route::get('/vacancies', [JobSeekerViewsController::class, 'vacancies'])
    ->middleware('auth.view:job_seeker')
    ->name('job-seeker.vacancies');


Route::prefix('job-seeker')->middleware(['auth:user', 'scope:job-seeker'])->group(function () {
    Route::post('/profile/update', [JobSeekerViewsController::class, 'createOrUpdateJobSeekerProfile'])->name('update.profile.jobSeeker');
});

Route::prefix('dashboard')->middleware(['auth.view:job_seeker'])->group(function () {
    Route::get('/applications', [DashboardController::class, 'jobSeekerApplications'])->name('job-seeker.dashboard.applications');
});


    
Route::post('/vacancy/apply/{id}',[VacancyController::class, 'apply'])->middleware(['auth.view:job_seeker']);