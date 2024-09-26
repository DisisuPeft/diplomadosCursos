import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Icon from "@mdi/react";
import {mdiMenu} from "@mdi/js";
import { mdiLogout } from '@mdi/js';
import { mdiAccountSchool } from '@mdi/js';
import { mdiSchool } from '@mdi/js';
import { mdiCalendarMonth } from '@mdi/js';
import { mdiCog } from '@mdi/js';
import { mdiAccountTie } from '@mdi/js';
import { mdiAccountGroupOutline } from '@mdi/js';
export default function Authenticated({ user, onComponentSelected, children }) {
    const [showingNavigation, setShowingNavigation] = useState(false);
    const [showMenuDropdown, setShowMenuDropdown] = useState(false);
    const handleComponentSelected = (component) => {
        if (onComponentSelected){
            onComponentSelected(component)
        }
    }
    // console.log(showMenuDropdown)
    return (
        <div className="flex h-screen bg-gray-100">
            <div className={(showingNavigation ? 'hidden transition-transform transform -translate-x-full ease-in-out duration-300' : 'flex flex-col w-64 bg-white')}>
                <div className="flex items-center justify-center h-16 bg-sky-500">
                    <span className={(showingNavigation ? 'hidden': 'text-white font-bold uppercase')}> {user.profile.nombre} {user.profile.p_apellido}</span>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4">
                        <ul className="space-y-1.5">
                            <li>
                                <button
                                   className="flex items-center px-4 py-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]">
                                    <Icon path={mdiAccountSchool} size={1.5}/> <p className="ml-2">Perfil</p>
                                </button>
                            </li>
                            <li>
                                <button
                                   className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]">
                                    <Icon path={mdiSchool} size={1.5}/> <p className="ml-2">Calificaciones</p>
                                </button>
                            </li>
                            <li>
                                <button
                                   className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]">
                                    <Icon path={mdiCalendarMonth} size={1.5}/> <p className="ml-2">Calendario</p>
                                </button>
                            </li>
                            <li>
                                <button
                                   className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]">
                                    <Icon path={mdiCog} size={1.5}/> <p className="ml-2">Preferencias</p>
                                </button>
                            </li>
                            <li>
                                <button
                                   className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]" onClick={() => setShowMenuDropdown((previousState) => !previousState)}>
                                    <Icon path={mdiAccountTie} size={1.5}/> <p className="ml-2">Administrador</p>
                                </button>

                                <div className={(showMenuDropdown ? 'flex justify-center': 'w-full overflow-hidden transition-[height] duration-300 hidden')}>
                                    <div className="hs-accordion-group ps-3 pt-2">
                                        <ul>
                                            <li className="hs-accordion" id="users-accordion-sub-1">
                                                <button
                                                    className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]"
                                                    onClick={() => handleComponentSelected('usuarios')}
                                                >
                                                    <Icon path={mdiAccountGroupOutline} size={1.5}/>
                                                    <p className="ml-2">Usuarios</p>
                                                </button>

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
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/*<a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">*/}
                            {/*    */}
                            {/*</a>*/}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-700"
                                onClick={() => setShowingNavigation((previousState) => !previousState)}>
                            <Icon path={mdiMenu} size={1.5}/>
                        </button>
                        {/*<input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search">*/}
                    </div>
                    <div className="flex items-center pr-10">

                        <Link href={route('logout')} method="post" as="button" className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">
                            {/*<button*/}
                            {/*    className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">*/}
                                <p className="hidden md:flex text-lg font-medium text-gray-400 pr-2 hover:text-gray-800">
                                    Cerrar sesión
                                </p>
                                <Icon path={mdiLogout} size={1.5}/>
                            {/*</button>*/}
                        </Link>
                    </div>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>

        </div>
    );
}
