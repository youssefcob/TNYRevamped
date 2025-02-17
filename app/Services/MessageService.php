<?php

namespace App\Services;

use App\Models\Message;
use Exception;

class MessageService
{
    // Your service logic goes here

    /**
     * Retrieves all messages from the database with pagination or a specific message.
     *
     * @param \Illuminate\Http\Request $request Contains 'page' and 'per_page' parameters.
     * @param int $id The id of the message to retrieve.
     * @return array Message data, pagination information, or error messages.
     * @throws \Exception
     */
    public function getMessages($request){
        try {
            //code...
            // dd('s');
            $id = $request->input('id');
            $data = $id ? Message::find($id) : Message::paginate(10);
            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false, 
                'message'=>'Error getting messages',
                'error' => $e->getMessage()
            ];
        }
    }
}
