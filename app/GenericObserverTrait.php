<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

trait GenericObserverTrait
{
    //
    public static function bootGenericObserverTrait()
    {
        static::created(function (Model $model) {
            Log::info('Created:', ['table' => $model->getTable(), 'data' => $model->toArray()]);
            
        });

        static::updated(function (Model $model) {
            Log::info('Updated:', ['table' => $model->getTable(), 'data' => $model->toArray()]);
        });

        static::deleted(function (Model $model) {
            // dd('s');
            Log::info('Deleted:', ['table' => $model->getTable(), 'data' => $model->toArray()]);
            
        });
    }
}
