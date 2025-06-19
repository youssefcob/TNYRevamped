<?php

namespace Database\Factories;

use App\Models\Employer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Log;

class EmployerFactory extends Factory
{
    protected $model = Employer::class;

    public function definition(): array
    {
        $employer = [
            'facility_name' => $this->faker->company(),
            'phone_number' => $this->faker->phoneNumber(),
            'user_id' => User::factory()->create([
                'user_type' => User::TYPE_EMPLOYER,
            ])->id,
        ];
        return $employer;
    }
}
