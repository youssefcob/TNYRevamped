<?php

namespace App\Http\Controllers;

use App\Services\AdminManagementService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminManagementController extends Controller
{
    protected $service;

    public function __construct(AdminManagementService $service)
    {
        $this->service = $service;
    }

    public function getAdmins()
    {
        $response = $this->service->getAdmins();
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function createAdmin(Request $request)
    {
        $response = $this->service->createAdmin($request);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function updateAdmin(Request $request, $id)
    {
        $response = $this->service->updateAdmin($id, $request);
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }

    public function deleteAdmin($id)
    {
        $response = $this->service->deleteAdmin($id, Auth::guard('api')->id());
        if (! $response['success']) {
            return $this->sendError($response);
        }

        return $this->sendResponse($response);
    }
}
