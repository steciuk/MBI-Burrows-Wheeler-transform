import React, { useEffect, useState } from 'react';

import { Button, TextField } from '@mui/material';

import { BWTResult, getBWT, getRotations, getSortedRotations } from '../../model/BWT';
import { Rotation } from '../../model/Rotation';
import StepDisplay from '../common/StepDisplay';
import StepNavigation from '../common/StepNavigation';
import BwtRotationsTable from './BwtRotationsTable';

const BwtRoot = (props: {
	handleTabChange: (tabIndex: number) => void;
	handleSetBwtResult: (newValue: BWTResult | null) => void;
}) => {
	const [bwtInput, setBwtInput] = useState<string>('');

	const [isInStepMode, setIsInStepMode] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [steps, setSteps] = useState<string[]>([]);

	const [rotations, setRotations] = useState<Rotation[]>([]);
	const [sortedRotations, setSortedRotations] = useState<Rotation[]>([]);
	const [bwtOutput, setBwtOutput] = useState<BWTResult>({ bwt: '', index: 0 });

	const handleInputChange = (value: string) => {
		setBwtInput(value);
		if (isInStepMode) {
			setRotations([]);
			setIsInStepMode(false);
			setCurrentStep(0);
		}
	};

	const handleToStart = () => {
		setCurrentStep(0);
	};

	const handleBack = () => {
		setCurrentStep(currentStep - 1);
	};

	const handleForward = () => {
		setCurrentStep(currentStep + 1);
	};

	const handleToEnd = () => {
		setCurrentStep(steps.length - 1);
	};

	const handleClear = () => {
		setBwtInput('');
	};

	const handleInvertBWT = () => {
		props.handleSetBwtResult(bwtOutput);
		props.handleTabChange(2);
	};

	const handleConfirm = () => {
		const newRotations = getRotations(bwtInput);
		setRotations(newRotations);
		setIsInStepMode(true);
	};

	useEffect(() => {
		const newSortedRotations = getSortedRotations(rotations);
		const newBwtOutput = getBWT(newSortedRotations);
		setSortedRotations(newSortedRotations);
		setBwtOutput(newBwtOutput);

		const newSteps: string[] = [];
		newSteps.push('Create table with numer of columns equal to the length of the input string.');
		newSteps.push('Fill the first row with the input string.');
		for (let i = 1; i < rotations.length; i++) {
			newSteps.push(`Fill the ${i + 1} row with the ${i} rotation of input string.`);
		}
		newSteps.push('Sort the rows of created table in lexicographical order.');
		newSteps.push('The last column of the sorted table is the BWT of the input string.');
		newSteps.push(
			'The index of the row that contains the input string is the index needed to invert the BWT.'
		);
		newSteps.push('You have found the BWT of the input string!');

		setSteps(newSteps);
	}, [rotations]);

	return (
		<div className="transform-container">
			<div className="transform-header">
				<div>
					<TextField
						onChange={(e) => handleInputChange(e.target.value)}
						value={bwtInput}
						label="Text to transform"
					/>
				</div>
				<StepNavigation
					isInStepMode={isInStepMode}
					toStart={{ handler: handleToStart, disabled: currentStep === 0 }}
					back={{ handler: handleBack, disabled: currentStep === 0 }}
					forward={{ handler: handleForward, disabled: currentStep === steps.length - 1 }}
					toEnd={{ handler: handleToEnd, disabled: currentStep === steps.length - 1 }}
					confirm={{ handler: handleConfirm, disabled: bwtInput.length === 0 }}
					clear={{ handler: handleClear, disabled: bwtInput.length === 0 }}
				/>
				<div>
					<Button
						variant="outlined"
						disabled={currentStep != steps.length - 1}
						onClick={() => handleInvertBWT()}
					>
						<p>Invert BWT</p>
					</Button>
				</div>
			</div>
			{isInStepMode && (
				<StepDisplay
					steps={steps}
					currentStep={currentStep}
					State={
						<>
							<div style={{ marginBottom: '1rem' }}>
								<BwtRotationsTable
									currentStep={currentStep}
									rotations={rotations}
									markLast={false}
									markOriginal={false}
								/>
							</div>
							{currentStep > rotations.length && (
								<div style={{ marginBottom: '1rem' }}>
									<BwtRotationsTable
										currentStep={currentStep}
										rotations={sortedRotations}
										markLast={currentStep > rotations.length + 1}
										markOriginal={currentStep > rotations.length + 2}
									/>
								</div>
							)}
							{currentStep === steps.length - 1 && (
								<div>
									<p>Result string: {bwtOutput.bwt}</p>
									<p>Result index: {bwtOutput.index}</p>
								</div>
							)}
						</>
					}
				/>
			)}
		</div>
	);
};

export default BwtRoot;
