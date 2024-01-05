const CounterComponent = props => {
	return <button onClick={props.action}>{props.info}</button>;
};
export default CounterComponent;
