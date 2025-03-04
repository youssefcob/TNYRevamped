<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    protected $model = \App\Models\Service::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3), // Generates a random title
            'description' => $this->faker->paragraph(), // Generates a random description
            'image' => $this->faker->imageUrl(640, 480, 'business', true), // Generates a random image URL
            'imageCloudId' => $this->faker->regexify('[A-Za-z0-9_-]{20,30}'), // Simulates a random Google Drive ID
            'available' => $this->faker->boolean(), // Random true/false
            'onMainPage' => $this->faker->boolean(), // Random true/false
        ];
    }
}