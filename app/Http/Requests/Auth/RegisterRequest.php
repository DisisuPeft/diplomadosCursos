<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required',
            'p_apellido' => 'required',
            'email' => 'required|email|unique:'.User::class,
            'password' => 'required|min:8',
//            's_apellido' => 'nullable|string',  // No es requerido
//            'edad' => 'nullable|integer',       // No es requerido
//            'fecha_nacimiento' => 'nullable|date', // No es requerido
//            'sexo' => 'nullable|string',        // No es requerido
//            'nivel_educativo' => 'nullable|string', // No es requerido
//            'telefono' => 'nullable|string',    // No es requerido
        ];
    }

    public function messages(): array {
        return [
            'nombre.required' => 'El campo nombre es obligatorio',
            'p_apellido.required' => 'El campo apellido es obligatorio',
            'email.required' => 'El campo email es obligatorio',
            'email.email' => 'El campo email no es valido',
            'email.unique' => 'El email ya esta registrado',
            'password.required' => 'La contraseña es obligatoria',
        ];
    }
}
