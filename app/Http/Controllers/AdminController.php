<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Parametros;
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
//USUARIOS
    public function usuarios(){
        return Inertia::render('Admin/Usuarios', [
            'usuarios' => User::with(['userLogs'])->where('id', '<>', auth()->user()->id)->get(),
        ]);
    }
    //registro de usuarios
    public function registro(RegisterRequest $request, $from){
        if ($request->input('password') !== $request->input('password_confirmation')) {
            return back()->withErrors('Las contraseñas no coinciden.');
        }
        $request->validated();
        $register = $this->auth->register($request, $from);
        if ($register[0]){
            return redirect()->route('admin.usuarios')->with('message', $register[1]);
        }
        return back()->withErrors($register[1]);
    }

    public function editUsuario($id)
    {
        $user = User::find($id);
        if (!$user){
            return response()->json([
               'message' => 'El usuario no existe.'
            ], 404);
        }
        return response()->json([
            'user' => $user
        ]);
    }

    public function updateUsuario(RegisterRequest $request, $id){
        if (!$id){
            return back()->withErrors('El "ID" del usuario no fue enviado.');
        }
        $request->validated();
        $update = $this->auth->update($request, $id);
        if ($update[0]){
            return redirect()->route('admin.usuarios')->with('message', $update[1]);
        }
        return back()->withErrors($update[1]);
    }

    public function deleteUsuario($id){}

//    CONFIGURACION
    public function configuracion()
    {
        return Inertia::render('Admin/Configuracion', [
            'settings' =>  Parametros::orderBy('name')->get(),
        ]);
    }
}
