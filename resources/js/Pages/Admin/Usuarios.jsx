import {useEffect, useState} from "react";
import {Head, router} from "@inertiajs/react";
import TablaUsuarios from "./Components/Tables/TableUsuarios";
import Modal from "@/Components/Modal";
import FormUsuarios from "./Components/FormUsuarios.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ToastAlert from "@/alerts/Toast.jsx";
import Loader from "@/alerts/Loader.jsx";
import axios from "axios";
import {Toast} from "@/alerts/alert.js";
import LoaderCircle from "@/alerts/LoaderCircle.jsx";
import TertiaryButton from "@/Components/TertiaryButton.jsx";


export default function Usuarios({ usuarios, auth, flash }) {
    // if (auth.user.type_user !== 1) {
    //     return <div className="text-center p-[300px] bg-red-500 text-white text-[60px] font-bold">No tienes acceso a esta página</div>; // Mostrar mensaje de acceso denegado
    // }
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(false)
    const close = () => {
        setVisible(false);
    };

    const openModal = () => {
        setUser(null)
        setVisible(true)
    }
    const openModalEditar = (modal, userId) => {
        // console.log(modal, userId)
        setLoader(true)
        axios.get(route('admin.usuario.edit', userId))
            .then(response => {
                setUser(response.data.user)
                // console.log(user)
                setVisible(modal)
                setLoader(false)
            }).catch(error => {
                setLoader(false)
                Toast('No se pudo obtener al usuario seleccionado', 'error')
        })
    }
    const stateModal = (value) => {
        setVisible(value)
    }
    useEffect(() => {
        // console.log(user)
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <div className="max-w-[1500px] mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-start h-[50px]">
                        <div className="p-6 text-gray-900 font-bold text-xl">
                            Usuarios
                        </div>
                    </div>
                    <div className="flex justify-center p-[20px]">
                        <TablaUsuarios users={usuarios} openEdit={openModalEditar}/>
                    </div>
                    <div className="flex justify-end p-2">
                        <div className="grid grid-cols-[repeat(auto-fit, minmax(200px, 1fr))] gap-4">
                            <div className="flex justify-center">
                                <TertiaryButton
                                    // className="rounded-lg bg-sky-500 hover:bg-sky-700 text-white p-[10px]"
                                    onClick={openModal}
                                >
                                    Crear usuarios
                                </TertiaryButton>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={visible} onClose={close}>
                    {/* <div className="flex justify-center w-full p-2"> */}
                    <FormUsuarios flash={flash} ifUser={user} closeModal={stateModal}/>
                    {/* </div> */}
                </Modal>

            </div>
            {/*<ToastAlert toast={toast}>Toast</ToastAlert>*/}
            <LoaderCircle visible={loader}/>
        </AuthenticatedLayout>
    );
}
