<?php

// use App\Http\Controllers\Employer\EmployerController;

use App\Http\Controllers\Applications\ApplicationsController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::prefix('applications')->group(function () {
    // Publicly accessible route to filter vacancies
    Route::middleware(['auth:user', 'scope:job-seeker'])->group(function () {
        // Job seeker applies to a vacancy
        Route::post('/vacancy/apply/{id}', [ApplicationsController::class, 'apply'])->name('vacancies.apply');
        // Job seeker views their applications
        Route::get('/', [ApplicationsController::class, 'jobSeekerApplications'])->name('applications.my');
    });

    Route::middleware(['auth:user', 'scope:employer'])->prefix('employer')->group(function () {
        // Employer views all applications on their vacancies
        Route::get('/', [ApplicationsController::class, 'employerApplications'])->name('employer.applications');
        // Employer views all applications per vacancy
        Route::get('/{vacancy}', [ApplicationsController::class, 'applicationsPerVacancy'])->name('employer.vacancy.applications');
    });

    Route::middleware(['auth:user', 'scope:admin'])->prefix('admin')->group(function () {
        Route::get('/filter',[ApplicationsController::class,'adminFilterApplications']);
    });
});
