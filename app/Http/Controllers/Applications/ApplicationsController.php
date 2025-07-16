<?php

namespace App\Http\Controllers\Applications;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Applications\ApplicationsService;

class ApplicationsController extends Controller
{
    protected $service;
    public function __construct(ApplicationsService $service)
    {
        $this->service = $service;
    }

    // job seeker methods

    /**
     * Apply to a vacancy.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function apply(Request $request, $id)
    {

        $response = $this->service->apply($request, $id);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }


    /**
     * Get my applications as a job seeker
     *
     * @return \Illuminate\Http\Response
     */

    public function jobSeekerApplications()
    {
        $response = $this->service->jobSeekerApplications();

        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    // employer methods

    public function employerApplications()
    {
        $response = $this->service->employerApplications();

        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function employerApplicationsPerVacancy($vacancyId)
    {
        $response = $this->service->employerApplicationsPerVacancy($vacancyId);

        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    // admin methods

    public function adminFilterApplications(Request $request)
    {
        $response = $this->service->adminFilterapplications($request);

        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function adminGetAllApplications(Request $request)
    {
        $response = $this->service->adminGetAllApplications($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function adminUpdateApplicationStatus(Request $request)
    {
        $response = $this->service->adminUpdateApplicationStatus($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }
}
