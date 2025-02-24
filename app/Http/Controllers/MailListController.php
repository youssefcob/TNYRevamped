<?php

namespace App\Http\Controllers;

use App\Services\MailListService;
use Illuminate\Http\Request;

class MailListController extends Controller
{
    //
    protected $service; 
    public function __construct(MailListService $service){
        $this->service = $service;
    }
    public function getMailList(Request $request){
        $response = $this->service->getMailList($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updateMailList(Request $request){
        $response = $this->service->updateMailList($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function deleteMailList(Request $request){
        $response = $this->service->deleteMailList($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function createMailList(Request $request){
        $response = $this->service->createMailList($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
