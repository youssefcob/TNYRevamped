<?php

namespace App\Models;

use App\GenericObserverTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Vacancy extends Model
{
    use HasFactory, GenericObserverTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'employer_id',
        'position_id',
        'borough',
        'address',
        'shift_details',
        'experience',
        'facility_type',
        'payment_type',
        'rate_per_hour',
        'license_required',
        'legal_status',
        'status',
        'gender_pref',
        'work_days',
        'availability_to_start',
        'is_featured',
        'language_pref'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'from' => 'datetime',
        'to' => 'datetime',
        'min_experience' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'work_days' => 'array',
    ];

    /**
     * Get the position associated with the vacancy.
     */
    public function position(): BelongsTo
    {
        return $this->belongsTo(Position::class);
    }

    /**
     * Get the employer associated with the vacancy.
     */
    public function employer()
    {
        return $this->belongsTo(Employer::class);
    }

    /**
     * Get the employers associated with the vacancy.
     */
    public function employers(): BelongsToMany
    {
        return $this->belongsToMany(Employer::class, 'employer_vacancies')
                    ->withTimestamps();
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'vacancy_languages');
    }
}