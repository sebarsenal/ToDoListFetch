import Ract from "react";
import React, { useState } from "react";

import Tarea from "./tarea.jsx";

const ListaTareas = (props) => {
	return (
		<div>
			<p>
				<div>
					{props.lista.map(function (valor, id) {
						return <li>{valor}</li>;
					})}
				</div>
			</p>
		</div>
	);
};

export default ListaTareas;
