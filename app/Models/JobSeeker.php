<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JobSeeker extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        // 'name',
        'phone_number',
        'bod',
        'notice_period',
        'facility_type',
        'shift_type',
        'experience',
        'address',
        'resume',
        'status',
        'salary',
        'talent',
        'position_id',
        'user_id'
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
}