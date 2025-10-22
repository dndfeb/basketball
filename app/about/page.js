'use client';

import { useEffect, useRef } from 'react';
// Using inline SVG icons instead of react-icons to avoid import issues

/**
 * About Page Component
 * 
 * Features:
 * - Company story and mission
 * - Team information
 * - Certifications and awards
 * - Fire safety statistics
 */
export default function AboutPage() {
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
        
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.fromTo(
            '.about-section',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.about-section',
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

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '500+', label: 'Properties Protected' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Customer Satisfaction' }
  ];

  const certifications = [
    { name: 'NFPA Certified', description: 'National Fire Protection Association' },
    { name: 'State Licensed', description: 'Licensed in all 50 states' },
    { name: 'OSHA Compliant', description: 'Occupational Safety and Health Administration' },
    { name: 'ISO 9001', description: 'Quality Management System' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Chief Fire Safety Officer',
      experience: '20+ years',
      certifications: ['NFPA Master', 'OSHA Certified']
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Installation Technician',
      experience: '15+ years',
      certifications: ['Fire Alarm Specialist', 'Emergency Response']
    },
    {
      name: 'Mike Chen',
      role: 'Safety Inspector',
      experience: '12+ years',
      certifications: ['Code Compliance', 'Risk Assessment']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-accent-200">FireGuard</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner in fire safety for over 15 years. 
            We protect what matters most with certified expertise and reliable service.
          </p>
        </div>
      </section>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Story */}
        <section className="about-section mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-neutral-600">
                <p>
                  Founded in 2008, FireGuard began with a simple mission: to protect 
                  lives and property through superior fire safety solutions. What started 
                  as a small family business has grown into a trusted industry leader, 
                  serving hundreds of clients across the region.
                </p>
                <p>
                  Our founder, John Smith, spent over two decades as a firefighter before 
                  establishing FireGuard. His firsthand experience with fire emergencies 
                  drives our commitment to prevention, preparedness, and rapid response.
                </p>
                <p>
                  Today, our team of certified professionals continues this legacy, 
                  combining cutting-edge technology with time-tested safety practices 
                  to deliver comprehensive fire protection services.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <img 
                  src="/content images to be used/istockphoto-2161672281-1024x1024.jpg" 
                  alt="Fire safety professionals at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="h-16 w-16 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                    <div className="text-2xl font-bold">Protecting Since 2008</div>
                    <div className="text-lg opacity-90">15+ Years of Trusted Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="about-section mb-20">
          <div className="bg-neutral-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="about-section mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We are committed to providing the highest level of fire safety protection 
              through innovation, expertise, and unwavering dedication to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-fire">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Mission</h3>
              <p className="text-neutral-600">
                To protect lives and property through comprehensive fire safety solutions, 
                ensuring peace of mind for our clients and their communities.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-fire">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Excellence</h3>
              <p className="text-neutral-600">
                We maintain the highest standards in everything we do, from equipment 
                selection to installation and ongoing maintenance services.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-fire">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Integrity</h3>
              <p className="text-neutral-600">
                Honest, transparent communication and fair pricing ensure long-term 
                partnerships built on trust and mutual respect.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-section mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience 
              in fire safety, emergency response, and risk assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-fire p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-neutral-600 mb-4">
                  {member.experience} Experience
                </p>
                <div className="space-y-1">
                  {member.certifications.map((cert, certIndex) => (
                    <span 
                      key={certIndex}
                      className="inline-block bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="about-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We maintain the highest industry certifications and licenses to ensure 
              the safety and compliance of all our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-fire">
                <div className="flex justify-center mb-4">
                  <svg className="h-8 w-8 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
