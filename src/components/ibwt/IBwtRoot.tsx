import React, { useEffect, useState } from 'react';

import { TextField } from '@mui/material';

import { BWTResult } from '../../model/BWT';
import { getIBWT, getIBWTSteps } from '../../model/IBWT';
import StepDisplay from '../common/StepDisplay';
import StepNavigation from '../common/StepNavigation';
import IbwtTable from './IbwtTable';

const IBwtRoot = (props: {
	bwtResult: BWTResult | null;
	handleSetBwtResult: (newValue: BWTResult | null) => void;
}) => {
	const [ibwtInput, setIbwtInput] = useState<string>(props.bwtResult?.bwt ?? '');
	const [indexInput, setIndexInput] = useState<string>(props.bwtResult?.index.toString() ?? '');

	const [indexError, setIndexError] = useState<string>('');

	const [index, setIndex] = useState<number>(0);

	const [isInStepMode, setIsInStepMode] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [steps, setSteps] = useState<string[]>([]);

	const [ibwtArrays, setIbwtArrays] = useState<string[][]>([]);
	const [ibwtOutput, setIBwtOutput] = useState<string>('');

	const handleInputTextChange = (value: string) => {
		setIbwtInput(value);
		resetSteps();
	};

	const handleInputIndex = (value: string) => {
		setIndexInput(value);
		resetSteps();
	};

	const resetSteps = () => {
		if (isInStepMode) {
			setIbwtArrays([]);
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
		setIbwtInput('');
		setIndexInput('');
	};

	const handleConfirm = () => {
		const newIbwtArrays = getIBWTSteps(ibwtInput);
		const newIbwtOutput = getIBWT(newIbwtArrays, index);

		const newSteps: string[] = [];
		newSteps.push('Create a nXn table, where n is the length of the BWT result.');
		for (let i = 0; i * 2 < newIbwtArrays.length; i++) {
			newSteps.push('Add the BWT result to the last free column of the table.');
			newSteps.push('Sort with the lexicographical order all the rows in the table.');
		}
		// eslint-disable-next-line quotes
		newSteps.push("When the table is filled, the original string is in the index'th row (counting from 0).");
		newSteps.push('You have found the IBWT of the input string!');

		setIbwtArrays(newIbwtArrays);
		setIBwtOutput(newIbwtOutput);
		setSteps(newSteps);
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
		return () => {
			props.handleSetBwtResult(null);
		};
	}, []);

	let ibwtArrayToDisplay: string[] = [];
	if (currentStep === 0) ibwtArrayToDisplay = Array(ibwtInput.length).fill('');
	else if (currentStep - 1 < ibwtArrays.length) ibwtArrayToDisplay = ibwtArrays[currentStep - 1]!;
	else ibwtArrayToDisplay = ibwtArrays.at(-1)!;

	return (
		<div className="transform-container">
			<div className="transform-header">
				<div style={{ marginRight: '.5rem' }}>
					<TextField
						className="transform-input"
						onChange={(e) => handleInputTextChange(e.target.value)}
						value={ibwtInput}
						label="BWT result"
					/>
				</div>
				<TextField
					onChange={(e) => handleInputIndex(e.target.value)}
					value={indexInput}
					label="BWT index"
					error={indexError !== ''}
					helperText={indexError}
				/>

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
						disabled: ibwtInput.length === 0 && indexInput.length === 0,
					}}
				/>
			</div>

			{isInStepMode && (
				<StepDisplay
					steps={steps}
					currentStep={currentStep}
					State={
						<>
							<div style={{ marginBottom: '1rem' }}>
								<IbwtTable
									ibwtRows={ibwtArrayToDisplay}
									bwtIndex={index}
									markOriginal={currentStep >= steps.length - 2}
								/>
							</div>
							{currentStep === steps.length - 1 && (
								<div>
									<p>
										Result string: <strong>{ibwtOutput}</strong>
									</p>
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
