'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * Blog Preview Section Component
 * 
 * Features:
 * - Blog post cards with hover effects
 * - Scroll-triggered animations
 * - Responsive grid layout
 * - Link to full blog page
 */
export default function BlogPreview() {
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

          // Animate blog cards
          gsap.fromTo(
            '.blog-card',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.blog-grid',
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

  // Sample blog posts - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Basketball Fundamentals Every Player Should Master',
      excerpt: 'Learn the core basketball fundamentals that form the foundation of every great player\'s game, from shooting mechanics to defensive positioning.',
      author: 'Coach Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Fundamentals',
      image: '/api/placeholder/400/250',
      slug: '5-essential-basketball-fundamentals',
    },
    {
      id: 2,
      title: 'Building Mental Toughness on the Basketball Court',
      excerpt: 'Discover strategies for developing mental toughness and resilience that will help you perform under pressure and overcome challenges.',
      author: 'Coach Williams',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Mental Game',
      image: '/api/placeholder/400/250',
      slug: 'building-mental-toughness-basketball',
    },
    {
      id: 3,
      title: 'Youth Basketball Development: Age-Appropriate Training',
      excerpt: 'A comprehensive guide to developing young basketball players with age-appropriate training methods and skill progression.',
      author: 'Coach Davis',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Youth Development',
      image: '/api/placeholder/400/250',
      slug: 'youth-basketball-development-training',
    },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-blue-600">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest basketball training tips, coaching insights,
            and player development strategies from our expert coaching staff.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📝</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {formatDate(post.date)}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="btn btn-primary text-lg px-8 py-3 hover:scale-105 transform transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

