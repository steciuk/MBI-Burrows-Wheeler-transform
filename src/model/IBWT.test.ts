import {getRotations} from './IBWT';

describe(getRotations.name, () => {
	test('Test correct iBWT', () => {
		expect(getRotations('nnbaaa', 3)).toEqual('banana');
	});
});