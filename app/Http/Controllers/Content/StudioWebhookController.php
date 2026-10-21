<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\StudioService;
use Illuminate\Http\Request;

class StudioWebhookController extends Controller
{
    /**
     * Studio POSTs here on publish / unpublish / re-render so the cached
     * envelope is dropped. The body is signed with a shared secret:
     * `x-studio-signature: sha256=<hmac of the raw body>`.
     */
    public function handle(Request $request)
    {
        $secret = config('services.studio.webhook_secret');
        $expected = 'sha256='.hash_hmac('sha256', $request->getContent(), (string) $secret);

        if (! $secret || ! hash_equals($expected, (string) $request->header('x-studio-signature'))) {
            return response()->json(['message' => 'Invalid signature'], 401);
        }

        // A hard delete sends only `address` ("tny/articles/<slug>"), no slug.
        $address = $request->input('address');
        $slug = $request->input('slug') ?? (is_string($address) ? basename($address) : null);

        // rerender.completed carries neither: every envelope changed.
        if (is_string($slug) && $slug !== '') {
            StudioService::forget($slug);
        } else {
            StudioService::forgetAll();
        }

        return response()->json(['success' => true]);
    }
}
