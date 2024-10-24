<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
        $id = $this->route('id');

        return [
            'nombre' => 'required',
            'p_apellido' => 'required',
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($id),
            ],
            'password' => $id ? 'nullable|min:8' : 'required|min:8',
            //requeribles pero modificables
            's_apellido' => 'nullable|string',  // No es requerido
            'edad' => 'nullable|integer',       // No es requerido
            'fecha_nacimiento' => 'nullable|date', // No es requerido
            'sexo' => 'nullable|string',        // No es requerido
            'nivel_educativo' => 'nullable|string', // No es requerido
            'telefono' => 'nullable|string',    // No es requerido
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
            'password.min' => 'La contraseña debe ser al menos de 8 carácteres',
        ];
    }
}
