<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageMeta extends Model
{
    protected $fillable = [
        'page',
        'title',
        'description',
        'canonical',
        'og_image',
        'og_image_public_id',
    ];
}
