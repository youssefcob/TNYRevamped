<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    protected $fillable = [
        'key',
        'page',
        'type',
        'value',
        'text_style_id',
        'tag',
        'image_public_id',
        'object_fit',
        'object_position',
        'alt',
        'href',
        'target',
    ];

    public function textStyle()
    {
        return $this->belongsTo(TextStyle::class);
    }
}
