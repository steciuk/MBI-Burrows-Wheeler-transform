import React from 'react';

import { getBWT, getRotations, getSortedRotations } from '../model/BWT';
import { ArrayPrinter } from './ArrayPrinterComponent';

const ResultsComponent = (props: { input: string }) => {
	const tempRotations = getRotations(`${props.input}$`);
	const sortedRotations = getSortedRotations(tempRotations);

	return (
		<div className="results">
			<div>
				<h1>Rotations:</h1>
				<ArrayPrinter arrayToPrint={tempRotations}></ArrayPrinter>
			</div>
			<div>
				<h1>Sorted:</h1>
				<ArrayPrinter arrayToPrint={sortedRotations}></ArrayPrinter>
			</div>
			<div>
				<h1> BWT result:</h1>
				<p>{getBWT(sortedRotations)}</p>
			</div>
		</div>
	);
};

export default ResultsComponent;
