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
            'phone_number' => $this->faker->phoneNumber(),
            'bod' => $this->faker->date(),
            'notice_period' => $this->faker->randomElement(['Immediate', '1 Month', '2 Months', '3 Months']),
            'salary' => $this->faker->numberBetween(3000, 20000),
            'facility_type' => $this->faker->randomElement(['Hospital', 'Clinic', 'Care Home', 'Other']),
            'shift_type' => $this->faker->randomElement(['Morning', 'Evening', 'Night', 'Rotating']),
            'experience' => $this->faker->numberBetween(0, 20),
            'address' => $this->faker->address(),
            'resume' => $this->faker->url(),
            'status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
            'position_id' => Position::factory(),
            'talent' => $this->faker->boolean(),
        ];
    
    }
}
