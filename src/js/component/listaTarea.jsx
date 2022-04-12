import Ract from "react";
import React, { useState, useEffect } from "react";

import Tarea from "./tarea.jsx";

//const [lista, setLista] = useState([]);

const ListaTareas = (props) => {
	return (
		<div>
			<div>
				{props.lista.map(function (objeto, posicion) {
					return (
						<li key={posicion}>
							{objeto.label}
							{objeto.done}
						</li>
					);
				})}
			</div>
		</div>
	);
};

export default ListaTareas;
