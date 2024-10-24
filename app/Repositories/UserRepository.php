<?php

namespace App\Repositories;

use App\Interface\UserRepositoryInterface;
use App\Models\User;
use App\Models\UserActivityLog;
use App\Models\UserProfile;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
//use App\Models\UserProfile;

class UserRepository implements UserRepositoryInterface
{
    //la idea es que venga un parametro que indique que se esta registrando desde el welcome o el administrador
    public function register($req, $from){
        DB::beginTransaction();
//        dd($from == "register" );
        $user = User::create([
            'email' => $req->email,
            'password' => Hash::make($req->password),
            'type_user' => $from == "register" ? 3 : $req->input('type_user'),
        ]);
//        dd($user);
        if ($user){
            $profile = UserProfile::create([
                'nombre' => trim($req->nombre),
                'p_apellido' => trim($req->p_apellido),
                's_apellido' => trim($req->s_apellido),
                'edad' => $req->input('edad'),
                'fecha_nacimiento' => $req->input('fecha_nacimiento'),
                'sexo' => $req->input('sexo'),
                'nivel_educativo' => $req->input('nivel_educativo'),
                'telefono' => $req->input('telefono'),
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

    public function update($req, $id)
    {
        DB::beginTransaction();
        $user = User::find($id);
        if ($user){
            $updateUser = $user->update([
                'email' => $req->email,
                'password' => $req->filled('password') ? Hash::make($req->password) : $user->password,
                'type_user' => $req->type_user,
            ]);
            $profile = UserProfile::where('user_id', $user->id)->first();
            if ($profile){
                $updateProfile = $profile->update([
                    'nombre' => trim($req->nombre),
                    'p_apellido' => trim($req->p_apellido),
                    's_apellido' => trim($req->s_apellido),
                    'edad' => $req->edad,
                    'fecha_nacimiento' => $req->fecha_nacimiento,
                    'sexo' => $req->sexo,
                    'nivel_educativo' => $req->nivel_educativo,
                    'telefono' => $req->telefono,
                ]);
                if ($updateUser && $updateProfile){
                    DB::commit();
                    return [true, "Usuario actualizado exitosamente!", $user];
                }
                DB::rollBack();
                return [false, "Error al actualizar el perfil y usuario"];
            }
            DB::rollBack();
            return [false, "El perfil del usuario no fue encontrado en los registros"];
        }
        DB::rollBack();
        return [false, "Usuario no encontrado en los registros"];

    }

    public function activity($data): bool
    {
        DB::beginTransaction();
        $date = Carbon::now();
        $log = UserActivityLog::create([
            'user_id' => $data[0],
            'status' => $data[1],
            'activity' => $data[2],
            'date_time' => $date->toDate()
        ]);
        if ($log){
            DB::commit();
            return true;
        }
        DB::rollBack();
        return false;
    }
}
