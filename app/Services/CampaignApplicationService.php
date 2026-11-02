<?php

namespace App\Services;

use App\Models\CampaignApplication;
use App\TableFiltersHelperFunctions;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CampaignApplicationService
{
    use TableFiltersHelperFunctions;

    /**
     * Store a newly created campaign application.
     */
    public function createCampaignApplication(Request $request): array
    {
        try {
            $validated = $request->validate([
                'role' => 'required|string|max:255',
                'firstName' => 'required_without:first_name|string|max:255',
                'lastName' => 'required_without:last_name|string|max:255',
                'first_name' => 'sometimes|string|max:255',
                'last_name' => 'sometimes|string|max:255',
                'email' => 'required|email|max:255',
                'phone' => 'required|string|max:50',
                'workplaces' => 'required|array|min:1',
                'workplaces.*' => 'string|max:255',
                'schedule' => 'required|string|max:255',
                'experience' => 'required|string|max:255',
                'campaign_source' => 'nullable|string|max:255',
            ]);

            $application = CampaignApplication::create([
                'role' => $validated['role'],
                'first_name' => $validated['first_name'] ?? $validated['firstName'],
                'last_name' => $validated['last_name'] ?? $validated['lastName'],
                'email' => $validated['email'],
                'phone' => $validated['phone'],
                'workplaces' => $validated['workplaces'],
                'schedule' => $validated['schedule'],
                'experience' => $validated['experience'],
                'campaign_source' => $validated['campaign_source'] ?? null,
                'status' => 'pending',
            ]);

            return [
                'success' => true,
                'data' => $application,
                'message' => 'Campaign application submitted successfully',
            ];
        } catch (ValidationException $e) {
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ];
        } catch (Exception $e) {
            return [
                'code' => 500,
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * List / filter campaign applications (for admin use).
     */
    public function getCampaignApplications(Request $request): array
    {
        try {
            $id = $request->input('id');
            if ($id) {
                $application = CampaignApplication::find($id);
                if (!$application) {
                    return [
                        'code' => 404,
                        'success' => false,
                        'message' => 'Campaign application not found',
                    ];
                }
                return [
                    'success' => true,
                    'data' => $application,
                ];
            }

            $query = CampaignApplication::query()->orderBy('created_at', 'desc');

            if ($request->filled('status')) {
                $filtered = $this->statusFilter($query, $request->input('status'));
                if (!$filtered['success']) return $filtered;
                $query = $filtered['data'];
            }

            if ($request->filled('start_date')) {
                $filtered = $this->startDateFilter($query, $request->input('start_date'));
                if (!$filtered['success']) return $filtered;
                $query = $filtered['data'];
            }

            if ($request->filled('end_date')) {
                $filtered = $this->endDateFilter($query, $request->input('end_date'));
                if (!$filtered['success']) return $filtered;
                $query = $filtered['data'];
            }

            $perPage = (int) $request->input('per_page', 15);
            $data = $query->paginate($perPage);

            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (Exception $e) {
            return [
                'code' => 500,
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * Update campaign application status.
     */
    public function updateStatus(Request $request): array
    {
        try {
            $validated = $request->validate([
                'id' => 'required|integer|exists:campaign_applications,id',
                'status' => 'required|string|max:50',
            ]);

            $application = CampaignApplication::findOrFail($validated['id']);
            $application->status = $validated['status'];
            $application->save();

            return [
                'success' => true,
                'data' => $application,
                'message' => 'Status updated successfully',
            ];
        } catch (ValidationException $e) {
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ];
        } catch (Exception $e) {
            return [
                'code' => 500,
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * Delete campaign application.
     */
    public function delete(Request $request): array
    {
        try {
            $validated = $request->validate([
                'id' => 'required|integer|exists:campaign_applications,id',
            ]);

            $application = CampaignApplication::findOrFail($validated['id']);
            $application->delete();

            return [
                'success' => true,
                'message' => 'Campaign application deleted successfully',
            ];
        } catch (ValidationException $e) {
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ];
        } catch (Exception $e) {
            return [
                'code' => 500,
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}

