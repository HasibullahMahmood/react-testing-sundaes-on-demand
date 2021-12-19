import { render, screen } from '@testing-library/react';
import Options from '../Options';
import { OrderDetailProvider } from '../../../contexts/OrderDetail';

test('display image for each scoop option', async () => {
	render(<Options optionType="scoops" />, { wrapper: OrderDetailProvider });

	const images = await screen.findAllByRole('img', { name: /scoop$/i });
	expect(images).toHaveLength(2);

	const imagesAlt = images.map((i) => i.alt);
	expect(imagesAlt).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Display image for each topping option', async () => {
	render(<Options optionType="toppings" />, { wrapper: OrderDetailProvider });

	const images = await screen.findAllByRole('img', { name: /topping$/ });
	expect(images).toHaveLength(3);

	const imageAlts = images.map((i) => i.alt);
	expect(imageAlts).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});
