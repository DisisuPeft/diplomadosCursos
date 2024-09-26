<?php

namespace App\Repositories;

use App\Interface\UserRepositoryInterface;
use App\Models\User;
use App\Models\UserActivityLog;
use App\Models\UserProfile;
use Carbon\Carbon;
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

    public function activity($data): bool
    {
        DB::beginTransaction();
        $date = Carbon::now();
        $insert = [
            'user_id' => $data[0],
            'status' => $data[1],
            'activity' => $data[1] == 1 ? 'login' : 'logout',
            'date_time' => $date->toDate()
        ];
        $log = DB::table('user_activity_logs')->insert($insert);
        if ($log){
            DB::commit();
            return true;
        }
        DB::rollBack();
        return false;
    }
}
