<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'email' => 'defp_99@hotmail.com',
            'password' => Hash::make('daniel123'),
            'type_user' => 1
        ]);
        DB::table('user_profile')->insert([
            'nombre' => 'Daniel',
            'p_apellido' => 'Fernandez',
            'user_id' => $user->id
        ]);
    }
}
