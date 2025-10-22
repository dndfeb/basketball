'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
// Using inline SVG icons instead of react-icons to avoid import issues

/**
 * Hero Section Component
 * 
 * A stunning hero section featuring:
 * - GSAP animations on scroll and load
 * - Parallax effects
 * - Call-to-action buttons
 * - Responsive design
 * - Performance optimized
 */
export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    let gsap;
    let ScrollTrigger;

    const initAnimations = async () => {
      try {
        // Dynamically import GSAP and ScrollTrigger
        const [gsapModule, scrollTriggerModule] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger')
        ]);
        
        gsap = gsapModule.default;
        ScrollTrigger = scrollTriggerModule.default;
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Initial animation timeline
          const tl = gsap.timeline();

          // Animate elements in sequence
          tl.fromTo(
            titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          )
          .fromTo(
            subtitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
          )
          .fromTo(
            ctaRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
            '-=0.3'
          )
          .fromTo(
            imageRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' },
            '-=0.8'
          );

          // Parallax effect on scroll
          gsap.to(imageRef.current, {
            y: -100,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });

          // Text reveal animation on scroll
          gsap.fromTo(
            '.hero-text',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: heroRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );

        }, heroRef);

        // Cleanup
        return () => ctx.revert();
      } catch (error) {
        console.warn('GSAP animations failed to load:', error);
      }
    };

    initAnimations();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/fire safety images for the hero section bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C1121F' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Protect What Matters Most —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-300">
                Fire Safety
              </span>{' '}
              Solutions You Can Trust
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Professional fire safety equipment, installation, and emergency response services. 
              Your safety is our priority with certified technicians and reliable protection systems.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/services"
                className="btn btn-accent text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
              >
                Explore Our Services
              </Link>
              <Link
                href="/about"
                className="btn btn-secondary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300 bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-accent-500">500+</div>
                <div className="text-sm text-gray-300">Installations</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-accent-500">24/7</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-accent-500">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-fire-lg overflow-hidden"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse-slow"></div>
                <div className="absolute top-32 right-16 w-16 h-16 bg-accent-500/30 rounded-full animate-pulse-slow delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/25 rounded-full animate-pulse-slow delay-2000"></div>
                <div className="absolute bottom-32 right-10 w-24 h-24 bg-accent-500/20 rounded-full animate-pulse-slow delay-500"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="h-16 w-16 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <div className="text-xl font-semibold">Fire Safety Experts</div>
                  <div className="text-sm opacity-90">Certified & Reliable</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

