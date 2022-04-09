import Ract from "react";
import React, { useState } from "react";

const Tarea = (props) => {
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
					props.setLista([...props.lista, props.tarea]);
					console.log(props.tarea);
				}}>
				Guardar
			</button>
			<br />
			<p>{props.tarea}</p>
		</div>
	);
};

export default Tarea;
