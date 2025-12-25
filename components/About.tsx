'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section
            id="about"
            ref={ref}
            className="section-padding relative overflow-hidden"
            aria-labelledby="about-heading"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent" />

            <div className="section-container relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <motion.span
                            variants={itemVariants}
                            className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4"
                        >
                            About Us
                        </motion.span>

                        <motion.h2
                            id="about-heading"
                            variants={itemVariants}
                            className="heading-lg mb-6"
                        >
                            Pioneering the Future of{' '}
                            <span className="gradient-text">High-Speed Travel</span>
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="space-y-4 text-neutral-600 dark:text-neutral-400"
                        >
                            <p className="text-lg">
                                Hyperloopin is a student-led engineering team dedicated to designing and
                                building the next generation of hyperloop transportation systems. Founded
                                in 2020, we bring together passionate engineers, designers, and innovators
                                from diverse fields.
                            </p>
                            <p>
                                Our mission is to push the boundaries of sustainable transportation technology
                                while providing students with hands-on experience in cutting-edge engineering.
                                We believe that the future of travel lies in ultra-fast, energy-efficient
                                ground transport.
                            </p>
                        </motion.div>

                        {/* Mission & Vision */}
                        <motion.div
                            variants={itemVariants}
                            className="grid sm:grid-cols-2 gap-6 mt-8"
                        >
                            <div className="glass-card p-6 card-hover">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-white">
                                    Our Mission
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    To accelerate the development of hyperloop technology through
                                    innovation, collaboration, and hands-on engineering excellence.
                                </p>
                            </div>

                            <div className="glass-card p-6 card-hover">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-white">
                                    Our Vision
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    A world where sustainable, high-speed ground transportation
                                    connects cities and communities like never before.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image/Illustration */}
                    <motion.div
                        variants={itemVariants}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />

                            {/* Main image container */}
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
                                <Image
                                    src="/images/about-illustration.jpg"
                                    alt="Hyperloopin team working on pod design"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    priority={false}
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />

                                {/* Floating stats card */}
                                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 flex items-center justify-between">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                                        <div className="text-xs text-neutral-500">Departments</div>
                                    </div>
                                    <div className="w-px h-10 bg-neutral-300 dark:bg-neutral-700" />
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3</div>
                                        <div className="text-xs text-neutral-500">Pod Versions</div>
                                    </div>
                                    <div className="w-px h-10 bg-neutral-300 dark:bg-neutral-700" />
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                                        <div className="text-xs text-neutral-500">Awards</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative floating elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-glow flex items-center justify-center"
                            >
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3l4 9H3l4 9M19 3l-4 9h6l-4 9"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
