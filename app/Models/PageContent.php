<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    protected $fillable = ['key', 'page', 'type', 'value', 'text_style_id', 'tag'];

    public function textStyle()
    {
        return $this->belongsTo(TextStyle::class);
    }
}
