<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PositionApplication extends Model
{
    use HasFactory, GenericObserverTrait;

    protected $fillable = [
        'position_id',
        'name',
        'email',
        'phone',
        'resume',
        'message',
        'zip',
        'status',
    ];

    public function position()
    {
        return $this->belongsTo(Position::class);
    }
}
