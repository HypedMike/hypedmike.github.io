/**
 * Compiles a local variable.
 *
 * @example
 *   const code = compileLocalVariable({
 *    type: "local-variable",
 *    name: "myVar",
 *    value: { type: "literal", value: "Hello" }
 *   });
 *   >> code === "const myVar = 'Hello';"
 */
export function compileLocalVariable(args) {
    const annotation = args.declaration.value.annotation;
    const value = compileAnnotation(compileLiteralOrVarRef(args.declaration.value.arg), args.locale, annotation);
    return `const ${args.declaration.name} = ${value};`;
}
function compileAnnotation(str, locale, annotation) {
    if (!annotation) {
        return str;
    }
    return `registry.${annotation.name}("${locale}", ${str}, ${compileOptions(annotation.options)})`;
}
function compileOptions(options) {
    if (options.length === 0) {
        return "{}";
    }
    const entries = options.map((option) => `${option.name}: ${compileLiteralOrVarRef(option.value)}`);
    const code = "{ " + entries.join(", ") + " }";
    return code;
}
function compileLiteralOrVarRef(value) {
    switch (value.type) {
        case "literal":
            return `"${value.value}"`;
        case "variable-reference":
            return `i.${value.name}`;
    }
}
