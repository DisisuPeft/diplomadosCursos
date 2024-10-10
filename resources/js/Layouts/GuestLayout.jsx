import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";
import Modal from "@/Components/Modal.jsx";
import Login from "@/Pages/Auth/Login.jsx";
import Register from "@/Pages/Auth/Register.jsx";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
// import { useEffect, useRef } from "react";
export default function Guest({ children, active, setActiveRegisterNull }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
        setActiveRegisterNull();
        setActiveTab("login");
    };
    const menu = useRef(null);
    // const menuuu = document.getElementById("menu");
    const [activeTab, setActiveTab] = useState("login"); // Estado para mantener la pestaña activa
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleClick = (e) => {
        if (menu.current && !menu.current.contains(e.target)) {
            setShowingNavigationDropdown(false);
        }
    };

    const handleRegister = (newVal) => {
        if (newVal) {
            setActiveTab(newVal);
            openModal();
        }
        // console.log(newVal);
    };

    useEffect(() => {
        handleRegister(active);
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [menu, active]);

    return (
        <>
            <div className="h-screen flex flex-col">
                <header>
                    <nav className="w-full bg-[#050038] py-2 dark:bg-body-dark z-20 h-[110px] fixed">
                        <div className="container mx-auto flex justify-start items-center mt-1">
                            <div className="flex-shrink-0 ml-2 ma-4">
                                <div className="text-center mt-1">
                                    <div>
                                        <Link href="/">
                                            <ApplicationLogo className="block h-16 w-20 fill-current" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* nombre escuela, habria que ver una forma de diseñarlo y ver que venga con el logo, no full copia*/}
                            <div className="flex justify-center mr-10">
                                <div className="fill-current text-white mt-1">
                                    {/* <img className="rounded-md" src={logo} alt="logo"/> */}
                                    <p className="text-2xl">
                                        Academia Nexus
                                        {/*"Academia Nexus" – Sugiere una conexión entre diferentes áreas de conocimiento.*/}
                                    </p>
                                </div>
                            </div>
                            {/* Menu para pantallas grandes */}
                            <div className="hidden md:flex flex-grow justify-start ml-16 mt-2">
                                <ul className="flex space-x-8">
                                    <li>
                                        <Link
                                            className="text-white hover:text-blue-400 transition duration-300 text-md lg:text-lg"
                                            to={"/"}
                                        >
                                            Inicio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-white hover:text-blue-400 transition duration-300 text-md lg:text-lg"
                                            to={"/cursos"}
                                        >
                                            Cursos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Menu para pantallas pequeñas */}
                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center ml-5 justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={
                                    (showingNavigationDropdown
                                        ? "block"
                                        : "hidden") +
                                    " absolute top-full right-0 w-[200px] bg-white sm:hidden shadow-lg"
                                }
                                ref={menu}
                            >
                                <div className="pt-2 pb-3 space-y-1">
                                    <Link
                                        to={route("main")}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                                        as="button"
                                    >
                                        Inicio
                                    </Link>
                                </div>

                                <div className="pt-4 pb-1 border-t border-gray-200">
                                    <div className="mt-3 space-y-1">
                                        <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                                            Cursos
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                                            onClick={openModal}
                                        >
                                            Iniciar sesión
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex lg:justify-center mr-10 mt-[10px]">
                                <button
                                    className="rounded-md flex items-center p-4"
                                    onClick={openModal}
                                >
                                    <p className="text-white text-md lg:text-lg">
                                        Iniciar sesión
                                    </p>
                                </button>
                            </div>
                            <Modal show={showModal} onClose={closeModal}>
                                {/*<div className="grid grid-rows-1">*/}
                                {/*    <div className="flex justify-center p-10">*/}
                                {/*        <img className="rounded-md h-[50px] ml-5" src="/storage/img/logo.jpg"*/}
                                {/*             alt="logo"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/* <div className="grid grid-rows-1 flex justify-end p-2">
                                    <button
                                        className="rounded-full hover:bg-gray-400 p-2"
                                        onClick={closeModal}
                                    >
                                        <Icon path={mdiClose} size={1.5} />
                                    </button>
                                </div> */}
                                <div className="flex justify-center space-x-4 p-5">
                                    <div
                                        className={`cursor-pointer py-2 px-4 rounded-lg ${
                                            activeTab === "login"
                                                ? "bg-sky-500 text-white"
                                                : "bg-gray-100 text-gray-500"
                                        }`}
                                        onClick={() => handleTabClick("login")}
                                    >
                                        Iniciar sesión
                                    </div>
                                    <div
                                        className={`cursor-pointer py-2 px-4 rounded-lg ${
                                            activeTab === "register"
                                                ? "bg-sky-500 text-white"
                                                : "bg-gray-100 text-gray-500"
                                        }`}
                                        onClick={() =>
                                            handleTabClick("register")
                                        }
                                    >
                                        Registrarse
                                    </div>
                                </div>
                                <div className="mt-4 p-10">
                                    {activeTab === "login" && <Login></Login>}
                                    {activeTab === "register" && (
                                        <Register></Register>
                                    )}
                                </div>
                            </Modal>
                        </div>
                    </nav>
                </header>
                <main className="pt-[105px]">{children}</main>
            </div>
        </>
    );
}
