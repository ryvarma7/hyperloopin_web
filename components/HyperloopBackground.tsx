'use client';

import { motion } from 'framer-motion';

/**
 * HyperloopBackground Component
 * 
 * Animated background with hyperloop-themed elements:
 * - Moving speed lines (tunnel effect)
 * - Floating particles
 * - Glowing tube rings
 * - Subtle grid pattern
 */

export default function HyperloopBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

            {/* Animated tunnel rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-primary-500/10"
                        style={{
                            width: `${200 + i * 150}px`,
                            height: `${200 + i * 150}px`,
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Horizontal speed lines */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
                        style={{
                            top: `${10 + i * 10}%`,
                            left: 0,
                            right: 0,
                        }}
                        animate={{
                            x: ['-100%', '100%'],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 rounded-full bg-primary-500/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Subtle moving grid */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(19, 52, 87, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(19, 52, 87, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Radial glow from center */}
            <div className="absolute inset-0 bg-radial-gradient opacity-50" />

            {/* Corner glows */}
            <motion.div
                className="absolute -top-32 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
