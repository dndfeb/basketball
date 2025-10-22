'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Service Tabs Component with Fire Safety Themed SVG Icons
 * 
 * Features:
 * - Fire safety themed SVG icons for each service category
 * - Smooth tab transitions
 * - Responsive design
 * - GSAP animations
 */

// Fire Safety Themed SVG Icons
const FireSafetyIcons = {
  extinguisher: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  alarm: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
  ),
  emergency: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  maintenance: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  ),
  training: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  detection: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  equipment: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
};

// Service categories with their respective icons and data
const serviceCategories = [
  {
    id: 'private',
    name: 'Private Coaching',
    icon: FireSafetyIcons.extinguisher,
    description: 'Personalized one-on-one basketball training sessions',
    services: [
      'Fundamentals Development',
      'Shooting Mechanics',
      'Ball Handling Skills',
      'Defensive Techniques',
      'Game Strategy',
      'Mental Toughness Training'
    ],
    image: '/service-shooting.jpg'
  },
  {
    id: 'clinics',
    name: 'Group Clinics',
    icon: FireSafetyIcons.alarm,
    description: 'Intensive skill development for small groups',
    services: [
      'High-Energy Drills',
      'Competitive Scrimmages',
      'Skill Stations',
      'Team Building',
      'Position-Specific Training',
      'Conditioning Programs'
    ],
    image: '/clinic-1.jpg'
  },
  {
    id: 'teams',
    name: 'Team Training',
    icon: FireSafetyIcons.shield,
    description: 'Comprehensive team development programs',
    services: [
      'Tactical Sessions',
      'Team Performance Analysis',
      'Strategy Development',
      'Game Preparation',
      'Leadership Training',
      'Team Chemistry Building'
    ],
    image: '/team-training.jpg'
  },
  {
    id: 'courts',
    name: 'Court Rental',
    icon: FireSafetyIcons.emergency,
    description: 'Professional court facilities and equipment',
    services: [
      'Full-Size Courts',
      'Equipment Rental',
      'Flexible Booking',
      'Group Rates',
      'Tournament Hosting',
      'Event Management'
    ],
    image: '/court-1.jpg'
  },
  {
    id: 'assessment',
    name: 'Skill Assessment',
    icon: FireSafetyIcons.maintenance,
    description: 'Comprehensive player evaluation and development',
    services: [
      'Video Analysis',
      'Performance Reports',
      'Improvement Plans',
      'Progress Tracking',
      'Strength & Weakness Analysis',
      'Goal Setting'
    ],
    image: '/service-defence.jpg'
  },
  {
    id: 'youth',
    name: 'Youth Programs',
    icon: FireSafetyIcons.training,
    description: 'Age-appropriate training for young players',
    services: [
      'Age-Specific Training',
      'Fun Learning Environment',
      'Character Development',
      'Parent Updates',
      'Safety First Approach',
      'Skill Progression'
    ],
    image: '/youth-program.jpg'
  }
];

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('private');
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const tabRefs = useRef({});

  // Ensure client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP animations
  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== 'undefined' && window.gsap && mounted) {
        const tl = window.gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.fromTo('.tab-content', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      }
    };

    initAnimations();
  }, [mounted]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    
    // Animate tab content change
    if (typeof window !== 'undefined' && window.gsap) {
      const content = document.querySelector('.tab-content');
      if (content) {
        window.gsap.fromTo(content, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    }
  };

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  if (!mounted) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-64 mb-8"></div>
          <div className="flex flex-wrap gap-2 mb-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-12 bg-gray-300 rounded w-32"></div>
            ))}
          </div>
          <div className="h-96 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Our <span className="text-primary-500">Programs</span>
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Comprehensive basketball training programs tailored to your specific needs. 
          Choose from our range of professional coaching services below.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            ref={el => tabRefs.current[category.id] = el}
            onClick={() => handleTabChange(category.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === category.id
                ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-500 border border-neutral-200'
            }`}
          >
            <span className="flex-shrink-0">
              {category.icon}
            </span>
            <span className="hidden sm:inline">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content bg-white rounded-2xl shadow-xl overflow-hidden">
        {activeCategory && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Image */}
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', activeCategory.image);
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 rounded-full p-4">
                  <span className="text-primary-500 text-2xl">
                    {activeCategory.icon}
                  </span>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                {activeCategory.name}
              </h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {activeCategory.description}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                  What We Offer:
                </h4>
                <ul className="space-y-3">
                  {activeCategory.services.map((service, index) => (
                    <li key={index} className="flex items-center text-neutral-700">
                      <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary px-8 py-3 text-lg font-semibold">
                  Get Quote
                </button>
                <button className="btn border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceTabs;
