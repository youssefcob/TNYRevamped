<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Redirect extends Model
{
    protected $fillable = [
        'source',
        'destination',
        'status_code',
        'enabled',
        'hits',
    ];

    protected $casts = [
        'status_code' => 'integer',
        'enabled' => 'boolean',
        'hits' => 'integer',
    ];
}
