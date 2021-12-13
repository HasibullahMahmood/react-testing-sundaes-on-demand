import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('display image for each scoop option', async () => {
	render(<Options optionType="scoops" />);

	const images = await screen.findAllByRole('img', { name: /scoop$/i });
	expect(images).toHaveLength(2);

	const imagesAlt = images.map((i) => i.alt);
	expect(imagesAlt).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
