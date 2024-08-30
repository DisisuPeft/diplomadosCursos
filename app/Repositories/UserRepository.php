<?php

namespace App\Repositories;

use App\Interface\UserRepositoryInterface;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserRepository implements UserRepositoryInterface
{
    public function register($req){
        DB::beginTransaction();
        $user = User::create([
            'email' => $req->email,
            'password' => Hash::make($req->password),
            'type_user' => 1,
        ]);
        if ($user){
            $profile = UserProfile::create([
                'nombre' => trim($req->nombre),
                'apellido' => trim($req->p_apellido),
                'user_id' => $user->id,
            ]);
            if ($profile){
                DB::commit();
                return [true, "Usuario registrado exitosamente!", $user];
            }
            DB::rollBack();
            return [false, "Error al registrar el perfil del usuario"];
        }
        DB::rollBack();
        return [false, "Error al registrar al usuario"];
    }
}
