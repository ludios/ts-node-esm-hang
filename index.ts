export function A(value: unknown) {
	if (!value) {
		throw new Error();
	}
}

A.fn = Symbol("A.fn");

A.eq = function eq<T>(a: T, b: T) {
	if (a !== b) {
		throw new Error();
	}
};

A.neq = function neq<T>(a: T, b: T) {
	if (a === b) {
		throw new Error();
	}
};
