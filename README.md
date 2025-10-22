# Next.js Animated Template

A modern, production-ready Next.js template featuring GSAP animations, Locomotive Scroll, SEO optimization, and modular architecture.

## 🚀 Features

- **Next.js 14** with App Router
- **GSAP Animations** for smooth, performant animations
- **Locomotive Scroll** for smooth scrolling experience
- **TailwindCSS** for utility-first styling
- **Next SEO** for comprehensive SEO management
- **NextAuth** for authentication
- **Markdown Blog** with gray-matter and remark
- **Modular Architecture** for easy maintenance and scaling
- **Performance Optimized** with dynamic imports
- **Responsive Design** mobile-first approach

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.js                # Root layout with SEO and providers
│   ├── page.js                  # Home page
│   ├── login/                   # Authentication pages
│   └── blog/                    # Blog pages
├── components/                   # Reusable components
│   ├── layout/                  # Layout components (Navbar, Footer)
│   ├── sections/                # Page sections (Hero, About, Services)
│   ├── blog/                    # Blog-specific components
│   └── providers/               # Context providers
├── content/                     # Content management
│   └── posts/                   # Markdown blog posts
├── lib/                         # Utility functions
│   └── blog.js                  # Blog utilities
├── public/                      # Static assets
└── next-seo.config.js          # SEO configuration
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-animated-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and use it in your pages
3. Add GSAP animations as needed

Example:
```javascript
// components/sections/NewSection.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function NewSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      {/* Your content */}
    </section>
  );
}
```

### Adding New Blog Posts

1. Create a new markdown file in `content/posts/`
2. Add frontmatter with metadata
3. Write your content in markdown

Example:
```markdown
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2024-01-15"
author: "Your Name"
category: "Tutorial"
tags: ["Next.js", "React"]
readTime: "5 min read"
---

# Your Post Content

Write your blog post content here using markdown.
```

### Customizing Animations

The template uses GSAP for animations. You can customize them in each component:

```javascript
// Basic animation
gsap.fromTo(
  element,
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
);

// Scroll-triggered animation
gsap.fromTo(
  element,
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  }
);
```

## 🔐 Authentication

The template includes NextAuth for authentication with two demo accounts:

- **Admin**: `admin@example.com` / `admin123`
- **Blog Writer**: `writer@example.com` / `writer123`

### Adding New Users

Modify the credentials in `app/api/auth/[...nextauth]/route.js`:

```javascript
const users = [
  {
    id: '1',
    email: 'newuser@example.com',
    password: 'password123',
    name: 'New User',
    role: 'admin', // or 'blog-writer'
  },
  // ... other users
];
```

## 📝 Blog Management

### Creating Blog Posts

1. Add markdown files to `content/posts/`
2. Include proper frontmatter
3. Use the blog utilities in `lib/blog.js`

### Blog Features

- Search functionality
- Category filtering
- Tag system
- Pagination
- SEO optimization
- Related posts

## 🎯 SEO Configuration

The template includes comprehensive SEO setup:

1. **Global SEO** in `next-seo.config.js`
2. **Page-specific SEO** in each page
3. **Blog post SEO** with dynamic metadata
4. **Open Graph** and Twitter Card support

### Customizing SEO

Update `next-seo.config.js` for global changes:

```javascript
export const defaultSEO = {
  titleTemplate: '%s | Your Site Name',
  defaultTitle: 'Your Site Name - Description',
  description: 'Your site description',
  // ... other settings
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The template is compatible with any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Performance

The template is optimized for performance:

- **Dynamic imports** for code splitting
- **Image optimization** with Next.js Image
- **Font optimization** with next/font
- **CSS optimization** with TailwindCSS
- **Bundle analysis** with webpack-bundle-analyzer

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run Prettier formatting
```

### Code Style

The project uses Prettier for code formatting. Configure it in `.prettierrc`.

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Locomotive Scroll](https://locomotive.ca/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [NextAuth Documentation](https://next-auth.js.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you have any questions or need help:

1. Check the documentation
2. Search existing issues
3. Create a new issue
4. Contact the maintainers

---

**Happy coding! 🎉**

