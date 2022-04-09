import Ract from "react";
import React, { useState } from "react";

import ListaTareas from "./listaTarea.jsx";
import Tarea from "./tarea.jsx";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	return (
		<div className="container">
			<h1>Nueva tarea</h1>
			<Tarea
				tarea={tarea}
				setTarea={setTarea}
				lista={lista}
				setLista={setLista}
			/>
			<h2>Lista de tareas</h2>
			<ListaTareas lista={lista} setLista={setLista} />
		</div>
	);
};

export default Home;
