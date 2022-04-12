import Ract from "react";
import React, { useState } from "react";

//const [tarea, setTarea] = useState("");

const Tarea = (props) => {
	const limpiar = (e) => {
		props.setTarea("");
	};

	return (
		<div>
			<input
				type="text"
				value={props.tarea}
				onChange={(e) => props.setTarea(e.target.value)}
				placeholder="Ingrese tarea"
			/>
			<button
				className="btn btn-success col"
				onClick={() => {
					props.setLista([
						...props.lista,
						{ label: props.tarea, done: false },
					]);
					console.log(props.tarea);
					limpiar();
				}}>
				Guardar
			</button>
			<br />
			<p>{props.tarea}</p>
		</div>
	);
};

export default Tarea;
