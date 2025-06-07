import type { CliStep } from "../utils.js";
import type { Logger } from "../../services/logger/index.js";
export declare const maybeUpdateTsConfig: CliStep<{
    fs: typeof import("node:fs/promises");
    logger: Logger;
}, unknown>;
/**
 * Paraligde JS compiles to JS with JSDoc comments. TypeScript doesn't allow JS files by default.
 */
export declare const maybeUpdateTsConfigAllowJs: CliStep<{
    fs: typeof import("node:fs/promises");
    logger: Logger;
}, unknown>;
//# sourceMappingURL=update-ts-config.d.ts.map