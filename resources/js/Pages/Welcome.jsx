import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout.jsx";
import "../estilos/MainStyles.css";
import { useState } from "react";
export default function Welcome({ auth }) {
    const match = window.matchMedia("(max-width: 768px)");
    const isMobile = match.matches;
    const [activeRegister, setActiveRegister] = useState(null);
    const backImage = {
        background: isMobile
            ? "url(/storage/img/mainimage.png)"
            : "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100%), url(/storage/img/mainimage.png)",
        backgroundSize: isMobile ? "contain" : "cover",
        backgroundRepeat: "no-repeat",
    };
    const handleClickRegister = () => {
        setActiveRegister("register");
        // console.log(active);
    };
    const handleSetNull = () => {
        setActiveRegister(null);
    };
    return (
        <Guest active={activeRegister} setActiveRegisterNull={handleSetNull}>
            <div
                className="grid grid-rows-1 flex justify-start lg:w-full md:w-[900px] md:h-[900px] lg:h-[800px]"
                style={backImage}
            >
                {/*<div className="flex justify-center">*/}
                <section className="mt-10 p-[50px] md:p-[20px] lg:p-[100px] max-w-[500px] mt-[200px] md:mt-[200px] h-[100px]">
                    <h2 className="text-start mb-[25px] text-2xl text-gray-700 mb-2 font-bold text-[40px] leading-6 md:text-white md:ml-10 lg:ml-0">
                        Aprende con los mejores.
                    </h2>
                    <ul className="grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))] gap-4">
                        <li>
                            <div className="text-lg text-gray-700 md:text-white p-2 md:p-10 md:w-[400px] lg:w-[500px] lg:p-0">
                                {/* Accede a una amplia variedad de cursos
                                impartidos por expertos en distintas áreas. */}
                                Potencia tus habilidades y amplía tu
                                conocimiento con nuestra variedad de cursos
                                impartidos por expertos en distintas áreas
                            </div>
                        </li>
                        <li>
                            <div className="ml-0 md:ml-10 lg:ml-0 md:mt-[50px]">
                                <button
                                    className="rounded-full flex justify-center items-center p-4 bg-sky-500 md:w-full"
                                    onClick={handleClickRegister}
                                >
                                    <div className="flex justify-center items-center">
                                        <p className="text-white text-center text-md lg:text-lg p-2">
                                            Registrate gratis
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </li>
                    </ul>
                    {/*<div className="text-base text-gray-700">*/}
                    {/*    Accede a una amplia variedad de cursos impartidos por expertos en distintas áreas.*/}
                    {/*    Potencia tus habilidades y amplía tu conocimiento con nuestro enfoque práctico y*/}
                    {/*    personalizado.*/}
                    {/*</div>*/}
                    {/*Accede a una amplia variedad de cursos impartidos por expertos en distintas áreas. Potencia tus habilidades y amplía tu conocimiento con nuestro enfoque práctico y personalizado.*/}
                </section>
                {/*</div>*/}
                {/*<div className="flex justify-center">*/}
                {/*    <div className="grid grid-cols-1 lg:grid-cols-2 h-[200px]">*/}
                {/*        <div className="flex justify-center items-center">*/}
                {/*            /!*<h1 className="text-gray-700 font-serif font-bold text-2xl">Aprende con los mejores.</h1>*!/*/}
                {/*            <section className="max-w-[800px] mt-0 mx-auto p-[50px] lg:p-[100px]">*/}
                {/*                <h2*/}
                {/*                    className="decoration-pink-500 text-start mb-[30px] md:mb-[30px] lg:mb-[20px] text-xl text-gray-700 mb-2 font-bold text-[30px] leading-6"*/}
                {/*                >*/}
                {/*                    Aprende con los mejores.*/}
                {/*                </h2>*/}
                {/*                <ul className="grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))] gap-4">*/}
                {/*                    <li>*/}
                {/*                        <div className="text-base text-gray-700 p-2">*/}
                {/*                            Accede a una amplia variedad de cursos impartidos por expertos en distintas*/}
                {/*                            áreas.*/}
                {/*                            Potencia tus habilidades y amplía tu conocimiento con nuestro enfoque*/}
                {/*                            práctico y*/}
                {/*                            personalizado.*/}
                {/*                        </div>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*                /!*<div className="text-base text-gray-700">*!/*/}
                {/*                /!*    Accede a una amplia variedad de cursos impartidos por expertos en distintas áreas.*!/*/}
                {/*                /!*    Potencia tus habilidades y amplía tu conocimiento con nuestro enfoque práctico y*!/*/}
                {/*                /!*    personalizado.*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*Accede a una amplia variedad de cursos impartidos por expertos en distintas áreas. Potencia tus habilidades y amplía tu conocimiento con nuestro enfoque práctico y personalizado.*!/*/}
                {/*            </section>*/}
                {/*        </div>*/}
                {/*        <div className="flex justify-center items-center">*/}
                {/*            /!*<h1 className="text-gray-700 font-serif font-bold text-2xl">Aprende con los mejores.</h1>*!/*/}
                {/*            <img*/}
                {/*                src="/storage/img/diseniodealumnos2.jpeg"*/}
                {/*                className="h-[400px] rounded-full m-4"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </Guest>
    );
}
// text-gray-700 font-serif font-bold text-2xl
