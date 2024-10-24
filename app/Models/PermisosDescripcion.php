<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermisosDescripcion extends Model
{
    use HasFactory;

    protected $table = 'permisos_descripcion';

    protected $fillable = ['descripcion'];

}
