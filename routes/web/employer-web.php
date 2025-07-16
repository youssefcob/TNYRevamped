<?php
use App\Http\Controllers\Views\DashboardController;
use App\Http\Controllers\Views\EmployerViewsController;
use App\Http\Controllers\Views\VacancyController;
use Illuminate\Support\Facades\Route;




    
Route::prefix('employer')->middleware(['auth:user', 'scope:employer'])->group(function () {
    Route::post('/profile/update', [EmployerViewsController::class, 'createOrUpdateEmployerProfile'])->name('update.profile.employer');
});

Route::get('/post-vacancy', [VacancyController::class, 'postVacancyView'])
    ->middleware('auth.view:employer')
    ->middleware('complete.profile')
    ->name('post-vacancy');

Route::post('/post-vacancy', [VacancyController::class, 'postVacancy'])
    ->middleware('auth.view:employer')
    ->middleware('complete.profile')
    ->name('post-vacancy.submit');

Route::prefix('vacancy')->middleware('auth.view:employer')->group(function () {
    Route::get('/edit/{id}', [VacancyController::class, 'EditVacancyView']);
    Route::post('/edit/{id}', [VacancyController::class, 'editVacancy']);

});

Route::prefix('bid')->middleware(['auth.view:employer'])->group(function () {
    Route::post('/', [EmployerViewsController::class, 'bid'])->middleware('complete.profile')
        ->name('bid.submit');
});

Route::prefix('dashboard')->middleware(['auth.view:employer'])->group(function () {
    Route::get('/vacancies', [DashboardController::class, 'employerVacancies'])
        ->name('employer.vacancies');
    Route::get('/bids', [DashboardController::class, 'employerBids'])
        ->name('employer.bids');
    Route::get('/edit/{id}', [VacancyController::class, 'EditVacancyView'])
    ->middleware('complete.profile')
    ->name('vacancies.list');
    Route::post('/edit/{id}', [VacancyController::class, 'editVacancy'])
    ->middleware('complete.profile')
    ->name('vacancies.edit');
});