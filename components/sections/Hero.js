'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Amazing
              </span>{' '}
              Websites
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Create stunning, performance-optimized web experiences with our
              modern Next.js template featuring GSAP animations and smooth scrolling.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/services"
                className="btn btn-primary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="btn btn-secondary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-16 w-16 h-16 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/25 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute bottom-32 right-10 w-24 h-24 bg-white/15 rounded-full animate-pulse delay-500"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-xl font-semibold">Next.js + GSAP</div>
                  <div className="text-sm opacity-90">Smooth Animations</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

