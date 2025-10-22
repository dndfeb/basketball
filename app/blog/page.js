import BlogList from '../../components/blog/BlogList';

/**
 * Blog Page Component
 * 
 * This page displays a list of all blog posts with:
 * - Search and filtering
 * - Pagination
 * - Category filtering
 * - Responsive grid layout
 */
export const metadata = {
  title: 'Blog',
  description: 'Read our latest articles about web development, animations, and modern technologies.',
  openGraph: {
    title: 'Blog - NextJS Animated Template',
    description: 'Read our latest articles about web development, animations, and modern technologies.',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover insights, tutorials, and the latest trends in web development,
              design, and modern technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogList />
      </div>
    </div>
  );
}

