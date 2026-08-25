<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SitemapEntry extends Model
{
    protected $fillable = [
        'url',
        'is_manual',
        'priority',
        'changefreq',
        'excluded',
        'lastmod',
    ];

    protected $casts = [
        'is_manual' => 'boolean',
        'excluded' => 'boolean',
        'priority' => 'float',
        'lastmod' => 'datetime',
    ];
}
