<?php

use App\Http\Controllers\BidsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobSeekerController;
use Illuminate\Support\Facades\Auth;

Route::prefix('bids')->middleware(['auth:user'])->group(function () {
    // employers
    Route::middleware(['scope:employer'])->group(function () {
        Route::get('/employer/list', [BidsController::class, 'listBidsForEmployer'])->name('list.bids');
        Route::post('/employer/create', [BidsController::class, 'createBid'])->name('create.bid');
        Route::put('/employer/update', [BidsController::class, 'updateBid'])->name('update.bid');
        Route::post('/employer/delete', [BidsController::class, 'deleteBid'])->name('delete.bid');

        // job seeker management by employer
        // Route::get('/employer/job-seekers', [JobSeekerController::class, 'listJobSeekers'])->name('list.jobSeekers');
        // Route::post('/employer/job-seekers/create', [JobSeekerController::class, 'createJobSeeker'])->name('create.jobSeeker');
        // Route::post('/employer/job-seekers/update', [JobSeekerController::class, 'updateJobSeeker'])->name('update.jobSeeker');
        // Route::post('/employer/job-seekers/profile/update', [JobSeekerController::class, 'createOrUpdateJobSeekerProfile'])->name('update.profile.jobSeeker');
    });

    // Admin
    Route::middleware(['scope:admin'])->group(function () {
        Route::get('/admin/list', [BidsController::class, 'listAdminBids'])->name('list.admin.bids');
        //update bid status
        Route::put('/admin/update-status', [BidsController::class, 'updateBidStatus'])->name('update.bid.status');
    });
    
    Route::middleware(['scope:job-seeker'])->group(function () {
        Route::get('/job-seeker/count', [BidsController::class, 'countJobSeekerBids'])->name('count.jobSeeker.bids');
    });
});