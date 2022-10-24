import './App.css';

import React, { useState } from 'react';

import InputComponent from './components/InputComponent';
import ResultsComponent from './components/ResultsComponent';

function App() {
	const [input, setInput] = useState<string>('');

	const handleInputOnChange = (value: string) => {
		setInput(value);
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>Burrow-Wheeler Transform</h1>
			</header>
			<div className="algorithm-description">
				<p>
					The Burrows–Wheeler transform (BWT, also called block-sorting compression) rearranges a character
					string into runs of similar characters. This is useful for compression, since it tends to be easy to
					compress a string that has runs of repeated characters by techniques such as move-to-front transform
					and run-length encoding.
				</p>
			</div>
			<InputComponent value={input} onChange={handleInputOnChange} />
			<ResultsComponent input={input} />
		</div>
	);
}

export default App;
