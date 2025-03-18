<?php

namespace App\Http\Controllers;

use App\Services\MessageService;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    //
    protected $service;
    public function __construct(MessageService $service)
    {
        $this->service = $service;
    }
    public function getMessages(Request $request)
    {
        $response = $this->service->getMessages($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function submit(Request $request)
    {
        $response = $this->service->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
