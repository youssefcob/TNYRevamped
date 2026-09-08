<?php

use App\Http\Controllers\Content\RedirectController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:web')->group(function () {
    Route::get('/admin/redirects', [RedirectController::class, 'index'])
        ->name('admin.redirects.index');

    Route::post('/content/redirects', [RedirectController::class, 'update'])
        ->name('content.redirects.update');

    Route::delete('/content/redirects/{redirect}', [RedirectController::class, 'destroy'])
        ->name('content.redirects.destroy');
});
