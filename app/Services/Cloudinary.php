<?php

namespace App\Services;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary as BaseCloudinary;
use Illuminate\Http\JsonResponse;

class Cloudinary
{
    const BASE_FOLDER = 'tny';

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
     * Uploads an image to Cloudinary and returns the secure URL of the uploaded image and id of the image.
     *
     * @param  string|null  $subfolder  Organizes the upload under `{BASE_FOLDER}/{subfolder}`.
     * @param  string|null  $name  Used as the Cloudinary public_id, if provided.
     * @param  array  $transformations  Merged with the default `quality: auto`.
     * @return array The secure URL of the uploaded image, public_id on Cloudinary.
     */
    public function uploadImageWithId($image, ?string $subfolder = null, ?string $name = null, array $transformations = []): array
    {
        $imagePath = $image->getRealPath();

        $options = [
            'folder' => self::BASE_FOLDER.($subfolder ? '/'.$this->sanitizeFolderPath($subfolder) : ''),
            'transformation' => array_merge(['quality' => 'auto'], $transformations),
            'format' => 'webp',
        ];

        if ($name) {
            $options['public_id'] = $this->sanitizeFolderName($name);
        }

        $uploadedFile = BaseCloudinary::upload($imagePath, $options);
        $url = $uploadedFile->getSecurePath();
        $id = $uploadedFile->getPublicId();

        return [
            'file' => $url,
            'id' => $id,
        ];
    }

    /**
     * Strips characters that aren't safe in a single Cloudinary folder/public_id
     * segment (including `/`) and collapses/trims the result.
     */
    public function sanitizeFolderName(string $name): string
    {
        $sanitized = preg_replace('/[&\s\/\\\\:*?"<>|]+/', '_', $name);

        return trim($sanitized, '_');
    }

    /**
     * Same as sanitizeFolderName(), but preserves `/` as a path separator so a
     * multi-segment subfolder (e.g. `page-content/about`) keeps its hierarchy
     * instead of collapsing into one segment.
     */
    public function sanitizeFolderPath(string $path): string
    {
        return collect(explode('/', $path))
            ->map(fn ($segment) => $this->sanitizeFolderName($segment))
            ->filter()
            ->implode('/');
    }

    /**
     * Deletes an image from Cloudinary.
     *
     * @param  string  $imagePath  The path of the image to be deleted.
     * @return JsonResponse A JSON response indicating success or failure.
     *
     * @throws \Exception If an error occurs during the deletion process.
     */
    public function deleteImage($imagePath)
    {
        try {
            BaseCloudinary::destroy($imagePath);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'no image with this id',
            ]);
        }
        // BaseCloudinary::destroy($imagePath);
    }

    /**
     * Updates an image by deleting the old image and uploading a new one.
     *
     * @param  string  $oldImagePath  The path of the old image to be deleted.
     * @param  mixed  $newImage  The new image to be uploaded.
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

    /**
     * Updates an image by deleting the old image and uploading a new one.
     *
     * @param  string  $oldImagePath  The path of the old image to be deleted.
     * @param  mixed  $newImage  The new image to be uploaded.
     * @return string The URL of the newly uploaded image.
     */
    public function updateImageWithId($oldImagePath, $newImage)
    {
        // Delete the old image
        $this->deleteImage($oldImagePath);

        $uploadedFileUrl = $this->uploadImageWithId($newImage);
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
