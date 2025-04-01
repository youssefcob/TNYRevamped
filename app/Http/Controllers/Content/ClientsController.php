<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\ClientsService;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    protected $clients;
    public function __construct(ClientsService $clients)
    {
        $this->clients = $clients;
    }
    public function getWithFormattedResponse(){
        $response = $this->clients->getWithFormattedResponse();
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function submit(Request $request)
    {
        $response = $this->clients->post($request);
        return $response;
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updateWithFormattedResponse(Request $request, $id){
        $response = $this->clients->updateWithFormattedResponse($request, $id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function delete($id)
    {
        $response = $this->clients->delete($id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
