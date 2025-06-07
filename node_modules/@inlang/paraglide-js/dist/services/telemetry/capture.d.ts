import type { ProjectSettings } from "@inlang/sdk";
/**
 * Capture an event.
 *
 * - manually calling the PostHog API because the SDKs were not platform angostic (and generally bloated)
 */
export declare const capture: (event: "PARAGLIDE-JS compile executed", args: {
    projectId: string;
    /**
     * Please use snake_case for property names.
     */
    properties: Record<string, any>;
    settings: Pick<ProjectSettings, "telemetry">;
}) => Promise<void>;
//# sourceMappingURL=capture.d.ts.map