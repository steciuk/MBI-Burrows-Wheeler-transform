export function isStringAsciiOnly(str: string): boolean {
	return /^[ -~]*$/.test(str);
}

export function isStringPositiveInteger(str: string): boolean {
	return /^\d+$/.test(str);
}
