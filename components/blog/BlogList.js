'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * Blog List Component
 * 
 * Features:
 * - Search functionality
 * - Category filtering
 * - Pagination
 * - Scroll animations
 * - Responsive grid
 */
export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const sectionRef = useRef(null);

  // Sample blog posts - in a real app, this would come from an API
  const allPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14 and App Router',
      excerpt: 'Learn how to build modern web applications with the latest Next.js features including the new App Router and improved performance.',
      author: 'John Doe',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      slug: 'getting-started-nextjs-14-app-router',
      tags: ['Next.js', 'React', 'Web Development'],
    },
    {
      id: 2,
      title: 'Mastering GSAP Animations in React',
      excerpt: 'Discover advanced techniques for creating smooth, performant animations in React applications using GSAP.',
      author: 'Jane Smith',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Animation',
      image: '/api/placeholder/400/250',
      slug: 'mastering-gsap-animations-react',
      tags: ['GSAP', 'React', 'Animation'],
    },
    {
      id: 3,
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'A comprehensive guide to creating beautiful, responsive user interfaces using Tailwind CSS utility classes.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Design',
      image: '/api/placeholder/400/250',
      slug: 'building-responsive-uis-tailwind-css',
      tags: ['Tailwind CSS', 'CSS', 'Design'],
    },
    {
      id: 4,
      title: 'SEO Best Practices for Next.js Applications',
      excerpt: 'Optimize your Next.js applications for search engines with these proven SEO techniques and strategies.',
      author: 'Sarah Wilson',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'SEO',
      image: '/api/placeholder/400/250',
      slug: 'seo-best-practices-nextjs-applications',
      tags: ['SEO', 'Next.js', 'Performance'],
    },
    {
      id: 5,
      title: 'State Management in React Applications',
      excerpt: 'Explore different state management solutions for React applications, from useState to Redux and beyond.',
      author: 'David Brown',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      slug: 'state-management-react-applications',
      tags: ['React', 'State Management', 'Redux'],
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques',
      excerpt: 'Learn how to optimize your web applications for maximum performance and user experience.',
      author: 'Lisa Chen',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Performance',
      image: '/api/placeholder/400/250',
      slug: 'performance-optimization-techniques',
      tags: ['Performance', 'Optimization', 'Web Vitals'],
    },
  ];

  const categories = ['all', 'Tutorial', 'Animation', 'Design', 'SEO', 'Performance'];

  // Filter posts based on search term and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Animate posts on mount and when posts change
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
          gsap.fromTo(
            '.blog-post',
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.blog-posts-grid',
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
  }, [currentPosts]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef}>
      {/* Search and Filter Controls */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="w-full lg:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {currentPosts.length} of {filteredPosts.length} articles
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="blog-post group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

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

      {/* No Results */}
      {currentPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

