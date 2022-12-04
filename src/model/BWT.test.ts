import { getBWT, getRotations } from './BWT';
import { Step } from './Step';

describe(getRotations.name, () => {
	test('of empty string should return empty array', () => {
		expect(getRotations('')).toEqual([]);
	});

	test('of one letter word should return one element', () => {
		expect(getRotations('a')).toEqual([new Step(0, 'a')]);
	});

	test('of longer word should return rotations in order', () => {
		expect(getRotations('abcde ')).toEqual([
			new Step(0, 'abcde '),
			new Step(1, 'bcde a'),
			new Step(2, 'cde ab'),
			new Step(3, 'de abc'),
			new Step(4, 'e abcd'),
			new Step(5, ' abcde'),
		]);
	});
});

describe(getBWT.name, () => {
	test('of empty array should return empty string and null index', () => {
		expect(getBWT([])).toEqual({ bwt: '', index: null });
	});

	test('of single element array should return proper values', () => {
		expect(getBWT([new Step(0, 'a')])).toEqual({ bwt: 'a', index: 0 });
	});

	test('of array of rotations should return string of last letters of rotations and proper index', () => {
		expect(
			getBWT([
				new Step(4, ' bBaA'),
				new Step(3, 'A bBa'),
				new Step(1, 'BaA b'),
				new Step(2, 'aA bB'),
				new Step(0, 'bBaA '),
			])
		).toEqual({ bwt: 'AabB ', index: 4 });
	});
});
