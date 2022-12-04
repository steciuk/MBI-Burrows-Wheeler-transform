import { getIBWTSteps, getIBWT, getIbwtElements, getSortedIbwtElements, IbwtElement } from './IBWT';

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

describe(getSortedIbwtElements.name, () => {
	test('of empty array should return empty array', () => {
		expect(getSortedIbwtElements([])).toEqual([]);
	});

	test('of single element array should return single element array', () => {
		expect(getSortedIbwtElements([new IbwtElement(0, 'a')])).toEqual([new IbwtElement(0, 'a')]);
	});

	test('of array of ibwt elements should return array of ibwt elements sorted with lexical order', () => {
		expect(
			getSortedIbwtElements([
				new IbwtElement(4, 'baan'),
				new IbwtElement(3, 'anba'),
				new IbwtElement(1, 'naba'),
				new IbwtElement(2, 'bnaa'),
				new IbwtElement(0, 'aban'),
			])
		).toEqual([
			new IbwtElement(0, 'aban'),
			new IbwtElement(3, 'anba'),
			new IbwtElement(4, 'baan'),
			new IbwtElement(2, 'bnaa'),
			new IbwtElement(1, 'naba'),
		]);
	});
});

describe(getIBWT.name, () => {
	test('of empty array should return empty string and null index', () => {
		expect(getIBWT([], 0)).toEqual('');
	});

	test('of single element array should return proper values', () => {
		expect(getIBWT([[new IbwtElement(0, 'a')]], 0)).toEqual('a');
	});

	test('of array of ibwt elements should return original string', () => {
		expect(getIBWT([
			[
				new IbwtElement(0, 'abac'),
				new IbwtElement(1, 'cbaa'),
				new IbwtElement(2, 'abac'),
				new IbwtElement(3, 'abac'),
				new IbwtElement(4, 'aabc'),
				new IbwtElement(5, 'aabc'),
				new IbwtElement(6, 'abac'),
				new IbwtElement(7, 'aabc'),
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
			new IbwtElement(0, 'a'),
		]);
	});

	test('of longer word should return two correct arrays - ibwt sorted elements and ibwt added elements', () => {
		expect(getIbwtElements('abac').at(0)?.at(-1)).toEqual([	
			new IbwtElement(0, 'aaaa'),
			new IbwtElement(1, 'baba'),
			new IbwtElement(2, 'abab'),
			new IbwtElement(3, 'cccc'),
		]);
	});
});