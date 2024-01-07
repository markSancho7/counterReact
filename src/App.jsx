import Counter from './components/Counter';
import Cube from './components/Cube/Cube';
import MiComponente from './components/Estado/Estado';

const App = () => {
	return (
		<>
			<h1>Núcleo de la aplicación</h1>
			<Counter></Counter>
			<Cube></Cube>

			<MiComponente></MiComponente>
		</>
	);
};

export default App;
