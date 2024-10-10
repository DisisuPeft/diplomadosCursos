import react from "react";

export default function TablaUsuarios({ users }) {
    if (users.length === 0) {
        return (
            <div className="text-center text-bold text-xl bg-orange-600 rounded-lg p-[30px] text-white">
                No existen usuarios.
            </div>
        );
    }

    return (
        <div>
            <table className="border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600">Nombre</th>
                        <th className="border border-slate-600">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((usuario) => (
                        <tr>
                            <td className="border border-slate-700">
                                {usuario.perfil?.nombre +
                                    " " +
                                    usuario.perfil?.p_apellido +
                                    " " +
                                    usuario.perfil?.s_apeliido}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
