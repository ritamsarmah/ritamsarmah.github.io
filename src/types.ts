export interface Link {
    text: string;
    href: string;
}

export interface Frontmatter {
    title: string;
    description: string;
    date: string;
}

export interface Post {
    frontmatter: Frontmatter;
    url: string;
}
