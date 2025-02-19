<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    public $fillable = ['title','image','order'];


    public function buttons()
    {
        return $this->hasMany(HeroButton::class);
    }
}
