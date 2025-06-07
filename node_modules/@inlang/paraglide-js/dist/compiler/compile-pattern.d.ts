import type { Declaration, Pattern } from "@inlang/sdk";
import type { Compiled } from "./types.js";
/**
 * Compiles a pattern into a template literal string.
 *
 * @example
 *   const pattern: Pattern = [
 * 	 { type: "text", value: "Your age is " },
 * 	 { type: "expression", arg: { type: "variable-reference", name: "age" } },
 *   ]
 *
 *   const { code } = compilePattern({ pattern, declarations: [{ type: "input-variable", name: "age" }] });
 *
 *   // code will be: `Your age is ${i.age}`
 */
export declare const compilePattern: (args: {
    pattern: Pattern;
    declarations: Declaration[];
}) => Compiled<Pattern>;
//# sourceMappingURL=compile-pattern.d.ts.map