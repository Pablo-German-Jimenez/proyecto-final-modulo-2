import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({ usuarioLogueado }) => {

    //Validar si es admin
    if (!usuarioLogueado) {
        return <Navigate to="/" replace />; // Redirigir si no es admin
    } else {
        return <Outlet />; // Admin permitido
    }
};

export default ProtectorAdmin;
