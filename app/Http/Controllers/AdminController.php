<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    protected $auth;
    public function __construct(UserRepository $auth){
        $this->auth = $auth;
    }

    public function usuarios(){
        return Inertia::render('Admin/Usuarios', [
            'usuarios' => User::with(['userLogs'])->where('id', '<>', auth()->user()->id)->get(),
        ]);
    }
    //registro de usuarios
    public function registro(RegisterRequest $request){
        if ($request->input('password') !== $request->input('password_confirmation')) {
            return back()->withErrors('Las contraseñas no coinciden.');
        }
    }
}
