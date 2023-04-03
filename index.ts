export function A(value: unknown) {
	if (!value) {
		throw new Error("fail", A);
	}
}

A.fn = Symbol("A.fn");

A.eq = function eq<T>(a: T, b: T) {
	if (a !== b) {
		throw new Error("fail", A.eq);
	}
};

A.neq = function neq<T>(a: T, b: T) {
	if (a === b) {
		throw new Error("fail", A.neq);
	}
};
