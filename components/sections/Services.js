'use client';

import { useEffect, useRef } from 'react';
// Using inline SVG icons instead of react-icons to avoid import issues

/**
 * Services Section Component
 * 
 * Features:
 * - Card hover animations
 * - Scroll-triggered reveals
 * - Interactive elements
 * - Responsive grid layout
 */
export default function Services() {
  const sectionRef = useRef(null);

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
          // Animate service cards
          gsap.fromTo(
            '.service-card',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Animate section title
          gsap.fromTo(
            '.section-title',
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.section-title',
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

  const services = [
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Private One-on-One Coaching',
      description: 'Personalized sessions to improve shooting, ball-handling, and game IQ.',
      features: ['Fundamentals Focus', 'Individual Development', 'Video Analysis', 'Progress Tracking'],
      price: 'From $89',
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
        </svg>
      ),
      title: 'Group Clinics & Camps',
      description: 'Intensive skill development for small groups or seasonal camps.',
      features: ['High-Energy Drills', 'Competitive Scrimmages', 'Skill Stations', 'Team Building'],
      price: 'From $299',
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      title: 'Team Training',
      description: 'Practice planning, scrimmage management, and tactical drills for teams.',
      features: ['Tactical Sessions', 'Team Performance', 'Strategy Development', 'Game Preparation'],
      price: 'From $199',
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Court Rental & Facilities',
      description: 'Hourly court bookings, equipment, and booking policies.',
      features: ['Professional Courts', 'Equipment Available', 'Flexible Booking', 'Group Rates'],
      price: 'From $25/hr',
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      title: 'Skill Assessment & Reports',
      description: 'Video breakdowns, strengths/weaknesses, and improvement plans.',
      features: ['Video Analysis', 'Performance Reports', 'Improvement Plans', 'Progress Tracking'],
      price: 'From $99',
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
      title: 'Youth Development Programs',
      description: 'Age-appropriate training programs for young players.',
      features: ['Age-Specific Training', 'Fun Learning Environment', 'Character Development', 'Parent Updates'],
      price: 'From $149',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-neutral-900 mb-4">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive basketball coaching programs for players of all levels. 
            Your development is our priority with certified coaches and proven training methods.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Use different basketball images for each service
            const serviceImages = [
              '/service-shooting.jpg',
              '/clinic-1.jpg',
              '/team-training.jpg',
              '/court-1.jpg',
              '/service-defence.jpg',
              '/youth-program.jpg'
            ];
            
            return (
              <div
                key={index}
                className="service-card group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceImages[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 rounded-full p-3">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-500">
                      {service.price}
                    </span>
                    <button className="btn btn-primary text-sm px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Game?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Contact our basketball experts for a free consultation and personalized training plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-500 hover:bg-neutral-100 px-8 py-3 text-lg font-semibold">
                Book a Session
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 text-lg font-semibold">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

