<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Employer extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'facility_name',
        'phone_number',
        'user_id'
    ];
    
    /**
     * Get the user that owns the employer.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    /**
     * Get the vacancies for the employer.
     */
    public function vacancies()
    {
        return $this->hasMany(Vacancy::class);
    }
    
    /**
     * Get the bids for the employer.
     */
    public function bids()
    {
        return $this->belongsToMany(JobSeeker::class, 'bids','employer_id','job_seeker_id')
        ->withPivot('id','rate_per_hour','status','created_at','updated_at');
    }
}
