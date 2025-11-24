<?php

namespace App\Services;

class CacheService
{
    // Your service logic goes here
    public function generateCacheKey($type,$value){
        if($type == 'reset_password'){
            return 'reset_password:'.$value;
        }
        return $type.':'.$value;
    }
}
