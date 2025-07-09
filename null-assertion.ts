function myValue(): string | null | undefined {
	return 'oh!';
}

let result = myValue();
console.log('result length:' + result!.length);