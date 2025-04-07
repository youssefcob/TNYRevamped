<?php

namespace App\Services;

use App\Models\Service;
use App\Models\ServiceRequest;
use App\TableFiltersHelperFunctions;
use Illuminate\Validation\ValidationException;

class ServiceRequestService
{
    use TableFiltersHelperFunctions;
    // Your service logic goes here
    public function getServiceRequests($request): array
    {
        try {
            $submissionDate = $request->input('submission_date');
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $status = $request->input('status');
            $id = $request->input('id');
            $request->validate([
                'id' => 'sometimes|integer|exists:service_requests,id',
            ]);


            if ($id) {
                $serviceRequest = ServiceRequest::with(['service' => function ($query) {
                    $query->select('id', 'title');
                }])->find($id);
            } else {
                $serviceRequest = ServiceRequest::with(['service' => function ($query) {
                    $query->select('id', 'title');
                }]);
                // if ($submissionDate) {
                //     $filteredServiceRequests = $this->submissionDateFilter($serviceRequest, $submissionDate, 'service');
                //     if (!$filteredServiceRequests['success']) {
                //         return $filteredServiceRequests;
                //     }
                //     $serviceRequest = $filteredServiceRequests['data'];
                // }
                if($startDate){
                    $filteredServiceRequests = $this->startDateFilter($serviceRequest, $startDate);
                    if (!$filteredServiceRequests['success']) {
                        return $filteredServiceRequests;
                    }
                    $serviceRequest = $filteredServiceRequests['data'];
                }
                if($endDate){
                    $filteredServiceRequests = $this->endDateFilter($serviceRequest, $endDate);
                    if (!$filteredServiceRequests['success']) {
                        return $filteredServiceRequests;
                    }
                    $serviceRequest = $filteredServiceRequests['data'];
                }
                if($status){
                    $filteredServiceRequests = $this->statusFilter($serviceRequest, $status);
                    if (!$filteredServiceRequests['success']) {
                        return $filteredServiceRequests;
                    }
                    $serviceRequest = $filteredServiceRequests['data'];
                }
               
                $serviceRequest = $serviceRequest->paginate(10);
            }

            return [
                'success' => true,
                'data' => $serviceRequest,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
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
            return ['success' => true, 'data' => $serviceRequest, 'message' => 'Service requests updated'];
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


    public function createRequest($request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'address' => 'required|string|max:255',
                'phone' => 'required|string|max:255',
                'company_name' => 'required|string|max:255',
                'requirements' => 'required|string|max:255',
                'service' => 'required|string',
            ]);

            $service = Service::where('title', $request->service)->first();
            if (!$service) {
                return [
                    'success' => false,
                    'message' => 'Position not found'
                ];
            }

            $serviceRequest = ServiceRequest::create([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'phone' => $request->phone,
                'company_name' => $request->company_name,
                'requirements' => $request->requirements,
                'service_id' => $service->id,
                'status' => 'pending',

            ]);

            return [
                'success' => true,
                'data' => $serviceRequest,
                'message' => 'Request created successfully'
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors() // This ensures errors are an array
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
