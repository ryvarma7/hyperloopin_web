import Link from 'next/link';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

export default function Custom404() {
    return (
        <>
            <NextSeo
                title="Page Not Found"
                description="The page you're looking for doesn't exist."
                noindex={true}
            />

            <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="section-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* 404 Number */}
                        <div className="relative mb-8">
                            <span className="text-[12rem] md:text-[16rem] font-bold text-neutral-100 dark:text-neutral-800 leading-none select-none">
                                404
                            </span>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-glow">
                                    <svg
                                        className="w-16 h-16 md:w-20 md:h-20 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <h1 className="heading-lg mb-4">
                            Oops! Page Not Found
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
                            Looks like this page took a hyperloop trip to nowhere.
                            Let&apos;s get you back on track.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/" className="btn-primary">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Go Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="btn-secondary"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Go Back
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
