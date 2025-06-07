import { test, expect } from "vitest";
import { generateOutput } from "./message-modules.js";
test("should emit per locale message files", () => {
    const resources = [
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
    const output = generateOutput(resources, settings, fallbackMap);
    expect(output).not.toHaveProperty("messages/en.js");
    expect(output).not.toHaveProperty("messages/de.js");
    expect(output).toHaveProperty("messages/happy_elephant.js");
});
test("handles case senstivity by creating directories and files only in lowercase", () => {
    const resources = [
        {
            bundle: {
                code: "export const HappyElephant = () => en.HappyElephant",
                node: {
                    id: "HappyElephant",
                },
            },
            messages: {
                en: {
                    code: 'export const HappyElephant = () => "HappyElephant0"',
                    node: {},
                },
            },
        },
        {
            bundle: {
                code: "export const happyelephant = () => en.happyelephant",
                node: {
                    id: "happyelephant",
                },
            },
            messages: {
                en: {
                    code: 'export const happyelephant = () => "happyelephant1"',
                    node: {},
                },
            },
        },
    ];
    const settings = {
        locales: ["en"],
        baseLocale: "en",
    };
    const output = generateOutput(resources, settings, {});
    // expecting only lowercase directories and files
    expect(output).toHaveProperty("messages/happyelephant.js");
    expect(output).toHaveProperty("messages/happyelephant2.js");
    expect(output).not.toHaveProperty("messages/HappyElephant.js");
});
