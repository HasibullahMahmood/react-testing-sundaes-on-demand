import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SummaryForm() {
	const [isChecked, setIsChecked] = useState(false);

	const checkboxLabel = (
		<span>
			I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
		</span>
	);
	return (
		<Form>
			<Form.Group controlId="terms-and-conditions">
				<Form.Check
					type="checkbox"
					label={checkboxLabel}
					value={isChecked}
					onChange={(e) => setIsChecked(e.target.checked)}
				/>
			</Form.Group>
			<Button type="submit" disabled={!isChecked}>
				Confirm Order
			</Button>
		</Form>
	);
}
