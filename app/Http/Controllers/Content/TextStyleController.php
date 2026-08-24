<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Models\TextStyle;
use App\Services\Content\TextStyleService;
use Illuminate\Http\Request;

class TextStyleController extends Controller
{
    protected $textStyles;

    public function __construct(TextStyleService $textStyles)
    {
        $this->textStyles = $textStyles;
    }

    public function index()
    {
        return inertia('Admin/TextStyles', [
            'styles' => TextStyleService::all(),
        ]);
    }

    public function store(Request $request)
    {
        $response = $this->textStyles->store($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function update(Request $request, TextStyle $textStyle)
    {
        $response = $this->textStyles->update($request, $textStyle);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function destroy(TextStyle $textStyle)
    {
        $response = $this->textStyles->destroy($textStyle);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
