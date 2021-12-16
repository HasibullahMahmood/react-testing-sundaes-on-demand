import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import prices from '../constants/prices.json';

const OrderDetailContext = createContext();

export const useOrderDetail = () => {
	const context = useContext(OrderDetailContext);
	if (!context) {
		throw new Error('The component needs be wrapped by the context provider.');
	}

	return context;
};

const calculateSubtotal = (optionType, optionCounts) => {
	let totalCount = 0;
	for (const count of optionCounts[optionType].values()) {
		totalCount += count;
	}

	return totalCount * prices[optionType];
};

export const OrderDetailProvider = (props) => {
	const [optionCounts, setOptionCounts] = useState({
		scoops: new Map(),
		toppings: new Map(),
	});

	const [totals, setTotals] = useState({
		scoopsSubtotal: 0,
		toppingsSubtotal: 0,
		grandTotal: 0,
	});

	useEffect(() => {
		const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
		const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
		const grandTotal = scoopsSubtotal + toppingsSubtotal;
		setTotals({ scoopsSubtotal, toppingsSubtotal, grandTotal });
	}, [optionCounts]);

	const value = useMemo(() => {
		const updateCounts = (optionType, optionName, count) => {
			const newOptionCounts = { ...optionCounts };
			newOptionCounts[optionType].set(optionName, +count);
			setOptionCounts(newOptionCounts);
		};
		return [{ ...optionCounts, totals }, updateCounts];
	}, [optionCounts, totals]);

	return <OrderDetailContext.Provider value={value} {...props} />;
};
