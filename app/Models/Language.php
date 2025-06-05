<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'display_name'
    ];

    public function vacancies()
    {
        return $this->belongsToMany(Vacancy::class, 'vacancy_languages');
    }

    public function jobSeekers()
    {
        return $this->belongsToMany(JobSeeker::class, 'job_seeker_languages');
    }
} 