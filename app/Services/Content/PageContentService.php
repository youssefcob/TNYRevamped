<?php

namespace App\Services\Content;

use App\Models\PageContent;
use App\Services\Cloudinary;
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
                'objectFit' => $row->object_fit,
                'objectPosition' => $row->object_position,
                'alt' => $row->alt,
                'href' => $row->href,
                'target' => $row->target,
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
                'tag' => ['nullable', 'string', Rule::in(['h1', 'h2', 'h3', 'h4', 'p', 'span', 'a'])],
                'object_fit' => ['nullable', 'string', Rule::in(['cover', 'contain', 'fill', 'none'])],
                'object_position' => ['nullable', 'string', 'max:20'],
                'alt' => ['nullable', 'string', 'max:255'],
                'href' => ['nullable', 'string', 'max:2048'],
                'target' => ['nullable', 'string', Rule::in(['_self', '_blank'])],
            ]);

            $content = PageContent::updateOrCreate(
                ['key' => $request->key],
                [
                    'page' => $request->page,
                    'value' => $request->value,
                    'text_style_id' => $request->text_style_id,
                    'tag' => $request->tag,
                    'object_fit' => $request->object_fit,
                    'object_position' => $request->object_position,
                    'alt' => $request->alt,
                    'href' => $request->href,
                    'target' => $request->target,
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

    public function upsertImage(Request $request)
    {
        try {
            $request->validate([
                'key' => ['required', 'string', 'max:255'],
                'page' => ['required', 'string', 'max:255'],
                'image' => ['required', 'file', 'mimes:jpeg,png,jpg,gif,webp', 'max:8192'],
            ]);

            $existing = PageContent::where('key', $request->key)->first();

            $cloudinary = new Cloudinary;
            $uploaded = $cloudinary->uploadImageWithId(
                $request->file('image'),
                subfolder: 'page-content/'.$request->page,
            );

            $content = PageContent::updateOrCreate(
                ['key' => $request->key],
                [
                    'page' => $request->page,
                    'type' => 'image',
                    'value' => $uploaded['file'],
                    'image_public_id' => $uploaded['id'],
                ]
            );

            // Best-effort cleanup — the new image is already saved, so a
            // failure here shouldn't fail the request.
            if ($existing?->image_public_id) {
                $cloudinary->deleteImage($existing->image_public_id);
            }

            return [
                'success' => true,
                'data' => $content,
                'message' => 'Image updated successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
