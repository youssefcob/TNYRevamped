<?php

use App\Http\Controllers\Content\PageContentController;
use Illuminate\Support\Facades\Route;

Route::post('/content/page-content', [PageContentController::class, 'update'])
    ->middleware('auth:web')
    ->name('content.page-content.update');

Route::post('/content/page-image', [PageContentController::class, 'updateImage'])
    ->middleware('auth:web')
    ->name('content.page-image.update');
