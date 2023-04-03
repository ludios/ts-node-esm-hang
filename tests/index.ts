import test from "ava";
import { A } from "../index.js";

test('A', t => {
	// undefined return is supported despite not being validly typed
	// @ts-expect-error
	t.throws(() => A(0, A.fn, () => undefined));
	// number messages are supported despite not being validly typed
	// @ts-expect-error
	t.throws(() => A(0, 0));
});

test('A.eq', t => {
	A.eq(3, 3);
	t.throws(() => A.eq(3, "3"));
});

test('A.neq', t => {
	A.neq(3, "3");
	t.throws(() => A.neq(3, 3));
});
