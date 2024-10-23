import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import ComponentMap from "@/Components/ComponentMap.jsx";

export default function Dashboard({ auth, flash }) {


    // const [selectedComponent, setSelectedComponent] = useState();

    useEffect(() => {
        // localStorage.setItem("componente", selectedComponent);
    }, []);

    // const renderComponent = () => {
    //     const SelectedComponent = ComponentMap[selectedComponent];
    //     return (
    //         <SelectedComponent auth={auth}/> || (
    //             <div className="p-6 text-gray-900">Bienvenido!</div>
    //         )
    //     );
    //     // return (
    //     //     ComponentMap[selectedComponent] || (
    //     //         <div className="p-6 text-gray-900">Bienvenido!</div>
    //     //     )
    //     // );
    // };
    return (
        <AuthenticatedLayout
            user={auth.user}
            // onComponentSelected={setSelectedComponent}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            {/*<div className="py-12">*/}
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">Bienvenido!</div>
                </div>
            </div>
            {/*</div>*/}
        </AuthenticatedLayout>
    );
}
