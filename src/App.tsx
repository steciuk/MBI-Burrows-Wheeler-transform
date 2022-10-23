import './App.css';

import React from 'react';

import { getBWT, printRotations, sortRotations } from './model/BWT';

const rotations = printRotations('banana$');
const sortedRotations = sortRotations(rotations);

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<h1>Burrow-Wheeler Transform</h1>
			</header>
			<div className="algorithm">
				<p>
					The Burrows–Wheeler transform (BWT, also called block-sorting compression) rearranges a character{' '}
					<br></br>
					string into runs of similar characters. This is useful for compression, since it tends to be easy to
					<br></br>
					compress a string that has runs of repeated characters by techniques such as move-to-front transform
					<br></br>
					and run-length encoding.
				</p>
			</div>
			<div>
				<h1>Text: banana$</h1>
				<h1>Rotations:</h1>
				<ArrayPrinter arrayToPrint={rotations}></ArrayPrinter>
				<h1>Sorted:</h1>
				<ArrayPrinter arrayToPrint={sortedRotations}></ArrayPrinter>
				<h1> BWT result:</h1>
				<BwtResult sortedRotations={sortedRotations}></BwtResult>
			</div>
		</div>
	);
}

const ArrayPrinter: React.FC<{ arrayToPrint: string[] }> = ({ arrayToPrint }) => {
	return (
		<ol>
			{arrayToPrint.map((rot) => (
				<li key={rot}>{rot}</li>
			))}
		</ol>
	);
};

const BwtResult: React.FC<{ sortedRotations: string[] }> = ({ sortedRotations }) => {
	return <p>{getBWT(sortedRotations)}</p>;
};

export default App;
