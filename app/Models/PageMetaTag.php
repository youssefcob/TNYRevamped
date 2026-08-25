<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageMetaTag extends Model
{
    protected $fillable = [
        'page',
        'attribute',
        'meta_key',
        'content',
    ];
}
