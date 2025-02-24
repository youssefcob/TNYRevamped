<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MailList extends Model
{
    //
    // use GenericObserverTrait;
    protected $fillable = ['name', 'email', 'form', 'role'];
}
