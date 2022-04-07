import Ract from "react";
import React, { useState } from "react";

import ListaTareas from "./listaTarea.jsx";
import Tarea from "./tarea.jsx";

const Home = () => {
	return (
		<div className="container">
			<h1>Nueva tarea</h1>
			<Tarea />
			<h2>Lista de tareas</h2>
			<ListaTareas />
		</div>
	);
};

export default Home;
