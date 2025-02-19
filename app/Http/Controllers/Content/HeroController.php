<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\HeroService;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    protected $hero;
    public function __construct(HeroService $hero)
    {
        $this->hero = $hero;
    }
    public function submit(Request $request)
    {
        $response = $this->hero->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
