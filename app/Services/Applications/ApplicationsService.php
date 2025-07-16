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
    public function apply(Request $request, $vacancy_id)
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

        $user = $request->attributes->get('user');
        $jobSeeker = $user->jobSeeker;
        if (!$jobSeeker) {
            return [
                'success' => false,
                'message' => 'Please Complete your profile'
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
            'data' => $user->jobSeeker->applications,
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

        $vacancies = $user->employer->vacancies;
        $vacancies->load('applications');
        return [
            'success' => true,
            'data' => $vacancies
        ];
    }


    public function employerApplicationsPerVacancy($vacancyId)
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        // Check if user has an employer profile
        if (!$user->hasRole('employer')) {
            throw new \Exception('User is not an employer');
        }

        // Verify the vacancy belongs to this employer
        $vacancy = $user->employer->vacancies()
            ->where('id', $vacancyId)
            ->first();

        if (!$vacancy) {
            throw new \Exception('Vacancy not found or does not belong to this employer');
        }

        $vacancy->load('applications');
        // Get applications with related data
        $applications = $vacancy;

        return [
            'success' => true,
            'data' => $applications,
            'message' => 'Application submitted successfully.',
        ];
    }


    public function adminFilterApplications(Request $request)
    {

        $query = Application::query()
        ->join('vacancies', 'applications.vacancy_id', '=', 'vacancies.id')
        ->join('positions', 'vacancies.position_id', '=', 'positions.id')
        ->join('employers', 'vacancies.employer_id', '=', 'employers.id')
        ->join('job_seekers', 'applications.job_seeker_id', '=', 'job_seekers.id')
        ->join('users as job_seeker_users', 'job_seeker_users.id', '=', 'job_seekers.user_id')
        ->join('users as employer_users', 'employer_users.id', '=', 'employers.user_id')
        ->select([
            'applications.resume as resume',
            'applications.status as status',
            'vacancies.*',
            'positions.title as position_title',
            'employer_users.name as employer_name',
            'employer_users.email as employer_email',
            'job_seeker_users.name as job_seeker_name',
            'job_seeker_users.email as employer_email'

        ]);


        // Filter by vacancy_id (direct column in applications table)
        if ($request->filled('vacancy_id')) {
            $query->where('vacancy_id', $request->vacancy_id);
        }

        // // // Filter by position_id (direct column in vacancy table)
        if ($request->filled('position_id')) {
            $query->where('vacancies.position_id', $request->position_id);
        }

        // // Filter by employer_id (through vacancy relationship)
        if ($request->filled('employer_id')) {
            $query->whereHas('vacancy', function ($q) use ($request) {
                $q->where('employer_id', $request->employer_id);
            });
        }

        // // Filter by job_seeker_id (user_id in applications table)
        if ($request->filled('job_seeker_id')) {
            $query->where('job_seeker_id', $request->job_seeker_id);
        }

        $applications = $query->orderBy('applications.created_at', 'desc')->paginate(15);


        return [
            'success' => true,
            'data' => $applications,
            'message' => 'Application submitted successfully.',
        ];
    }
}
