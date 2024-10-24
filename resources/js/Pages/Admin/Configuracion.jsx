import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import TablaUsuarios from "@/Pages/Admin/Components/Tables/TableUsuarios.jsx";
import FormParametros from "@/Pages/Admin/Components/FormParametros.jsx";
import {useState} from "react";
import TertiaryButton from "@/Components/TertiaryButton.jsx";

export default function Configuracion({auth}){

    const [visible, setVisible] = useState(false)

    const openModal = () => {
        setVisible(true)
    }
    const changeVisible = (value) => {
        setVisible(value)
    }
    return (
        <Authenticated user={auth.user}>
            <div>
                <div className="max-w-[1500px] mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-start h-[50px]">
                        <div className="p-6 text-gray-900 font-bold text-xl">
                            Parametros
                        </div>
                    </div>
                    <div className="flex justify-center p-[20px]">

                    </div>
                    <div className="flex justify-end p-2">
                        <div className="grid grid-cols-[repeat(auto-fit, minmax(200px, 1fr))] gap-4">
                            <div className="flex justify-center">
                                <TertiaryButton
                                    onClick={openModal}
                                >
                                    Crear parametro
                                </TertiaryButton>
                            </div>
                        </div>
                    </div>
                </div>
                <FormParametros visible={visible} setVisible={changeVisible}/>
            </div>
        </Authenticated>
    );
}
