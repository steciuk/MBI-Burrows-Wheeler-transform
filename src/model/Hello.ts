export class Hello {
	constructor(public readonly name: string) {}

	greet() {
		console.log(`Hello ${this.name}`);
	}
}
