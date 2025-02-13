<?php

namespace App\Services;

use App\Models\Application;

class ApplicationsService
{
    // Your service logic goes here
    /**
     * Retrieves all applications from the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'page' and 'per_page' parameters.
     * @return array Applications data, pagination information, or error messages.
     * @throws \Exception
     */
    public function getApplications($request): array
    {
        try {
            $id = $request->input('id');
            $data = $id ? Application::find($id) : Application::paginate(10);
            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
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
                'error' => $e->getMessage()
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
                'error' => $e->getMessage()
            ];
        }
    }
}
