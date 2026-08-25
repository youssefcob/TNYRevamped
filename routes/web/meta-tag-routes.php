<?php

use App\Http\Controllers\Content\PageMetaController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:web')->group(function () {
    Route::get('/admin/meta-tags', [PageMetaController::class, 'index'])
        ->name('admin.meta-tags.index');

    Route::post('/content/meta-tags', [PageMetaController::class, 'update'])
        ->name('content.meta-tags.update');

    Route::post('/content/meta-tags/og-image', [PageMetaController::class, 'updateOgImage'])
        ->name('content.meta-tags.og-image.update');

    Route::post('/content/meta-tags/custom-tags', [PageMetaController::class, 'storeCustomTag'])
        ->name('content.meta-tags.custom-tags.store');

    Route::put('/content/meta-tags/custom-tags/{pageMetaTag}', [PageMetaController::class, 'updateCustomTag'])
        ->name('content.meta-tags.custom-tags.update');

    Route::delete('/content/meta-tags/custom-tags/{pageMetaTag}', [PageMetaController::class, 'destroyCustomTag'])
        ->name('content.meta-tags.custom-tags.destroy');
});
