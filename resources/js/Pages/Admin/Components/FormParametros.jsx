import Modal from "@/Components/Modal.jsx";
import {useState} from "react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import Tooltip from "@/Components/Tooltip.jsx";
import Icon from "@mdi/react";
import {mdiHelp} from "@mdi/js";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import LoaderCircle from "@/alerts/LoaderCircle.jsx";
import {useForm} from "@inertiajs/react";


export default function FormParametros({visible, setVisible, settings}){

    const [loader, setLoader] = useState(false)
    const activar = [
        {id:1, text:"Si"},
        {id:0, text:"No"},
    ]
    const closeModal = () => {
        setVisible(false)
    }

    const {data, setData, post, reset, processing, errors} = useForm({
        name: "",
        active: 0,
        duracion: 0,
    })

    const submit = (e) => {
        e.preventDefault()
        setLoader(true)

        console.log(data)
    }
    return (
        <Modal show={visible} onClose={closeModal}>
            <div className="p-[100px]">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nombre"/>

                        <TextInput
                            id="name"
                            name="name"
                            value={data.nombre}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2"/>
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="activate" value="Activar parametro"/>

                        <select id="activar" className="w-full mt-1 block" value={data.active || 0}
                                onChange={(e) => setData("active", parseInt(e.target.value, 10))}>
                            <option value="">Seleccione una opción</option>
                            {activar.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.text}
                                </option>
                            ))}
                        </select>

                        <InputError message={errors.active} className="mt-2"/>
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="duration" value="Duración en días"/>

                        <TextInput
                            id="duration"
                            type="number"
                            name="duration"
                            value={data.duracion}
                            className="mt-1 block w-full"
                            autoComplete="duration"
                            isFocused={true}
                            onChange={(e) => setData("duracion", parseInt(e.target.value))}
                            required
                        />

                        <InputError message={errors.active} className="mt-2"/>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        {/*<Link*/}
                        {/*    href={route('login')}*/}
                        {/*    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
                        {/*>*/}
                        {/*    */}
                        {/*</Link>*/}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Guardar
                        </PrimaryButton>
                    </div>
                </form>
                {/*<Loader visible={loader}/>*/}
                <LoaderCircle visible={loader}/>
            </div>
        </Modal>
    );
}
