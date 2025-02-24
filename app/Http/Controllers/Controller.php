<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //
    public function sendResponse($data,$code=200){
        $code = $data['code'] ?? $code;
        unset($data['success']);
        unset($data['code']);
        $result = ['success' =>true, 'response' =>$data, 'code' =>$code];
        return response()->json($result,$code);
    }
    public function sendError($data,$code=400){
        // dd($data);
        $code = $data['code'] ?? $code;
        unset($data['success']);
        unset($data['code']);
        $result = ['success' =>false, 'response' =>$data, 'code' =>$code];
        return response()->json($result,$code);
    }
}
