<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceRequest extends Model
{
    //
    use HasFactory, GenericObserverTrait;
    protected $fillable = ['name', 'email', 'address', 'phone', 'company_name', 'requirements', 'requested_positions', 'open_roles', 'start_date', 'urgency', 'status', 'service_id'];
    protected $casts = [
        'requested_positions' => 'array',
    ];
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
