import { Type } from "@sinclair/typebox";
export const VariableReference = Type.Object({
    type: Type.Literal("variable-reference"),
    name: Type.String(),
});
export const Literal = Type.Object({
    type: Type.Literal("literal"),
    value: Type.String(),
});
export const Option = Type.Object({
    name: Type.String(),
    value: Type.Union([Literal, VariableReference]),
});
export const FunctionReference = Type.Object({
    type: Type.Literal("function-reference"),
    name: Type.String(),
    options: Type.Array(Option),
});
export const Expression = Type.Object({
    type: Type.Literal("expression"),
    arg: Type.Union([VariableReference, Literal]),
    annotation: Type.Optional(FunctionReference),
});
export const Text = Type.Object({
    type: Type.Literal("text"),
    value: Type.String(),
});
export const LocalVariable = Type.Object({
    type: Type.Literal("local-variable"),
    name: Type.String(),
    value: Expression,
});
export const InputVariable = Type.Object({
    type: Type.Literal("input-variable"),
    name: Type.String(),
    annotation: Type.Optional(FunctionReference),
});
export const Declaration = Type.Union([InputVariable, LocalVariable]);
export const Pattern = Type.Array(Type.Union([Text, Expression]));
//# sourceMappingURL=pattern.js.map