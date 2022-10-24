import React from 'react';

export const ArrayPrinter = (props: { arrayToPrint: string[] }) => {
	return (
		<ol>
			{props.arrayToPrint.map((rot) => (
				<li key={rot}>{rot}</li>
			))}
		</ol>
	);
};
