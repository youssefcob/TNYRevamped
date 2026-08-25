<?php

namespace App\Services\Content;

use App\Models\PageMeta;
use App\Models\PageMetaTag;
use App\Services\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PageMetaService
{
    public static function all(): array
    {
        return PageMeta::all()->keyBy('page')->toArray();
    }

    public static function allCustomTags(): array
    {
        return PageMetaTag::orderBy('meta_key')->get()->groupBy('page')->toArray();
    }

    public static function getForPage(string $page): ?array
    {
        $row = PageMeta::where('page', $page)->first();

        $customTags = PageMetaTag::where('page', $page)->get(['attribute', 'meta_key', 'content'])->toArray();

        if (! $row && empty($customTags)) {
            return null;
        }

        return [
            'title' => $row->title ?? null,
            'description' => $row->description ?? null,
            'canonical' => $row->canonical ?? null,
            'ogImage' => $row->og_image ?? null,
            'customTags' => $customTags,
        ];
    }

    public function upsert(Request $request)
    {
        try {
            $request->validate([
                'page' => ['required', 'string', 'max:255'],
                'title' => ['nullable', 'string', 'max:255'],
                'description' => ['nullable', 'string', 'max:500'],
                'canonical' => ['nullable', 'string', 'max:255'],
            ]);

            $meta = PageMeta::updateOrCreate(
                ['page' => $request->page],
                [
                    'title' => $request->title,
                    'description' => $request->description,
                    'canonical' => $request->canonical,
                ]
            );

            return [
                'success' => true,
                'data' => $meta,
                'message' => 'Meta tags updated successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function storeCustomTag(Request $request)
    {
        try {
            $validated = $this->validatedCustomTag($request);

            $tag = PageMetaTag::create($validated);

            return [
                'success' => true,
                'data' => $tag,
                'message' => 'Meta tag added successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function updateCustomTag(Request $request, PageMetaTag $pageMetaTag)
    {
        try {
            $validated = $this->validatedCustomTag($request, $pageMetaTag->id);

            $pageMetaTag->update($validated);

            return [
                'success' => true,
                'data' => $pageMetaTag,
                'message' => 'Meta tag updated successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function destroyCustomTag(PageMetaTag $pageMetaTag)
    {
        try {
            $pageMetaTag->delete();

            return [
                'success' => true,
                'message' => 'Meta tag deleted successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    private function validatedCustomTag(Request $request, ?int $ignoreId = null): array
    {
        return $request->validate([
            'page' => ['required', 'string', 'max:255'],
            'attribute' => ['required', Rule::in(['name', 'property'])],
            'meta_key' => [
                'required', 'string', 'max:255',
                Rule::unique('page_meta_tags')
                    ->where(fn ($query) => $query->where('page', $request->page)->where('attribute', $request->attribute))
                    ->ignore($ignoreId),
            ],
            'content' => ['required', 'string', 'max:1000'],
        ]);
    }

    public function upsertOgImage(Request $request)
    {
        try {
            $request->validate([
                'page' => ['required', 'string', 'max:255'],
                'image' => ['required', 'file', 'mimes:jpeg,png,jpg,gif,webp', 'max:8192'],
            ]);

            $existing = PageMeta::where('page', $request->page)->first();

            $cloudinary = new Cloudinary;
            $uploaded = $cloudinary->uploadImageWithId(
                $request->file('image'),
                subfolder: 'page-meta/'.$request->page,
            );

            $meta = PageMeta::updateOrCreate(
                ['page' => $request->page],
                [
                    'og_image' => $uploaded['file'],
                    'og_image_public_id' => $uploaded['id'],
                ]
            );

            // Best-effort cleanup — the new image is already saved, so a
            // failure here shouldn't fail the request.
            if ($existing?->og_image_public_id) {
                $cloudinary->deleteImage($existing->og_image_public_id);
            }

            return [
                'success' => true,
                'data' => $meta,
                'message' => 'OG image updated successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
