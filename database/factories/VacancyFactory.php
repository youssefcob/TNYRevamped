<?php

namespace Database\Factories;

use App\Models\Employer;
use App\Models\Vacancy;
use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

class VacancyFactory extends Factory
{
    protected $model = Vacancy::class;
    private $allowedBouroughs = ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island', 'Long Island'];

    public function definition(): array
    {
        $position = Position::inRandomOrder()->first() ?? Position::factory()->create();
        $employer =  Employer::factory()->create();
        return [
            'employer_id' => $employer->id,
            'position_id' => $position->id,
            'borough' => $this->faker->randomElement($this->allowedBouroughs),
            'address' => $this->faker->address(),
            'shift_details' => $this->faker->randomElement(['Day Shift', 'Night Shift', 'Flexible Hours']),
            'experience' => $this->faker->numberBetween(1, 5),
            'facility_type' => $this->faker->word(),
            'payment_type' => $this->faker->word(),
            'rate_per_hour' => $this->faker->randomFloat(2, 10, 50),
            'license_required' => $this->faker->boolean(),
            'legal_status' => $this->faker->word(),
            'status' => $this->faker->randomElement(['open', 'closed', 'pending']),
            'gender_pref' => $this->faker->randomElement(['Male','Female','Any']),
            'work_days' => $this->faker->randomElements(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], $this->faker->numberBetween(1, 7)),
            'availability' => $this->faker->numberBetween(0, 60),
            'is_featured' => $this->faker->boolean(30), 

        ];
    }
}