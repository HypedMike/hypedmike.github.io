/**
 * A list of packages that we consider relevant for stack detection.
 *
 * We (Loris & Nils) decided against using _all_ packages because that would be too much unnecessary data
 * that would slow down queries.
 */
declare const RelevantPackages: readonly ["next", "solid", "solid-start", "svelte", "@sveltejs/kit", "vue", "nuxt", "react", "react-native", "remix", "astro", "react", "react-router", "vite", "vike", "webpack", "rollup", "esbuild", "qwick", "parcel", "lit", "@angular/core"];
type RelevantPackage = (typeof RelevantPackages)[number];
export type StackInfo = {
    /**
     * A map of relevant packages to their versions.
     */
    packages: {
        [packageName in RelevantPackage]?: string;
    };
};
/**
 * Returns information about the tech-stack used based on the package.json.
 * It will return an object with a map of relevant packages and their versions
 * as the `packages` property.
 *
 * If no interestring packages are found, the `packages` property will be an empty object.
 * If an error occurs, the `packages` property will be an empty object.
 *
 * @example
 *
 * ```ts
 * {
 *  "packages": {
 *     "next": "^14.0.0",
 *     "react": "^17.0.0"
 *   }
 * }
 * ```
 *
 * @param packageJson The JSON parsed package.json file.
 */
export declare function getStackInfo(packageJson: unknown): StackInfo;
export {};
//# sourceMappingURL=stack-detection.d.ts.map