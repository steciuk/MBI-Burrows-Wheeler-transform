import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from '@mui/material';

export type NavigationControl = {
	handler: () => void;
	disabled: boolean;
};

const StepNavigation = (props: {
	isInStepMode: boolean;
	toStart: NavigationControl;
	back: NavigationControl;
	forward: NavigationControl;
	toEnd: NavigationControl;
	confirm: NavigationControl;
	clear: NavigationControl;
}) => {
	const { isInStepMode, toStart, back, forward, toEnd, confirm, clear } = props;

	return (
		<div style={{ display: 'flex', padding: '1rem' }}>
			{isInStepMode && (
				<>
					<div style={{ marginRight: '1rem' }}>
						<Button variant="outlined" disabled={toStart.disabled} onClick={() => toStart.handler()}>
							<KeyboardDoubleArrowLeftIcon />
						</Button>
						<Button variant="outlined" disabled={back.disabled} onClick={() => back.handler()}>
							<KeyboardArrowLeftIcon />
						</Button>
					</div>
					<div>
						<Button variant="outlined" disabled={forward.disabled} onClick={() => forward.handler()}>
							<KeyboardArrowRightIcon />
						</Button>
						<Button variant="outlined" disabled={toEnd.disabled} onClick={() => toEnd.handler()}>
							<KeyboardDoubleArrowRightIcon />
						</Button>
					</div>
				</>
			)}
			{!isInStepMode && (
				<>
					<div style={{ marginRight: '1rem' }}>
						<Button
							variant="outlined"
							color="error"
							disabled={clear.disabled}
							onClick={() => clear.handler()}
						>
							<ClearIcon />
						</Button>
					</div>
					<div>
						<Button variant="outlined" disabled={confirm.disabled} onClick={() => confirm.handler()}>
							<CheckIcon />
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default StepNavigation;
