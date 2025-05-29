<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Employer extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'phone_number',
        'address',
        'description',
        'image',
        'onMainPage',
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
     * Get the vacancies associated with the employer.
     */
    public function vacancies(): BelongsToMany
    {
        return $this->belongsToMany(Vacancy::class, 'employer_vacancies')
                    ->withTimestamps();
    }
}
