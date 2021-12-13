import './App.css';
import SummaryForm from './pages/summary/SummaryForm';
import Options from './pages/entry/Options';

function App() {
	return (
		<div className="App">
			<SummaryForm></SummaryForm>
			<Options optionType="scoops"></Options>
		</div>
	);
}

export default App;
