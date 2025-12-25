import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document
 * 
 * Sets up HTML structure with:
 * - Language attribute
 * - Preconnect for external resources
 * - Favicon links
 */
export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />

                {/* PWA theme color */}
                <meta name="theme-color" content="#6366f1" />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
