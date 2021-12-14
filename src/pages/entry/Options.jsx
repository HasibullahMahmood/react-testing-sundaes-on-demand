import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../../components/alert-banner/AlertBanner';

export default function Options({ optionType }) {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			// optionType: scoops, toppings
			try {
				const response = await axios.get(`http://localhost:3030/${optionType}`);
				setItems(response.data);
			} catch (error) {
				setError(true);
			}
		})();
	}, [optionType]);

	if (error) {
		return <AlertBanner />;
	}
	const ElementItem = optionType === 'scoops' ? ScoopOption : ToppingOption;
	const OptionItems = items.map((i) => <ElementItem key={i.name} name={i.name} imagePath={i.imagePath} />);

	return <Row>{OptionItems}</Row>;
}
