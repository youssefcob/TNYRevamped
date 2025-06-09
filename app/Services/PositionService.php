<?php

namespace App\Services;

use App\Models\Position;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;

class PositionService
{

    // Your service logic goes here
    /**
     * Retrieves all Position from the database or a specific position.
     *
     * @param \Illuminate\Http\Request $request Contains 'page' and 'per_page' parameters.
     * @param int $id The id of the position to retrieve.
     * @return array Positions data, pagination information, or error messages.
     * @throws \Exception
     */
    public function getPositions($request)
    {
        try {
            $id = $request->input('id');
            if ($id) {
                $request->validate([
                    'id' => 'required|integer|exists:positions,id',
                ]);
            }
            $data = $id ? Position::find($id) : Position::all();
            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Updates the position data in the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id'.
     * @param \Models\Position $position The new position data to update.
     * @return array Position data, or error messages.
     * @throws \Exception
     * @throws \ValidationException
     */
    public function updatePosition($request)
    {
        try {
            $request->validate([
                'id' => 'required|integer|exists:positions,id',
                'title' => 'sometimes|string|max:255',
                'description' => 'sometimes|string|max:255',
                'available' => 'sometimes|boolean',
            ]);
            $position = Position::find($request->id);
            $data = $request->only(['title', 'description', 'available']);
            $position->update($data);
            $position->save();

            return [
                'success' => true,
                'data' => $position,
                'message'=>'Position updated successfully'
            ];
        } catch (ValidationException $e) {
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function createPosition($request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'available' => 'boolean',
            ]);
            $data = $request->only(['title', 'description', 'available']);

            // Set default for 'available' if not provided
            if (!array_key_exists('available', $data)) {
                $data['available'] = true;
            }

            $position = Position::create($data);
            return [
                'success' => true,
                'data' => $position,
                'message' => 'Position created successfully'
            ];
        } catch (ValidationException $e) {
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error please fill in the required fields',
                'errors' => $e->errors()
            ];
        } catch (\Throwable $th) {
            return [
                'success' => false,
                'message' => 'An error occurred while creating the position',
                'error' => $th->getMessage()
            ];
        }
    }

    /**
     * Deletes a position from the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id' parameter.
     * @return array Position data, or error messages.
     * @throws \Exception
     * @throws \Illuminate\Validation\ValidationException
     * */
    public function deletePosition($request)
    {
        try {
            $request->validate([
                'id' => 'required|integer|exists:positions,id'
            ]);
            $position = Position::find($request->id);
            $position->delete();
            return [
                'success' => true,
                'data' => $position,
                'message' => 'Position deleted successfully'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Position could not be deleted',
                'error' => $e->getMessage()
            ];
        }
    }

    // public function createPosition($request)
    // {
    //     try {
    //         $request->validate([
    //             'title' => 'required|string|max:255',
    //             'description' => 'required|string|max:255',
    //             'available' => 'required|boolean'
    //         ]);
    //         $data = $request->only(['title', 'description', 'available']);

    //         $position = Position::create($data);
    //         return [
    //             'success' => true,
    //             'data' => $position,
    //             'message' => 'Position created successfully'
    //         ];
    //         //code...
    //     } catch (ValidationException $e) {
    //         return [
    //             'code' => 422,
    //             'success' => false,
    //             'message' => 'Validation error please fill in the required fields',
    //             'errors' => $e->errors()
    //         ];
    //     } catch (\Throwable $th) {
    //         //throw $th;
    //         return [
    //             'success' => false,
    //             'message' => 'An error occurred while creating the position',
    //             'error' => $th->getMessage()
    //         ];
    //     }
    // }
}
