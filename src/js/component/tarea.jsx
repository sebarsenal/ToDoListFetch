import Ract from "react";
import React, { useState } from "react";

const Tarea = () => {
	const [tarea, setTarea] = useState("");

	return (
		<div>
			<input
				type="text"
				value={tarea}
				onChange={(e) => setTarea(e.target.value)}
				placeholder="Ingrese tarea"
			/>
			<button
				className="btn btn-success col"
				onClick={() => {
					setTarea(tarea);
					console.log(tarea);
				}}>
				Guardar
			</button>
			<br />
			<p>{tarea}</p>
		</div>
	);
};

export default Tarea;
