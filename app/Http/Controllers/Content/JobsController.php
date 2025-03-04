<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\JobsService;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    protected $jobs;
    public function __construct(JobsService $jobs)
    {
        $this->jobs = $jobs;
    }
    public function submit(Request $request)
    {
        $response = $this->jobs->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function delete($id)
    {
        $response = $this->jobs->delete($id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
