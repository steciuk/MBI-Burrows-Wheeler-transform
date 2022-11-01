import { Rotation } from './Rotation';

export function getRotations(input: string): Rotation[] {
	const rotations: Rotation[] = [];
	const extendedInput = input + input;

	for (let i = 0; i * 2 < extendedInput.length; i++) {
		const rot = extendedInput.slice(i, i + input.length);
		rotations.push(new Rotation(i, rot));
	}

	return rotations;
}

export function getSortedRotations(rotations: Rotation[]): Rotation[] {
	const result = [...rotations];

	result.sort((a, b) => {
		if (a.text < b.text) {
			return -1;
		}
		if (a.text > b.text) {
			return 1;
		}
		return 0;
	});

	return result;
}

export function getBWT(sortedRotations: Rotation[]): BWTResult {
	let bwt = '';
	let index = 0;

	sortedRotations.forEach((element, i) => {
		bwt += element.text[element.text.length - 1];
		if (element.id === 0) index = i;
	});

	return { bwt, index };
}

export type BWTResult = { bwt: string; index: number };
