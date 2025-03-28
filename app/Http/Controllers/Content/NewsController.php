<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\NewsService;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    protected $news;
    public function __construct(NewsService $news)
    {
        $this->news = $news;
    }

    public function getWithFormattedResponse(){
        $response = $this->news->getWithFormattedResponse();
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function submit(Request $request)
    {
        $response = $this->news->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updateWithFormattedResponse(Request $request, $id){
        $response = $this->news->updateWithFormattedResponse($request, $id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function delete($id)
    {
        $response = $this->news->delete($id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
