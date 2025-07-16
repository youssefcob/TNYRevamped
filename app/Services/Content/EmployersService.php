<?php

namespace App\Services\Content;

use App\Models\Employer;
use App\Services\Cloudinary;
use App\TableFiltersHelperFunctions;
use Exception;
use Illuminate\Http\Request;

class EmployersService
{
    use TableFiltersHelperFunctions;
    const PAGINATION_LIMIT = 10;
    public static function get()
    {
        return Employer::all();
    }
    public  function getWithFormattedResponse(Request $request, $perPage = Self::PAGINATION_LIMIT)
    {
        try {
            //code...
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            // $status = $request->input('status');
            $query = Employer::with('user');
            if($startDate){
                $filteredEmployers = $this->startDateFilter($query, $startDate);
                if (!$filteredEmployers['success']) {
                    return $filteredEmployers;
                }
                $query = $filteredEmployers['data'];
            }
            if($endDate){
                $filteredEmployers = $this->endDateFilter($query, $endDate);
                if (!$filteredEmployers['success']) {
                    return $filteredEmployers;
                }
                $query = $filteredEmployers['data'];
            }
            // if($status){
            //     $filteredEmployers = $this->statusFilter($query, $status);
            //     if (!$filteredEmployers['success']) {
            //         return $filteredEmployers;
            //     }
            //     $query = $filteredEmployers['data'];
            // }
            $employers = $query->paginate($perPage);
            // $employers = Employer::with('user')->paginate(self::PAGINATION_LIMIT);

            return [
                'success' => true,
                'data' => $employers,
                'message' => 'News fetched successfully',
            ];
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function post($request)
    {
        try {

            $request->merge([
                'onMainPage' => filter_var($request->onMainPage, FILTER_VALIDATE_BOOLEAN),
            ]);

            $request->validate([
                'title' => ['required', 'string'],
                'description' => ['required', 'string'],
                'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
                'onMainPage' => ['boolean'],
            ]);

            $cloudinary = new Cloudinary();
            $imageId = $cloudinary->uploadImage($request->file('image'));

            $employer = Employer::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $imageId,
                'onMainPage' => $request->onMainPage | false,

            ]);

            return [
                'success' => true,
                'data' => $employer,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
    // public function updateWithFormattedResponse(Request $request, $id)
    // {
    //     try {
    //         $employer = Employer::find($id);

    //         if (!$employer) {
    //             return [
    //                 'success' => false,
    //                 'message' => 'Employer not found'
    //             ];
    //         }

    //         $updateData = [];

    //         if ($request->hasFile('image')) {
    //             $oldImage = $employer->image;
    //             $request->validate([
    //                 'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048']
    //             ]);

    //             $cloudinary = new Cloudinary();
    //             $imageId = $cloudinary->uploadImage($request->file('image'));
    //             $updateData['image'] = $imageId;
    //             $cloudinary->deleteImage($oldImage);
    //         }

    //         if ($request->has('title')) {
    //             $request->validate(['title' => ['string']]);
    //             $updateData['title'] = $request->title;
    //         }

    //         if ($request->has('link')) {
    //             $request->validate(['link' => ['string', 'url']]);
    //             $updateData['link'] = $request->link;
    //         }
    //         if ($request->has('onMainPage')) {

    //             $updateData['onMainPage'] = $request->onMainPage;
    //         }

    //         if (empty($updateData)) {
    //             return [
    //                 'success' => false,
    //                 'message' => 'No data provided for update'
    //             ];
    //         }

    //         $employer->update($updateData);

    //         return [
    //             'success' => true,
    //             'data' => $employer,
    //             'message' => 'Employer updated successfully'
    //         ];
    //     } catch (Exception $e) {
    //         return [
    //             'success' => false,
    //             'message' => $e->getMessage()
    //         ];
    //     }
    // }
    public function update(Request $request, $id)
    {
        try {
            $employer = Employer::find($id);

            if (!$employer) {
                return [
                    'success' => false,
                    'message' => 'Employer not found',
                    "code" => 404
                ];
            }

            $updateData = [];

            if ($request->hasFile('image')) {
                $oldImage = $employer->image;
                $request->validate([
                    'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048']
                ]);

                $cloudinary = new Cloudinary();
                $imageId = $cloudinary->uploadImage($request->file('image'));
                $updateData['image'] = $imageId;
                $cloudinary->deleteImage($oldImage);
            }

            if ($request->has('title')) {
                $request->validate(['title' => ['string']]);
                $updateData['title'] = $request->title;
            }

            if ($request->has('description')) {
                $request->validate(['description' => ['string']]);
                $updateData['description'] = $request->description;
            }

            if ($request->has('onMainPage')) {
                $request->validate(['onMainPage' => ['boolean']]);
                $updateData['onMainPage'] = $request->onMainPage;
            }

            if (empty($updateData)) {
                return [
                    'success' => false,
                    'message' => 'No data provided for update'
                ];
            }

            $employer->update($updateData);

            return [
                'success' => true,
                'data' => $employer,
                'message' => 'Employer updated successfully'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function delete($id)
    {
        try {
            //code...
            $employer = Employer::find($id);
            $cloudinary = new Cloudinary();
            $cloudinary->deleteImage($employer->image);

            if (!$employer) {
                return [
                    'success' => false,
                    'message' => 'Employer not found',
                    "code" => 404
                ];
            }

            $employer->delete();

            return [
                'success' => true,
                'message' => 'News deleted successfully'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
