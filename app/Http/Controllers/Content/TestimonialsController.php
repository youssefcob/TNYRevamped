<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Content\TestimonialsService;

class TestimonialsController extends Controller
{
    protected $testimonials;
    public function __construct(TestimonialsService $testimonials)
    {
        $this->testimonials = $testimonials;
    }
    public function getWithFormattedResponse(){
        $response = $this->testimonials->getWithFormattedResponse();
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function submit(Request $request)
    {
        $response = $this->testimonials->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updateWithFormattedResponse(Request $request, $id){
        $response = $this->testimonials->updateWithFormattedResponse($request, $id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function delete($id)
    {
        $response = $this->testimonials->delete($id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
