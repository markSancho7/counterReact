import { useState } from 'react';
import { StyledCube } from './styles';

const Cube = () => {
	const [isGreen, setIsGreen] = useState(true);

	return (
		<>
			<StyledCube isGreen={isGreen}></StyledCube>
			<button onClick={() => changeColor(isGreen, setIsGreen)}>
				Change Color
			</button>
		</>
	);
};
const changeColor = (isGreen, setIsGreen) => {
	setIsGreen(!isGreen);
};

export default Cube;
