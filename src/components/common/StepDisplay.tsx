import React from 'react';

import { padding } from '@mui/system';

const stepDisplayBlockStyles = {
	flexBasis: 0,
	border: '1px solid lightgray',
	padding: '1rem',
};

const StepDisplay = (props: { steps: string[]; currentStep: number; State: JSX.Element }) => {
	const stepsToDisplay = props.steps.slice(0, props.currentStep + 1);
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexWrap: 'wrap',
				paddingTop: '.5rem',
				gap: '.5rem',
			}}
		>
			<div style={{ ...stepDisplayBlockStyles, flexGrow: '2', minWidth: '300px', overflowY: 'auto' }}>
				<ol style={{ listStylePosition: 'inside' }}>
					{stepsToDisplay.map((step, index) => (
						<li key={index} style={{ backgroundColor: index % 2 !== 0 ? '#e4e4e4' : '', padding: '.1rem' }}>
							{step}
						</li>
					))}
				</ol>
			</div>
			<div style={{ ...stepDisplayBlockStyles, flexGrow: '3', minWidth: '500px' }}>{props.State}</div>
		</div>
	);
};

export default StepDisplay;
