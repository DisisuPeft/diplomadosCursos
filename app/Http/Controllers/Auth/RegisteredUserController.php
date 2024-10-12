<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Interface\UserRepositoryInterface;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Repositories\UserRepository;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function __construct(protected UserRepositoryInterface $auth)
    {

    }

    public function store(RegisterRequest $request, $from): RedirectResponse
    {
        $request->validated();

        $register = $this->auth->register($request, $from);
//        dd($register);
        if ($register[0]){
            $log = $this->auth->activity([$register[2]->id, 1, "Nuevo usuario registrado"]);

            if($log){
                event(new Registered($register[2]));

                return back()->with("message", $register[0]);
            }
            return back()->withErrors("Error al almacenar el registro. Debe ir al apartado de 'Soporte'.");
        }else{
            return back()->withErrors($register[1]);
        }
    }
}
