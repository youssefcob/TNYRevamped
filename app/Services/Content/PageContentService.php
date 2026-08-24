<?php

namespace App\Services\Content;

use App\Models\PageContent;
use Illuminate\Http\Request;

class PageContentService
{
    public static function getForPage(string $page): array
    {
        return PageContent::where('page', $page)->pluck('value', 'key')->toArray();
    }

    public function upsert(Request $request)
    {
        try {
            $request->validate([
                'key' => ['required', 'string', 'max:255'],
                'page' => ['required', 'string', 'max:255'],
                'value' => ['nullable', 'string', 'max:5000'],
            ]);

            $content = PageContent::updateOrCreate(
                ['key' => $request->key],
                ['page' => $request->page, 'value' => $request->value]
            );

            return [
                'success' => true,
                'data' => $content,
                'message' => 'Content updated successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
