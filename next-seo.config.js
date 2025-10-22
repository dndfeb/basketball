/**
 * SEO Configuration for Next.js
 * This file contains the default SEO settings that will be used across the site
 * Individual pages can override these settings as needed
 */

export const defaultSEO = {
  // Default title template - will be used if no specific title is provided
  titleTemplate: '%s | NextJS Animated Template',
  
  // Default title for the site
  defaultTitle: 'NextJS Animated Template - Modern Web Development',
  
  // Meta description
  description: 'A modern, performance-optimized Next.js template with GSAP animations, Locomotive Scroll, and modular architecture for scalable web applications.',
  
  // Open Graph settings for social media sharing
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
  
  // Twitter Card settings
  twitter: {
    handle: '@yourhandle',
    site: '@yoursite',
    cardType: 'summary_large_image',
  },
  
  // Additional meta tags
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#3b82f6',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
  
  // Canonical URL
  canonical: 'https://your-domain.com',
  
  // Language
  languageAlternates: [
    {
      hrefLang: 'en',
      href: 'https://your-domain.com',
    },
  ],
};

// SEO configuration for specific pages
export const pageSEO = {
  home: {
    title: 'Home',
    description: 'Welcome to our modern Next.js template with stunning animations and smooth scrolling.',
    openGraph: {
      title: 'Home - NextJS Animated Template',
      description: 'Welcome to our modern Next.js template with stunning animations and smooth scrolling.',
    },
  },
  
  about: {
    title: 'About Us',
    description: 'Learn more about our team and the technology behind this amazing template.',
    openGraph: {
      title: 'About Us - NextJS Animated Template',
      description: 'Learn more about our team and the technology behind this amazing template.',
    },
  },
  
  blog: {
    title: 'Blog',
    description: 'Read our latest articles about web development, animations, and modern technologies.',
    openGraph: {
      title: 'Blog - NextJS Animated Template',
      description: 'Read our latest articles about web development, animations, and modern technologies.',
    },
  },
  
  login: {
    title: 'Login',
    description: 'Access your admin dashboard to manage content and settings.',
    openGraph: {
      title: 'Login - NextJS Animated Template',
      description: 'Access your admin dashboard to manage content and settings.',
    },
  },
};

