'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * PodCanvas Component
 * 
 * Clean hero image display:
 * - High-quality hyperloop pod image
 * - Simple fade-in on load
 * - Subtle ambient glow effects
 */

interface PodCanvasProps {
    className?: string;
}

export default function PodCanvas({ className = '' }: PodCanvasProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {/* Ambient glow effect behind pod */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full h-full bg-gradient-radial from-primary-500/20 via-primary-500/5 to-transparent rounded-full blur-3xl" />
                </div>

                {/* Levitation glow underneath */}
                <div className="absolute top-[60%] left-1/2 w-[400px] h-[100px] -translate-x-1/2">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-2xl" />
                </div>
            </div>

            {/* Main pod image with simple fade-in */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: isLoaded ? 1 : 0,
                    y: isLoaded ? 0 : 20,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src="/images/hyperloopinpod.png"
                    alt="Hyperloopin Pod - High-speed transportation"
                    width={800}
                    height={500}
                    className="object-contain drop-shadow-2xl"
                    priority
                    onLoad={() => setIsLoaded(true)}
                    unoptimized
                />
            </motion.div>

            {/* Simple levitation line */}
            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[50%] h-[2px] z-0">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />
            </div>

            {/* Loading state */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <motion.div
                        className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            )}
        </div>
    );
}
