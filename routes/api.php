<?php

// use App\Http\Controllers\AdminAtuhController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PositionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:api');


Route::post('/login', [AdminAuthController::class, 'login']);
Route::middleware('auth:api')->group(function () {
    //Applications routes
    Route::get('/applications',[ApplicationsController::class , 'getApplications'])->name('get.applications');
    //TODO: When delete application make sure to delete the application's files from Cloudinary.
    Route::put('/applicationStatus', [ApplicationsController::class , 'updateApplicationStatus'])->name('update.application.status');
    Route::delete('/application', [ApplicationsController::class , 'deleteApplication'])->name('delete.application');

    //Positions routes
    Route::get('/positions', [PositionController::class , 'getPositions'])->name('get.positions');    
    Route::put('/positions', [PositionController::class , 'updatePosition'])->name('update.positions');
    Route::delete('/positions', [PositionController::class , 'deletePosition'])->name('delete.positions');
    Route::post('/positions', [PositionController::class , 'createPosition'])->name('create.positions');
    
    //Messages routes 
    Route::get('/messages', [MessageController::class , 'getMessages'])->name('get.messages');

});