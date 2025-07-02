<?php

use App\Http\Controllers\JobSeekerController;
use App\Http\Controllers\Views\JobSeekerViewsController;
use Illuminate\Support\Facades\Route;

Route::prefix('js')->middleware(['auth:user', 'scope:job-seeker'])->group(function () {

    Route::get('/', [JobSeekerViewsController::class, 'home']);
});

Route::get('/vacancies', [JobSeekerViewsController::class, 'vacancies'])
    ->middleware('auth.view:job_seeker')
    ->name('job-seeker.vacancies');


Route::prefix('job-seeker')->middleware(['auth:user', 'scope:job-seeker'])->group(function () {
    // Route::post('/profile/update', [JobSeekerViewsController::class, 'createOrUpdateJobSeekerProfile'])->name('update.profile.jobSeeker');
    Route::post('/profile/update', 
    function () {
        dd('$request->all()');
    }
    )->name('update.profile.jobSeeker');

});

    
