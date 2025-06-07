/**
 * Generates a list of localized URLs for all provided URLs.
 *
 * This is useful for SSG (Static Site Generation) and sitemap generation.
 * NextJS and other frameworks use this function for SSG.
 *
 * @example
 * ```typescript
 * const urls = generateStaticLocalizedUrls([
 *   "https://example.com/about",
 *   "https://example.com/blog",
 * ]);
 * urls[0].href // => "https://example.com/about"
 * urls[1].href // => "https://example.com/blog"
 * urls[2].href // => "https://example.com/de/about"
 * urls[3].href // => "https://example.com/de/blog"
 * ...
 * ```
 *
 * @param {(string | URL)[]} urls - List of URLs to generate localized versions for. Can be absolute URLs or paths.
 * @returns {URL[]} List of localized URLs as URL objects
 */
export function generateStaticLocalizedUrls(urls: (string | URL)[]): URL[];
//# sourceMappingURL=generate-static-localized-urls.d.ts.map