'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { navigationLinks } from '@/data/navigation';

/**
 * Navbar Component
 * 
 * Fixed navigation with:
 * - Anchor links to sections
 * - Active section indicator (intersection observer)
 * - Mobile hamburger menu with accessible keyboard interactions
 * - Glass morphism design with backdrop blur
 */

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for background blur effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for active section detection
    useEffect(() => {
        const sections = navigationLinks.map(link =>
            document.querySelector(link.href)
        ).filter(Boolean) as Element[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleLinkClick = useCallback((href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg'
                    : 'bg-transparent'
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="section-container">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            className="flex items-center group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick('#home');
                            }}
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Hyperloopin Logo"
                                width={180}
                                height={60}
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navigationLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link.href);
                                    }}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${activeSection === link.href.slice(1)
                                        ? 'text-primary-600 dark:text-primary-400'
                                        : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                                        }`}
                                    aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                                >
                                    {link.label}
                                    {activeSection === link.href.slice(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-primary-500/10 rounded-lg -z-10"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <motion.a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('#contact');
                                }}
                                className="btn-primary text-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Join Us
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-neutral-900 dark:bg-white rounded-full origin-left"
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    className="w-full h-0.5 bg-neutral-900 dark:bg-white rounded-full"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-neutral-900 dark:bg-white rounded-full origin-left"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            id="mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-neutral-900 shadow-2xl z-50 lg:hidden"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Close button */}
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1" aria-label="Mobile navigation">
                                    <ul className="space-y-2">
                                        {navigationLinks.map((link, index) => (
                                            <motion.li
                                                key={link.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <a
                                                    href={link.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleLinkClick(link.href);
                                                    }}
                                                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${activeSection === link.href.slice(1)
                                                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                                                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                                        }`}
                                                    aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                                                >
                                                    {link.label}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* CTA Button */}
                                <motion.a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('#contact');
                                    }}
                                    className="btn-primary text-center mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Join Our Team
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
