import Ract from "react";
import React, { useState, useEffect } from "react";

import ListaTareas from "./listaTarea.jsx";
import Tarea from "./tarea.jsx";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	useEffect(() => {
		getTareas();
	}, []);

	useEffect(() => {
		putTareas();
	}, []);

	const getTareas = async () => {
		await fetch("https://assets.breatheco.de/apis/fake/todos/user/seba")
			.then((getTareas) => getTareas.json())
			.then((result) => setLista(result))
			.catch((error) => console.log("error", error));
	};

	const putTareas = (async) => {
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: "React Hooks PUT Request Example" }),
		};
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/seba",
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => setPostId(data.id));
	};

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
