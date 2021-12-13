import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

export default function Options({ optionType }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		(async () => {
			// optionType: scoops, toppings
			try {
				const response = await axios.get(`http://localhost:3030/${optionType}`);
				setItems(response.data);
			} catch (error) {
				// TODO: handle error
			}
		})();
	}, [optionType]);

	const ElementItem = optionType === 'scoops' ? ScoopOption : null;

	const OptionItems = items.map((i) => <ElementItem key={i.name} name={i.name} imagePath={i.imagePath} />);

	return <Row>{OptionItems}</Row>;
}
