<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permisos extends Model
{
    use HasFactory;

    protected $table = 'permisos';
    protected $fillable = [
        'user_id', 'rol_id', 'permiso_id', 'ver', 'editar', 'eliminar', 'imprimir'
    ];
}
