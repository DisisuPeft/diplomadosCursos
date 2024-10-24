<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

// Route::middleware('');

Route::prefix('administrador')->middleware(['type:Administrador'])->group(function () {
    //usuarios
    Route::get('/usuarios', [AdminController::class, 'usuarios'])->name('admin.usuarios');
    Route::post('/registro/{from}', [AdminController::class, 'registro'])->name('admin.registro');
    Route::get('/usuario/editar/{id}', [AdminController::class, 'editUsuario'])->name('admin.usuario.edit');
    Route::post('/usuario/update/{id}', [AdminController::class, 'updateUsuario'])->name('admin.usuario.update');

    //configuracion
    Route::get('/configuracion', [AdminController::class, 'configuracion'])->name('admin.configuracion');
});



