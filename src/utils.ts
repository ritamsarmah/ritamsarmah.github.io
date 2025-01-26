/** Converts UTC date string from frontmatter into human readable date */
export function stringifyDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
