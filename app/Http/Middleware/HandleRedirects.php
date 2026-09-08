<?php

namespace App\Http\Middleware;

use App\Services\Content\RedirectService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleRedirects
{
    /**
     * Applies admin-managed redirects before anything else in the web stack.
     * Only plain page loads (GET/HEAD) are considered, and the admin panel
     * itself is left alone so a rule can never lock admins out.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->isMethod('GET') && ! $request->isMethod('HEAD')) {
            return $next($request);
        }

        $path = $request->getPathInfo();

        if (preg_match('#^/(admin|content|api|oauth|sitemap\.xml)(/|$)#', $path)) {
            return $next($request);
        }

        $rule = RedirectService::resolve($path);

        if (! $rule) {
            return $next($request);
        }

        RedirectService::recordHit($rule['id']);

        $target = $rule['destination'];
        $query = $request->getQueryString();
        if ($query && ! str_contains($target, '?')) {
            $target .= '?'.$query;
        }

        return redirect($target, $rule['status_code']);
    }
}
