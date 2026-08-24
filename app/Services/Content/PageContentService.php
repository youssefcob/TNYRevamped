<?php

namespace App\Services\Content;

use App\Models\PageContent;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PageContentService
{
    public static function getForPage(string $page): array
    {
        return PageContent::where('page', $page)->get()
            ->keyBy('key')
            ->map(fn (PageContent $row) => [
                'value' => $row->value,
                'textStyleId' => $row->text_style_id,
                'tag' => $row->tag,
            ])
            ->toArray();
    }

    public function upsert(Request $request)
    {
        try {
            $request->validate([
                'key' => ['required', 'string', 'max:255'],
                'page' => ['required', 'string', 'max:255'],
                'value' => ['nullable', 'string', 'max:5000'],
                'text_style_id' => ['nullable', 'integer', 'exists:text_styles,id'],
                'tag' => ['nullable', 'string', Rule::in(['h1', 'h2', 'h3', 'h4', 'p', 'span'])],
            ]);

            $content = PageContent::updateOrCreate(
                ['key' => $request->key],
                [
                    'page' => $request->page,
                    'value' => $request->value,
                    'text_style_id' => $request->text_style_id,
                    'tag' => $request->tag,
                ]
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
