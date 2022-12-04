export class Step {
	constructor(public readonly id: number, public readonly text: string) {}
}

export function sort(ibwtElements: Step[]): Step[] {
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