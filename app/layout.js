import './globals.css';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    default: 'FireGuard - Professional Fire Safety Solutions',
    template: '%s | FireGuard Safety Solutions',
  },
  description: 'Professional fire safety equipment, installation, and emergency response services. NFPA certified technicians protecting lives and property for over 15 years. 24/7 emergency service available.',
  keywords: ['fire safety', 'fire extinguishers', 'fire alarms', 'emergency response', 'fire protection', 'safety audits', 'NFPA certified', 'fire safety equipment'],
  authors: [{ name: 'FireGuard Safety Solutions' }],
  creator: 'FireGuard Safety Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fireguard-safety.com',
    siteName: 'FireGuard Safety Solutions',
    title: 'FireGuard - Professional Fire Safety Solutions',
    description: 'Professional fire safety equipment, installation, and emergency response services. NFPA certified technicians protecting lives and property for over 15 years.',
    images: [
      {
        url: 'https://fireguard-safety.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FireGuard Safety Solutions - Fire Safety Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FireGuard - Professional Fire Safety Solutions',
    description: 'Professional fire safety equipment, installation, and emergency response services. NFPA certified technicians protecting lives and property for over 15 years.',
    images: ['https://fireguard-safety.com/og-image.jpg'],
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
  themeColor: '#C1121F',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Additional head elements can be added here */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#C1121F" />
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
        <SpeedInsights />
      </body>
    </html>
  );
}

