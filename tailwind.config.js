/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        // 8px base spacing scale
        spacing: {
            '0': '0',
            '1': '0.25rem',   // 4px
            '2': '0.5rem',    // 8px
            '3': '0.75rem',   // 12px
            '4': '1rem',      // 16px
            '5': '1.25rem',   // 20px
            '6': '1.5rem',    // 24px
            '8': '2rem',      // 32px
            '10': '2.5rem',   // 40px
            '12': '3rem',     // 48px
            '16': '4rem',     // 64px
            '20': '5rem',     // 80px
            '24': '6rem',     // 96px
            '32': '8rem',     // 128px
            '40': '10rem',    // 160px
            '48': '12rem',    // 192px
            '56': '14rem',    // 224px
            '64': '16rem',    // 256px
            '72': '18rem',    // 288px
            '80': '20rem',    // 320px
            '96': '24rem',    // 384px
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1440px',
            '3xl': '1920px',
        },
        extend: {
            // Custom color tokens - Hyperloopin Theme
            // Primary: Deep Navy Blue (#133457) - Professional, Technology
            // Accent: White / Light colors for contrast
            colors: {
                primary: {
                    50: '#e8edf4',
                    100: '#d1dbe9',
                    200: '#a3b7d3',
                    300: '#7593bd',
                    400: '#476fa7',
                    500: '#133457',  // Primary color - Deep Navy Blue
                    600: '#102c4a',
                    700: '#0d243d',
                    800: '#0a1c30',
                    900: '#071423',
                    950: '#040c16',
                },
                accent: {
                    50: '#ffffff',
                    100: '#f8fafc',
                    200: '#f1f5f9',
                    300: '#e2e8f0',
                    400: '#cbd5e1',
                    500: '#94a3b8',  // Accent color - Light slate
                    600: '#64748b',
                    700: '#475569',
                    800: '#334155',
                    900: '#1e293b',
                    950: '#0f172a',
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                    950: '#09090b',
                },
                // Semantic colors
                background: {
                    light: '#ffffff',
                    dark: '#0a0a0f',
                },
                surface: {
                    light: '#f4f4f5',
                    dark: '#18181b',
                },
            },
            // Typography scale
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1.16' }],
                '6xl': ['3.75rem', { lineHeight: '1.1' }],
                '7xl': ['4.5rem', { lineHeight: '1.05' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                'display': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            // Animation utilities
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s ease infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            // Box shadow tokens - Updated for orange primary
            boxShadow: {
                'glow-sm': '0 0 15px -3px rgba(249, 115, 22, 0.3)',
                'glow': '0 0 30px -5px rgba(249, 115, 22, 0.4)',
                'glow-lg': '0 0 50px -10px rgba(249, 115, 22, 0.5)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
            },
            // Backdrop blur
            backdropBlur: {
                'xs': '2px',
            },
            // Border radius
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            // Z-index scale
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [],
};
