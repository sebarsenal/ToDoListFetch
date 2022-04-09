import Ract from "react";
import React, { useState } from "react";

import Tarea from "./tarea.jsx";

const ListaTareas = (props) => {
	return (
		<div>
			<div>
				{props.lista.map(function (valor, id) {
					return <li key={id}>{valor}</li>;
				})}
			</div>
		</div>
	);
};

export default ListaTareas;
