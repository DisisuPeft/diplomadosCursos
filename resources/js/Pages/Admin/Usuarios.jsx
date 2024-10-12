import { useState } from "react";
import { Head } from "@inertiajs/react";
import TablaUsuarios from "./Components/Tables/TableUsuarios";
import Modal from "@/Components/Modal";
import FormUsuarios from "./Components/Tables/FormUsuarios";

export default function Usuarios({ usuarios, auth }) {
    if (auth.user.type_user !== 1) {
        return <div className="text-center p-[300px] bg-red-500 text-white text-[60px] font-bold">No tienes acceso a esta página</div>; // Mostrar mensaje de acceso denegado
    }
    const [visible, setVisible] = useState(false);

    const close = () => {
        setVisible(false);
    };
    // console.log(usuarios)
    return (
        <div>
            <div className="max-w-[1500px] mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-start h-[50px]">
                    <div className="p-6 text-gray-900 font-bold text-xl">
                        Usuarios
                    </div>
                </div>
                <div className="flex justify-center p-[20px]">
                    <TablaUsuarios users={usuarios} />
                </div>
                <div className="flex justify-end p-2">
                    <div className="grid grid-cols-[repeat(auto-fit, minmax(200px, 1fr))] gap-4">
                        <div className="flex justify-center">
                            <button
                                className="rounded-lg bg-white hover:bg-sky-500 text-gray-700 hover:text-white p-[10px]"
                                onClick={() => {
                                    setVisible(true);
                                }}
                            >
                                Crear usuarios
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={visible} onClose={close}>
                {/* <div className="flex justify-center w-full p-2"> */}
                <FormUsuarios />
                {/* </div> */}
            </Modal>
        </div>
    );
}
