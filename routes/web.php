<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\SubscriptionPlanController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/home');

Route::post('midtrans/notification', [SubscriptionPlanController::class, 'midtransCallback']);

Route::get('home', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'role:user'])->name('user.')->group(function () {
    
    Route::get('dashboard/{id}/invoice', [DashboardController::class, 'invoice'])->name('invoice')->middleware('checkUserSubscription:true');
    Route::get('dashboard/{id}/job-report', [DashboardController::class, 'job'])->name('job')->middleware('checkUserSubscription:true');
    Route::get('dashboard/dashboard-detail', [DashboardController::class, 'dashboardDetail'])->name('detail')->middleware('checkUserSubscription:true');
    Route::resource('dashboard', DashboardController::class)->middleware('checkUserSubscription:true');
    
    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile/edit', [ProfileController::class, 'update'])->name('profile.update');

    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscriptionPlan')->middleware('checkUserSubscription:false');
    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscriptionPlan.userSubscribe')->middleware('checkUserSubscription:false');
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/home', function () {
        return Inertia::render('Prototype/Home');
    })->name('home');

    route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subscriptionPlan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');

    route::get('/profile', function () {
        return Inertia::render('Prototype/Profile');
    })->name('profile');
});

require __DIR__ . '/auth.php';
