// Site-wide constants and configuration
export const siteConfig = {
    name: 'Hyperloopin',
    tagline: 'Engineering the Future of Transportation',
    description: 'A university engineering club dedicated to building the next generation of high-speed transportation through innovation, collaboration, and cutting-edge technology.',
    url: 'https://hyperloopin.edu',
    email: 'contact@hyperloopin.edu',
    phone: '+91 98765 43210',
    address: 'Engineering Building, University Campus, City - 110001',

    // SEO
    seo: {
        title: 'Hyperloopin - University Hyperloop Engineering Club',
        description: 'Join Hyperloopin, a leading university engineering club pioneering hyperloop technology. Building the future of sustainable high-speed transportation.',
        keywords: ['hyperloop', 'engineering', 'university club', 'transportation', 'innovation', 'magnetic levitation'],
        openGraph: {
            type: 'website',
            locale: 'en_US',
            siteName: 'Hyperloopin',
        },
    },

    // Social media
    social: {
        twitter: '@hyperloopin',
        instagram: '@hyperloopin',
        linkedin: 'hyperloopin',
        youtube: '@hyperloopin',
        github: 'hyperloopin',
    },
};

// Animation configuration for consistent timing
export const animationConfig = {
    duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.6,
        verySlow: 1,
    },
    easing: {
        smooth: [0.25, 0.1, 0.25, 1],
        bounce: [0.68, -0.55, 0.265, 1.55],
        easeOut: [0, 0, 0.2, 1],
        easeIn: [0.4, 0, 1, 1],
    },
};

// Breakpoints matching Tailwind config
export const breakpoints = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1440,
    '3xl': 1920,
};
