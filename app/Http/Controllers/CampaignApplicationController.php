<?php

namespace App\Http\Controllers;

use App\Services\CampaignApplicationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CampaignApplicationController extends Controller
{
    protected CampaignApplicationService $service;

    public function __construct(CampaignApplicationService $service)
    {
        $this->service = $service;
    }

    /**
     * Submit a lead/application from the campaign page.
     */
    public function submit(Request $request): JsonResponse
    {
        $response = $this->service->createCampaignApplication($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    /**
     * Get campaign applications (admin / internal).
     */
    public function index(Request $request): JsonResponse
    {
        $response = $this->service->getCampaignApplications($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    /**
     * Update application status.
     */
    public function updateStatus(Request $request): JsonResponse
    {
        $response = $this->service->updateStatus($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    /**
     * Delete campaign application.
     */
    public function destroy(Request $request): JsonResponse
    {
        $response = $this->service->delete($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }
}

