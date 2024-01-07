import { useState } from 'react';
import { StyledCube } from './styles';

const Cube = () => {
	const [state, setState] = useState('red');

	const changeColor = () => {
		setState(state === 'green' ? 'red' : 'green');
	};
	return (
		<>
			<StyledCube color='green'></StyledCube>
			<button onClick={changeColor}>Change Color</button>
		</>
	);
};

export default Cube;
