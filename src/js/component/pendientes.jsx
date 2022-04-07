import React from "react";
import { useState } from "react";

import ListaTareas from "./listaTareas.jsx";

function Pendientes() {
    const [pendientes, setPendientes] = useState("");

    const agregaTarea = pendientes => {
        return;
    }

    const newPendientes = [ListaTareas, ...Pendientes];
    setPendientes(newPendientes);
    console.log(...Pendientes);
}

