import Button from 'react-bootstrap/Button';

const Confirmation = (props) => {
	return (
		<div>
			<h2>Thank you!</h2>
			<p>Your order number is 1234567890</p>
			<Button
				onClick={() => {
					window.location.reload();
				}}
			>
				Create new order
			</Button>
		</div>
	);
};

export default Confirmation;
