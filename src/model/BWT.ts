import { Step } from './Step';

export function getRotations(input: string): Step[] {
	const rotations: Step[] = [];
	const extendedInput = input + input;

	for (let i = 0; i * 2 < extendedInput.length; i++) {
		const rot = extendedInput.slice(i, i + input.length);
		rotations.push(new Step(i, rot));
	}

	return rotations;
}

export function getBWT(sortedRotations: Step[]): BWTResult {
	let bwt = '';
	let index = 0;

	sortedRotations.forEach((element, i) => {
		bwt += element.text[element.text.length - 1];
		if (element.id === 0) index = i;
	});

	return { bwt, index };
}

export type BWTResult = { bwt: string; index: number };
