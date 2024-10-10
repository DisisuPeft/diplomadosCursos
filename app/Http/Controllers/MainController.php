<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class MainController extends Controller
{
    public function main(): \Inertia\Response
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function dashboard(): \Inertia\Response
    {
        return Inertia::render('Dashboard', [
            'usuarios' => User::with(['profile', 'userLogs'])->where('id', '<>', auth()->user()->id)->get(),
        ]);
    }
}
