<?php

namespace App\Services\Applications;

use App\Models\Application;
use App\Models\User;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApplicationsService
{
    /**
     * Apply to a vacancy.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function apply($request, $vacancy_id)
    {
        // Validate the request data
        $request->validate([
            // 'vacancy_id' => 'required|exists:vacancies,id',
            'resume' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
        ]);
        $vacancy = Vacancy::find($vacancy_id);
        if (!$vacancy) {
            return [
                'success' => false,
                'message' => "Vacancy doesn't exist"
            ];
        }

        // Create the application
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $jobSeeker = $user->jobSeeker;
        if(!$jobSeeker)
        {
            return [
                'success'=>false,
                'message'=>'Please Complete your profile'
            ];
        }

        if ($request->input('resume')) {
            $resumePath = $this->handleResumeUpload($request);
        } else {
            $resumePath = $jobSeeker->resume;
        }


        if (!$resumePath) {
            return [
                'success' => false,
                'message' => 'Resume upload failed or no resume found.',
            ];
        }

        $application = $jobSeeker->applications()->create([
            'vacancy_id' => $vacancy_id,
            'resume' => $resumePath,
            'status' => 'pending',
        ]);

        return [
            'success' => true,
            'data' => $application,
            'message' => 'Application submitted successfully.',
        ];
    }

    private function handleResumeUpload(Request $request)
    {
        if ($request->hasFile('resume')) {
            $googleDrive = new \App\Services\GoogleDrive();
            return $googleDrive->upload($request->file('resume'));
        }
        return null;
    }

    public function jobSeekerApplications()
    {

        // Create the application
        /** @var \App\Models\User $user */
        $user = Auth::user();

        return $this->ApplicationsPerJobSeeker($user);
    }

    public function AdminJobSeekerApplications($id)
    {
        $user = User::findOrFail($id);
        return $this->ApplicationsPerJobSeeker($user);
    }

    private function ApplicationsPerJobSeeker(User $user)
    {

        return [
            'success' => true,
            'data' => $user->jobSeeker->applications(),
            'message' => 'Application submitted successfully.',
        ];
    }

    public function employerApplications()
    {

        // Create the application
        /** @var \App\Models\User $user */
        $user = Auth::user();

        return $this->ApplicationsPerEmployer($user);
    }

    public function AdminEmployerApplications($id)
    {
        $user = User::findOrFail($id);
        return $this->ApplicationsPerEmployer($user);
    }

    private function ApplicationsPerEmployer(User $user)
    {

        return [
            'success' => true,
            'data' => $user->employer->applications(),
            'message' => 'Application submitted successfully.',
        ];
    }


    public function employerApplicationsPerVacancy($vacancyId)
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        // Check if user has an employer profile
        if (!$user->employer) {
            throw new \Exception('User is not an employer');
        }

        // Verify the vacancy belongs to this employer
        $vacancy = $user->employer->vacancies()
            ->where('id', $vacancyId)
            ->first();

        if (!$vacancy) {
            throw new \Exception('Vacancy not found or does not belong to this employer');
        }

        // Get applications with related data
        $applications = $vacancy->applications()
            ->with([
                'user.profile',
                'user' => function ($query) {
                    $query->select('id', 'name', 'email');
                }
            ])
            ->select('id', 'user_id', 'vacancy_id', 'status', 'created_at', 'updated_at')
            ->orderBy('created_at', 'desc')
            ->get();

        return [
            'success' => true,
            'data' => $applications,
            'message' => 'Application submitted successfully.',
        ];
    }


    public function adminFilterApplications(Request $request)
    {

        $query = Application::query()
            ->with([
                'vacancy.employer',
                'vacancy.position',
            ]);


        // Filter by vacancy_id (direct column in applications table)
        if ($request->filled('vacancy_id')) {
            $query->where('vacancy_id', $request->vacancy_id);
        }

        // Filter by position_id (direct column in applications table)
        if ($request->filled('position_id')) {
            $query->where('position_id', $request->position_id);
        }

        // Filter by employer_id (through vacancy relationship)
        if ($request->filled('employer_id')) {
            $query->whereHas('vacancy', function ($q) use ($request) {
                $q->where('employer_id', $request->employer_id);
            });
        }

        // Filter by job_seeker_id (user_id in applications table)
        if ($request->filled('job_seeker_id')) {
            $query->where('job_seeker_id', $request->job_seeker_id);
        }

        $applications = $query->orderBy('created_at', 'desc')->paginate(15);


        return [
            'success' => true,
            'data' => $applications,
            'message' => 'Application submitted successfully.',
        ];
    }
}
