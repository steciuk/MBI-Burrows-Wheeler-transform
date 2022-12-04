export function getIBWT(sortedRecreated: IbwtElement[][], bwtIndex: number): string {
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

export function getIbwtElements(bwtOutput: string): [added: IbwtElement[][], sorted: IbwtElement[][]] {
	const added: IbwtElement[][] = [];
	const sorted: IbwtElement[][] = [];

	const characters: string[] = bwtOutput.split('');

	added[0] = characters.map((character: string, i: number) => new IbwtElement(i, character));
	for (let i = 0; i < bwtOutput.length - 1; i++) {
		sorted.push(getSortedIbwtElements(added[i]!));
		added.push(
			sorted[i]!.map((element: IbwtElement, i: number) => new IbwtElement(i, characters[i] + element.text))
		);
	}

	sorted.push(getSortedIbwtElements(added.at(-1)!));

	return [added, sorted];
}

export function getSortedIbwtElements(ibwtElements: IbwtElement[]): IbwtElement[] {
	const result = [...ibwtElements];

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

export class IbwtElement {
	constructor(public readonly id: number, public readonly text: string) {}
}
