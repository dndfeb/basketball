'use client';

import { useEffect, useRef } from 'react';
// Using inline SVG icons instead of react-icons to avoid import issues

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
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      title: 'Certified Technicians',
      description: 'NFPA certified professionals with 15+ years of fire safety experience.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
        </svg>
      ),
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency response and maintenance services.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      ),
      title: 'Code Compliance',
      description: 'All installations meet local fire codes and safety regulations.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      title: 'Expert Installation',
      description: 'Professional installation and maintenance of all fire safety systems.',
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
              className="text-4xl font-bold text-neutral-900 mb-6"
            >
              About{' '}
              <span className="text-primary-500">FireGuard</span>
            </h2>
            
            <div ref={contentRef} className="space-y-6">
              <p className="text-lg text-neutral-600 leading-relaxed">
                FireGuard has been protecting lives and property for over 15 years. 
                We are a certified fire safety company specializing in comprehensive 
                fire protection solutions for residential, commercial, and industrial properties.
              </p>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our team of NFPA-certified technicians provides expert installation, 
                maintenance, and emergency response services. We ensure all our systems 
                meet the highest safety standards and local fire codes.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-primary-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">F</div>
                  <div className="w-10 h-10 bg-accent-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">G</div>
                  <div className="w-10 h-10 bg-primary-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">Trusted by 500+ businesses</div>
                  <div className="text-sm text-neutral-500">Protecting what matters most</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <img 
                src="/content images to be used/istockphoto-1058291060-1024x1024.jpg" 
                alt="Fire safety equipment and professionals"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="h-16 w-16 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <div className="text-2xl font-bold">Fire Safety Experts</div>
                  <div className="text-lg opacity-90">Certified & Reliable Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Choose FireGuard?
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Professional fire safety services with certified technicians and reliable protection systems.
            </p>
          </div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item text-center p-6 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors duration-300 border border-neutral-200"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-neutral-600">
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

