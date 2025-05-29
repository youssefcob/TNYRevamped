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
            'name' => fake()->company(),
            'phone_number' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'description' => fake()->paragraph(),
            'image' => 'employers/' . fake()->uuid() . '.jpg',
            'onMainPage' => fake()->boolean(),
            'user_id' => User::factory()->employer(),
        ];
    }
}
