import { Step, sort } from './Step';

describe(sort.name, () => {
	test('of empty array should return empty array', () => {
		expect(sort([])).toEqual([]);
	});

	test('of single element array should return single element array', () => {
		expect(sort([new Step(0, 'a')])).toEqual([new Step(0, 'a')]);
	});

	test('of array of rotations should return array of rotations sorted with lexical order', () => {
		expect(
			sort([
				new Step(0, 'bBaA '),
				new Step(1, 'BaA b'),
				new Step(2, 'aA bB'),
				new Step(3, 'A bBa'),
				new Step(4, ' bBaA'),
			])
		).toEqual([
			new Step(4, ' bBaA'),
			new Step(3, 'A bBa'),
			new Step(1, 'BaA b'),
			new Step(2, 'aA bB'),
			new Step(0, 'bBaA '),
		]);
	});
});