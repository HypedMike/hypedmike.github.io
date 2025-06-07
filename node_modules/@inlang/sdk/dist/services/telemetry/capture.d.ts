import type { ProjectSettings } from "../../json-schema/settings.js";
/**
 * List of telemetry events for typesafety.
 *
 * - prefix with `SDK` to avoid collisions with other apps
 * - use past tense to indicate that the event is completed
 */
type TelemetryEvent = "SDK loaded project";
/**
 * Capture an event.
 *
 * - manually calling the PostHog API because the SDKs were not platform angostic (and generally bloated)
 */
export declare const capture: (event: TelemetryEvent, args: {
    projectId: string;
    accountId: string;
    /**
     * Please use snake_case for property names.
     */
    properties: Record<string, any>;
    settings: Pick<ProjectSettings, "telemetry">;
}) => Promise<void>;
export {};
//# sourceMappingURL=capture.d.ts.map