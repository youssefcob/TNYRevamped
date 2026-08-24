<?php

use App\Http\Controllers\Content\TextStyleController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:web')->group(function () {
    Route::get('/admin/text-styles', [TextStyleController::class, 'index'])
        ->name('admin.text-styles.index');

    Route::post('/content/text-styles', [TextStyleController::class, 'store'])
        ->name('content.text-styles.store');

    Route::put('/content/text-styles/{textStyle}', [TextStyleController::class, 'update'])
        ->name('content.text-styles.update');

    Route::delete('/content/text-styles/{textStyle}', [TextStyleController::class, 'destroy'])
        ->name('content.text-styles.destroy');
});
