import fs from "node:fs";
import { toSafeModuleId } from "../safe-module-id.js";
/**
 * Returns the code for the `runtime.js` module
 */
export function createServerFile(args) {
    let code = `
import * as runtime from "./runtime.js";

${injectCode("./middleware.js")}
`;
    if (args.compilerOptions.experimentalMiddlewareLocaleSplitting) {
        code = code.replace("const compiledBundles = {};", `const compiledBundles = ${JSON.stringify(createCompiledMessagesObject(args.compiledBundles))};`);
    }
    return code;
}
function createCompiledMessagesObject(compiledBundles) {
    const result = {};
    for (const compiledBundle of compiledBundles) {
        const bundleId = compiledBundle.bundle.node.id;
        const safeModuleId = toSafeModuleId(bundleId);
        if (result[bundleId] === undefined) {
            result[bundleId] = {};
        }
        for (const [locale, compiledMessage] of Object.entries(compiledBundle.messages)) {
            result[bundleId][locale] = compiledMessage.code
                .replace(`export const ${safeModuleId} = `, "")
                .replace(/;$/, "");
        }
    }
    return result;
}
/**
 * Load a file from the current directory.
 *
 * Prunes the imports on top of the file as the runtime is
 * self-contained.
 *
 * @param {string} path
 * @returns {string}
 */
function injectCode(path) {
    const code = fs.readFileSync(new URL(path, import.meta.url), "utf-8");
    // Regex to match single-line and multi-line imports
    const importRegex = /import\s+[\s\S]*?from\s+['"][^'"]+['"]\s*;?/g;
    return code.replace(importRegex, "").trim();
}
