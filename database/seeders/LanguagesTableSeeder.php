<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Language;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $languages = [
            ['name' => 'english', 'display_name' => 'English'],
            ['name' => 'spanish', 'display_name' => 'Spanish'],
            ['name' => 'chinese', 'display_name' => 'Chinese (Mandarin & Cantonese)'],
            ['name' => 'tagalog', 'display_name' => 'Tagalog (Filipino)'],
            ['name' => 'vietnamese', 'display_name' => 'Vietnamese'],
            ['name' => 'arabic', 'display_name' => 'Arabic'],
            ['name' => 'french', 'display_name' => 'French'],
            ['name' => 'korean', 'display_name' => 'Korean'],
            ['name' => 'russian', 'display_name' => 'Russian'],
            ['name' => 'german', 'display_name' => 'German'],
            ['name' => 'hindi', 'display_name' => 'Hindi'],
            ['name' => 'portuguese', 'display_name' => 'Portuguese'],
            ['name' => 'italian', 'display_name' => 'Italian'],
            ['name' => 'japanese', 'display_name' => 'Japanese'],
            ['name' => 'urdu', 'display_name' => 'Urdu'],
            ['name' => 'persian', 'display_name' => 'Persian (Farsi)'],
            ['name' => 'gujarati', 'display_name' => 'Gujarati'],
            ['name' => 'greek', 'display_name' => 'Greek'],
            ['name' => 'bengali', 'display_name' => 'Bengali'],
            ['name' => 'punjabi', 'display_name' => 'Punjabi'],
        ];

        foreach ($languages as $language) {
            Language::create($language);
        }
    }
} 