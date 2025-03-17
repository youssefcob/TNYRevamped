<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\TeamService;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    protected $team;
    public function __construct(TeamService $team)
    {
        $this->team = $team;
    }
    public function submit(Request $request)
    {
        $response = $this->team->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function delete($id)
    {
        $response = $this->team->delete($id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
