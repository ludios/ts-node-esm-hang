import test from "ava";
import { A, AssertionError } from "../index.js";

test('A', t => {
	// undefined return is supported despite not being validly typed
	// @ts-expect-error
	t.throws(() => A(0, A.fn, () => undefined), {instanceOf: AssertionError, message: "A(...): 0 not truthy: undefined"});
	// number messages are supported despite not being validly typed
	// @ts-expect-error
	t.throws(() => A(0, 0), {instanceOf: AssertionError, message: "A(...): 0 not truthy: 0"});
});

test('A.eq', t => {
	A.eq(3, 3);
	t.throws(() => A.eq(3, "3"), {instanceOf: AssertionError, message: "A.eq(...): 3 !== '3'"});
});

test('A.neq', t => {
	A.neq(3, "3");
	t.throws(() => A.neq(3, 3), {instanceOf: AssertionError, message: "A.neq(...): 3 === 3"});
});
