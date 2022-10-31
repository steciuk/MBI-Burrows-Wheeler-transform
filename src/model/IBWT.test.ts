import { getIBWT, getIBWTComponents } from './IBWT';
import { IBWTComponents } from './IBWTComponents';

describe(getIBWTComponents.name, () => {
	test('Test correct iBWT tables size', () => {
		const toiBWT = 'nnbaaa';
		expect(getIBWTComponents(toiBWT).recreations.length).toBe(toiBWT.length);
		expect(getIBWTComponents(toiBWT).sorted.length).toBe(toiBWT.length);
	});

	test('Test whether there are correct number of string recreations in sorted and recreated arrays', () => {
		const toiBWT = 'nnbaaa';
		expect(getIBWTComponents(toiBWT).recreations.every((a) => a.length == toiBWT.length)).toBe(true);
		expect(getIBWTComponents(toiBWT).sorted.every((a) => a.length == toiBWT.length)).toBe(true);
	});

	test('Test correct iBWT tables', () => {
		const ibwtComponents = new IBWTComponents(
			[
				['n', 'n', 'b', 'a', 'a', 'a'],
				['na', 'na', 'ba', 'ab', 'an', 'an'],
				['nab', 'nan', 'ban', 'aba', 'ana', 'ana'],
				['naba', 'nana', 'bana', 'aban', 'anab', 'anan'],
				['naban', 'nanab', 'banan', 'abana', 'anaba', 'anana'],
				['nabana', 'nanaba', 'banana', 'abanan', 'anaban', 'ananab'],
			],
			[
				['a', 'a', 'a', 'b', 'n', 'n'],
				['ab', 'an', 'an', 'ba', 'na', 'na'],
				['aba', 'ana', 'ana', 'ban', 'nab', 'nan'],
				['aban', 'anab', 'anan', 'bana', 'naba', 'nana'],
				['abana', 'anaba', 'anana', 'banan', 'naban', 'nanab'],
				['abanan', 'anaban', 'ananab', 'banana', 'nabana', 'nanaba'],
			]
		);
		expect(getIBWTComponents('nnbaaa')).toEqual(ibwtComponents);
	});
});

describe(getIBWT.name, () => {
	test('Test correct iBWT', () => {
		const toiBWT = ['ananab', 'nabana', 'nanaba', 'banana', 'abanan', 'anaban'];
		const originalIndex = 3;
		expect(getIBWT(toiBWT, originalIndex)).toBe('banana');
	});
});
