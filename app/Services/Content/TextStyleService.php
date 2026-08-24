<?php

namespace App\Services\Content;

use App\Models\TextStyle;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TextStyleService
{
    public static function all()
    {
        return TextStyle::orderBy('name')->get();
    }

    public function store(Request $request)
    {
        try {
            $validated = $this->validated($request);

            $style = TextStyle::create($validated);

            return [
                'success' => true,
                'data' => $style,
                'message' => 'Text style created successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function update(Request $request, TextStyle $textStyle)
    {
        try {
            $validated = $this->validated($request, $textStyle->id);

            $textStyle->update($validated);

            return [
                'success' => true,
                'data' => $textStyle,
                'message' => 'Text style updated successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function destroy(TextStyle $textStyle)
    {
        try {
            $textStyle->delete();

            return [
                'success' => true,
                'message' => 'Text style deleted successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    private function validated(Request $request, ?int $ignoreId = null): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:100', Rule::unique('text_styles', 'name')->ignore($ignoreId)],
            'font_family' => ['required', Rule::in(['heading', 'body', 'switzer', 'inherit'])],
            'font_weight' => ['required', Rule::in([400, 500, 600, 700])],
            'italic' => ['boolean'],
            'underline' => ['boolean'],
            'color' => ['nullable', 'string', 'regex:/^#[0-9a-fA-F]{6}$/'],
            'min_font_size' => ['required', 'numeric', 'min:0.5', 'max:6'],
            'max_font_size' => ['required', 'numeric', 'min:0.5', 'max:6', 'gte:min_font_size'],
            'font_size_vw' => ['required', 'numeric', 'min:0', 'max:10'],
            'line_height' => ['nullable', 'numeric', 'min:0.8', 'max:3'],
        ]);
    }
}
