'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export interface NewsPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
}

interface NewsListProps {
    posts: NewsPost[];
}

export default function NewsList({ posts }: NewsListProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="news"
            ref={ref}
            className="section-padding relative overflow-hidden"
            aria-labelledby="news-heading"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent-500/5 to-transparent" />

            <div className="section-container relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                        News & Updates
                    </span>
                    <h2 id="news-heading" className="heading-lg mb-4">
                        Latest from <span className="gradient-text">Hyperloopin</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Stay updated with our latest achievements, announcements, and
                        behind-the-scenes stories from our journey.
                    </p>
                </motion.div>

                {/* News grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group glass-card overflow-hidden card-hover"
                        >
                            {/* Image */}
                            <Link href={`/news/${post.slug}`} className="block relative aspect-video overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />

                                {/* Category badge */}
                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
                                    {post.category}
                                </span>
                            </Link>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta */}
                                <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    <Link href={`/news/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">
                                    {post.excerpt}
                                </p>

                                {/* Read more link */}
                                <Link
                                    href={`/news/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
                                >
                                    Read More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View all news */}
                {posts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/news"
                            className="btn-secondary"
                        >
                            View All Updates
                        </Link>
                    </motion.div>
                )}

                {/* Empty state */}
                {posts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-neutral-500 dark:text-neutral-400">
                            No news posts available yet. Check back soon!
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
