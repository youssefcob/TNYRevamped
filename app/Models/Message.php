<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //
    use HasFactory, GenericObserverTrait;
    protected $fillable = ['name', 'email', 'phone', 'subject', 'message'];
}
