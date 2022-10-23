import './App.css';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { getBWT, printRotations, sortRotations } from './model/BWT';

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
				<BwtForm></BwtForm>
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

type Input = {
	bwtInput: string;
};

const BwtForm: React.FC = () => {
	const { register, handleSubmit } = useForm<Input>();

	let bwtInput = '';
	const [rotations, setRotations] = useState<string[]>([]);
	const [sortedRotations, setSortedRotations] = useState<string[]>([]);

	return (
		<div>
			<h1>Text: {bwtInput}</h1>
			<form
				onSubmit={handleSubmit((data) => {
					bwtInput = data.bwtInput + '$';
					const tempRotations = printRotations(bwtInput);
					setRotations(tempRotations);
					setSortedRotations(sortRotations(tempRotations));
				})}
			>
				<input defaultValue="banana$" {...register('bwtInput')} />
				<input type="submit" />
			</form>
			<h1>Rotations:</h1>
			<ArrayPrinter arrayToPrint={rotations}></ArrayPrinter>
			<h1>Sorted:</h1>
			<ArrayPrinter arrayToPrint={sortedRotations}></ArrayPrinter>
			<h1> BWT result:</h1>
			<BwtResult sortedRotations={sortedRotations}></BwtResult>
		</div>
	);
};

export default App;
