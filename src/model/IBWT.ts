import { Step, sort } from './Step';

export function getIBWT(sortedRecreated: Step[][], bwtIndex: number): string {
	return sortedRecreated.at(-1)?.[bwtIndex]?.text ?? '';
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

export function getIbwtElements(bwtOutput: string): [added: Step[][], sorted: Step[][]] {
	const added: Step[][] = [];
	const sorted: Step[][] = [];

	const characters: string[] = bwtOutput.split('');

	added[0] = characters.map((character: string, i: number) => new Step(i, character));
	for (let i = 0; i < bwtOutput.length - 1; i++) {
		sorted.push(sort(added[i]!));
		added.push(
			sorted[i]!.map((element: Step, i: number) => new Step(i, characters[i] + element.text))
		);
	}

	sorted.push(sort(added.at(-1)!));

	return [added, sorted];
}

