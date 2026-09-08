<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\Redirect;
use App\Services\Content\RedirectService;
use Illuminate\Http\Request;

class RedirectController extends Controller
{
    protected $redirects;

    public function __construct(RedirectService $redirects)
    {
        $this->redirects = $redirects;
    }

    public function index()
    {
        return inertia('Admin/Redirects', [
            'redirects' => RedirectService::all(),
            'statusCodes' => RedirectService::STATUS_CODES,
        ]);
    }

    public function update(Request $request)
    {
        $response = $this->redirects->upsert($request);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function destroy(Redirect $redirect)
    {
        $response = $this->redirects->destroy($redirect);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }
}
