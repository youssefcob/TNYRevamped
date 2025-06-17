<?php

// use App\Http\Controllers\AdminAtuhController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\ApplicationsController;
use App\Http\Controllers\Content\HeroController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\MailListController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\ServiceController;

use App\Http\Controllers\InsightsController;
use App\Http\Controllers\JobSeekerController;
// use App\Http\Controllers\InsightsController;
use App\Http\Controllers\ServiceRequestController;
use App\Http\Controllers\SystemServiceController;
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\Views\Auth\LoginController;
use App\Http\Controllers\Views\Auth\RegisterController;
use App\Services\GoogleDrive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:api');

require __DIR__ . '/content.php';
require __DIR__ . '/user-routes.php';
require __DIR__ . '/employer/employer-routes.php';
require __DIR__.'/applications-routes.php';
require __DIR__ . '/job-seeker.php';
require __DIR__ . '/bids.php';

// Route::post('/new-google-drive-file', function (Request $request) {
//     try {
//         // Initialize GoogleDrive
//         $client = new GoogleDrive();

//         // Check if file exists in the request
//         if (!$request->hasFile('file')) {
//             return response()->json([
//                 'success' => false,
//                 'message' => 'No file provided',
//             ], 400);
//         }

//         // Get the file
//         $file = $request->file('file');

//         // Ensure the file is valid
//         if (!$file->isValid()) {
//             return response()->json([
//                 'success' => false,
//                 'message' => 'Invalid file upload',
//                 'error' => $file->getErrorMessage()
//             ], 400);
//         }

//         // Upload the file
//         // dd('s');
//         $fileUrl = $client->upload($file);

//         return response()->json([
//             'success' => true,
//             'message' => 'File uploaded successfully',
//             'url' => $fileUrl
//         ]);
//     } catch (\Exception $e) {
//         return response()->json([
//             'success' => false,
//             'message' => 'Upload failed',
//             'error' => $e->getMessage(),
//             'file' => $request->hasFile('file') ? $request->file('file')->getClientOriginalName() : 'No file'
//         ], 500);
//     }
// });

Route::post('/admin/login', [AdminAuthController::class, 'adminLogin']);

Route::prefix('auth')->group(function () {
    Route::post('/register', [UserAuthController::class, 'register'])->name('register.api');
    Route::post('/login', [UserAuthController::class, 'login'])->name('login.api');
});

Route::middleware('auth:api', 'scope:admin')->group(function () {
    //Applications routes
    Route::get('/applications', [ApplicationsController::class, 'getApplications'])->name('get.applications');
    //TODO: When delete application make sure to delete the application's files from Cloudinary.
    Route::put('/applicationStatus', [ApplicationsController::class, 'updateApplicationStatus'])->name('update.application.status');
    Route::delete('/application', [ApplicationsController::class, 'deleteApplication'])->name('delete.application');

    //Positions routes
    Route::prefix('/positions')->group(function () {
        Route::get('/', [PositionController::class, 'getPositions'])->name('get.positions');
        Route::put('/', [PositionController::class, 'updatePosition'])->name('update.positions');
        Route::delete('/', [PositionController::class, 'deletePosition'])->name('delete.positions');
        Route::post('/', [PositionController::class, 'createPosition'])->name('create.positions');
    });
    

    //Messages routes 
    Route::get('/messages', [MessageController::class, 'getMessages'])->name('get.messages');

    //Mail list routes
    Route::get('/mailList', [MailListController::class, 'getMailList'])->name('get.mailList');
    Route::put('/mailList', [MailListController::class, 'updateMailList'])->name('update.mailList');
    Route::delete('/mailList', [MailListController::class, 'deleteMailList'])->name('delete.mailList');
    Route::post('/mailList', [MailListController::class, 'createMailList'])->name('create.mailList');


    // System services routes
    // Route::get('/')
    Route::get('/system-services', [ServiceController::class, 'getSystemServices'])->name('get.systemServices');;
    Route::post('/system-services', [ServiceController::class, 'createSystemService'])->name('create.systemServices');
    Route::post('/update-system-services', [ServiceController::class, 'updateSystemService'])->name('update.systemServices');
    Route::delete('/system-services', [ServiceController::class, 'deleteSystemService'])->name('delete.systemServices');

    // Service requests routes
    Route::get('/service-requests', [ServiceRequestController::class, 'getServiceRequests'])->name('get.serviceRequests');
    Route::put('/service-requests-status', [ServiceRequestController::class, 'updateServiceRequestStatus'])->name('update.serviceRequests.status');
    Route::delete('/service-requests', [ServiceRequestController::class, 'deleteServiceRequest'])->name('delete.service_requests');
    // Route::post('/service-requests', [ServiceRequestController::class , 'createServiceRequest'])->name('create.service_requests');

    Route::get('/insights/main-metrics',[InsightsController::class , 'getMainMetrics'] )->name('get.insights');
    Route::get('/insights/applications-by-postion',[InsightsController::class, 'getPositionsCount'])->name('get.positions.count');

    Route::get('/export-table', [ExportController::class , 'toCSV'])->name('export.toCSV');

    Route::get('/hero',[HeroController::class , 'getHeroSection'])->name('get.hero');
    Route::post('/editHero',[HeroController::class , 'editHeroSection'])->name('edit.hero');

    //Job seekers routes
    Route::get('/job-seekers', [JobSeekerController::class, 'getJobSeekers'])->name('get.jobSeekers');
    Route::put('/job-seeker-status', [JobSeekerController::class, 'updateStatus'])->name('update.jobSeeker.status');
    Route::delete('/job-seekers/{id}', [JobSeekerController::class, 'destroy'])->name('delete.jobSeeker');
    
    Route::put('/job-seeker/talent/{id}', [JobSeekerController::class, 'updateTalent'])->name('update.jobSeekerTalent');
});




Route::group(['prefix' => 'message'], function () {
    Route::post('/', [MessageController::class, 'submit']);
});

Route::group(['prefix' => 'application'], function () {
    Route::post('/', [ApplicationsController::class, 'submit']);
});

Route::group(['prefix' => 'request'], function () {
    Route::post('/', [ServiceRequestController::class, 'submit']);
});


