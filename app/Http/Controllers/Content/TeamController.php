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

    public function getWithFormattedResponse(){
        $response = $this->team->getWithFormattedResponse();
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function update(Request $request){
        $response = $this->team->update($request, $request->id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function upadteWithFormattedResponse(Request $request){
        $response = $this->team->updateWithFormattedResponse($request, $request->id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
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
