<?php

namespace Database\Factories;

use App\Models\Vacancy;
use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

class VacancyFactory extends Factory
{
    protected $model = Vacancy::class;

    public function definition(): array
    {
        $position = Position::inRandomOrder()->first() ?? Position::factory()->create();

        return [
            'facility_name' => $this->faker->company(),
            'mobile_number' => $this->faker->phoneNumber(),
            'email' => $this->faker->companyEmail(),
            'address' => $this->faker->address(),
            'shift_type' => $this->faker->randomElement(['Day', 'Night', 'Rotating']),
            'from' => $this->faker->dateTimeBetween('now', '+1 month'),
            'to' => $this->faker->dateTimeBetween('+1 month', '+3 months'),
            'license' => $this->faker->randomElement(['RN', 'LPN', 'CNA']),
            'facility_type' => $this->faker->randomElement(['Hospital', 'Nursing Home', 'Clinic', 'Rehabilitation Center']),
            'min_experience' => $this->faker->numberBetween(0, 10),
            'position_id' => $position->id,
        ];
    }
}