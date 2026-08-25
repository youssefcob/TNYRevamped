<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\PageMetaTag;
use App\Services\Content\PageMetaService;
use Illuminate\Http\Request;

class PageMetaController extends Controller
{
    protected $pageMeta;

    public function __construct(PageMetaService $pageMeta)
    {
        $this->pageMeta = $pageMeta;
    }

    public function index()
    {
        return inertia('Admin/MetaTags', [
            'metas' => PageMetaService::all(),
            'customTags' => PageMetaService::allCustomTags(),
        ]);
    }

    public function update(Request $request)
    {
        $response = $this->pageMeta->upsert($request);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function updateOgImage(Request $request)
    {
        $response = $this->pageMeta->upsertOgImage($request);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function storeCustomTag(Request $request)
    {
        $response = $this->pageMeta->storeCustomTag($request);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function updateCustomTag(Request $request, PageMetaTag $pageMetaTag)
    {
        $response = $this->pageMeta->updateCustomTag($request, $pageMetaTag);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function destroyCustomTag(PageMetaTag $pageMetaTag)
    {
        $response = $this->pageMeta->destroyCustomTag($pageMetaTag);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }
}
