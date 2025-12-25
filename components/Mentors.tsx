'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { mentors, type Mentor } from '@/data/mentors';

interface MentorCardProps {
    mentor: Mentor;
    index: number;
}

function MentorCard({ mentor, index }: MentorCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card p-6 card-hover"
        >
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                    />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-neutral-900 dark:text-white truncate">
                        {mentor.name}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {mentor.role}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {mentor.affiliation}
                    </p>
                </div>

                {/* LinkedIn link */}
                {mentor.linkedin && (
                    <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label={`${mentor.name}'s LinkedIn profile`}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                )}
            </div>

            {/* Bio */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                {mentor.bio}
            </p>
        </motion.article>
    );
}

export default function Mentors() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="mentors"
            ref={ref}
            className="section-padding relative overflow-hidden"
            aria-labelledby="mentors-heading"
        >
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-500/5 to-transparent" />

            <div className="section-container relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                        Mentors & Advisors
                    </span>
                    <h2 id="mentors-heading" className="heading-lg mb-4">
                        Guided by <span className="gradient-text">Experts</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Our mentors bring decades of experience from academia and industry,
                        providing invaluable guidance to help us achieve our goals.
                    </p>
                </motion.div>

                {/* Mentors grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mentors.map((mentor, index) => (
                        <MentorCard key={mentor.id} mentor={mentor} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
