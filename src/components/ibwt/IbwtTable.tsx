import React, { useEffect, useRef, useState } from 'react';

import { IbwtElement } from '../../model/IBWT';

const IbwtTable = (props: {
	currentStep: number;
	addedIbwtElements: IbwtElement[][];
	sortedIbwtElements: IbwtElement[][];
	bwtIndex: number;
}) => {
	const { currentStep, addedIbwtElements, sortedIbwtElements, bwtIndex } = props;

	const previousStepRef = useRef<number>(0);

	const [sortingPositions, setSortingPositions] = useState<number[]>([]);
	const rowRef = useRef<null | HTMLTableSectionElement>(null);

	const tableSize = addedIbwtElements[0]?.length ?? 0;

	let addingStep = Math.ceil((currentStep - 1) / 2);
	if (addingStep > addedIbwtElements.length - 1) addingStep = addedIbwtElements.length - 1;

	let sortingStep = Math.ceil((currentStep - 2) / 2);
	const sortingDone = sortingStep === sortedIbwtElements.length;
	if (sortingStep > sortedIbwtElements.length - 1) sortingStep = sortedIbwtElements.length - 1;

	const showSortingTable = currentStep % 2 === 0 || sortingDone;
	const shouldAnimateSorting = currentStep >= previousStepRef.current && !sortingDone;

	useEffect(() => {
		const rowHeight = (rowRef.current?.clientHeight ?? 0) / tableSize;
		const newSortingPositions: number[] = [];
		sortedIbwtElements[0]!.forEach((sortedIbwtElement, sortedIndex) => {
			const originalIndex = addedIbwtElements[0]!.findIndex(
				(addedIbwtElement) => addedIbwtElement.id === sortedIbwtElement.id
			);
			newSortingPositions.push((originalIndex - sortedIndex) * rowHeight);
		});

		setSortingPositions(newSortingPositions);
	}, []);

	useEffect(() => {
		previousStepRef.current = currentStep;
	}, [currentStep]);

	if (currentStep === 0) {
		// empty table
		return (
			<table>
				<tbody ref={rowRef}>
					{[...Array(tableSize)].map((_, rowIndex) => (
						<tr key={rowIndex}>
							{[...Array(tableSize)].map((_, colIndex) => (
								<td key={colIndex}> </td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}

	if (!showSortingTable) {
		// table for adding steps
		return (
			<table>
				<tbody>
					{addedIbwtElements[addingStep]!.map((row) => (
						<tr key={row.id}>
							{[...Array(tableSize - row.text.length)].map((_, colNum) => (
								<td key={colNum}> </td>
							))}
							{row.text.split('').map((symbol, colNum) => (
								<td key={colNum}>{symbol}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
	return (
		// table for sorting steps / final table
		<table className={shouldAnimateSorting ? 'sorting' : ''}>
			<tbody>
				{sortedIbwtElements[sortingStep]!.map((row, rowIndex) => (
					<tr
						key={row.id}
						style={{
							position: 'relative',
							top: shouldAnimateSorting ? sortingPositions[rowIndex] : '',
							backgroundColor: sortingDone && rowIndex === bwtIndex ? 'lightcoral' : '',
						}}
					>
						{[...Array(tableSize - row.text.length)].map((_, colNum) => (
							<td key={colNum}> </td>
						))}
						{row.text.split('').map((symbol, colNum) => (
							<td key={colNum}>{symbol}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);

	// return (
	// 	<table>
	// 		<tbody>
	// 			{ibwtRows.map((row, rowNum) => (
	// 				<tr
	// 					key={rowNum}
	// 					style={{ backgroundColor: markOriginal && rowNum === bwtIndex ? 'lightcoral' : '' }}
	// 				>
	// 					{[...Array(ibwtRows.length - row.length)].map((_, colNum) => (
	// 						<td key={colNum}> </td>
	// 					))}
	// 					{row.split('').map((symbol, colNum) => (
	// 						<td key={colNum}>{symbol}</td>
	// 					))}
	// 				</tr>
	// 			))}
	// 		</tbody>
	// 	</table>
	// );
};

export default IbwtTable;
