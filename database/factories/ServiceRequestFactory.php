<?php

namespace Database\Factories;

use App\Models\Service;
use App\Models\ServiceRequest;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ServiceRequest>
 */
class ServiceRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = ServiceRequest::class;

    public function definition(): array
    {
        $service = Service::inRandomOrder()->first();

         // If no services exist, create a new one
         if (!$service) {
             $service = Service::factory()->create();
         }
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'address' => $this->faker->address(),
            'phone' => $this->faker->phoneNumber(),
            'company_name' => $this->faker->company(),
            'requirements' => $this->faker->sentence(10),
            'status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
            'service_id' => $service->id, // Generates a related Service model
        ];
    }
}
