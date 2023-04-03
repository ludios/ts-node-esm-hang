import { inspect } from "util";

export class AssertionError extends Error {
	constructor(message: string, stackStartFn: Function) {
		super();
		this.name = 'AssertionError';
		this.message = message;
		Error.captureStackTrace(this, stackStartFn);
	}
}

export function A(value: unknown) {
	if (!value) {
		throw new AssertionError("fail", A);
	}
}

A.fn = Symbol("A.fn");

A.eq = function eq<T>(a: T, b: T) {
	if (a !== b) {
		throw new AssertionError("fail", A.eq);
	}
};

A.neq = function neq<T>(a: T, b: T) {
	if (a === b) {
		throw new AssertionError("fail", A.neq);
	}
};
