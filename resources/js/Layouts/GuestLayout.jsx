import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import {useState} from "react";
import Modal from "@/Components/Modal.jsx";
import Login from "@/Pages/Auth/Login.jsx";
import Register from "@/Pages/Auth/Register.jsx";
export default function Guest({ children }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const [activeTab, setActiveTab] = useState('login'); // Estado para mantener la pestaña activa

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="h-screen flex flex-col">
                <header>
                    <nav className="w-full bg-white py-2 dark:bg-body-dark z-20 h-[100px] fixed">
                        <div className="container mx-auto flex justify-between items-center mt-1">
                            <div className="flex-shrink-0 ml-10 ma-4 md:ml-0">
                                <div className="text-center mt-1">
                                    <div>
                                        <Link href="/">
                                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* nombre escuela, habria que ver una forma de diseñarlo y ver que venga con el logo, no full copia*/}
                            <div className="flex justify-center ml-3">
                                <div className="fill-current text-gray-800 mt-1">
                                    {/* <img className="rounded-md" src={logo} alt="logo"/> */}
                                    <p>
                                        Aqui insertar nombre del instituto
                                    </p>
                                </div>
                            </div>
                            {/* Menu para pantallas grandes */}
                            <div className="hidden lg:flex flex-grow justify-start ml-16 mt-2">
                                <ul className="flex space-x-8">
                                    <li>
                                        <Link
                                            className="text-black hover:text-blue-400 transition duration-300 text-lg" to={'/'}
                                        >
                                            Inicio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-black hover:text-blue-400 transition duration-300 text-lg" to={'/cursos'}
                                        >
                                            Cursos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:flex lg:justify-end mr-10">
                                <button className="rounded-md flex items-center p-4" onClick={openModal}>
                                    <p className="text-lg hover:text-blue-400">Iniciar sesión</p>
                                </button>
                            </div>
                            <Modal show={showModal} onClose={closeModal}>
                                {/*<div className="grid grid-rows-1">*/}
                                {/*    <div className="flex justify-center p-10">*/}
                                {/*        <img className="rounded-md h-[50px] ml-5" src="/storage/img/logo.jpg"*/}
                                {/*             alt="logo"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="flex justify-center  space-x-4 p-5">
                                    <div
                                        className={`cursor-pointer py-2 px-4 rounded-lg ${
                                            activeTab === 'login'
                                                ? 'bg-sky-500 text-white'
                                                : 'bg-gray-100 text-gray-500'
                                        }`}
                                        onClick={() => handleTabClick('login')}
                                    >
                                        Iniciar sesión
                                    </div>
                                    <div
                                        className={`cursor-pointer py-2 px-4 rounded-lg ${
                                            activeTab === 'register'
                                                ? 'bg-sky-500 text-white'
                                                : 'bg-gray-100 text-gray-500'
                                        }`}
                                        onClick={() => handleTabClick('register')}
                                    >
                                        Registrarse
                                    </div>
                                </div>
                                <div className="mt-4 p-10">
                                    {activeTab === 'login' &&  <Login></Login>}
                                    {activeTab === 'register' &&  <Register></Register>}
                                </div>
                            </Modal>
                        </div>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}
