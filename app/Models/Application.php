<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory, GenericObserverTrait;
    
    protected $fillable = [
        'vacancy_id',
        'job_seeker_id',
        'status'
    ];

    public function vacancy()
    {
        return $this->belongsTo(Vacancy::class);
    }

    public function jobSeeker()
    {
        return $this->belongsTo(JobSeeker::class);
    }
}
