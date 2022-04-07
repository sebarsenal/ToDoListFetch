import React from "react";
import { useState } from "react";

function ListaTareas() {
	const [tarea, setTarea] = useState("");

	const captura = (e) => {
		setTarea(e.target.value);
	};

	const enviar = (e) => {
		e.preventDefault();
		setTarea("");
	};

	return (
		<div>
			<input
				value={tarea}
				onChange={captura}
				placeholder="Escribe una tarea"
			/>

			<button onClick={enviar}>Guardar</button>
            <h1>{}</h1>
		</div>
	);
}

export default ListaTareas;
