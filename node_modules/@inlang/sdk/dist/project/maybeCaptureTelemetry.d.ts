import { Kysely } from "kysely";
import type { InlangDatabaseSchema } from "../database/schema.js";
import type { ProjectSettings } from "../json-schema/settings.js";
import type { Lix } from "@lix-js/sdk";
export declare function maybeCaptureLoadedProject(args: {
    id: string;
    lix: Lix;
    settings: ProjectSettings;
    plugins: Readonly<Array<{
        key: string;
    }>>;
    appId?: string;
    db: Kysely<InlangDatabaseSchema>;
    forceCapture?: boolean;
}): Promise<void>;
//# sourceMappingURL=maybeCaptureTelemetry.d.ts.map