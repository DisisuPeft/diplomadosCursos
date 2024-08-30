import { Link, Head } from '@inertiajs/react';
import Guest from "@/Layouts/GuestLayout.jsx";
import '../estilos/MainStyles.css'
export default function Welcome({ auth }) {
    return (
        <Guest>
            <div className="myimage mb-[120px]">
                <div
                    className="flex justify-start items-end h-[400px] md:h-[400px] lg:h-[500px] w-[500px] ml-14"
                >
                    <div className="flex justify-center mt-6 ma-5">
                        <p
                            className="text-white text-4xl pa-4 md:text-4xl text-start"
                        >
                            Conviértete en el profesional que siempre soñaste
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-1 p-10 m-10">
                <div className="flex justify-center p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex justify-center bg-blue-950 rounded-xl shadow-xl">
                            <p className="text-xl font-bold text-center text-white p-4 rounded-lg shadow-lg">
                                Nuestros diplomados son la mejor opción para avanzar en tu carrera
                                profesional. ¡Descubre la excelencia académica y las oportunidades que te esperan!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
