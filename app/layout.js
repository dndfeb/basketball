import './globals.css';
import { Inter } from 'next/font/google';
import SmoothScrollProvider from '../components/providers/SmoothScrollProvider';
import AuthSessionProvider from '../components/providers/SessionProvider';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Configure Inter font with optimized loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 * Root Layout Component
 * 
 * This is the main layout that wraps all pages in the application.
 * It includes:
 * - Global SEO configuration
 * - Smooth scroll provider for Locomotive Scroll
 * - Navigation and footer components
 * - Font optimization
 */
export const metadata = {
  title: {
    default: 'NextJS Animated Template - Modern Web Development',
    template: '%s | NextJS Animated Template',
  },
  description: 'A modern, performance-optimized Next.js template with GSAP animations, Locomotive Scroll, and modular architecture for scalable web applications.',
  keywords: ['Next.js', 'React', 'GSAP', 'Animations', 'Web Development', 'Template'],
  authors: [{ name: 'NextJS Template Team' }],
  creator: 'NextJS Template',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'NextJS Animated Template',
    title: 'NextJS Animated Template - Modern Web Development',
    description: 'A modern, performance-optimized Next.js template with GSAP animations, Locomotive Scroll, and modular architecture for scalable web applications.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NextJS Animated Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextJS Animated Template - Modern Web Development',
    description: 'A modern, performance-optimized Next.js template with GSAP animations, Locomotive Scroll, and modular architecture for scalable web applications.',
    images: ['https://your-domain.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Separate viewport export to fix Next.js 14 warning
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Additional head elements can be added here */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Session Provider - wraps the entire app */}
        <AuthSessionProvider>
          {/* Smooth Scroll Provider - wraps the entire app */}
          <SmoothScrollProvider>
            {/* Main application structure */}
            <div className="min-h-screen flex flex-col">
              {/* Navigation - fixed at top */}
              <Navbar />
              
              {/* Main content area */}
              <main className="flex-1">
                {children}
              </main>
              
              {/* Footer - at bottom */}
              <Footer />
            </div>
          </SmoothScrollProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}

