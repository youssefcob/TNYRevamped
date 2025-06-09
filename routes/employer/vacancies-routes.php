<?php

// use App\Http\Controllers\Employer\EmployerController;

use App\Http\Controllers\Vacancies\VacanciesController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;



Route::prefix('vacancies')->group(function () {
    Route::middleware(['auth:user', 'scope:employer'])->group(function () {
        Route::post('/', [VacanciesController::class,'create']);
        Route::get('/', [VacanciesController::class,'employerGetVacancies'])->name('vacancies.list');
        Route::put('/update/{id}', [VacanciesController::class,'employerUpdateVacancy'])->name('vacancies.update');
        Route::delete('/delete/{id}', [VacanciesController::class,'employerDeleteVacancy'])->name('vacancies.delete');
    });

    Route::prefix('admin')->middleware(['auth:user', 'scope:admin'])->group(function () {
        Route::get('/employer/{id}', [VacanciesController::class,'adminViewVacanciesPerEmployer'])->name('vacancies.admin.view');
        Route::put('/status/{id}', [VacanciesController::class,'adminUpdateVacancyStatus'])->name('vacancies.admin.update.status');
    });

    Route::get('/filter', [VacanciesController::class, 'filterVacancies'])->name('vacancies.filter');
});
