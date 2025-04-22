<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\EmployersService;
use Illuminate\Http\Request;

class EmployerController extends Controller
{
    protected $employers;
    public function __construct(EmployersService $employers)
    {
        $this->employers = $employers;
    }
    public function getWithFormattedResponse(){
        $response = $this->employers->getWithFormattedResponse();
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function submit(Request $request)
    {
        $response = $this->employers->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function update(Request $request, $id){
        $response = $this->employers->update($request, $id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function delete($id)
    {
        $response = $this->employers->delete($id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
