'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { achievements, type Achievement } from '@/data/achievements';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Timeline Component
 * 
 * Year-wise achievements with scrollytelling animations using GSAP ScrollTrigger.
 * Each milestone reveals as the user scrolls with smooth transitions.
 * Includes ARIA roles for accessibility.
 */

// Icon components for achievements
const icons = {
    trophy: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    ),
    rocket: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
    ),
    star: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    ),
    medal: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    ),
    flag: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
    ),
    lightning: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
};

interface TimelineItemProps {
    achievement: Achievement;
    index: number;
    isLeft: boolean;
}

function TimelineItem({ achievement, index, isLeft }: TimelineItemProps) {
    const itemRef = useRef(null);

    useEffect(() => {
        // GSAP ScrollTrigger animation for each item
        const element = itemRef.current;
        if (!element) return;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: isLeft ? -50 : 50,
                y: 30,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [isLeft]);

    return (
        <div
            ref={itemRef}
            className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row-reverse' : ''
                }`}
            role="listitem"
        >
            {/* Content card */}
            <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
                <article
                    className={`glass-card p-6 card-hover ${achievement.highlight
                            ? 'ring-2 ring-primary-500/50 bg-gradient-to-br from-primary-500/10 to-accent-500/10'
                            : ''
                        }`}
                    aria-label={`${achievement.year}: ${achievement.title}`}
                >
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                            {achievement.year}
                        </span>
                        {achievement.highlight && (
                            <span className="text-xs font-medium text-accent-600 dark:text-accent-400 bg-accent-500/10 px-2 py-0.5 rounded-full">
                                Highlight
                            </span>
                        )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-white">
                        {achievement.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {achievement.description}
                    </p>
                </article>
            </div>

            {/* Timeline dot */}
            <div className="hidden md:flex flex-col items-center">
                <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center z-10 ${achievement.highlight
                            ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-glow'
                            : 'bg-white dark:bg-neutral-800 border-2 border-primary-500 text-primary-600 dark:text-primary-400'
                        }`}
                >
                    {icons[achievement.icon]}
                </div>
            </div>

            {/* Empty space for opposite side */}
            <div className="hidden md:block flex-1" />
        </div>
    );
}

export default function Timeline() {
    const ref = useRef(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        // Animate the timeline line as user scrolls
        if (!lineRef.current) return;

        gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <section
            id="timeline"
            ref={ref}
            className="section-padding relative overflow-hidden"
            aria-labelledby="timeline-heading"
        >
            <div className="section-container relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                        Our Journey
                    </span>
                    <h2 id="timeline-heading" className="heading-lg mb-4">
                        Milestones & <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        From our founding to becoming a top competitor, explore our journey
                        of innovation and success in the hyperloop industry.
                    </p>
                </motion.div>

                {/* Timeline container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
                        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800" />
                        <div
                            ref={lineRef}
                            className="absolute inset-0 bg-gradient-to-b from-primary-500 to-accent-500 origin-top"
                        />
                    </div>

                    {/* Timeline items */}
                    <div className="space-y-8 md:space-y-12" role="list" aria-label="Timeline of achievements">
                        {achievements.map((achievement, index) => (
                            <TimelineItem
                                key={achievement.id}
                                achievement={achievement}
                                index={index}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
