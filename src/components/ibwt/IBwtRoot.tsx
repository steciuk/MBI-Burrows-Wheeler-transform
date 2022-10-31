import React, { useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import StepNavigation from '../common/StepNavigation';
import { getIBWTComponents } from '../../model/IBWT';
import { IBWTComponents } from '../../model/IBWTComponents';

const IBwtRoot = () => {

	const [ibwtInput, setBwtInput] = useState<string>('');
	const [index, setIndex] = useState<number>();

	const [isInStepMode, setIsInStepMode] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [steps, setSteps] = useState<string[]>([]);

	const [ibwtComponents, setIBwtComponents] = useState<IBWTComponents>(new IBWTComponents([], []));

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
		</div>
	);
};

export default IBwtRoot;