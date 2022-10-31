import { IBWTComponents } from './IBWTComponents';

export function getIBWTComponents(bwtString: string): IBWTComponents {
	const recreated = bwtString.split('');
	const sortedArray: string[][] = [];
	const recreatedArray: string[][] = [];
	recreatedArray.push(bwtString.split(''));

	[...Array(bwtString.length)].forEach((_) => {
		const sorted = recreated.slice().sort();
		recreated.forEach((_, index, arr) => (arr[index] += sorted.at(index)?.slice(-1)));
		recreatedArray.push(recreated.slice());
		sortedArray.push(sorted);
	});
	recreatedArray.pop();

	return new IBWTComponents(recreatedArray, sortedArray);
}

export function getIBWT(sortedRecreated: string[][], bwtIndex: number): string {
	return sortedRecreated.at(-1)?.[bwtIndex] ?? '';
}

export function getIBWTSteps(bwtString: string): string[][] {
	const steps: string[][] = [];
	const characters: string[] = bwtString.split('');

	steps.push(characters);

	for (let i = 0; i < bwtString.length - 1; i++) {
		const previous: string[] = [...steps.at(-1)!].sort();
		steps.push(previous);
		const next: string[] = previous.map((line: string, i: number) => characters[i] + line);
		steps.push(next);
	}

	const previous: string[] = [...steps.at(-1)!].sort();
	steps.push(previous);

	return steps;
}
