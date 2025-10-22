'use client';

import { useState } from 'react';
// Using inline SVG icons instead of react-icons to avoid import issues

/**
 * Contact Page Component
 * 
 * Features:
 * - Contact form with validation
 * - Company information
 * - Emergency contact details
 * - Professional fire safety branding
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const services = [
    'Private One-on-One Coaching',
    'Group Clinics & Camps',
    'Team Training',
    'Court Rental & Facilities',
    'Skill Assessment & Reports',
    'Youth Development Programs',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-accent-500 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-accent-200">Coach Johnson</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our basketball experts for a free consultation, 
            trial session, or to learn more about our training programs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-fire p-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Book Your Free Trial Session
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  Thank you! Your message has been sent. We'll contact you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 placeholder-neutral-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 placeholder-neutral-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 placeholder-neutral-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    Training Program Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900"
                  >
                    <option value="">Select a program</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 placeholder-neutral-500"
                  placeholder="Tell us about your basketball training goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-primary-500 text-white rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 mr-3 text-accent-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <h3 className="text-2xl font-bold">Quick Contact</h3>
              </div>
              <p className="text-primary-100 mb-4">
                For immediate assistance or questions, call us:
              </p>
              <a 
                href="tel:+1-555-COACH-1" 
                className="text-3xl font-bold text-accent-300 hover:text-accent-200 transition-colors"
              >
                1-555-COACH-1
              </a>
            </div>

            {/* Office Information */}
            <div className="bg-white rounded-2xl shadow-fire p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Office Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="text-primary-500 mr-4 mt-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Address</h4>
                    <p className="text-neutral-600">
                      123 Basketball Court Dr<br />
                      Sports City, SC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="text-primary-500 mr-4 mt-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Phone</h4>
                    <p className="text-neutral-600">
                      <a href="tel:+1-555-COACH-1" className="hover:text-primary-500">
                        (555) COACH-1
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="text-primary-500 mr-4 mt-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Email</h4>
                    <p className="text-neutral-600">
                      <a href="mailto:info@elitebasketball.com" className="hover:text-primary-500">
                        info@elitebasketball.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="text-primary-500 mr-4 mt-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Training Hours</h4>
                    <p className="text-neutral-600">
                      Monday - Friday: 4:00 PM - 9:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Certifications & Licenses
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <svg className="h-8 w-8 mx-auto mb-2 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-sm font-semibold text-neutral-700">USA Basketball</p>
                </div>
                <div className="text-center">
                  <svg className="h-8 w-8 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <p className="text-sm font-semibold text-neutral-700">NCAA Licensed</p>
                </div>
                <div className="text-center">
                  <svg className="h-8 w-8 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <p className="text-sm font-semibold text-neutral-700">CPR Certified</p>
                </div>
                <div className="text-center">
                  <svg className="h-8 w-8 mx-auto mb-2 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-sm font-semibold text-neutral-700">5-Star Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
