'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { galleryImages, type GalleryImage } from '@/data/gallery';
import Lightbox from './Lightbox';

type CategoryFilter = 'all' | GalleryImage['category'];

const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'pod', label: 'Pod' },
    { value: 'team', label: 'Team' },
    { value: 'event', label: 'Events' },
    { value: 'testing', label: 'Testing' },
    { value: 'workshop', label: 'Workshop' },
];

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [filter, setFilter] = useState<CategoryFilter>('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section
            id="gallery"
            ref={ref}
            className="section-padding bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden"
            aria-labelledby="gallery-heading"
        >
            <div className="section-container relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
                >
                    <span className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                        Gallery
                    </span>
                    <h2 id="gallery-heading" className="heading-lg mb-4">
                        Moments of <span className="gradient-text">Innovation</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Explore our journey through images - from pod development to competitions
                        and team collaborations.
                    </p>
                </motion.div>

                {/* Filter buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                    role="tablist"
                    aria-label="Filter gallery by category"
                >
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => setFilter(category.value)}
                            role="tab"
                            aria-selected={filter === category.value}
                            aria-controls="gallery-grid"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category.value
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-500/10'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Image grid */}
                <div
                    id="gallery-grid"
                    role="tabpanel"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {filteredImages.map((image, index) => (
                        <motion.button
                            key={image.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            onClick={() => openLightbox(index)}
                            className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            aria-label={`View ${image.alt}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                loading="lazy"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div className="text-white text-left">
                                    <p className="font-medium text-sm line-clamp-2">{image.caption}</p>
                                    <p className="text-xs text-neutral-300 capitalize mt-1">{image.category}</p>
                                </div>
                            </div>

                            {/* Expand icon */}
                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Empty state */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-neutral-500 dark:text-neutral-400">
                            No images found for this category.
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <Lightbox
                images={filteredImages.map((img) => ({
                    id: img.id,
                    src: img.src,
                    alt: img.alt,
                    caption: img.caption,
                }))}
                initialIndex={selectedIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </section>
    );
}
