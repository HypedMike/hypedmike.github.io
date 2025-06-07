import type { InputVariable } from "@inlang/sdk";
export declare function jsDocBundleFunctionTypes(args: {
    inputs: InputVariable[];
    locales: string[];
}): string;
/**
 * Returns the types for the input variables.
 *
 * @example
 *   const inputs = [{ name: "age" }]
 *   inputsType(inputs)
 *   >> "{ age: NonNullable<unknown> }"
 */
export declare function inputsType(inputs: InputVariable[]): string;
//# sourceMappingURL=jsdoc-types.d.ts.map