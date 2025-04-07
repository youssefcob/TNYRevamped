<?php

namespace Database\Factories;

use App\Models\Application;
use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Application::class;

    public function definition(): array
    {
         // Check if there are any existing positions
         $position = Position::inRandomOrder()->first();

         // If no positions exist, create a new one
         if (!$position) {
             $position = Position::factory()->create();
         }
 
         return [
             'name' => $this->faker->name(),
             'email' => $this->faker->unique()->safeEmail(),
             'zip' => $this->faker->postcode(),
             'phone' => $this->faker->unique()->phoneNumber(),
             'resume' => $this->faker->filePath(), // Simulated file path
             'position_id' => $position->id, // Use the existing or newly created position's ID
            'status' => $this->faker->randomElement([
                'Hired',
                'Rejected',
                'Pending',
                'Needs Assignment',
                'Missing Documents', 
                'Missing Preferences',
                'In Training',
                'Interview'
            ]),
        ];
    }
}
