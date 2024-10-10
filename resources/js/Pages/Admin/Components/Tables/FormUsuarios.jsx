import { useForm } from "@inertiajs/react";
import react from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function FormUsuarios({}) {
    const { data, setData, post, processing, errors, reset, put } = useForm({
        nombre: "",
        p_apellido: "",
        s_apellido: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <div className="p-[100px]">
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.nombre}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("nombre", e.target.value)}
                        required
                    />

                    <InputError message={errors.nombre} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="p_apellido" value="Apellido paterno" />

                    <TextInput
                        id="p_apellido"
                        name="p_apellido"
                        value={data.p_apellido}
                        className="mt-1 block w-full"
                        autoComplete="p_apellido"
                        isFocused={true}
                        onChange={(e) => setData("p_apellido", e.target.value)}
                        required
                    />

                    <InputError message={errors.p_apellido} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="s_apellido" value="Apellido materno" />

                    <TextInput
                        id="s_apellido"
                        name="s_apellido"
                        value={data.s_apellido}
                        className="mt-1 block w-full"
                        autoComplete="s_apellido"
                        isFocused={true}
                        onChange={(e) => setData("s_apellido", e.target.value)}
                        required
                    />

                    <InputError message={errors.p_apellido} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmar contraseña"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/*<Link*/}
                    {/*    href={route('login')}*/}
                    {/*    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
                    {/*>*/}
                    {/*    */}
                    {/*</Link>*/}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrar
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
