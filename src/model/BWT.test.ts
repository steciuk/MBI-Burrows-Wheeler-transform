import { getBWT, getRotations, getSortedRotations } from './BWT';
import { Rotation } from './Rotation';

describe(getRotations.name, () => {
	test('of empty string should return empty array', () => {
		expect(getRotations('')).toEqual([]);
	});

	test('of one letter word should return one element', () => {
		expect(getRotations('a')).toEqual([new Rotation(0, 'a')]);
	});

	test('of longer word should return rotations in order', () => {
		expect(getRotations('abcde ')).toEqual([
			new Rotation(0, 'abcde '),
			new Rotation(1, 'bcde a'),
			new Rotation(2, 'cde ab'),
			new Rotation(3, 'de abc'),
			new Rotation(4, 'e abcd'),
			new Rotation(5, ' abcde'),
		]);
	});
});

describe(getSortedRotations.name, () => {
	test('of empty array should return empty array', () => {
		expect(getSortedRotations([])).toEqual([]);
	});

	test('of single element array should return single element array', () => {
		expect(getSortedRotations([new Rotation(0, 'a')])).toEqual([new Rotation(0, 'a')]);
	});

	test('of array of rotations should return array of rotations sorted with lexical order', () => {
		expect(
			getSortedRotations([
				new Rotation(0, 'bBaA '),
				new Rotation(1, 'BaA b'),
				new Rotation(2, 'aA bB'),
				new Rotation(3, 'A bBa'),
				new Rotation(4, ' bBaA'),
			])
		).toEqual([
			new Rotation(4, ' bBaA'),
			new Rotation(3, 'A bBa'),
			new Rotation(1, 'BaA b'),
			new Rotation(2, 'aA bB'),
			new Rotation(0, 'bBaA '),
		]);
	});
});

describe(getBWT.name, () => {
	test('of empty array should return empty string and null index', () => {
		expect(getBWT([])).toEqual({ bwt: '', index: null });
	});

	test('of single element array should return proper values', () => {
		expect(getBWT([new Rotation(0, 'a')])).toEqual({ bwt: 'a', index: 0 });
	});

	test('of array of rotations should return string of last letters of rotations and proper index', () => {
		expect(
			getBWT([
				new Rotation(4, ' bBaA'),
				new Rotation(3, 'A bBa'),
				new Rotation(1, 'BaA b'),
				new Rotation(2, 'aA bB'),
				new Rotation(0, 'bBaA '),
			])
		).toEqual({ bwt: 'AabB ', index: 4 });
	});
});
