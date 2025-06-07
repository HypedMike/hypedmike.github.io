import { test, expect } from "vitest";
import { toMessageV1 } from "./toMessageV1.js";
import { Value } from "@sinclair/typebox/value";
import { MessageV1 } from "./schemaV1.js";
test("toMessageV1", () => {
    const message = toMessageV1(bundle);
    expect(Value.Check(MessageV1, message)).toBe(true);
    expect(message).toStrictEqual(messageV1);
});
test.todo("with variable references", () => { });
const messageV1 = {
    id: "hello_world",
    alias: {},
    variants: [
        {
            languageTag: "en",
            match: [],
            pattern: [
                {
                    type: "Text",
                    value: "Hello World!",
                },
            ],
        },
        {
            languageTag: "de",
            match: [],
            pattern: [
                {
                    type: "Text",
                    value: "Hallo Welt!",
                },
            ],
        },
    ],
    selectors: [],
};
const bundle = {
    id: "hello_world",
    declarations: [],
    messages: [
        {
            bundleId: "hello_world",
            id: "hello_world" + "_en",
            locale: "en",
            selectors: [],
            variants: [
                {
                    id: "hello_world" + "_en_1",
                    matches: [],
                    messageId: "hello_world" + "_en",
                    pattern: [
                        {
                            type: "text",
                            value: "Hello World!",
                        },
                    ],
                },
            ],
        },
        {
            bundleId: "hello_world",
            id: "hello_world" + "_de",
            locale: "de",
            selectors: [],
            variants: [
                {
                    id: "hello_world" + "_de_1",
                    matches: [],
                    messageId: "hello_world" + "_de",
                    pattern: [
                        {
                            type: "text",
                            value: "Hallo Welt!",
                        },
                    ],
                },
            ],
        },
    ],
};
//# sourceMappingURL=toMessageV1.test.js.map