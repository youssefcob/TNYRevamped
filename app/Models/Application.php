<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    //
    use HasFactory, GenericObserverTrait;
    protected $fillable = ['name', 'email', 'address', 'phone', 'resume', 'position_id', 'status'];

}
