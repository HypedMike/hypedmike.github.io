import { loadProjectInMemory } from "./loadProjectInMemory.js";
import { type Lix } from "@lix-js/sdk";
import fs from "node:fs";
import type { InlangPlugin, NodeFsPromisesSubsetLegacy } from "../plugin/schema.js";
import type { ProjectSettings } from "../json-schema/settings.js";
import type { ImportFile } from "./api.js";
/**
 * Loads a project from a directory.
 *
 * Main use case are dev tools that want to load a project from a directory
 * that is stored in git.
 */
export declare function loadProjectFromDirectory(args: {
    path: string;
    fs: typeof fs;
    syncInterval?: number;
} & Omit<Parameters<typeof loadProjectInMemory>[0], "blob">): Promise<{
    errors: {
        get: () => Promise<Error[]>;
    };
    db: import("kysely").Kysely<import("../index.js").InlangDatabaseSchema>;
    _sqlite: import("sqlite-wasm-kysely").SqliteWasmDatabase;
    id: {
        get: () => Promise<string>;
    };
    plugins: {
        get: () => Promise<readonly InlangPlugin[]>;
    };
    settings: {
        get: () => Promise<ProjectSettings>;
        set: (settings: ProjectSettings) => Promise<void>;
    };
    lix: Lix;
    importFiles: (args: {
        pluginKey: InlangPlugin["key"];
        files: ImportFile[];
    }) => Promise<void>;
    exportFiles: (args: {
        pluginKey: InlangPlugin["key"];
    }) => Promise<import("./api.js").ExportFile[]>;
    close: () => Promise<void>;
    toBlob: () => Promise<Blob>;
}>;
export declare class WarningDeprecatedLintRule extends Error {
    constructor(module: string);
}
/**
 * Resolving absolute paths for fs functions.
 *
 * This mapping is required for backwards compatibility.
 * Relative paths in the project.inlang/settings.json
 * file are resolved to absolute paths with `*.inlang`
 * being pruned.
 *
 * @example
 *   "/website/project.inlang"
 *   "./local-plugins/mock-plugin.js"
 *   -> "/website/local-plugins/mock-plugin.js"
 *
 */
export declare function withAbsolutePaths(fs: NodeFsPromisesSubsetLegacy, projectPath: string): NodeFsPromisesSubsetLegacy;
/**
 * Joins a path from a project path.
 *
 * @example
 *   absolutePathFromProject("/project.inlang", "./local-plugins/mock-plugin.js") -> "/local-plugins/mock-plugin.js"
 *
 *   absolutePathFromProject("/website/project.inlang", "./mock-plugin.js") -> "/website/mock-plugin.js"
 */
export declare function absolutePathFromProject(projectPath: string, filePath: string): string;
export declare class ResourceFileImportError extends Error {
    path: string;
    constructor(args: {
        cause: Error;
        path: string;
    });
}
//# sourceMappingURL=loadProjectFromDirectory.d.ts.map