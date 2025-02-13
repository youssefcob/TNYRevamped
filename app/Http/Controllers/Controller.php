<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //
    public function sendResponse($data,$code=200){
        unset($data['success']);
        unset($data['code']);
        $code = $data['code'] ?? $code;
        $result = ['success' =>true, 'response' =>$data, 'code' =>$code];
        return response()->json($result,$code);
    }
    public function sendError($data,$code=400){
        unset($data['success']);
        unset($data['code']);
        $code = $data['code'] ?? $code;
        $result = ['success' =>false, 'response' =>$data, 'code' =>$code];
        return response()->json($result,$code);
    }
}
