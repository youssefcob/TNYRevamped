<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CampaignApplication extends Model
{
    use HasFactory, GenericObserverTrait;

    protected $fillable = [
        'role',
        'first_name',
        'last_name',
        'email',
        'phone',
        'workplaces',
        'schedule',
        'experience',
        'status',
        'campaign_source',
    ];

    protected $casts = [
        'workplaces' => 'array',
    ];
}

