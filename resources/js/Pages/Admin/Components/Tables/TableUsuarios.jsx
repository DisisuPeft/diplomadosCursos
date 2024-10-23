import react from "react";

export default function TablaUsuarios({ users }) {
    if (users.length === 0) {
        return (
            <div className="text-center text-bold text-xl bg-orange-600 rounded-lg p-[30px] text-white">
                No existen usuarios.
            </div>
        );
    }

    // console.log(users)
    return (
        <div>
            <table className="border-collapse border border-slate-500">
                <thead>
                <tr>
                    <th className="border border-slate-600 p-2 text-center">Nombre</th>
                    <th className="border border-slate-600 p-2 text-center">Edad</th>
                    <th className="border border-slate-600 p-2 text-center">Nivel educativo</th>
                    <th className="border border-slate-600 p-2 text-center">Numero telefonico</th>
                    <th className="border border-slate-600 p-2 text-center">Genero</th>
                    <th className="border border-slate-600 p-2 text-center">Email</th>
                    <th className="border border-slate-600 p-2 text-center">Tipo de usuario</th>
                    <th className="border border-slate-600 p-2 text-center">Actividad</th>
                </tr>
                </thead>
                <tbody>
                {users.map((usuario) => (
                    <tr key={usuario.id}>
                        <td className="border border-slate-700 p-2 text-sm">
                            {`${usuario.profile?.nombre ?? ""} ${usuario.profile?.p_apellido ?? ""} ${usuario.profile?.s_apellido ?? ""}`}
                        </td>
                        <td className="border border-slate-700 p-2 text-sm">
                            {`${usuario?.profile?.edad ?? ""}`}
                        </td>
                        <td className="border border-slate-700 p-2 text-sm">
                            {`${usuario?.profile?.nivel_educativo ?? ""}`}
                        </td>
                        <td className="border border-slate-700 p-2 text-sm">
                            {`${usuario?.profile?.telefono ?? ""}`}
                        </td>
                        <td className="border border-slate-700 p-2 text-sm">
                            {`${usuario?.profile?.sexo ?? ""}`}
                        </td>
                        <td className="border border-slate-700 p-2 text-sm">
                            {`${usuario?.email ?? ""}`}
                        </td>
                        <td className="border border-slate-700 p-2 text-sm">
                            {`${usuario.type_user?.name ?? ""}`}
                        </td>
                        <td className="border border-slate-700 p-2 text-sm">
                            {usuario.user_logs && usuario.user_logs.length > 0 && (
                                <div
                                    className={`w-4 h-4 mx-auto ${usuario.user_logs[0].status === 99 ? 'bg-red-500' : 'bg-green-500'}`}>
                                    {/* Si quieres mostrar el estado dentro del div */}
                                </div>
                            )}
                            <span className="flex justify-center">{usuario.user_logs[0].status === 99 ? 'Inactivo' : usuario.user_logs[0].activity}</span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
