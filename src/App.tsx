import './App.css';
import './TransformScreen.css';
import './Table.css';

import React, { useState } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import AboutBwtRoot from './components/about-bwt/AboutBwtRoot';
import BwtRoot from './components/bwt/BwtRoot';
import IBwtRoot from './components/ibwt/IBwtRoot';
import { DEFAULT_IBWT_INPUT } from './defaults';
import { BWTResult } from './model/BWT';

function App() {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [bwtResult, setBwtResult] = useState<BWTResult>(DEFAULT_IBWT_INPUT);

	const handleTabChange = (newValue: number) => {
		setTabIndex(newValue);
	};

	const handleSetBwtResult = (newValue: BWTResult) => {
		setBwtResult(newValue);
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>Burrow-Wheeler Transform</h1>
			</header>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: 'divider',
					'& button': { padding: '8px', minWidth: '60px', transition: 'background-color .5s' },
					'& button:hover': { backgroundColor: '#f5fafd' },
				}}
			>
				<Tabs value={tabIndex} onChange={(_, tabIndex: number) => handleTabChange(tabIndex)} centered>
					<Tab label="About BWT" />
					<Tab label="BWT" />
					<Tab label="Inverse BWT" />
					<Tab label="Info" />
				</Tabs>
			</Box>
			<main>
				{tabIndex === 0 && <AboutBwtRoot />}
				{tabIndex === 1 && (
					<BwtRoot handleTabChange={handleTabChange} handleSetBwtResult={handleSetBwtResult} />
				)}
				{tabIndex === 2 && <IBwtRoot bwtResult={bwtResult} handleSetBwtResult={handleSetBwtResult} />}
			</main>
		</div>
	);
}

export default App;
