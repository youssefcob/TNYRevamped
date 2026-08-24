<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TextStyle extends Model
{
    protected $fillable = [
        'name',
        'font_family',
        'font_weight',
        'italic',
        'underline',
        'color',
        'min_font_size',
        'max_font_size',
        'font_size_vw',
        'line_height',
    ];

    protected $casts = [
        'italic' => 'boolean',
        'underline' => 'boolean',
        'font_weight' => 'integer',
        'min_font_size' => 'float',
        'max_font_size' => 'float',
        'font_size_vw' => 'float',
        'line_height' => 'float',
    ];
}
