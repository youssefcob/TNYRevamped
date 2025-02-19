<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroButton extends Model
{
    public $fillable = ['text', 'link', 'hero_id', 'color'];

    public function hero()
    {
        return $this->belongsTo(Hero::class);
    }
}
