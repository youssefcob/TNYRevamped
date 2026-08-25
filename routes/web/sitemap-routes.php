<?php

use App\Http\Controllers\Content\SitemapController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:web')->group(function () {
    Route::get('/admin/sitemap', [SitemapController::class, 'adminIndex'])
        ->name('admin.sitemap.index');

    Route::post('/content/sitemap', [SitemapController::class, 'update'])
        ->name('content.sitemap.update');

    Route::delete('/content/sitemap/{sitemapEntry}', [SitemapController::class, 'destroy'])
        ->name('content.sitemap.destroy');
});
