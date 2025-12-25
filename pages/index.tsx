import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

// Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Mentors from '@/components/Mentors';
import Sponsors from '@/components/Sponsors';
import NewsList, { type NewsPost } from '@/components/NewsList';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

// Data
import { getAllNewsPosts } from '@/lib/mdx';

interface HomeProps {
    recentPosts: NewsPost[];
}

/**
 * Homepage
 * 
 * Static generation with getStaticProps for optimal performance.
 * All sections are composed here with smooth scroll navigation.
 */
export default function Home({ recentPosts }: HomeProps) {
    return (
        <>
            <NextSeo
                title="Home"
                description="Hyperloopin is a university engineering club pioneering hyperloop technology. Join us in building the future of sustainable high-speed transportation."
            />

            <main className="relative">
                {/* Navigation */}
                <Navbar />

                {/* Main sections */}
                <Hero />
                <About />
                <Team />
                <Timeline />
                <Gallery />
                <Mentors />
                <Sponsors />
                <NewsList posts={recentPosts} />
                <ContactForm />

                {/* Footer */}
                <Footer />

                {/* Scroll to top button */}
                <ScrollToTopButton />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    // Get recent news posts for the homepage (limit to 3)
    const allPosts = getAllNewsPosts();
    const recentPosts = allPosts.slice(0, 3);

    return {
        props: {
            recentPosts,
        },
        // Revalidate every hour for ISR (optional, can remove for pure SSG)
        // revalidate: 3600,
    };
};
