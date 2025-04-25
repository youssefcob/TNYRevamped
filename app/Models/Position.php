<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory, GenericObserverTrait;
    //
    protected $fillable = ['title', 'description', 'available', 'address'];
}
