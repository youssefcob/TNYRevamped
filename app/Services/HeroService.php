<?php

namespace App\Services;

use App\Models\Hero;
use Illuminate\Http\Request;


class HeroService
{

    public static function get()
    {
        return Hero::with('buttons')->orderBy('order')->get();
    }

    public function post(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            // 'order' => [ 'integer'],
            'buttons' => ['array'],
            'buttons.*.title' => ['required', 'string'],
            'buttons.*.link' => ['required', 'string'],
            'buttons.*.color' => ['required', 'in:primary,secondary'],
        ]);

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $order = Hero::max('order') + 1;

        $hero = Hero::create([
            'title' => $request->title,
            'image' => $imageId,
            'order' => $order,
        ]);

        $hero->buttons()->createMany($request->buttons);

        return $hero;
    }

    private function reorderHeroes(){
        $heroes = Hero::orderBy('order')->get();
        
    }
    
}
