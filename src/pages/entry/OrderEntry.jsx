import Options from './Options';
import { useOrderDetail } from '../../contexts/OrderDetail';

export default function OrderEntry() {
	const [values] = useOrderDetail();
	return (
		<div>
			<Options optionType="scoops" />
			<Options optionType="toppings" />
			<h2>Grand total: {values.totals.grandTotal}</h2>
		</div>
	);
}
