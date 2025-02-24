<?php

namespace App\Services;

use App\Models\MailList;

class MailListService
{
    // Your service logic goes here

    /**
     * Retrieves all mail lists from the database or a specific application.
     *
     * @param \Illuminate\Http\Request $request Contains 'page' and 'per_page' parameters.
     * @param int $id The id of the application to retrieve.
     * @return array Mail Lists data, pagination information, or error messages.
     * @throws \Exception
     */
    public function getMailList($request): array
    {
        try {
            $id = $request->input('id');
            if ($id) {
                $request->validate([
                    'id' => 'required|integer|exists:mail_lists,id',
                ]);
            }
            $data = $id ? MailList::find($id) : MailList::paginate(10);
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
     * Updates the mail list data in the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id'.
     * @param \Models\MailList $mailList The new mail list data to update.
     * @return array Mail List data, or error messages.
     * @throws \Exception
     * @throws \ValidationException
     */
    public function updateMailList($request): array
    {
        try {
            $validatedData = $request->validate([
                'id' => 'required|integer|exists:mail_lists,id',
                'name' => 'sometimes|string|max:255',
                'email' => 'sometimes|email',
                'form' => 'sometimes|in:applications,positions,services,service_requests,messages,content',
                'role' => 'sometimes|string|max:255',
            ]);
            $mailList = MailList::find($request->id);

            $mailList->fill($validatedData);
            $mailList->save();


            return [
                'success' => true,
                'data' => $mailList,
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'code'=>422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Deletes a mail list from the database.
     *
     * @param \Illuminate\Http\Request $request Contains 'id'.
     * @return array Mail List data, or error messages.
     * @throws \Exception
     * @throws \ValidationException
     */
    public function deleteMailList($request): array
    {
        try {
            $id = $request->input('id');

            $request->validate([
                'id' => 'required|integer|exists:mail_lists,id',
            ]);

            $mailList = MailList::find($id);
            $mailList->delete();

            return [
                'success' => true,
                'data' => $mailList,
                'message' => 'Mail list deleted successfully'
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'code'=>422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
    /**
     * Creates a new mail list in the database.
     *
     * @param \Illuminate\Http\Request $request Contains the new mail list data.
     * @return array Mail List data, or error messages.
     * @throws \Exception
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Throwable
     */
    public function createMailList($request): array
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'form' => 'required|in:applications,positions,services,service_requests,messages,content',
                'role' => 'required|string|max:255',
            ]);

            $mailList = new MailList();
            $mailList->fill($validatedData);
            $mailList->save();

            return [
                'success' => true,
                'data' => $mailList,
                'message' => 'Mail list created successfully'
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'code'=>422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
