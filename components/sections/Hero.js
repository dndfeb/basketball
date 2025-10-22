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
      className="relative h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
      
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
              Elevate Your Game —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-300">
                Expert Basketball
              </span>{' '}
              Coaching & Court Training
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Personalized coaching, skill-building clinics, and professional court facilities for players of all levels. 
              Develop your game with expert instruction and state-of-the-art training equipment.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/services"
                className="btn btn-accent text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
              >
                Book a Session
              </Link>
              <Link
                href="/about"
                className="btn btn-secondary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300 bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                View Programs
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-accent-500">500+</div>
                <div className="text-sm text-gray-300">Players Trained</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-accent-500">100%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-accent-500">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Shield Verification Badge */}
          <div className="relative flex justify-center">
            <div
              ref={imageRef}
              className="relative w-80 h-96 lg:w-96 lg:h-[500px]"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            >
              {/* Shield background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-orange-800 shadow-2xl shadow-red-900/50">
                {/* Shield border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-orange-500/30 rounded-sm"></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-16 right-12 w-12 h-12 bg-white/10 rounded-full animate-pulse-slow delay-1000"></div>
                  <div className="absolute bottom-20 left-12 w-8 h-8 bg-white/10 rounded-full animate-pulse-slow delay-2000"></div>
                  <div className="absolute bottom-16 right-8 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow delay-500"></div>
                </div>
              </div>
              
              {/* Shield content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                {/* Basketball icon */}
                <div className="relative mb-6">
                  <svg className="h-24 w-24 mx-auto text-white drop-shadow-lg animate-fire-glow" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"/>
                    <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/>
                    <path d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
                  </svg>
                  {/* Checkmark overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg className="h-12 w-12 text-green-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Verification text */}
                <div className="text-center space-y-4">
                  <div className="text-2xl lg:text-3xl font-bold text-white drop-shadow-2xl">
                    <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                      CERTIFIED
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-white/90 tracking-wide drop-shadow-lg">
                    Basketball Coach Certified
                  </div>
                  
                  {/* Certification details */}
                  <div className="space-y-2 mt-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/30">
                      ✓ USA Basketball Certified
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/30">
                      ✓ Licensed & Insured
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/30">
                      ✓ 15+ Years Experience
                    </div>
                  </div>
                  
                  {/* Trust indicator */}
                  <div className="mt-6 text-center">
                    <div className="text-sm text-white/80">Trusted by 500+ Players</div>
                    <div className="flex justify-center mt-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating verification elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-500 rounded-full animate-emergency-pulse shadow-lg shadow-orange-500/50 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-red-500 rounded-full animate-emergency-pulse delay-1000 shadow-lg shadow-red-500/50 flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            
            {/* Additional verification elements */}
            <div className="absolute top-1/4 -left-3 w-6 h-6 bg-orange-400 rounded-full animate-flame-flicker delay-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-1/3 -right-3 w-4 h-4 bg-red-400 rounded-full animate-flame-flicker delay-700 flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            
            {/* Verification light effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-emergency-pulse"></div>
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

