export declare class AssertionError extends Error {
    constructor(message: string, stackStartFn: Function);
}
declare function A(value: unknown, extraMessage?: string | Symbol, messageFn?: () => string): void;
declare namespace A {
    var fn: unique symbol;
    var eq: (a: any, b: any, extraMessage?: string | Symbol | undefined, messageFn?: (() => string) | undefined) => void;
    var neq: (a: any, b: any, extraMessage?: string | Symbol | undefined, messageFn?: (() => string) | undefined) => void;
    var lt: (a: any, b: any, extraMessage?: string | Symbol | undefined, messageFn?: (() => string) | undefined) => void;
    var lte: (a: any, b: any, extraMessage?: string | Symbol | undefined, messageFn?: (() => string) | undefined) => void;
    var gt: (a: any, b: any, extraMessage?: string | Symbol | undefined, messageFn?: (() => string) | undefined) => void;
    var gte: (a: any, b: any, extraMessage?: string | Symbol | undefined, messageFn?: (() => string) | undefined) => void;
}
export default A;
