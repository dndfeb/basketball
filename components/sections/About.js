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
          // Set initial visibility for immediate display
          gsap.set([titleRef.current, contentRef.current, imageRef.current], {
            opacity: 1,
            y: 0,
            scale: 1
          });

          // Title animation on scroll (enhanced effect)
          gsap.fromTo(
            titleRef.current,
            { y: 0, opacity: 1 },
            {
              y: -20,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                scrub: 1,
              },
            }
          );

          // Content animation on scroll (enhanced effect)
          gsap.fromTo(
            contentRef.current,
            { y: 0, opacity: 1 },
            {
              y: -15,
              duration: 0.8,
              ease: 'power2.out',
              delay: 0.2,
              scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                scrub: 1,
              },
            }
          );

          // Image animation on scroll (enhanced effect)
          gsap.fromTo(
            imageRef.current,
            { scale: 1, opacity: 1 },
            {
              scale: 1.05,
              duration: 1,
              ease: 'power2.out',
              delay: 0.4,
              scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                scrub: 1,
              },
            }
          );

          // Staggered animation for feature items (keep scroll trigger)
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
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Certified Coaches',
      description: 'USA Basketball certified professionals with 15+ years of coaching experience.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Proven Results',
      description: 'Track record of developing players who excel at every level.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Personalized Training',
      description: 'Customized programs tailored to each player\'s unique strengths and goals.',
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'State-of-the-Art Facilities',
      description: 'Professional court facilities with modern training equipment and technology.',
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
              className="text-4xl font-bold text-neutral-900 mb-6 opacity-100"
              style={{ transform: 'translateY(0px)' }}
            >
              About{' '}
              <span className="text-primary-500">Coach Johnson</span>
            </h2>
            
            <div ref={contentRef} className="space-y-6 opacity-100" style={{ transform: 'translateY(0px)' }}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Coach Johnson is a certified basketball coach with over 15 years of experience 
                coaching youth, high school, and semi-pro players. Specializing in fundamentals, 
                shooting mechanics, defensive IQ, game strategy, and player development.
              </p>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our coaching philosophy focuses on building complete players through personalized 
                instruction, skill development, and mental toughness training. We ensure every 
                player reaches their full potential with proven coaching methods and state-of-the-art facilities.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-primary-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">C</div>
                  <div className="w-10 h-10 bg-accent-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">J</div>
                  <div className="w-10 h-10 bg-primary-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">Trusted by 500+ players</div>
                  <div className="text-sm text-neutral-500">Elevating every game</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative opacity-100" style={{ transform: 'scale(1)' }}>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <img 
                src="/basketball/portrait-man-holding-basketball.jpg" 
                alt="Basketball coach instructing player on court"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="h-16 w-16 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"/>
                  </svg>
                  <div className="text-2xl font-bold">Basketball Experts</div>
                  <div className="text-lg opacity-90">Certified & Proven Coaching</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Choose Our Coaching?
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Professional basketball coaching with certified instructors and proven development programs.
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

