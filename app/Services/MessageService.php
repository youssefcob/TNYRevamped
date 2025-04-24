<?php

namespace App\Services;

use App\Models\Message;
use App\Traits\SendsEmail;
use Exception;

class MessageService
{
    use SendsEmail;
    // Your service logic goes here

    /**
     * Retrieves all messages from the database with pagination or a specific message.
     *
     * @param \Illuminate\Http\Request $request Contains 'page' and 'per_page' parameters.
     * @param int $id The id of the message to retrieve.
     * @return array Message data, pagination information, or error messages.
     * @throws \Exception
     */
    public function getMessages($request)
    {
        try {
            //code...
            // dd('s');
            $id = $request->input('id');
            if ($id) {
                $request->validate([
                    'id' => 'required|integer|exists:messages,id',
                ]);
            }

            $data = $id ? Message::find($id)->toArray() : Message::paginate(10);
            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false,
                'message' => 'Error getting messages',
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Creates a new message in the database.
     *
     * @param \Illuminate\Http\Request $request Contains the message data.
     * @return array The new message data or error messages.
     * @throws \Exception
     */
    public function post($request)
    {
        try {
            //code...
            $request->validate([
               'name' => ['required', 'string'],    
               'email' => ['required', 'email'],
               'phone' => ['required', 'regex:/^(\+1|1)?\d{10}$/'],
               'subject' => ['required', 'string'],
               'message' => ['required', 'string'],
            ]);

            $message = Message::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'subject' => $request->subject,
                'message' => $request->message,
            ]);

            $this->sendMessageSubmittedEmail($request->email,$message);

            return [
                'success' => true,
                'data' => $message,
            ];
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false,
                'message' => 'Error creating message',
                'error' => $e->getMessage()
            ];
        }
    }
}
