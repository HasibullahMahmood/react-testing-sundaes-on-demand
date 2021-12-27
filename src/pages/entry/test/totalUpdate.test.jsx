import { screen, render } from '../../../test-utils/library-test-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

test('adding to toppings updates subtotal', async () => {
	render(<Options optionType="scoops" />);

	// check whether subtotal starts with $0.00
	const subtotal = screen.getByText('Scoops subtotal: $', { exact: false });
	expect(subtotal).toHaveTextContent('0.00');

	// add 1 to vanilla and subtotal should be $2.00
	const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
	userEvent.clear(vanillaInput);

	userEvent.type(vanillaInput, '1');
	expect(subtotal).toHaveTextContent('2.00');

	// add 2 chocolate toppings and subtotal should be $6.00
	const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
	userEvent.clear(chocolateInput);

	userEvent.type(chocolateInput, '2');
	expect(subtotal).toHaveTextContent('6.00');
});
