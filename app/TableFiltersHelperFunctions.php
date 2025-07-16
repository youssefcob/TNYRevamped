<?php

namespace App;

use Exception;
use Illuminate\Support\Facades\Validator;

trait TableFiltersHelperFunctions
{
    //
    private function submissionDateFilter($query, $date)
    {
        try {
            // Validate date format
            
            Validator::make(['date' => $date], [
                'date' => 'required|date_format:Y-m-d',
            ])->validate();

            
            $data = $query->whereDate('created_at', $date);
                // ->with([$relation => function ($query) {
                //     $query->select('id', 'title');
                // }]);


            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
    
    private function startDateFilter($query, $startDate, $joinedTable = '')
{
    try {
        // Validate start date format
        Validator::make(['start_date' => $startDate], [
            'start_date' => 'required|date_format:Y-m-d',
        ])->validate();
        
        $column = $joinedTable ? $joinedTable . '.created_at' : 'created_at';
        $data = $query->whereDate($column, '>=', $startDate);
        
        return [
            'success' => true,
            'data' => $data,
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => $e->getMessage(),
        ];
    }
}
    
    private function endDateFilter($query, $endDate, $joinedTable='')
    {
        try {
            // Validate end date format
            Validator::make(['end_date' => $endDate], [
                'end_date' => 'required|date_format:Y-m-d',
            ])->validate();
            $column = $joinedTable ? $joinedTable . '.created_at' : 'created_at';
            $data = $query->whereDate($column, '<=', $endDate);
            
            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
    
    private function statusFilter($query, $status, $joinedTable = '')
    {
        try {
            // Validate status value
            // Validator::make(['status' => $status], [
            //     'status' => 'required|string|in:pending,approved,rejected',
            // ])->validate();
            $column = $joinedTable ? $joinedTable . '.status' : 'status';
            $data = $query->where($column, $status);
            
            return [
                'success' => true,
                'data' => $data,
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
    public function employerIdFilter($query, $employerId, $joinedTable = '')
    {
        $column = $joinedTable ? $joinedTable . '.employer_id' : 'employer_id';
        $data = $query->where($column, $employerId);
        // dd($employerId,$data);
        return [
            'success' => true,
            'message' => ' fetched successfully',
            'data' => $data
        ];
    }
}
