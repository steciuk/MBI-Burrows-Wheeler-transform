export function getRotations(bwtString: string, orgFirstCharIndex: number): string | undefined {
	
	const rotations = bwtString.split('');

	for(let i = 0; i < bwtString.length - 1; i++) {
		const temp = rotations.slice();
		temp.sort();
		for(let j = 0; j < bwtString.length; j++) {
			const a = temp.at(j) ?? '';
			rotations[j] += a.at(i);
		}
		console.log('Before rot: ' + rotations);
		console.log('Temp: ' + temp);
	}

	return rotations.at(orgFirstCharIndex - 1);
}