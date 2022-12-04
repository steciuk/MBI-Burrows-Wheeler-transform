import { getIBWTSteps, getIBWT, getIbwtElements } from './IBWT';
import { Step, sort } from './Step';

describe(getIBWTSteps.name, () => {
	test('of longer word should return steps number equal to word length multiplied by 2', () => {
		const toiBWT = 'nnbaaa';
		expect(getIBWTSteps(toiBWT).length).toBe(toiBWT.length * 2);
	});

	test('of longer word should return correct steps', () => {
		const ibwtComponents = 
			[
				['n', 'n', 'b', 'a', 'a', 'a'],
				['a', 'a', 'a', 'b', 'n', 'n'],
				['na', 'na', 'ba', 'ab', 'an', 'an'],
				['ab', 'an', 'an', 'ba', 'na', 'na'],
				['nab', 'nan', 'ban', 'aba', 'ana', 'ana'],
				['aba', 'ana', 'ana', 'ban', 'nab', 'nan'],
				['naba', 'nana', 'bana', 'aban', 'anab', 'anan'],
				['aban', 'anab', 'anan', 'bana', 'naba', 'nana'],
				['naban', 'nanab', 'banan', 'abana', 'anaba', 'anana'],
				['abana', 'anaba', 'anana', 'banan', 'naban', 'nanab'],
				['nabana', 'nanaba', 'banana', 'abanan', 'anaban', 'ananab'],
				['abanan', 'anaban', 'ananab', 'banana', 'nabana', 'nanaba'],
			];

		expect(getIBWTSteps('nnbaaa')).toEqual(ibwtComponents);
	});
});

describe(getIBWT.name, () => {
	test('of empty array should return empty string and null index', () => {
		expect(getIBWT([], 0)).toEqual('');
	});

	test('of single element array should return proper values', () => {
		expect(getIBWT([[new Step(0, 'a')]], 0)).toEqual('a');
	});

	test('of array of ibwt elements should return original string', () => {
		expect(getIBWT([
			[
				new Step(0, 'abac'),
				new Step(1, 'cbaa'),
				new Step(2, 'abac'),
				new Step(3, 'abac'),
				new Step(4, 'aabc'),
				new Step(5, 'aabc'),
				new Step(6, 'abac'),
				new Step(7, 'aabc'),
			]
		], 0))
		.toBe('abac');
	});
});

describe(getIbwtElements.name, () => {
	test('of iBWT elements from empty string should return empty array', () => {
		expect(getIbwtElements('').at(0)?.at(-1)).toEqual([]);
	});

	test('of iBWT elements from one letter should return the same letter', () => {
		expect(getIbwtElements('a').at(0)?.at(-1)).toEqual([	
			new Step(0, 'a'),
		]);
	});

	test('of longer word should return two correct arrays - ibwt sorted elements and ibwt added elements', () => {
		expect(getIbwtElements('abac').at(0)?.at(-1)).toEqual([	
			new Step(0, 'aaaa'),
			new Step(1, 'baba'),
			new Step(2, 'abab'),
			new Step(3, 'cccc'),
		]);
	});
});