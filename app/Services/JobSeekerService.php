<?php

namespace App\Services;

use App\Models\JobSeeker;
use Illuminate\Http\Request;
use App\Services\Cloudinary;
use App\Models\User;
use App\TableFiltersHelperFunctions;
use Illuminate\Support\Facades\DB;
use App\Traits\JobSeekerHelperFunctions;

class JobSeekerService
{
    use TableFiltersHelperFunctions;
    use JobSeekerHelperFunctions;
    private $cloudinary;
    public function __construct()
    {
        $this->cloudinary = new Cloudinary();
    }

    public function getJobSeekers(Request $request)
    {
        try {
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $status = $request->input('status');
            $id = $request->input('id');
            
            $request->validate([
                'id' => 'sometimes|integer|exists:job_seekers,id',
            ]);

            if ($id) {
                $jobSeeker = JobSeeker::with(['user', 'position'])
                    ->find($id);
            } else {
                $jobSeeker = JobSeeker::with(['user', 'position']);
                if($startDate){
                    $filteredJobSeekers = $this->startDateFilter($jobSeeker, $startDate);
                    if (!$filteredJobSeekers['success']) {
                        return $filteredJobSeekers;
                    }
                    $jobSeeker = $filteredJobSeekers['data'];
                }
                if($endDate){
                    $filteredJobSeekers = $this->endDateFilter($jobSeeker, $endDate);
                    if (!$filteredJobSeekers['success']) {
                        return $filteredJobSeekers;
                    }
                    $jobSeeker = $filteredJobSeekers['data'];
                }
                if ($status) {
                    $filteredJobSeekers = $this->statusFilter($jobSeeker, $status);
                    if (!$filteredJobSeekers['success']) {
                        return $filteredJobSeekers;
                    }
                    $jobSeeker = $filteredJobSeekers['data'];
                }
                
                
                $jobSeeker = $jobSeeker->paginate(10);
            }

            return [
                'success' => true,
                'data' => $jobSeeker,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }


    public function updateStatus(Request $request)
    {
        try {
            $request->validate([
                'id' => 'required|integer|exists:job_seekers,id',
                'status' => 'required|string|in:pending,approved,rejected'
            ]);

            $jobSeeker = JobSeeker::findOrFail($request->query('id'));
            $jobSeeker->status = $request->query('status');
            $jobSeeker->save();

            return [
                'success' => true,
                'message' => 'Job seeker status updated successfully',
                'data' => $jobSeeker
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function updateTalent(Request $request, $id)
    {
        try {
            $request->validate([
                'talent' => 'required|boolean'
            ]);

            $jobSeeker = JobSeeker::findOrFail($id);
            $jobSeeker->talent = $request->talent;
            $jobSeeker->save();

            return [
                'success' => true,
                'message' => 'Job seeker talent status updated successfully',
                'data' => $jobSeeker
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
                'errors' => $e instanceof \Illuminate\Validation\ValidationException ? $e->errors() : null
            ];
        }
    }
    public function deleteJobSeeker($id)
    {
        try {
            $jobSeeker = JobSeeker::with('user')->findOrFail($id);
            
            // Delete resume from Google Drive if exists
            if ($jobSeeker->resume) {
                $googleDrive = new GoogleDrive();
                $googleDrive->deleteFile($jobSeeker->resume);
            }
            
            // Get user ID before deleting job seeker
            $userId = $jobSeeker->user_id;
            
            if ($userId) {
                User::destroy($userId);
            }
            
            return ['success' => true, 'message' => 'Job seeker deleted successfully'];
            
        } catch (\Exception $e) {
            return ['success' => false, 'message' => 'Failed to delete job seeker: ' . $e->getMessage()];
        }
    }

    public function createJobSeeker(Request $request, $userId)
    {
        try {
            $user = $this->findUserOrFail($userId);
            if (!$user) {
                return ['success' => false, 'message' => 'User not found'];
            }

            $validationResult = $this->validateJobSeekerRequest($request);
            if ($validationResult !== true) {
                return $validationResult;
            }

            DB::beginTransaction();

            $resumePath = $this->handleResumeUpload($request);

            if ($this->jobSeekerExists($userId)) {
                return ['success' => false, 'message' => 'Job seeker already exists'];
            }

            $jobSeeker = $this->createJobSeekerRecord($request, $userId, $resumePath);

            $this->syncLanguages($request, $jobSeeker);

            DB::commit();
            return [
                'success' => true,
                'message' => 'Job seeker created successfully',
                'data' => $jobSeeker->load('languages')
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'success' => false,
                'message' => $e->getMessage(),
                'errors' => $e instanceof \Illuminate\Validation\ValidationException ? $e->errors() : null
            ];
        }
    }

    public function updateJobSeeker(Request $request, $userId)
    {
        try {
            $user = $this->findUserOrFail($userId);
            if (!$user) {
                return ['success' => false, 'message' => 'User not found'];
            }
            $jobSeeker = JobSeeker::where('user_id', $userId)->firstOrFail();

            $validationResult = $this->validateUpdateJobSeekerRequest($request);
            if ($validationResult !== true) {
                return $validationResult;
            }

            DB::beginTransaction();

            $resumePath = null;
            if ($request->hasFile('resume')) {
                $resumePath = $this->handleResumeUpload($request);
            }
            // dd($request->all());
            $this->updateJobSeekerFields($request, $jobSeeker, $resumePath);
            $this->updateUserName($request, $jobSeeker);
            $this->syncLanguages($request, $jobSeeker);

            DB::commit();
            return [
                'success' => true,
                'message' => 'Job seeker updated successfully',
                'data' => $jobSeeker->load('user', 'languages')
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'success' => false,
                'message' => $e->getMessage(),
                'errors' => $e instanceof \Illuminate\Validation\ValidationException ? $e->errors() : null
            ];
        }
    }
}
