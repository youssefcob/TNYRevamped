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
    public static function getTalent()
    {
        $jobSeekers = JobSeeker::where('is_talent', '=', true)->with(['user', 'position'])->get();
        return $jobSeekers;
    }
    public static function get(Request $request)
    {
        $service = new self();
        return  $service->getJobSeekers($request,16);
        
    }
    

    public function getJobSeekers(Request $request, $perPage = 10)
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
                $query = JobSeeker::with(['user', 'position']);
                
                // Apply all filters to the base query
                if($startDate){
                    $filteredJobSeekers = $this->startDateFilter($query, $startDate);
                    if (!$filteredJobSeekers['success']) {
                        return $filteredJobSeekers;
                    }
                    $query = $filteredJobSeekers['data'];
                }
                
                if($endDate){
                    $filteredJobSeekers = $this->endDateFilter($query, $endDate);
                    if (!$filteredJobSeekers['success']) {
                        return $filteredJobSeekers;
                    }
                    $query = $filteredJobSeekers['data'];
                }
                
                if ($status) {
                    $filteredJobSeekers = $this->statusFilter($query, $status);
                    if (!$filteredJobSeekers['success']) {
                        return $filteredJobSeekers;
                    }
                    $query = $filteredJobSeekers['data'];
                }


                $jobSeeker = $query->paginate($perPage);
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
            $status = $request->query('status');
            if($status){
                $status = strtolower($status);
            }
            $request->merge(['status' => $status]);
            // dd($status);
            $request->validate([
                'id' => 'required|integer|exists:job_seekers,id',
                'status' => 'required|string|in:pending,approved,rejected'
            ]);

            $jobSeeker = JobSeeker::findOrFail($request->query('id'));
            $jobSeeker->status = $status;
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
                'is_talent' => 'required|boolean'
            ]);

            $jobSeeker = JobSeeker::findOrFail($id);
            $jobSeeker->is_talent = $request->is_talent;
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
            $jobSeeker = JobSeeker::where('user_id', $userId)->first();
            if (!$jobSeeker) {
                return ['success' => false, 'message' => 'Job seeker not found, Please create a job seeker profile first'];
            }

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

    public function createOrUpdateJobSeeker(Request $request, $userId)
    {
        if ($this->jobSeekerExists($userId)) {
            // Update
            return $this->updateJobSeeker($request, $userId);
        } else {
            // Create
            return $this->createJobSeeker($request, $userId);
        }
    }
    public function getJobSeekerProfile($userId)
    {
        try {
            $jobSeeker = JobSeeker::where('user_id', $userId)
            ->with('user', 'languages', 'position')
            ->first();
            return [
                'success' => true,
                'data' => $jobSeeker
            ];
        } catch (\Throwable $th) {
            return [
                'success' => false,
                'message' => $th->getMessage()
            ];
        }
    }
}
