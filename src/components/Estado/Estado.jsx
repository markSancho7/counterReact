import { useState } from 'react';

const MiComponente = () => {
	// Estado inicial
	const [miEstado, setMiEstado] = useState(true);

	// Función para cambiar el estado
	const cambiarEstado = () => {
		setMiEstado(!miEstado); // Cambia el estado a su valor opuesto
	};

	return (
		<div>
			<p>El valor actual es: {miEstado.toString()}</p>
			<button onClick={cambiarEstado}>Cambiar Estado</button>
		</div>
	);
};

export default MiComponente;
