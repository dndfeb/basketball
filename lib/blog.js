import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

/**
 * Blog Utilities
 * 
 * This file contains utility functions for:
 * - Reading markdown blog posts
 * - Parsing frontmatter
 * - Converting markdown to HTML
 * - Managing blog post metadata
 */

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Get all blog post slugs
 * @returns {Array} Array of post slugs
 */
export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * Get all blog posts with metadata
 * @param {Object} options - Options for filtering and sorting
 * @returns {Array} Array of blog post objects
 */
export function getAllPosts(options = {}) {
  const {
    limit = null,
    category = null,
    sortBy = 'date',
    sortOrder = 'desc',
  } = options;

  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map((slug) => getPostBySlug(slug))
      .filter((post) => post !== null)
      .filter((post) => !category || post.category === category)
      .sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        
        if (sortOrder === 'desc') {
          return new Date(bValue) - new Date(aValue);
        } else {
          return new Date(aValue) - new Date(bValue);
        }
      });

    return limit ? posts.slice(0, limit) : posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 * @param {string} slug - The post slug
 * @param {Object} fields - Fields to include in the response
 * @returns {Object|null} Blog post object or null if not found
 */
export function getPostBySlug(slug, fields = []) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post = {
      slug,
      content,
      ...data,
    };

    // Filter fields if specified
    if (fields.length > 0) {
      const filteredPost = {};
      fields.forEach((field) => {
        if (post[field]) {
          filteredPost[field] = post[field];
        }
      });
      return filteredPost;
    }

    return post;
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get a single blog post with HTML content
 * @param {string} slug - The post slug
 * @returns {Object|null} Blog post object with HTML content or null if not found
 */
export async function getPostWithHtml(slug) {
  try {
    const post = getPostBySlug(slug);
    
    if (!post) {
      return null;
    }

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return {
      ...post,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error getting post with HTML ${slug}:`, error);
    return null;
  }
}

/**
 * Get all unique categories from blog posts
 * @returns {Array} Array of unique categories
 */
export function getAllCategories() {
  try {
    const posts = getAllPosts();
    const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];
    return categories.sort();
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
}

/**
 * Get all unique tags from blog posts
 * @returns {Array} Array of unique tags
 */
export function getAllTags() {
  try {
    const posts = getAllPosts();
    const tags = [...new Set(posts.flatMap((post) => post.tags || []))];
    return tags.sort();
  } catch (error) {
    console.error('Error getting tags:', error);
    return [];
  }
}

/**
 * Search blog posts by query
 * @param {string} query - Search query
 * @param {Object} options - Search options
 * @returns {Array} Array of matching blog posts
 */
export function searchPosts(query, options = {}) {
  const { limit = null, category = null } = options;
  
  try {
    const posts = getAllPosts({ category });
    const searchQuery = query.toLowerCase();
    
    const matchingPosts = posts.filter((post) => {
      const searchableText = [
        post.title,
        post.excerpt,
        post.content,
        ...(post.tags || []),
      ].join(' ').toLowerCase();
      
      return searchableText.includes(searchQuery);
    });

    return limit ? matchingPosts.slice(0, limit) : matchingPosts;
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

/**
 * Get related posts based on category and tags
 * @param {string} currentSlug - Current post slug
 * @param {number} limit - Maximum number of related posts
 * @returns {Array} Array of related blog posts
 */
export function getRelatedPosts(currentSlug, limit = 3) {
  try {
    const currentPost = getPostBySlug(currentSlug);
    
    if (!currentPost) {
      return [];
    }

    const allPosts = getAllPosts();
    const relatedPosts = allPosts
      .filter((post) => post.slug !== currentSlug)
      .filter((post) => 
        post.category === currentPost.category ||
        (post.tags && post.tags.some(tag => 
          currentPost.tags && currentPost.tags.includes(tag)
        ))
      )
      .slice(0, limit);

    return relatedPosts;
  } catch (error) {
    console.error('Error getting related posts:', error);
    return [];
  }
}

