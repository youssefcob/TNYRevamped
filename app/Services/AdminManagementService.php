<?php

namespace App\Services;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AdminManagementService
{
    public function getAdmins()
    {
        try {
            $admins = Admin::orderBy('name')->get(['id', 'name', 'email', 'role', 'created_at']);

            return [
                'success' => true,
                'data' => $admins,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function createAdmin(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'email', 'unique:admins,email'],
                'password' => ['required', 'string', 'min:8'],
                'role' => ['nullable', Rule::in(Admin::ROLES)],
            ]);

            $admin = Admin::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']),
                'role' => $validated['role'] ?? 'admin',
            ]);

            return [
                'success' => true,
                'data' => $admin,
                'message' => 'Admin created successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function updateAdmin(int $id, Request $request)
    {
        try {
            $admin = Admin::find($id);

            if (! $admin) {
                return [
                    'success' => false,
                    'message' => 'Admin not found',
                    'code' => 404,
                ];
            }

            $validated = $request->validate([
                'name' => ['sometimes', 'required', 'string', 'max:255'],
                'email' => ['sometimes', 'required', 'email', Rule::unique('admins', 'email')->ignore($admin->id)],
                'password' => ['sometimes', 'nullable', 'string', 'min:8'],
                'role' => ['sometimes', Rule::in(Admin::ROLES)],
            ]);

            $demotesLastSuperAdmin = array_key_exists('role', $validated)
                && $validated['role'] !== $admin->role
                && $admin->isSuperAdmin()
                && Admin::where('role', 'super_admin')->count() <= 1;

            if ($demotesLastSuperAdmin) {
                return [
                    'success' => false,
                    'message' => 'Cannot change the role of the last remaining super admin',
                    'code' => 422,
                ];
            }

            if (array_key_exists('name', $validated)) {
                $admin->name = $validated['name'];
            }
            if (array_key_exists('email', $validated)) {
                $admin->email = $validated['email'];
            }
            if (array_key_exists('role', $validated)) {
                $admin->role = $validated['role'];
            }
            if (! empty($validated['password'])) {
                $admin->password = Hash::make($validated['password']);
            }

            $admin->save();

            return [
                'success' => true,
                'data' => $admin,
                'message' => 'Admin updated successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function deleteAdmin(int $id, ?int $actingAdminId)
    {
        try {
            $admin = Admin::find($id);

            if (! $admin) {
                return [
                    'success' => false,
                    'message' => 'Admin not found',
                    'code' => 404,
                ];
            }

            if ($admin->id === $actingAdminId) {
                return [
                    'success' => false,
                    'message' => 'You cannot delete your own account',
                    'code' => 422,
                ];
            }

            if ($admin->isSuperAdmin() && Admin::where('role', 'super_admin')->count() <= 1) {
                return [
                    'success' => false,
                    'message' => 'Cannot delete the last remaining super admin',
                    'code' => 422,
                ];
            }

            $admin->delete();

            return [
                'success' => true,
                'message' => 'Admin deleted successfully',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
