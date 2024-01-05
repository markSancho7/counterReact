import { useState } from 'react';
import CounterComponent from './CounterComponent';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<div>
				<h1>{counter}</h1>
				<button onClick={() => increment(counter, setCounter)}>+1</button>
				<button onClick={() => decrement(counter, setCounter)}>-1</button>
				<button onClick={() => restart(counter, setCounter)}>Restart</button>
			</div>
			<div>
				<CounterComponent
					info='+1'
					action={() => increment(counter, setCounter)}
				></CounterComponent>
				<CounterComponent
					info='-1'
					action={() => decrement(counter, setCounter)}
				></CounterComponent>
				<CounterComponent
					info='Restart'
					action={() => restart(counter, setCounter)}
				></CounterComponent>
			</div>
		</>
	);
};
const increment = (counter, setCounter) => {
	setCounter(counter + 1);
};
const decrement = (counter, setCounter) => {
	setCounter(counter - 1);
};
const restart = (counter, setCounter) => {
	setCounter(0);
};

export default Counter;
