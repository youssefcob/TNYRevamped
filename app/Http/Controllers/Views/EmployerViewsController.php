<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Position;
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
        // dd($request->all());
        $userId = Auth::guard('user')->user()->id;
        if (!$userId) {
            return ['success' => false, 'message' => 'no user present'];
        };
        // dd($request->toArray());

        $response = $this->service->updateEmployer($request, $userId);
        // dd($response);
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

    public function postVacancy()
    {
        $data = [];
        $data['positions'] = Position::all();
        $data['languages'] = Language::all();
        return Inertia::render('Employers/PostVacancy',$data);
    }
}
