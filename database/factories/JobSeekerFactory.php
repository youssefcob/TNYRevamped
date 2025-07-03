<?php

namespace Database\Factories;

use App\Models\JobSeeker;
use App\Models\Position;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobSeeker>
 */
class JobSeekerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = JobSeeker::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory()->jobSeeker(),
            'position_id' => Position::factory(),
            'experience' => $this->faker->numberBetween(0, 20),
            'facility_type' => $this->faker->randomElement(['Outpatient', 'Inpatient', 'SNF', 'Home Therapy']),
            'payment_type' => $this->faker->randomElement(['W2', '1099']),
            'preferred_location' => $this->faker->randomElement(['Manhattan', 'The Bronx', 'Brooklyn', 'Queens', 'Staten Island', 'Long Island']),
            'is_employed' => $this->faker->randomElement(['Currently Employed', 'Unemployed']),
            'availability_to_start' => $this->faker->numberBetween(0, 60),
            'rate_per_hour' => $this->faker->randomFloat(2, 20, 100),
            'is_licensed' => $this->faker->boolean(),
            'legal_status' => $this->faker->randomElement(['US Citizen', 'Green Card Holder', 'H-1B', 'B1B2', 'F1 Student', 'other']),
            'resume' => $this->faker->url(),
            'is_talent' => $this->faker->boolean(),
            'status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
            'phone_number' => $this->faker->phoneNumber(),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'shift_type' => $this->faker->randomElement(['Full Time', 'Part Time', 'Per Diem', 'On Call']),
        ];
    }
}
