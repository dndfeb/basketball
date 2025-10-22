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
    default: 'Elite Basketball Coaching & Court Center - Professional Training',
    template: '%s | Elite Basketball Coaching',
  },
  description: 'Professional basketball coaching, skill clinics, team training, and court rentals. USA Basketball certified coaches developing players of all levels for over 15 years. Book your free trial session today.',
  keywords: ['basketball coaching', 'basketball training', 'basketball clinics', 'court rental', 'youth basketball', 'basketball camps', 'USA Basketball certified', 'basketball development'],
  authors: [{ name: 'Elite Basketball Coaching' }],
  creator: 'Elite Basketball Coaching',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elitebasketball.com',
    siteName: 'Elite Basketball Coaching & Court Center',
    title: 'Elite Basketball Coaching & Court Center - Professional Training',
    description: 'Professional basketball coaching, skill clinics, team training, and court rentals. USA Basketball certified coaches developing players of all levels for over 15 years.',
    images: [
      {
        url: 'https://elitebasketball.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Basketball Coaching - Professional Basketball Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Basketball Coaching & Court Center - Professional Training',
    description: 'Professional basketball coaching, skill clinics, team training, and court rentals. USA Basketball certified coaches developing players of all levels for over 15 years.',
    images: ['https://elitebasketball.com/og-image.jpg'],
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

