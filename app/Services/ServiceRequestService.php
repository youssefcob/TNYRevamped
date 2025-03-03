<?php

namespace App\Services;

use App\Models\ServiceRequest;
use Illuminate\Validation\ValidationException;

class ServiceRequestService
{
    // Your service logic goes here
    public function getServiceRequests($request)
    {
        try {
            $id = $request->input('id');
            if ($id) {
                $request->validate(['id' => 'required|integer|exists:service_requests,id']);
            }
            $data = $id ? ServiceRequest::find($id) : ServiceRequest::with('service')->paginate(10);
            return ['success' => true, 'data' => $data];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function updateServiceRequestStatus($request)
    {
        try {
            $request->validate([
                'id' => 'required|integer|exists:service_requests,id',
                'status' => 'required|string|in:pending,approved,rejected'
            ]);
            $serviceRequest = ServiceRequest::find($request->id);
            $serviceRequest->update($request->only(['status']));
            return ['success' => true, 'data' => $serviceRequest];
        } catch (ValidationException $e) {
            return ['code' => 422, 'success' => false, 'message' => 'Validation error', 'errors' => $e->errors()];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function deleteServiceRequest($request)
    {
        try {
            $request->validate(['id' => 'required|integer|exists:service_requests,id']);
            $serviceRequest = ServiceRequest::find($request->id);
            $serviceRequest->delete();
            return ['success' => true, 'message' => 'Service request deleted successfully', 'data' => $serviceRequest];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => 'Could not delete service request', 'error' => $e->getMessage()];
        }
    }

}
