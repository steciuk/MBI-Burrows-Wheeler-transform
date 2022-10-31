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
