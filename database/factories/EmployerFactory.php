<?php

namespace Database\Factories;

use App\Models\Employer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployerFactory extends Factory
{
    protected $model = Employer::class;

    public function definition(): array
    {
        return [
            'facility_name' => $this->faker->company(),
            'phone_number' => $this->faker->phoneNumber(),
            'user_id' => User::factory()->employer(),
        ];
    }
}
