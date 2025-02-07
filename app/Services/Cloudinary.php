<?php

namespace App\Services;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary as BaseCloudinary;
use Illuminate\Http\JsonResponse;

class Cloudinary
{



    /**
     * Uploads an image to Cloudinary and returns the secure URL of the uploaded image.
     *
     * @return string The secure URL of the uploaded image.
     */
    public function uploadImage($image): string
    {
        $imagePath = $image->getRealPath();
        $uploadedFileUrl = BaseCloudinary::upload($imagePath)->getSecurePath();
        return $uploadedFileUrl;
    }


    /**
     * Deletes an image from Cloudinary.
     *
     * @param string $imagePath The path of the image to be deleted.
     * @return \Illuminate\Http\JsonResponse A JSON response indicating success or failure.
     * @throws \Exception If an error occurs during the deletion process.
     */

    public function deleteImage($imagePath)
    {
        try {
            BaseCloudinary::destroy($imagePath);
        } catch (\Exception $e) {
            return response()->json([
                "error" => "no image with this id"
            ]);
        }
        // BaseCloudinary::destroy($imagePath);
    }

    /**
     * Updates an image by deleting the old image and uploading a new one.
     *
     * @param string $oldImagePath The path of the old image to be deleted.
     * @param mixed $newImage The new image to be uploaded.
     * @return string The URL of the newly uploaded image.
     */

    public function updateImage($oldImagePath, $newImage)
    {
        // Delete the old image
        $this->deleteImage($oldImagePath);

        $uploadedFileUrl = $this->uploadImage($newImage);
        // Upload the new image

        return $uploadedFileUrl;
    }

    // public function exists($imagePath)
    // {
    //     $exists = BaseCloudinary::exists($imagePath);
    //     return $exists;
    // }




    /**
     * doesn't work :P
     */

    public function uploadFile($file)
    {
        $filePath = $file->getRealPath();
        $fileExtension = $file->getClientOriginalExtension();
        $resourceType = in_array($fileExtension, ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'svg', 'webp']) ? 'image' : 'auto';

        $uploadOptions = ['resource_type' => $resourceType];

        // If the file is a PDF, add transformation options to generate a preview
        if ($fileExtension === 'pdf') {
            $uploadOptions['pages'] = true; // Generate a preview for the first page
        }


        $uploadedFile = BaseCloudinary::upload($filePath, $uploadOptions);
        $uploadedFileUrl = $uploadedFile->getSecurePath();
        return $uploadedFileUrl;
    }
}
