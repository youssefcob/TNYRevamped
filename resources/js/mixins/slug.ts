/**
 * Mirrors Laravel's Str::slug() for plain ASCII input: lowercase,
 * non-alphanumeric runs become a single dash, leading/trailing dashes
 * trimmed. Used to build /apply/{position} links that match what
 * HomeController::apply() resolves server-side.
 */
export function slugify(value: string): string {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
