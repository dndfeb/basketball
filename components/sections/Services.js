'use client';

import { useEffect, useRef } from 'react';

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
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites built with Next.js, React, and modern web technologies.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Mobile First'],
      price: 'From $2,999',
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native and Flutter.',
      features: ['iOS & Android', 'Native Performance', 'Offline Support', 'Push Notifications'],
      price: 'From $4,999',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'From $1,999',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimize your existing website for speed, SEO, and user experience.',
      features: ['Speed Audit', 'SEO Analysis', 'Code Optimization', 'Monitoring'],
      price: 'From $999',
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Ongoing support and maintenance to keep your website running smoothly.',
      features: ['Regular Updates', 'Security Patches', 'Backup Management', '24/7 Support'],
      price: 'From $299/mo',
    },
    {
      icon: '📈',
      title: 'Analytics',
      description: 'Track and analyze your website performance with detailed insights.',
      features: ['Google Analytics', 'Custom Dashboards', 'Conversion Tracking', 'Reports'],
      price: 'From $199/mo',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development and design services to help
            your business grow and succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </span>
                  <button className="btn btn-primary text-sm px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Get Free Quote
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

