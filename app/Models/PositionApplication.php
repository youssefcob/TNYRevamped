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
        'city',
        'state',
        'license_status',
        'years_experience',
        'preferred_setting',
        'employment_type',
        'start_date',
        'status',
    ];

    public function position()
    {
        return $this->belongsTo(Position::class);
    }
}
