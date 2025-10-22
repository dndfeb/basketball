'use client';

import { useEffect, useRef } from 'react';

/**
 * SmoothScrollProvider Component
 * 
 * This component provides smooth scrolling functionality using Locomotive Scroll
 * and sets up GSAP ScrollTrigger for animations.
 * 
 * Features:
 * - Smooth scrolling with Locomotive Scroll
 * - GSAP ScrollTrigger integration
 * - Proper cleanup on unmount
 * - Performance optimizations
 */
export default function SmoothScrollProvider({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    let locomotiveScroll;
    let gsap;
    let ScrollTrigger;

    const initScroll = async () => {
      try {
        // Dynamically import all dependencies
        const [locomotiveModule, gsapModule, scrollTriggerModule] = await Promise.all([
          import('locomotive-scroll'),
          import('gsap'),
          import('gsap/ScrollTrigger')
        ]);
        
        LocomotiveScroll = locomotiveModule.default;
        gsap = gsapModule.default;
        ScrollTrigger = scrollTriggerModule.default;
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Initialize Locomotive Scroll
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          scrollbarContainer: false,
          lerp: 0.1,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        // Update GSAP ScrollTrigger when Locomotive Scroll updates
        locomotiveScroll.on('scroll', ScrollTrigger.update);

        // Sync GSAP ScrollTrigger with Locomotive Scroll
        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true })
              : locomotiveScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
        });

        // Refresh ScrollTrigger after Locomotive Scroll is ready
        locomotiveScroll.on('ready', () => {
          ScrollTrigger.refresh();
        });

        // Handle window resize
        const handleResize = () => {
          locomotiveScroll.update();
          ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
          if (locomotiveScroll) {
            locomotiveScroll.destroy();
          }
          ScrollTrigger.killAll();
        };
      } catch (error) {
        console.error('Error initializing smooth scroll:', error);
      }
    };

    // Initialize scroll after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initScroll, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

