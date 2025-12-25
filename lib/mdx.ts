import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/news');

export interface NewsPostMeta {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
}

export interface NewsPost extends NewsPostMeta {
    content: string;
}

/**
 * Get all news post slugs for static path generation
 */
export function getNewsSlugs(): string[] {
    try {
        const files = fs.readdirSync(contentDirectory);
        return files
            .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
            .map((file) => file.replace(/\.mdx?$/, ''));
    } catch {
        return [];
    }
}

/**
 * Get metadata for all news posts (for listing)
 */
export function getAllNewsPosts(): NewsPostMeta[] {
    const slugs = getNewsSlugs();
    const posts = slugs
        .map((slug) => getNewsPostBySlug(slug))
        .filter((post): post is NewsPost => post !== null)
        .map(({ content, ...meta }) => meta)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

/**
 * Get a single news post by slug
 */
export function getNewsPostBySlug(slug: string): NewsPost | null {
    try {
        const mdxPath = path.join(contentDirectory, `${slug}.mdx`);
        const mdPath = path.join(contentDirectory, `${slug}.md`);

        let fullPath = '';
        if (fs.existsSync(mdxPath)) {
            fullPath = mdxPath;
        } else if (fs.existsSync(mdPath)) {
            fullPath = mdPath;
        } else {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title || 'Untitled',
            excerpt: data.excerpt || '',
            date: data.date || new Date().toISOString(),
            author: data.author || 'Hyperloopin Team',
            image: data.image || '/images/news/default.jpg',
            category: data.category || 'News',
            content,
        };
    } catch {
        return null;
    }
}
