/**
 * GSAP Utility Functions
 * 
 * This file provides safe GSAP imports and plugin registration
 * to prevent server-side rendering issues
 */

let gsap;
let ScrollTrigger;

// Safe GSAP initialization
export const initGSAP = () => {
  if (typeof window === 'undefined') {
    return { gsap: null, ScrollTrigger: null };
  }

  try {
    // Import GSAP
    gsap = require('gsap');
    ScrollTrigger = require('gsap/ScrollTrigger');
    
    // Register plugin safely
    if (gsap && ScrollTrigger && typeof gsap.registerPlugin === 'function') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    return { gsap, ScrollTrigger };
  } catch (error) {
    console.warn('GSAP failed to load:', error);
    return { gsap: null, ScrollTrigger: null };
  }
};

// Get GSAP instance
export const getGSAP = () => {
  if (!gsap && typeof window !== 'undefined') {
    const result = initGSAP();
    return result.gsap;
  }
  return gsap;
};

// Get ScrollTrigger instance
export const getScrollTrigger = () => {
  if (!ScrollTrigger && typeof window !== 'undefined') {
    const result = initGSAP();
    return result.ScrollTrigger;
  }
  return ScrollTrigger;
};

// Safe animation function
export const safeGSAP = (callback) => {
  const gsapInstance = getGSAP();
  const scrollTriggerInstance = getScrollTrigger();
  
  if (gsapInstance && scrollTriggerInstance) {
    return callback(gsapInstance, scrollTriggerInstance);
  }
  
  return null;
};
