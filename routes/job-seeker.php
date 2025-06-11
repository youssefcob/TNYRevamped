<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobSeekerController;
use Illuminate\Support\Facades\Auth;

Route::prefix('job-seeker')->middleware(['auth:user', 'scope:job-seeker'])->group(function () {
    // Route::post('/', [JobSeekerController::class, 'createJobSeeker'])->name('create.jobSeeker');
    // Route::post('/update', [JobSeekerController::class, 'updateJobSeeker'])->name('update.jobSeeker');
    Route::post('/profile/update', [JobSeekerController::class, 'createOrUpdateJobSeekerProfile'])->name('update.profile.jobSeeker');
});