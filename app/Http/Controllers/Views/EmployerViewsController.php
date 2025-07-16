<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Position;
use App\Services\BidsService;
use App\Services\Employer\EmployerService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmployerViewsController extends Controller
{
    protected $service;

    public function __construct(EmployerService $service)
    {
        $this->service = $service;
    }
    public function createOrUpdateEmployerProfile(Request $request)
    {
        $userId = Auth::guard('user')->user()->id;
        if (!$userId) {
            return ['success' => false, 'message' => 'no user present'];
        };

        $response = $this->service->updateEmployer($request, $userId);
        if (!$response['success']) {
            $token = $request->cookie('token');
            if ($token) {
                $request->headers->set('Authorization', 'Bearer ' . $token);
                /** @var \App\Models\User $user */
                $user = Auth::guard('user')->user();
                if (!$user) {
                    redirect()->route('home');
                }
                $data['user'] = $user;
                $data['token'] = ['access_token' => $token, 'token_type' => 'Bearer'];

                $data['employer'] = $user->Employer;
                $data['errors'] = $response['errors'] ?? [];


                return Inertia::render('Employers/EmployersProfileEdit', $data);
            }
        }
        return redirect()->route('profile');
    }

    public function postVacancyView()
    {
        $user = Auth::guard('user')->user();
        if (!$user->employer) {
            return redirect()->route('profile.edit');
        }

        $data = [];
        $data['positions'] = Position::all();
        $data['languages'] = Language::all();
        return Inertia::render('Employers/PostVacancy', $data);
    }

    public function bid(Request $request)
    {
        $bid = BidsService::bid($request, Auth::guard('user')->user()->employer->id);
        if ($bid['success']) {
            return redirect()->route('dashboard')->with('snack', [
                'type' => 'success',
                'message' => 'Bid created successfully.',
            ]);
        } else {
            return redirect()->route('talents')->with('snack', [
                'type' => 'error',
                'message' => $bid['message'] ?? 'An error occurred while creating the bid.',
                'errors' => $bid['errors'] ?? []
            ]);
        }
    }
}
