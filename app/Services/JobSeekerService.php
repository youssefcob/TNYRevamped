<?php

namespace App\Services;

use App\Models\JobSeeker;
use Illuminate\Http\Request;
use App\Services\Cloudinary;
use App\Models\User;
use App\TableFiltersHelperFunctions;
use Illuminate\Support\Facades\DB;

class JobSeekerService
{
    use TableFiltersHelperFunctions;
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
            
            // Delete job seeker
            $jobSeeker->delete();
            
            // Delete associated user
            if ($userId) {
                User::destroy($userId);
            }
            
            return ['success' => true, 'message' => 'Job seeker deleted successfully'];
            
        } catch (\Exception $e) {
            return ['success' => false, 'message' => 'Failed to delete job seeker: ' . $e->getMessage()];
        }
    }

    public function createJobSeeker(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:8',
                'phone_number' => 'required|string',
                'bod' => 'required|date',
                'notice_period' => 'required|string',
                'facility_type' => 'required|string',
                'shift_type' => 'required|string',
                'experience' => 'required|string',
                'address' => 'required|string',
                'salary' => 'required|numeric',
                'position_id' =>'required|integer|exists:positions,id',
                'talent' =>'nullable|boolean',
                'status' =>'nullable|string|in:pending,approved,rejected'
                // 'resume' => 'required|file|mimes:pdf,doc,docx'
            ]);
            DB::beginTransaction();
            // Create user first
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'user_type' => 'job_seeker'
            ]);

            // Handle resume upload
            $resumePath = null;
            if ($request->hasFile('resume')) {
                $googleDrive = new GoogleDrive();
                $resumePath = $googleDrive->upload($request->file('resume'));
            }

            // Create job seeker
            $jobSeeker = JobSeeker::create([
                'user_id' => $user->id,
                'phone_number' => $request->phone_number,
                'bod' => $request->bod,
                'notice_period' => $request->notice_period,
                'facility_type' => $request->facility_type,
                'shift_type' => $request->shift_type,
                'experience' => $request->experience,
                'address' => $request->address,
                'resume' => $resumePath,
                'status' => 'pending',
                'salary' => $request->salary,
                'position_id' => $request->position_id,
                'talent' => $request->talent ?? false,
                'status' => $request->status?? 'pending'
            ]);
            DB::commit();
            return [
                'success' => true,
                'message' => 'Job seeker created successfully',
                'data' => $jobSeeker->load('user')
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
