<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Vacancy extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'facility_name',
        'mobile_number',
        'email',
        'address',
        'shift_type',
        'from',
        'to',
        'license',
        'facility_type',
        'min_experience',
        'position_id',
        
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
        'updated_at' => 'datetime'
    ];

    /**
     * Get the position associated with the vacancy.
     */
    public function position(): BelongsTo
    {
        return $this->belongsTo(Position::class);
    }

    

    /**
     * Get the employers associated with the vacancy.
     */
    public function employers(): BelongsToMany
    {
        return $this->belongsToMany(Employer::class, 'employer_vacancies')
                    ->withTimestamps();
    }
}