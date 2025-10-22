'use client';

import { useEffect, useRef } from 'react';
import ShuffleServices from '../../components/sections/ShuffleServices';
import ServiceTabs from '../../components/sections/ServiceTabs';
// Using inline SVG icons instead of react-icons to avoid import issues

/**
 * Services Page Client Component
 * 
 * Features:
 * - Comprehensive fire safety services showcase
 * - Professional service cards with images
 * - Detailed service descriptions
 * - Pricing information
 * - Call-to-action sections
 */

export default function ServicesPageClient() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== 'undefined' && window.gsap) {
        const tl = window.gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.fromTo(titleRef.current, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        )
        .fromTo(contentRef.current, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        );
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
      title: 'Fire Extinguisher Sales',
      description: 'Professional-grade fire extinguishers for all types of fires and environments.',
      features: ['ABC Dry Chemical', 'CO2 Systems', 'Wet Chemical', 'Foam Systems'],
      price: 'From $89',
      image: '/content images to be used/extinguisher-17149_1280.jpg'
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
        </svg>
      ),
      title: 'Fire Alarm Installation',
      description: 'Complete fire detection and alarm systems for residential and commercial properties.',
      features: ['Smoke Detectors', 'Heat Detectors', 'Manual Pull Stations', 'Monitoring Systems'],
      price: 'From $299',
      image: '/content images to be used/istockphoto-2161672281-1024x1024.jpg'
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      title: 'Safety Audits',
      description: 'Comprehensive fire safety inspections and compliance assessments.',
      features: ['Code Compliance', 'Risk Assessment', 'Emergency Planning', 'Training Programs'],
      price: 'From $199',
      image: '/content images to be used/istockphoto-2230952154-1024x1024.jpg'
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h18c1.1 0 2-.9 2-2v-5l-2-2zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-6l-1.5 1.5L15 9l1.5-1.5L18 9l1.5-1.5L21 9l-1.5 3.5z"/>
        </svg>
      ),
      title: 'Emergency Response',
      description: '24/7 emergency fire safety services and rapid response teams.',
      features: ['24/7 Availability', 'Rapid Response', 'Emergency Repairs', 'System Testing'],
      price: 'Call for Quote',
      image: '/content images to be used/istockphoto-2239484945-1024x1024.jpg'
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      title: 'Maintenance Services',
      description: 'Regular maintenance and inspection of all fire safety equipment.',
      features: ['Monthly Inspections', 'Annual Testing', 'Equipment Servicing', 'Documentation'],
      price: 'From $99/mo',
      image: '/content images to be used/istockphoto-960450450-1024x1024.jpg'
    },
    {
      icon: (
        <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
      title: 'Safety Training',
      description: 'Professional fire safety training for employees and building occupants.',
      features: ['Fire Safety Basics', 'Evacuation Procedures', 'Equipment Training', 'Certification'],
      price: 'From $149',
      image: '/content images to be used/extinguisher-17149_960_720.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-accent-300">Services</span>
          </h1>
          <p 
            ref={contentRef}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Comprehensive fire safety solutions for residential, commercial, and industrial properties.
            Your safety is our priority with certified technicians and reliable protection systems.
          </p>
        </div>
      </section>

      {/* Service Tabs Section */}
      <section className="py-20 bg-gray-50">
        <ServiceTabs />
      </section>

      {/* Shuffle Products Section */}
      <section className="py-20 bg-white">
        <ShuffleServices />
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
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
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Protect Your Property?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Contact our fire safety experts for a free consultation and customized protection plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn bg-white text-primary-500 hover:bg-neutral-100 px-8 py-3 text-lg font-semibold">
                  Get Free Quote
                </button>
                <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 text-lg font-semibold">
                  Emergency Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
