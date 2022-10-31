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

export function getIBWT(sortedRecreated: string[], orgFirstCharIndex: number): string | undefined {
	return sortedRecreated[orgFirstCharIndex];
}
