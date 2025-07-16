<?php
use App\Http\Controllers\Views\DashboardController;
use App\Http\Controllers\Views\EmployerViewsController;
use App\Http\Controllers\Views\VacancyController;
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

Route::prefix('vacancy')->middleware('auth.view:employer')->group(function () {
    Route::get('/edit/{id}', [VacancyController::class, 'EditVacancyView'])->name('vacancies.list');
    Route::post('/edit/{id}', [VacancyController::class, 'editVacancy'])->name('vacancies.edit');

});

Route::prefix('bid')->middleware(['auth.view:employer'])->group(function () {
    Route::post('/', [EmployerViewsController::class, 'bid'])
        ->name('bid.submit');
});

Route::prefix('dashboard')->middlewate(['auth.view:employer'])->group(function () {
    Route::get('/vacancies', [DashboardController::class, 'vacancies'])
        ->name('employer.vacancies');
    Route::get('/bids', [DashboardController::class, 'bids'])
        ->name('employer.bids');
});