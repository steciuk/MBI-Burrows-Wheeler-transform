import React, { useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import StepNavigation from '../common/StepNavigation';
import { getIBWT, getIBWTComponents } from '../../model/IBWT';
import { IBWTComponents } from '../../model/IBWTComponents';
import StepDisplay from '../common/StepDisplay';

type IBWTInput = {
    bwtOutput: string,
    bwtOriginalIndex: number
}

const IBwtRoot = ({bwtOutput, bwtOriginalIndex} : IBWTInput) => {

	const [ibwtInput, setBwtInput] = useState<string>(bwtOutput ?? '');
	const [index, setIndex] = useState<number | undefined>(bwtOriginalIndex ?? undefined);

	const [isInStepMode, setIsInStepMode] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [steps, setSteps] = useState<string[]>([]);

	const [ibwtComponents, setIBwtComponents] = useState<IBWTComponents>(new IBWTComponents([], []));
	const [ibwtOutput, setIBwtOutput] = useState<string>('');

	const handleInputTextChange = (value: string) => {
		setBwtInput(value);
		handleReset();
	};

	const handleInputIndex = (value: string) => {
		const parsedIndex = parseInt(value);
		if(parsedIndex != undefined && !isNaN(parsedIndex)){
			setIndex(parsedIndex);
			handleReset();
		} else {
			setIndex(undefined);
		}
	};

	const handleReset = () => {
		if (isInStepMode) {
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
		setIndex(undefined);
	};

	const handleConfirm = () => {
		const ibwtComponents = getIBWTComponents(ibwtInput);
		setIBwtComponents(ibwtComponents);
		setIndex(index);

		setIsInStepMode(true);
	};

	useEffect(() => {
		const ibwtOutput = getIBWT(ibwtComponents.sorted.at(index ?? 0) ?? [], index ?? 0);
		setIBwtOutput(ibwtOutput ?? '');

		const newSteps: string[] = [];
		newSteps.push('Take the bwt result and put it in a column');
		for (let i = 1; i < ibwtComponents.sorted.length; i++) {
			newSteps.push('Sort rows lexicographically');
			newSteps.push('Append original column to the left of sorted result');
		}
		newSteps.push(
			'After number of sorts equal to length of ibwt input the result is in the sorted table at row with index equal to input index'
		);
		setSteps(newSteps);
	});

	return (
		<div className="transform-container">
			<div className="transform-header">
				<div className="transform-input">
					<TextField
						className="transform-input"
						onChange={(e) => handleInputTextChange(e.target.value)}
						value={ibwtInput}
						label="Text to transform"
					/>
				</div>
				<div className="index-input">
					<TextField
						className="index-input"
						onChange={(e) => handleInputIndex(e.target.value)}
						value={index ?? ''}
						label="Index of original text in sorted rotations table"
					/>
				</div>
				<StepNavigation
					isInStepMode={isInStepMode}
					toStart={{ handler: handleToStart, disabled: currentStep === 0 }}
					back={{ handler: handleBack, disabled: currentStep === 0 }}
					forward={{ handler: handleForward, disabled: currentStep === steps.length - 1 }}
					toEnd={{ handler: handleToEnd, disabled: currentStep === steps.length - 1 }}
					confirm={{ handler: handleConfirm, disabled: ibwtInput.length === 0 || index == undefined }}
					clear={{ handler: handleClear, disabled: ibwtInput.length === 0 || index == undefined }}
				/>
			</div>
			<div>
				{isInStepMode && (
					<StepDisplay
						steps={steps}
						currentStep={currentStep}
						State={
							<>
								{/* <div style={{ marginBottom: '1rem' }}>
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
								)} */}
								{currentStep === steps.length - 1 && (
									<div>
										<p>Result string: {ibwtOutput}</p>
									</div>
								)}
							</>
						}
					/>
				)}
			</div>
		</div>
	);
};

export default IBwtRoot;