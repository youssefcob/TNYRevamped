/**
 * Toggles for the admin content-editing features. Set a value to `false` to
 * turn that feature off across the whole site; `true` turns it back on.
 *
 * - `textEditing` — click-to-edit text anywhere on the site.
 * - `textStyles` — the "Manage Styles" panel and applying named text styles
 *   to editable text. Also stops any already-assigned style from rendering.
 * - `imageEditing` — click-to-replace images (including alt text/object-fit).
 * - `metaTags` — the "Manage Meta Tags" panel and its effect on page
 *   <title>/description/canonical/OG tags. When off, every page falls back
 *   to its hardcoded defaults.
 * - `sitemap` — the "Manage Sitemap" panel for adjusting priority,
 *   change frequency, and inclusion of pages in /sitemap.xml.
 */
export const FEATURES = {
    textEditing: false,
    textStyles: false,
    imageEditing: false,
    metaTags: false,
    sitemap: true,
} as const;

export type FeatureFlag = keyof typeof FEATURES;
