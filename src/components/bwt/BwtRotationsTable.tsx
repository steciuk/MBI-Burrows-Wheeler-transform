import React from 'react';

import { Step } from '../../model/Step';

const BwtRotationsTable = (props: {
	currentStep: number;
	rotations: Step[];
	markLast: boolean;
	markOriginal: boolean;
}) => {
	const { currentStep, rotations, markLast, markOriginal } = props;

	return (
		<table className={markLast ? 'mark-last-row' : ''}>
			<tbody>
				{currentStep === 0 && (
					<tr>
						{rotations[0]?.text.split('').map((_, index) => (
							<td key={index}> </td>
						))}
					</tr>
				)}
				{currentStep !== 0 && (
					<>
						{rotations.slice(0, currentStep).map((rotation) => (
							<tr
								key={rotation.id}
								style={{ backgroundColor: markOriginal && rotation.id === 0 ? 'lightblue' : '' }}
							>
								{rotation.text.split('').map((symbol, index) => (
									<td key={index}>{symbol}</td>
								))}
							</tr>
						))}
					</>
				)}
			</tbody>
		</table>
	);
};

export default BwtRotationsTable;
