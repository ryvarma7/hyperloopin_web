import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { getNewsSlugs, getNewsPostBySlug, type NewsPostMeta } from '@/lib/mdx';

interface NewsPostPageProps {
    meta: NewsPostMeta;
    source: MDXRemoteSerializeResult;
}

// Custom MDX components for styling
const mdxComponents = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="heading-xl mt-8 mb-4 text-neutral-900 dark:text-white" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="heading-md mt-8 mb-4 text-neutral-900 dark:text-white" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="heading-sm mt-6 mb-3 text-neutral-900 dark:text-white" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a className="text-primary-600 dark:text-primary-400 hover:underline" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-400 space-y-2" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside mb-4 text-neutral-600 dark:text-neutral-400 space-y-2" {...props} />
    ),
    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
        <li className="ml-4" {...props} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-neutral-600 dark:text-neutral-400" {...props} />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4 overflow-x-auto my-4 text-sm" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono text-primary-600 dark:text-primary-400" {...props} />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700" {...props} />
        </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800" {...props} />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700" {...props} />
    ),
    hr: () => (
        <hr className="my-8 border-neutral-200 dark:border-neutral-700" />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-neutral-900 dark:text-white" {...props} />
    ),
};

export default function NewsPostPage({ meta, source }: NewsPostPageProps) {
    const formattedDate = new Date(meta.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            <NextSeo
                title={meta.title}
                description={meta.excerpt}
                openGraph={{
                    title: meta.title,
                    description: meta.excerpt,
                    type: 'article',
                    article: {
                        publishedTime: meta.date,
                        authors: [meta.author],
                        tags: [meta.category],
                    },
                    images: [
                        {
                            url: `https://hyperloopin.edu${meta.image}`,
                            width: 1200,
                            height: 630,
                            alt: meta.title,
                        },
                    ],
                }}
            />
            <ArticleJsonLd
                type="BlogPosting"
                url={`https://hyperloopin.edu/news/${meta.slug}`}
                title={meta.title}
                images={[`https://hyperloopin.edu${meta.image}`]}
                datePublished={meta.date}
                authorName={meta.author}
                description={meta.excerpt}
            />

            <Navbar />

            <main className="pt-24 pb-16">
                <article className="section-container max-w-4xl">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href="/#news"
                            className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to News
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
                                {meta.category}
                            </span>
                            <time dateTime={meta.date} className="text-sm text-neutral-500">
                                {formattedDate}
                            </time>
                        </div>
                        <h1 className="heading-xl mb-4">{meta.title}</h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                            {meta.excerpt}
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-semibold">
                                {meta.author.split(' ').map((n) => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-medium text-neutral-900 dark:text-white">{meta.author}</p>
                                <p className="text-sm text-neutral-500">Hyperloopin Team</p>
                            </div>
                        </div>
                    </motion.header>

                    {/* Featured image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative aspect-video rounded-2xl overflow-hidden mb-12"
                    >
                        <Image
                            src={meta.image}
                            alt={meta.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                    >
                        <MDXRemote {...source} components={mdxComponents} />
                    </motion.div>

                    {/* Share section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800"
                    >
                        <p className="text-sm font-medium text-neutral-500 mb-4">Share this article</p>
                        <div className="flex gap-3">
                            {['twitter', 'linkedin', 'facebook'].map((platform) => (
                                <button
                                    key={platform}
                                    className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:bg-primary-500 hover:text-white transition-colors"
                                    aria-label={`Share on ${platform}`}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </article>
            </main>

            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getNewsSlugs();
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false, // Return 404 for non-existent slugs
    };
};

export const getStaticProps: GetStaticProps<NewsPostPageProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const post = getNewsPostBySlug(slug);

    if (!post) {
        return { notFound: true };
    }

    const { content, ...meta } = post;
    const mdxSource = await serialize(content);

    return {
        props: {
            meta,
            source: mdxSource,
        },
    };
};
