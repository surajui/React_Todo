import './App.css';
import TodoInput from './Component/TodoInput';

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto mt-4 col-md-8">
					<h4 className="text-capitalize text-center">todoinput</h4>
					<TodoInput />
				</div>
			</div>
		</div>
	);
}

export default App;
