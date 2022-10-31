import React, { useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import { BWTResult } from '../../model/BWT';
import { getIBWT, getIBWTComponents } from '../../model/IBWT';
import { IBWTComponents } from '../../model/IBWTComponents';
import StepDisplay from '../common/StepDisplay';
import StepNavigation from '../common/StepNavigation';

const IBwtRoot = (props: { bwtResult: BWTResult | null }) => {
	const [ibwtInput, setBwtInput] = useState<string>(props.bwtResult?.bwt ?? '');
	const [indexInput, setIndexInput] = useState<string>(props.bwtResult?.index.toString() ?? '');

	const [indexError, setIndexError] = useState<string>('');

	const [index, setIndex] = useState<number>(0);

	const [isInStepMode, setIsInStepMode] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [steps, setSteps] = useState<string[]>([]);

	const [ibwtComponents, setIBwtComponents] = useState<IBWTComponents>(new IBWTComponents([], []));
	const [ibwtOutput, setIBwtOutput] = useState<string>('');

	const handleInputTextChange = (value: string) => {
		setBwtInput(value);
		resetSteps();
	};

	const handleInputIndex = (value: string) => {
		setIndexInput(value);
		resetSteps();
	};

	const resetSteps = () => {
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
		setIndexInput('');
	};

	const handleConfirm = () => {
		const ibwtComponents = getIBWTComponents(ibwtInput);
		setIBwtComponents(ibwtComponents);
		setIsInStepMode(true);
	};

	useEffect(() => {
		if (/^\d+$/.test(indexInput)) {
			const parsedIndex = +indexInput;
			if (parsedIndex >= ibwtInput.length) {
				setIndexError('Index must be less than the length of the input');
			} else {
				setIndexError('');
				setIndex(parsedIndex);
			}
		} else if (indexInput === '') {
			setIndexError('');
		} else {
			setIndexError('Index must be a positive integer');
		}
	}, [indexInput, ibwtInput]);

	useEffect(() => {
		const ibwtOutput = getIBWT(ibwtComponents.sorted.at(-1) ?? [], index);
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
	}, [ibwtComponents]);

	return (
		<div className="transform-container">
			<div className="transform-header">
				<div>
					<TextField
						className="transform-input"
						onChange={(e) => handleInputTextChange(e.target.value)}
						value={ibwtInput}
						label="BWT result"
					/>
					<TextField
						onChange={(e) => handleInputIndex(e.target.value)}
						value={indexInput}
						label="BWT index"
						error={indexError !== ''}
						helperText={indexError}
					/>
				</div>
				<StepNavigation
					isInStepMode={isInStepMode}
					toStart={{ handler: handleToStart, disabled: currentStep === 0 }}
					back={{ handler: handleBack, disabled: currentStep === 0 }}
					forward={{ handler: handleForward, disabled: currentStep === steps.length - 1 }}
					toEnd={{ handler: handleToEnd, disabled: currentStep === steps.length - 1 }}
					confirm={{
						handler: handleConfirm,
						disabled: ibwtInput.length === 0 || indexInput.length === 0 || indexError !== '',
					}}
					clear={{
						handler: handleClear,
						disabled: ibwtInput.length === 0 || indexInput.length === 0 || indexError !== '',
					}}
				/>
			</div>

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
	);
};

export default IBwtRoot;
