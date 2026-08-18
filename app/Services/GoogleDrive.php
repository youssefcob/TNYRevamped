<?php

namespace App\Services;

use Google\Client;
use Google\Service\Drive;
use Google\Service\Exception as GoogleException;

class GoogleDrive
{
    private $client;
    private $service;

    /**
     * GoogleDrive constructor.
     * Initializes the GoogleDrive client and service.
     */
    public function __construct()
    {
        // Set the Google application credentials path
        $credentialsPath = base_path(env('GOOGLE_APPLICATION_CREDENTIALS'));

        // On platforms with an ephemeral filesystem (e.g. Heroku), the credentials
        // file won't exist on disk. Materialize it from a base64 config var instead.
        if (!file_exists($credentialsPath) && env('GOOGLE_CREDENTIALS_BASE64')) {
            $credentialsPath = storage_path('app/tny-service-account.json');
            file_put_contents($credentialsPath, base64_decode(env('GOOGLE_CREDENTIALS_BASE64')));
        }

        putenv('GOOGLE_APPLICATION_CREDENTIALS=' . $credentialsPath);

        // Create a new Google client
        $this->client = new Client();
        $this->client->useApplicationDefaultCredentials();

        // Add the Drive scope to the client
        $this->client->addScope(Drive::DRIVE);

        // Create a new Drive service using the client
        $this->service = new Drive($this->client);
    }

    /**
     * Uploads an image file to Google Drive.
     *
     * @param $image The image file to upload.
     * @return string The URL of the uploaded image.
     */
    public function upload($file)
    {
        // Create metadata for the file file
        $fileMetadata = new Drive\DriveFile([
            'name' => $file->getClientOriginalName()
        ]);

        // Read the content of the file file
        $content = file_get_contents($file->getRealPath());

        $mimeType = $file->getClientMimeType();
        // var_dump($mimeType);

        // Upload the file file to Google Drive
        $file = $this->service->files->create($fileMetadata, [
            'data' => $content,
            'mimeType' => $mimeType,
            'uploadType' => 'multipart',
            'fields' => 'id, webViewLink'
        ]);

        // Set permissions for the uploaded file file
        $permission = new Drive\Permission([
            'type' => 'anyone',
            'role' => 'reader'
        ]);
        // $permission->setRole('reader');
        // $permission->setType('anyone');
        $this->service->permissions->create($file->id, $permission);

        // Return the URL of the uploaded file
        // return $file->id;
        return $file->webViewLink;

        // $file = $this->service->files->get($fileId, ['fields' => 'webContentLink']);
        // $webContentLink = $file->webContentLink;
        // echo "Web Content Link: {$webContentLink}";
        // return 'https://drive.google.com/uc?export=view&id=' . $image->id;

    }
    /**
     * Uploads an image file to Google Drive.
     *
     * @param $image The image file to upload.
     * @return array The URL of the uploaded image, id of the file.
     */
    public function uploadWithId($file)
    {
        // Create metadata for the file file
        $fileMetadata = new Drive\DriveFile([
            'name' => $file->getClientOriginalName()
        ]);

        // Read the content of the file file
        $content = file_get_contents($file->getRealPath());

        $mimeType = $file->getClientMimeType();
        // var_dump($mimeType);

        // Upload the file file to Google Drive
        $file = $this->service->files->create($fileMetadata, [
            'data' => $content,
            'mimeType' => $mimeType,
            'uploadType' => 'multipart',
            'fields' => 'id, webViewLink'
        ]);

        // Set permissions for the uploaded file file
        $permission = new Drive\Permission([
            'type' => 'anyone',
            'role' => 'reader'
        ]);
        // $permission->setRole('reader');
        // $permission->setType('anyone');
        $this->service->permissions->create($file->id, $permission);

        // Return the URL of the uploaded file
        // return $file->id;
        return [
            'file' => $file->webViewLink,
            'id' => $file->id
        ];

        // $file = $this->service->files->get($fileId, ['fields' => 'webContentLink']);
        // $webContentLink = $file->webContentLink;
        // echo "Web Content Link: {$webContentLink}";
        // return 'https://drive.google.com/uc?export=view&id=' . $image->id;

    }



    /**
     * Uploads a video file to Google Drive.
     *
     * @param $video The video file to upload.
     * @return string The ID of the uploaded video.
     */
    public function uploadVideo($video)
    {
        // Create metadata for the video file
        $videoMetadata = new Drive\DriveFile([
            'name' => $video->getClientOriginalName()
        ]);

        // Read the content of the video file
        $content = file_get_contents($video->getRealPath());

        // Upload the video file to Google Drive
        $video = $this->service->files->create($videoMetadata, [
            'data' => $content,
            'mimeType' => 'video/mp4',
            'uploadType' => 'multipart'
        ]);

        // Set permissions for the uploaded video file
        $permission = new Drive\Permission();
        $permission->setRole('reader');
        $permission->setType('anyone');
        $this->service->permissions->create($video->id, $permission);

        // Return the ID of the uploaded video
        return $video->id;
        // return 'https://drive.google.com/file/d/' . $video->id . '/preview';
    }

    public function deleteFile($fileId)
    {
        return $this->service->files->delete($fileId);
    }

    public function updateFile($fileId, $file)
    {
        try {
            $fileMetadata = new Drive\DriveFile([
                'name' => $file->getClientOriginalName()
            ]);

            $content = file_get_contents($file->getRealPath());
            $mimeType = $file->getClientMimeType();
            $file = $this->service->files->update($fileId, $fileMetadata, [
                'data' => $content,
                'mimeType' => $mimeType,
                'uploadType' => 'multipart'
            ]);
        } catch (GoogleException $e) {
            throw $e;
        }
    }
    public function updateFileWithResponse($fileId, $file)
    {
        try {
            $fileMetadata = new Drive\DriveFile([
                'name' => $file->getClientOriginalName()
            ]);

            $content = file_get_contents($file->getRealPath());
            $mimeType = $file->getClientMimeType();
            $file = $this->service->files->update($fileId, $fileMetadata, [
                'data' => $content,
                'mimeType' => $mimeType,
                'uploadType' => 'multipart',
                'fields' => 'id, webViewLink'
            ]);
            return [
                'file' => $file->webViewLink,
                'id' => $file->id
            ];
        } catch (GoogleException $e) {
            throw $e;
        }
    }


    public function exists($fileId)
    {
        try {
            $this->service->files->get($fileId);
            // $this->service->list
            return true; // File exists
        } catch (GoogleException $e) {
            // Handle exceptions, potentially log them
            if ($e->getCode() == 404) {
                // File not found
                return false;
            } else {
                // Other exceptions
                throw $e;
            }
        }
    }
    public function listImages()
    {
        try {
            $query = "mimeType contains 'image/'";
            $optParams = [
                'q' => $query,
                'fields' => 'files(id, name, webViewLink, mimeType)',
            ];

            $results = $this->service->files->listFiles($optParams);

            $images = [];
            foreach ($results->getFiles() as $file) {
                $images[] = [
                    'id' => $file->getId(),
                    'name' => $file->getName(),
                    'url' => $file->getWebViewLink(),
                    'mimeType' => $file->getMimeType(),
                ];
            }

            return $images;
        } catch (GoogleException $e) {
            throw $e;
        }
    }
}
