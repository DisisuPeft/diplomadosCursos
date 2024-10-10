<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Interface\UserRepositoryInterface;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{

    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }
//    public function create(): Response
//    {
//        return Inertia::render('Auth/Login', [
//            'canResetPassword' => Route::has('password.request'),
//            'status' => session('status'),
//        ]);
//    }

    /**
     * Que quede claro que seguire trabajando en esto de los registros porque si los creo y 3 veces
     */
    public function store(LoginRequest $request): RedirectResponse
    {
//        $request->authenticate();
        $request->validated();

        $request->ensureIsNotRateLimited();

        if (! Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
            RateLimiter::hit($request->throttleKey());

            return back()->withErrors([
                'email' => 'El email y contraseña ingresados no coincide. Verifica si te encuentras registrado.',
            ]);
        }

        RateLimiter::clear($request->throttleKey());

        $request->session()->regenerate();

//        Session::put();
        $user = Auth::user();

        Session::put('user', $user);
        //1 activo, 99 para no activo                     //id user, status, activity                      
        $put_activity = $this->userRepository->activity([$user->id, 1, 'Inicio de sesión']);
//        dd($put_activity);
        if ($put_activity) {
            return redirect()->intended(RouteServiceProvider::HOME);
        }else{
            return back()->withErrors('Ocurrio un error al registar al usuario en el registro de seguimiento. Informar en el apartado de soporte');
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = Session::get('user');

        $forget_activity = $this->userRepository->activity([$user->id, 99, 'Cierre de sesión']);

        if ($forget_activity) {
            Session::forget('user');

            Auth::guard('web')->logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            return redirect('/');
        }else{
            return back()->withErrors('Ocurrio un error al registar al usuario en la sesión.');
        }
    }
}
