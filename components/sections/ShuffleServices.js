'use client';

import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

/**
 * Shuffle Services Component
 * 
 * Features:
 * - No hydration errors
 * - Uses only actual images from public folder
 * - Smooth CSS animations
 * - Client-side only rendering
 */

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Service product images data - using basketball images
const serviceImages = [
  {
    id: 1,
    src: "/service-shooting.jpg",
    title: "Private Coaching"
  },
  {
    id: 2,
    src: "/clinic-1.jpg",
    title: "Group Clinics"
  },
  {
    id: 3,
    src: "/team-training.jpg",
    title: "Team Training"
  },
  {
    id: 4,
    src: "/court-1.jpg",
    title: "Court Rental"
  },
  {
    id: 5,
    src: "/service-defence.jpg",
    title: "Skill Assessment"
  },
  {
    id: 6,
    src: "/youth-program.jpg",
    title: "Youth Programs"
  },
  {
    id: 7,
    src: "/coach-1.jpg",
    title: "Expert Coaching"
  },
  {
    id: 8,
    src: "/coach-2.jpg",
    title: "Professional Training"
  },
  {
    id: 9,
    src: "/clinic-2.jpg",
    title: "Basketball Clinics"
  },
  {
    id: 10,
    src: "/court-2.jpg",
    title: "Court Facilities"
  },
  {
    id: 11,
    src: "/service-shooting.jpg",
    title: "Shooting Training"
  },
  {
    id: 12,
    src: "/service-defence.jpg",
    title: "Defensive Skills"
  },
  {
    id: 13,
    src: "/youth-program.jpg",
    title: "Youth Development"
  },
  // Repeat some popular images to fill 16 slots
  {
    id: 14,
    src: "/service-shooting.jpg",
    title: "Advanced Shooting"
  },
  {
    id: 15,
    src: "/clinic-1.jpg",
    title: "Elite Clinics"
  },
  {
    id: 16,
    src: "/team-training.jpg",
    title: "Team Development"
  },
];

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(serviceImages); // Start with unshuffled array
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure client-side only rendering
  useEffect(() => {
    setMounted(true);
    // Initial shuffle after mounting
    setSquares(shuffle([...serviceImages]));
  }, []);

  useEffect(() => {
    if (mounted && !isHovered && !isAnimating) {
      const interval = setInterval(() => {
        shuffleSquares();
      }, 4000);

      return () => clearInterval(interval);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [mounted, isHovered, isAnimating]);

  const shuffleSquares = () => {
    if (!isHovered && mounted) {
      setIsAnimating(true);
      
      // Add fade out effect
      setTimeout(() => {
        setSquares(shuffle([...serviceImages]));
        setIsAnimating(false);
      }, 300);
    }
  };

  // Show loading state during hydration
  if (!mounted) {
    return (
      <div className="grid grid-cols-4 grid-rows-4 h-[500px] gap-2 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 animate-pulse">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="w-full h-full bg-gray-300 rounded"></div>
        ))}
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-4 grid-rows-4 h-[500px] gap-2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {squares.map((img, index) => (
        <div
          key={`${img.id}-${index}`}
          className={`w-full h-full relative group cursor-pointer transition-all duration-500 ease-out ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Use both img tag and background for better compatibility */}
          <img
            src={img.src}
            alt={img.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load:', img.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', img.src);
            }}
          />
          
          {/* Fallback background image */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          
          {/* Overlay with title */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold text-sm text-center px-2">
              {img.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const ShuffleServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const initScrollAnimations = () => {
      if (typeof window !== 'undefined' && window.gsap) {
        const tl = window.gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.fromTo('.shuffle-content', 
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
        )
        .fromTo('.shuffle-grid', 
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        );
      }
    };

    initScrollAnimations();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
      <div className="shuffle-content">
        <span className="block mb-4 text-xs md:text-sm text-primary-500 font-medium uppercase tracking-wider">
          Our Programs
        </span>
        <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
          Basketball <span className="text-primary-500">Training</span>
        </h3>
        <p className="text-base md:text-lg text-neutral-600 my-4 md:my-6 leading-relaxed">
          Discover our comprehensive range of basketball training programs and services. 
          From private coaching to team training, we provide professional-grade solutions 
          to develop your skills and elevate your game.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/services" 
            className="bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:bg-primary-600 active:scale-95 shadow-lg hover:shadow-xl text-center"
          >
            View All Programs
          </a>
          <a 
            href="/contact" 
            className="border-2 border-primary-500 text-primary-500 font-semibold py-3 px-6 rounded-lg transition-all hover:bg-primary-500 hover:text-white active:scale-95 text-center"
          >
            Book Session
          </a>
        </div>
      </div>
      <div className="shuffle-grid">
        <ShuffleGrid />
      </div>
    </section>
  );
};

// Export with dynamic import to prevent hydration issues
export default dynamic(() => Promise.resolve(ShuffleServices), {
  ssr: false,
  loading: () => (
    <div className="w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-32 mb-4"></div>
        <div className="h-12 bg-gray-300 rounded w-96 mb-6"></div>
        <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-6"></div>
        <div className="flex gap-4">
          <div className="h-12 bg-gray-300 rounded w-32"></div>
          <div className="h-12 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 h-[500px] gap-2 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 animate-pulse">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="w-full h-full bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  )
});
