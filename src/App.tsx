import './App.css';

import React from 'react';

import logo from './logo.svg';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<h1>Burrow-Wheeler Transform</h1>
			</header>
			<div className="algorithm">
				<p>
					The Burrows–Wheeler transform (BWT, also called block-sorting compression) rearranges a character <br></br>
					string into runs of similar characters. This is useful for compression, since it tends to be easy to<br></br>
					compress a string that has runs of repeated characters by techniques such as move-to-front transform<br></br>
					and run-length encoding.
				</p>
			</div>
		</div>
	);
}

export default App;
