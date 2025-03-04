<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobPositions extends Model
{
    protected $fillable = ['title', 'description', 'available'];
}
