'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { sponsors, type Sponsor } from '@/data/sponsors';

const tierColors = {
    platinum: 'from-neutral-300 to-neutral-500',
    gold: 'from-yellow-400 to-yellow-600',
    silver: 'from-neutral-300 to-neutral-400',
    bronze: 'from-amber-600 to-amber-800',
};

const tierLabels = {
    platinum: 'Platinum Partner',
    gold: 'Gold Partner',
    silver: 'Silver Partner',
    bronze: 'Bronze Partner',
};

export default function Sponsors() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Group sponsors by tier
    const groupedSponsors = sponsors.reduce((acc, sponsor) => {
        if (!acc[sponsor.tier]) {
            acc[sponsor.tier] = [];
        }
        acc[sponsor.tier].push(sponsor);
        return acc;
    }, {} as Record<Sponsor['tier'], Sponsor[]>);

    const tierOrder: Sponsor['tier'][] = ['platinum', 'gold', 'silver', 'bronze'];

    return (
        <section
            id="sponsors"
            ref={ref}
            className="section-padding bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden"
            aria-labelledby="sponsors-heading"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="section-container relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                        Our Partners
                    </span>
                    <h2 id="sponsors-heading" className="heading-lg mb-4">
                        Powered by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        We&apos;re grateful to our sponsors and partners who believe in our
                        mission and support our journey to revolutionize transportation.
                    </p>
                </motion.div>

                {/* Sponsors by tier */}
                <div className="space-y-12">
                    {tierOrder.map((tier) => {
                        const tierSponsors = groupedSponsors[tier];
                        if (!tierSponsors || tierSponsors.length === 0) return null;

                        return (
                            <motion.div
                                key={tier}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Tier label */}
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-300 dark:to-neutral-700" />
                                    <span className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${tierColors[tier]} text-white`}>
                                        {tierLabels[tier]}
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-300 dark:to-neutral-700" />
                                </div>

                                {/* Sponsor logos grid */}
                                <div className={`grid gap-6 ${tier === 'platinum'
                                        ? 'grid-cols-2 md:grid-cols-2'
                                        : tier === 'gold'
                                            ? 'grid-cols-2 md:grid-cols-3'
                                            : 'grid-cols-3 md:grid-cols-4'
                                    }`}>
                                    {tierSponsors.map((sponsor, index) => (
                                        <motion.a
                                            key={sponsor.id}
                                            href={sponsor.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                            className={`group glass-card flex items-center justify-center transition-all duration-300 hover:shadow-lg ${tier === 'platinum' ? 'p-8 md:p-12' : tier === 'gold' ? 'p-6 md:p-8' : 'p-4 md:p-6'
                                                }`}
                                            aria-label={`Visit ${sponsor.name} website`}
                                        >
                                            <div className={`relative ${tier === 'platinum' ? 'h-16 md:h-20 w-full' : tier === 'gold' ? 'h-12 md:h-16 w-full' : 'h-10 md:h-12 w-full'
                                                }`}>
                                                <Image
                                                    src={sponsor.logo}
                                                    alt={`${sponsor.name} logo`}
                                                    fill
                                                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                                    sizes="(max-width: 640px) 50vw, 33vw"
                                                />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Become a sponsor CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <div className="glass-card inline-block p-8 max-w-lg mx-auto">
                        <h3 className="heading-sm mb-3">Become a Partner</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                            Join our growing network of industry partners and help shape the
                            future of transportation technology.
                        </p>
                        <a
                            href="#contact"
                            className="btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Partner With Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
