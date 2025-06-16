<?php

use App\Http\Controllers\Views\JobSeekerViewsController;
use Illuminate\Support\Facades\Route;

Route::prefix('js')->middleware(['auth:user','scope:job-seeker'])->group(function (){

    Route::get('/',[JobSeekerViewsController::class,'home']);
});
