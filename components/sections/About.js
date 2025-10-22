'use client';

import { useEffect, useRef } from 'react';

/**
 * About Section Component
 * 
 * Features:
 * - Scroll-triggered animations
 * - Staggered text reveals
 * - Image animations
 * - Responsive grid layout
 */
export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initAnimations = async () => {
      try {
        const [gsapModule, scrollTriggerModule] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger')
        ]);
        
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.default;
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Title animation
          gsap.fromTo(
            titleRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Content animation
          gsap.fromTo(
            contentRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              delay: 0.2,
              scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Image animation
          gsap.fromTo(
            imageRef.current,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
              delay: 0.4,
              scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Staggered animation for feature items
          gsap.fromTo(
            '.feature-item',
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.features-grid',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );

        }, sectionRef);

        return () => ctx.revert();
      } catch (error) {
        console.warn('GSAP animations failed to load:', error);
      }
    };

    initAnimations();
  }, []);

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for performance with Next.js and modern web standards.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning animations and smooth scrolling with GSAP and Locomotive Scroll.',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect on all devices with mobile-first responsive design.',
    },
    {
      icon: '🔧',
      title: 'Modular',
      description: 'Clean, maintainable code structure for easy customization.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2
              ref={titleRef}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              About Our{' '}
              <span className="text-blue-600">Template</span>
            </h2>
            
            <div ref={contentRef} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                This Next.js template is designed for modern web development with
                a focus on performance, animations, and maintainability. Built with
                the latest technologies and best practices.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're building a portfolio, business website, or SaaS
                application, this template provides the perfect foundation with
                smooth animations, SEO optimization, and modular architecture.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Trusted by 100+ developers</div>
                  <div className="text-sm text-gray-500">Building amazing websites</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <div className="text-2xl font-bold text-gray-800">Modern Development</div>
                  <div className="text-gray-600">Next.js + GSAP + Tailwind</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Template?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies and best practices for optimal performance and developer experience.
            </p>
          </div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

