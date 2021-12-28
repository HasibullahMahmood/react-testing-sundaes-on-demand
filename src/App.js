import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry';
import OrderSummary from './pages/summary/OrderSummary';
import OrderConfirmation from './pages/orderConfirmation/Confirmation';
import { OrderDetailProvider } from './contexts/OrderDetail';

function App() {
	const [orderPhase, setOrderPhase] = useState('inProgress');
	return (
		<Container>
			<OrderDetailProvider>
				{orderPhase === 'inProgress' && <OrderEntry setOrderPhase={setOrderPhase} />}
				{orderPhase === 'review' && <OrderSummary setOrderPhase={setOrderPhase} />}
			</OrderDetailProvider>
			{orderPhase === 'complete' && <OrderConfirmation setOrderPhase={setOrderPhase} />}
		</Container>
	);
}

export default App;
