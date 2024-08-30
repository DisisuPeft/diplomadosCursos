<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('type_user')->insert([
           'name' => 'Administrador',
        ]);
        DB::table('type_user')->insert([
            'name' => 'Docentes',
        ]);
        DB::table('type_user')->insert([
           'name' => 'Alumnos',
        ]);
    }
}
