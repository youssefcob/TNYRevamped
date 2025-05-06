<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Position;
use App\TableFiltersHelperFunctions;
use App\Traits\SendsEmail;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ApplicationsService
{
    use TableFiltersHelperFunctions, SendsEmail;
    // Your service logic goes here

    /**
     * Filter applications by submission date
     * 
     * @param string $date Date in Y-m-d format
     * @return array Filtered applications or error message
     */
    
    /**
     * Retrieves all applications from the database or a specific application.
     *
     * @param \Illuminate\Http\Request $request Contains 'page' and 'per_page' parameters.
     * @param int $id The id of the application to retrieve.
     * @return array Applications data, pagination information, or error messages.
     * @throws \Exception
     */
    public function getApplications($request): array
    {
        try {
            // Log::info("message");
            // echo "message";
            // dd('ss');
            $submissionDate = $request->input('submission_date');
            $status = $request->input('status');
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $id = $request->input('id');
            $request->validate([
                'id' => 'sometimes|integer|exists:applications,id',
            ]);
            
            if ($id) {
                $application = Application::with(['position' => function ($query) {
                    $query->select('id', 'title');
                }])->find($id);
            } else {
                $application = Application::with(['position' => function ($query) {
                    $query->select('id', 'title');
                }]);
                // if ($submissionDate) {

                //     $filteredApplications = $this->submissionDateFilter($application, $submissionDate, 'position');
                //     if (!$filteredApplications['success']) {
                //         return $filteredApplications;
                //     }
                //     $application = $filteredApplications['data'];
                    
                // }
                if($startDate){
                    $filteredApplications = $this->startDateFilter($application, $startDate);
                    if (!$filteredApplications['success']) {
                        return $filteredApplications;
                    }
                    $application = $filteredApplications['data'];
                }
                if($endDate){
                    $filteredApplications = $this->endDateFilter($application, $endDate);
                    if (!$filteredApplications['success']) {
                        return $filteredApplications;
                    }
                    $application = $filteredApplications['data'];
                }
                if ($status) {
                    $filteredApplications = $this->statusFilter($application, $status);
                    if (!$filteredApplications['success']) {
                        return $filteredApplications;
                    }
                    $application = $filteredApplications['data'];
                }
                
                $application = $application->paginate(10);
            }

            return [
                'success' => true,
                'data' => $application,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
    /**
     * Updates the status of an application in the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id' and 'status' parameters.
     * @return array Application data, or error messages.
     * @throws \Exception
     * @throws \ValidationException
     */
    public function updateApplicationStatus($request): array
    {
        try {
            $id = $request->input('id');
            $status = $request->input('status');

            $request->validate([
                'id' => 'required|integer|exists:applications,id',
                'status' => 'required|in:Hired,Rejected,Pending,Needs Assignment,Missing Documents,Missing Preferences,In Training,Interview',
            ]);

            $application = Application::find($id);

            $application->status = $status;
            $application->save();

            return [
                'success' => true,
                'data' => $application,
                'message' => 'Application status updated successfully'
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
    /**
     * Deletes an application from the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id' parameter.
     * @return array Application data, or error messages.
     * @throws \Exception
     * @throws \Illuminate\Validation\ValidationException
     * */
    public function deleteApplication($request): array
    {
        try {
            $id = $request->input('id');

            $request->validate([
                'id' => 'required|integer|exists:applications,id',
            ]);

            $application = Application::find($id);
            $application->delete();

            return [
                'success' => true,
                'data' => $application,
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

    /**
     * Creates a new application in the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'position_id', 'name', 'email', 'phone', 'resume', 'cover_letter' parameters.
     * @return array Application data, or error messages.
     * @throws \Exception
     * @throws \Illuminate\Validation\ValidationException
     */

    public function createApplication($request)
    {
        try {
            // We could make the FE sends position id, and validate on it like thie 
            // 'id' => 'required|integer|exists:applications,id',
            $request->validate([
                'position' => 'required|string|max:255',
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'phone' => 'required|string|max:255',
                'resume' => 'required|file|mimes:pdf,doc,docx|max:2048',
                'message' => 'required|string',
                'zip' => 'required|string|max:255',
            ]);

            $position = Position::where('title', $request->position)->first();
            if (!$position) {
                return [
                    'success' => false,
                    'message' => 'Position not found'
                ];
            }

            $drive = new GoogleDrive;
            // dd($request->resue)
            $link = $drive->upload($request->resume);
            $application = Application::create([
                'position_id' => $position->id,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'resume' => $link,
                // 'resume' => 'nth',
                'message' => $request->message,
                'zip' => $request->zip,
            ]);
            $application->position = $position->title;
            $application->address = $position->address;
            // dd($application);

            $this->sendApplicationSubmittedEmail($request->email, $application);

            return [
                'success' => true,
                'data' => $application,
                'message' => 'Application created successfully'
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
