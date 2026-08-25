<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\SitemapEntry;
use App\Services\Content\SitemapService;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    protected $sitemap;

    public function __construct(SitemapService $sitemap)
    {
        $this->sitemap = $sitemap;
    }

    public function index()
    {
        return response()
            ->view('sitemap', ['entries' => SitemapService::generate()])
            ->header('Content-Type', 'application/xml');
    }

    public function adminIndex()
    {
        return inertia('Admin/Sitemap', [
            'entries' => SitemapService::all(),
        ]);
    }

    public function update(Request $request)
    {
        $response = $this->sitemap->upsert($request);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function destroy(SitemapEntry $sitemapEntry)
    {
        $response = $this->sitemap->destroy($sitemapEntry);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }
}
