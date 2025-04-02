<?php

namespace App\Services;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SystemService
{

    private $googleDrive;
    private $cloudinary;

    public function __construct()
    {
        $this->googleDrive = new GoogleDrive();
        $this->cloudinary = new Cloudinary();
    }


    /**
     * 
     */
    // public function listDriveImages(){

    // }
    /**
     * Uploads an image to Google Drive and returns the image URL.
     *
     * @param UploadedFile $image
     * @return string|null
     */
    private function uploadImageToDrive(UploadedFile $image): array
    {
        try {
            // $imageUrl = $this->googleDrive->uploadWithId($image);
            $imageUrl = $this->cloudinary->uploadImageWithId($image);
            // dd($imageUrl);

            return [
                'success' => true,
                'message' => 'Image uploaded successfully',
                'data' => [
                    'image' => $imageUrl
                ]
            ];
        } catch (\Exception $e) {
            Log::error('Google Drive upload failed: ' . $e->getMessage());

            return [
                'success' => false,
                'message' => 'Image upload failed',
                'data' => []
            ];
        }
    }

    private function updateImageOnCloud(string $fileId, UploadedFile $image): array
    {
        try {
            // $updateResponse = $this->googleDrive->updateFileWithResponse($fileId, $image);
            $updateResponse = $this->cloudinary->updateImageWithId($fileId, $image);

            return [
                'success' => true,
                'message' => 'Image updated successfully',
                'data' => [
                    'image' =>$updateResponse
                ]
            ];
        } catch (\Exception $e) {
            Log::error('Google Drive image update failed: ' . $e->getMessage());

            return [
                'success' => false,
                'message' => 'Image update failed',
                'data' => []
            ];
        }
    }
    /**
     * Retrieves all services from the database or a specific service by ID.
     *
     * @param \Illuminate\Http\Request $request Contains 'id', 'page', and 'per_page' parameters.
     * @return array Services data, pagination information, or error messages.
     */
    public function getSystemServices(Request $request): array
    {
        try {
            $id = $request->input('id');

            if ($id) {
                $request->validate([
                    'id' => 'required|integer|exists:services,id',
                ]);
            }

            $data = $id ? Service::find($id) : Service::all();
            // return['success'=>false, 'message'=>'sdsd'];
            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Creates a new service in the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'title', 'description', 'image', 'available', and 'onMainPage' parameters.
     * @return array Service data, or error messages.
     */
    public function createSystemService(Request $request): array
    {
        try {
            DB::beginTransaction();

            // $systemService = new SystemService();
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Ensuring valid image input
                'available' => 'required|boolean',
                'onMainPage' => 'required|boolean',
            ]);

            // Upload image if provided
            $imageUrl = null;
            $imageCloudId = null;
            if ($request->hasFile('image')) {
                $uploadResponse = $this->uploadImageToDrive($request->file('image'));
                // dd($uploadResponse);
                if (!$uploadResponse['success']) {
                    return [
                        'success' => false,
                        'message' => 'Image upload failed',
                    ];
                }
                // dd($uploadResponse);

                $imageUrl = $uploadResponse['data']['image']['file'] ?? null;
                $imageCloudId = $uploadResponse['data']['image']['id'] ?? null;
            }

            // Add image URL to validated data
            $validated['image'] = $imageUrl;
            $validated['imageCloudId'] = $imageCloudId;

            // Create the service
            $service = Service::create($validated);

            DB::commit();

            return [
                'success' => true,
                'data' => $service,
                'message' => 'Service created successfully'
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Updates an existing service in the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id', 'title', 'description', 'image', 'available', and 'onMainPage' parameters.
     * @return array Updated service data, or error messages.
     */
    public function updateSystemService(Request $request): array
    {
        try {
            // dd($request->all());
            DB::beginTransaction();
            // Validate request data, including required ID
            $validated = $request->validate([
                'id' => 'required|exists:services,id',
                'title' => 'sometimes|required|string|max:255',
                'description' => 'sometimes|required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048', // Optional image update
                'available' => 'sometimes|required|boolean',
                'onMainPage' => 'sometimes|required|boolean',
            ]);

            // dd('swww');
            // Find the service by ID
            $service = Service::findOrFail($validated['id']);

            // Handle image upload if a new image is provided
            // dd('s');
            if ($request->hasFile('image')) {
                $uploadResponse = $this->updateImageOnCloud($service->imageCloudId, $request->file('image'));
                // dd($uploadResponse);
                if (!$uploadResponse['success']) {
                    return [
                        'success' => false,
                        'message' => 'Image upload failed',
                    ];
                }
                // dd($uploadResponse);

                $validated['image'] = $uploadResponse['data']['image']['file'] ?? null;
                $validated['imageCloudId'] = $uploadResponse['data']['image']['id'] ?? null;
            }
            // dd($validated);
            // Update the service
            $service->update($validated);

            DB::commit();

            return [
                'success' => true,
                'data' => $service,
                'message' => 'Service updated successfully'
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Deletes a service from the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id' parameter.
     * @return array Deletion status or error messages.
     */
    public function deleteSystemService(Request $request): array
    {
        try {
            $id = $request->input('id');
            DB::beginTransaction();
            $request->validate([
                'id' => 'required|integer|exists:services,id',
            ]);

            $service = Service::find($id);
            $deletedImage = $this->cloudinary->deleteImage($service->image);
            // dd($deletedImage);
            $service->delete();
            // return['success'=>false , 'message'=>'asdsad'];
            DB::commit();
            return [
                'success' => true,
                'message' => 'Service deleted successfully',
                'data' => $service,
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
            DB::rollBack();
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
            DB::rollBack();
        }
    }
}
