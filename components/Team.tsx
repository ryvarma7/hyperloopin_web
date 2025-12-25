'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { teamMembers, type TeamMember } from '@/data/team';

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

function TeamCard({ member, index }: TeamCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card overflow-hidden card-hover"
        >
            {/* Image container */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent" />

                {/* Social links - appear on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    )}
                    {member.github && (
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                            aria-label={`${member.name}'s GitHub profile`}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* Member info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-semibold text-lg text-white mb-1">
                        {member.name}
                    </h3>
                    <p className="text-sm text-primary-400 font-medium mb-2">
                        {member.role}
                    </p>
                    <p className="text-sm text-neutral-300 line-clamp-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {member.bio}
                    </p>
                </div>
            </div>
        </motion.article>
    );
}

export default function Team() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="team"
            ref={ref}
            className="section-padding bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden"
            aria-labelledby="team-heading"
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="section-container relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                        Our Team
                    </span>
                    <h2 id="team-heading" className="heading-lg mb-4">
                        Meet the <span className="gradient-text">Innovators</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        A diverse group of passionate engineers, designers, and innovators
                        working together to push the boundaries of transportation technology.
                    </p>
                </motion.div>

                {/* Team grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={member.id} member={member} index={index} />
                    ))}
                </div>

                {/* Join CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        Want to be part of the team?
                    </p>
                    <a
                        href="#contact"
                        className="btn-secondary"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Apply Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
