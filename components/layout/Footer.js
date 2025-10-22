'use client';

import { useEffect } from 'react';
import Link from 'next/link';
// Using inline SVG icons instead of react-icons to avoid import issues

/**
 * Footer Component
 * 
 * A comprehensive footer with:
 * - Company information
 * - Quick links
 * - Social media links
 * - Newsletter signup
 * - Copyright information
 */
export default function Footer() {
  // Animate footer on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimation = async () => {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default;
        
        gsap.fromTo(
          '.footer-content',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
        );
      } catch (error) {
        console.warn('GSAP animation failed to load:', error);
      }
    };

    initAnimation();
  }, []);

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61582160878711', label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { href: 'https://www.linkedin.com/company/109403381', label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
    { href: 'https://www.instagram.com/designndevfeb?igsh=ZTN2OTE0Nzhqanh5', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { href: 'https://youtube.com', label: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  ];

  return (
    <footer className="bg-primary-800 text-white">
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-accent-400">Design</span>nDev
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional web development agency creating stunning, responsive websites and web applications. 
              We specialize in modern design, user experience, and cutting-edge development solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://designndev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  Our Website
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@designndev.com"
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </a>
              </li>
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>E-commerce Solutions</li>
              <li>Mobile Responsive Design</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Template Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Template Website</h4>
            <p className="text-gray-300 text-sm">
              This is currently a demo website template. You can buy this template and get your own custom website built by our team.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 <a href="mailto:hello@designndev.com" className="text-accent-400 hover:text-accent-300 transition-colors">hello@designndev.com</a></p>
              <p>🌐 <a href="https://designndev.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors">designndev.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DesignnDev. All rights reserved. | Template by <a href="https://designndev.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors">DesignnDev.com</a>
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-accent-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-accent-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

