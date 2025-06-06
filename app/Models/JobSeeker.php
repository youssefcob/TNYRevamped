<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class JobSeeker extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'position_id',
        'user_id',
        'experience',
        'facility_type',
        'payment_type',
        // 'languages',
        'preferred_location',
        'employment_status',
        'availability_to_start',
        'rate_per_hour',
        'licensing',
        'legal_status',
        'resume',
        'is_talent',
        'status',
        'phone_number',
        'gender'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'bod' => 'date',
        'experience' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'talent' => 'boolean'
    ];

    /**
     * Get the user that owns the job seeker profile.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the position that the job seeker applied for.
     */
    public function position(): BelongsTo
    {
        return $this->belongsTo(Position::class);
    }

    /**
     * Get the applications for the job seeker.
     */
    public function applications(): HasMany
    {
        return $this->hasMany(Application::class);
    }

    /**
     * Get the bids for the job seeker.
     */
    public function bids()
    {
        return $this->hasMany(Bid::class);
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'job_seeker_languages');
    }
}