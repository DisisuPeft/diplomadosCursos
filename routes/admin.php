<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

// Route::middleware('');

Route::prefix('administrador')->middleware(['type:Administrador'])->group(function () {
    Route::get('/usuarios', [AdminController::class, 'usuarios'])->name('admin.usuarios');
    Route::post('/registro/{from}', [AdminController::class, 'registro'])->name('admin.registro');
});



