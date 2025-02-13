<?php

// use App\Http\Controllers\AdminAtuhController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\ApplicationsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:api');


Route::post('/login', [AdminAuthController::class, 'login']);
Route::get('/applications',[ApplicationsController::class , 'getApplications'])->name('get.applications');
Route::middleware('auth:api')->group(function () {
    Route::put('/updateApplicationStatus', [ApplicationsController::class , 'updateApplicationStatus'])->name('update.application.status');
    Route::delete('/deleteApplication', [ApplicationsController::class , 'deleteApplication'])->name('delete.application');
});