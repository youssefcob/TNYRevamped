<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\PageContentService;
use Illuminate\Http\Request;

class PageContentController extends Controller
{
    protected $pageContent;

    public function __construct(PageContentService $pageContent)
    {
        $this->pageContent = $pageContent;
    }

    public function update(Request $request)
    {
        $response = $this->pageContent->upsert($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
