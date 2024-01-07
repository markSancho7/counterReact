import { styled } from 'styled-components';

const StyledCube = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${props => (props.isGreen ? 'green' : 'red')};
`;

export { StyledCube };
