import dynamic from 'next/dynamic';

// Dynamically import heavy components for better performance
const Hero = dynamic(() => import('../components/sections/Hero'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100" />,
});

const About = dynamic(() => import('../components/sections/About'), {
  loading: () => <div className="py-20 bg-white" />,
});

const Services = dynamic(() => import('../components/sections/Services'), {
  loading: () => <div className="py-20 bg-gray-50" />,
});

const BlogPreview = dynamic(() => import('../components/sections/BlogPreview'), {
  loading: () => <div className="py-20 bg-white" />,
});

/**
 * Home Page Component
 * 
 * This is the main landing page that showcases:
 * - Hero section with GSAP animations
 * - About section
 * - Services section
 * - Blog preview section
 * 
 * All sections are dynamically imported for better performance
 */
export const metadata = {
  title: 'Home',
  description: 'Welcome to our modern Next.js template with stunning animations and smooth scrolling.',
  openGraph: {
    title: 'Home - NextJS Animated Template',
    description: 'Welcome to our modern Next.js template with stunning animations and smooth scrolling.',
  },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full viewport height with animations */}
      <section data-scroll-section>
        <Hero />
      </section>

      {/* About Section - Introduction and company info */}
      <section data-scroll-section>
        <About />
      </section>

      {/* Services Section - What we offer */}
      <section data-scroll-section>
        <Services />
      </section>

      {/* Blog Preview Section - Latest articles */}
      <section data-scroll-section>
        <BlogPreview />
      </section>
    </div>
  );
}

