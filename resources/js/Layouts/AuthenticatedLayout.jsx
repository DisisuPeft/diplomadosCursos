import {useEffect, useState} from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiLogout } from "@mdi/js";
import { mdiAccountSchool } from "@mdi/js";
import { mdiSchool } from "@mdi/js";
import { mdiCalendarMonth } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import { mdiAccountTie } from "@mdi/js";
import { mdiAccountGroupOutline } from "@mdi/js";
export default function Authenticated({ user, children }) {
    const [showingNavigation, setShowingNavigation] = useState(false);
    const [showMenuDropdown, setShowMenuDropdown] = useState(false);

    // const handleComponentSelected = (component) => {
    //     if (onComponentSelected) {
    //         // if (component === getComponenteState()) {
    //         //     setSelected(true);
    //         //     // setStyle('bg-sky-500 text-white');
    //         //     localStorage.setItem('saveComponent', component)
    //         // } else {
    //         //     setSelected(false);
    //         //     setStyle('');
    //         // }
    //         onComponentSelected(component);
    //     }
    // };

    // const getComponenteState = () => {
    //     return localStorage.getItem('componente')
    // }

    useEffect(() => {
        // const saveComponent = localStorage.getItem('saveComponent')
        // const componentActive = localStorage.getItem('componente')
        // console.log(saveComponent, componentActive)
        // if (saveComponent === componentActive){
        //     setSelected(true);
        //     setStyle('bg-sky-500 text-white');
        // }
    }, []);
    // console.log(user)
    return (
        <div className="flex h-screen bg-gray-100">
            <div
                className={
                    showingNavigation
                        ? "hidden transition-transform transform -translate-x-full ease-in-out duration-300"
                        : "flex flex-col w-64 bg-white"
                }
            >
                <div className="flex items-center justify-center h-16 bg-sky-500">
                    <span
                        className={
                            showingNavigation
                                ? "hidden"
                                : "text-white font-bold uppercase"
                        }
                    >
                        {" "}
                        {user.profile?.nombre ?? "Sin"} {user.profile?.p_apellido ?? "nombre"}
                    </span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4">
                        <ul className="space-y-1.5">
                            <li>
                                <button className={`flex items-center px-4 py-2 mt-2 rounded-full w-[230px] text-gray-700 hover:bg-sky-500 hover:text-white`}
                                >
                                    <Icon path={mdiAccountSchool} size={1.5} />{" "}
                                    <p className="ml-2">Perfil</p>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]">
                                    <Icon path={mdiSchool} size={1.5} />{" "}
                                    <p className="ml-2">Calificaciones</p>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]">
                                    <Icon path={mdiCalendarMonth} size={1.5} />{" "}
                                    <p className="ml-2">Calendario</p>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]">
                                    <Icon path={mdiCog} size={1.5} />{" "}
                                    <p className="ml-2">Preferencias</p>
                                </button>
                            </li>
                            {user.type_user?.id === 1 && (
                                <li>
                                    <button
                                        className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]"
                                        onClick={() =>
                                            setShowMenuDropdown(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                    >
                                        <Icon path={mdiAccountTie} size={1.5} />{" "}
                                        <p className="ml-2">Administrador</p>
                                    </button>

                                    <div
                                        className={
                                            showMenuDropdown
                                                ? "flex justify-center"
                                                : "w-full overflow-hidden transition-[height] duration-300 hidden"
                                        }
                                    >
                                        <div className="hs-accordion-group ps-3 pt-2">
                                            <ul>
                                                <li
                                                    className="hs-accordion"
                                                    id="users-accordion-sub-1"
                                                >
                                                    <Link
                                                        className={`flex items-center px-4 py-2 mt-2 rounded-full w-[230px] text-gray-700 hover:bg-sky-500 hover:text-white`}
                                                        as="button"
                                                        type="button"
                                                        href={route('admin.usuarios')}
                                                        preserveState
                                                        preserveScroll
                                                    >
                                                        <Icon
                                                            path={
                                                                mdiAccountGroupOutline
                                                            }
                                                            size={1.5}
                                                        />
                                                        <p className="ml-2">
                                                            Usuarios
                                                        </p>
                                                    </Link>

                                                    {/*<div id="users-accordion-sub-1"*/}
                                                    {/*     className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"*/}
                                                    {/*     role="region" aria-labelledby="users-accordion-sub-1">*/}
                                                    {/*    <ul className="pt-2 ps-2">*/}
                                                    {/*        <li>*/}
                                                    {/*            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"*/}
                                                    {/*               href="#">*/}
                                                    {/*                Link 1*/}
                                                    {/*            </a>*/}
                                                    {/*        </li>*/}
                                                    {/*        <li>*/}
                                                    {/*            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"*/}
                                                    {/*               href="#">*/}
                                                    {/*                Link 2*/}
                                                    {/*            </a>*/}
                                                    {/*        </li>*/}
                                                    {/*        <li>*/}
                                                    {/*            <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"*/}
                                                    {/*               href="#">*/}
                                                    {/*                Link 3*/}
                                                    {/*            </a>*/}
                                                    {/*        </li>*/}
                                                    {/*    </ul>*/}
                                                    {/*</div>*/}
                                                </li>
                                                <li>
                                                    <Link
                                                        className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]" as="button" type="button"
                                                        href={route('admin.configuracion')} preserveState preserveScroll
                                                    >
                                                        <Icon path={mdiCog} size={1.5}/>{" "}
                                                        <p className="ml-2">Configuración</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )}
                            {/*<a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">*/}
                            {/*    */}
                            {/*</a>*/}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 shadow-lg">
                    <div className="flex items-center px-4">
                        <button
                            className="text-gray-500 focus:outline-none focus:text-gray-700"
                            onClick={() =>
                                setShowingNavigation(
                                    (previousState) => !previousState
                                )
                            }
                        >
                            <Icon path={mdiMenu} size={1.5} />
                        </button>
                        {/*<input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search">*/}
                    </div>
                    <div className="flex items-center pr-10 p-[10px]">
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            type="button"
                            className="group flex items-center justify-start w-11 h-11 bg-transparent border border-2 border-sky-500 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                        >
                            <div
                                className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="">
                                    <path
                                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                                    ></path>
                                </svg>
                            </div>
                            <div
                                className="absolute left-8 transform translate-x-full opacity-0 text-gray-700 text-sm font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            >
                                Cerrar sesión
                            </div>
                            {/*/!*<button*!/*/}
                            {/*/!*    className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">*!/*/}
                            {/*<p className="hidden md:flex text-lg font-medium text-gray-400 pr-2 hover:text-gray-800">*/}
                            {/*    Cerrar sesión*/}
                            {/*</p>*/}
                            {/*<Icon path={mdiLogout} size={1.5} />*/}
                            {/*/!*</button>*!/*/}
                        </Link>
                    </div>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
