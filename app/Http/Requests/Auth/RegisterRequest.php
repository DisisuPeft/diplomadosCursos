<?php

namespace App\Http\Requests;

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
