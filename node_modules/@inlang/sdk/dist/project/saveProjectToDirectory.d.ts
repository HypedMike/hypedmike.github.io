import type fs from "node:fs/promises";
import type { InlangProject } from "./api.js";
export declare function saveProjectToDirectory(args: {
    fs: typeof fs;
    project: InlangProject;
    path: string;
}): Promise<void>;
//# sourceMappingURL=saveProjectToDirectory.d.ts.map