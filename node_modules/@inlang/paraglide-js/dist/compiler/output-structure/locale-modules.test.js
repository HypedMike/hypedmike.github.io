import { test, expect } from "vitest";
import { generateOutput } from "./locale-modules.js";
test("should emit per locale message files", () => {
    const bundles = [
        {
            bundle: {
                code: 'console.log("bundle code");',
                node: {
                    id: "happy_elephant",
                },
            },
            messages: {
                en: {
                    code: 'console.log("message in English");',
                    node: {},
                },
                de: {
                    code: 'console.log("message in German");',
                    node: {},
                },
            },
        },
    ];
    const settings = {
        locales: ["en", "de"],
        baseLocale: "en",
    };
    const fallbackMap = {
        en: "de",
        de: "en",
    };
    const output = generateOutput(bundles, settings, fallbackMap);
    expect(output).toHaveProperty("messages/en.js");
    expect(output).toHaveProperty("messages/de.js");
    expect(output["messages/en.js"]).toContain(`console.log("message in English");`);
});
test("the files should include files for each locale, even if there are no messages", () => {
    const bundles = [
        {
            bundle: {
                code: 'console.log("bundle code");',
                node: {
                    id: "happy_elephant",
                },
            },
            messages: {},
        },
    ];
    const settings = {
        locales: ["en", "de", "fr"],
        baseLocale: "en",
    };
    const fallbackMap = {
        en: "de",
        de: "en",
    };
    const output = generateOutput(bundles, settings, fallbackMap);
    expect(output).toHaveProperty("messages/en.js");
    expect(output).toHaveProperty("messages/de.js");
    expect(output).toHaveProperty("messages/fr.js");
});
test("should handle case sensitivity in message IDs correctly", () => {
    const bundles = [
        {
            bundle: {
                code: 'console.log("bundle code");',
                node: {
                    id: "sad_penguin_bundle",
                },
            },
            messages: {
                en: {
                    code: 'console.log("sad_penguin_bundle");',
                    node: {},
                },
            },
        },
        {
            bundle: {
                code: 'console.log("bundle code");',
                node: {
                    id: "Sad_penguin_bundle",
                },
            },
            messages: {
                en: {
                    code: 'console.log("Sad_penguin_bundle");',
                    node: {},
                },
            },
        },
    ];
    const settings = {
        locales: ["en"],
        baseLocale: "en",
    };
    const fallbackMap = {};
    const output = generateOutput(bundles, settings, fallbackMap);
    // Check that the output exists
    expect(output).toHaveProperty("messages/_index.js");
    expect(output).toHaveProperty("messages/en.js");
    // The exported constants should not conflict
    const content = output["messages/en.js"];
    expect(content).toContain("export const sad_penguin_bundle");
    expect(content).toContain("export const sad_penguin_bundle1"); // or some other unique name
});
