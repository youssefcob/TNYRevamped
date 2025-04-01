<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Position;

class ApplicationsService
{
    // Your service logic goes here
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
            $id = $request->input('id');
            if ($id) {
                $request->validate([
                    'id' => 'required|integer|exists:applications,id',
                ]);
            }
            
            if ($id) {
                $application = Application::with(['position' => function($query) {
                    $query->select('id', 'title');
                }])->find($id);
            } else {
                $application = Application::with(['position' => function($query) {
                    $query->select('id', 'title');
                }])->paginate(10);
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
                'status' => 'required|in:pending,approved,rejected',
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
 $link = $drive->upload($request->resume);
            $application = Application::create([
                'position_id' => $position->id,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'resume' => $link,
                'message' => $request->message,
                'zip' => $request->zip,
            ]);

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
