/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Image optimization settings
    images: {
        domains: [],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [480, 768, 1024, 1440, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Enable static exports for Vercel/Netlify
    // Uncomment below for static export:
    // output: 'export',

    // Webpack configuration for 3D assets
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/',
                    outputPath: 'static/',
                },
            },
        });
        return config;
    },

    // Performance optimizations
    poweredByHeader: false,
    compress: true,
};

module.exports = nextConfig;
