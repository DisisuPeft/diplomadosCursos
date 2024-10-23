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
            'status' => session('status'),
        ]);
    }

    public function dashboard(): \Inertia\Response
    {
        return Inertia::render('Dashboard', [

        ]);
    }
}
