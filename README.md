# FireGuard - Professional Fire Safety Solutions Website

A modern, responsive Next.js website for a fire safety equipment seller and service provider. Built with professional design principles and optimized for fire safety industry needs.

## 🚀 Features

- **Modern Design**: Clean, professional interface with fire safety branding
- **Responsive Layout**: Mobile-first design that works on all devices
- **Fire Safety Theme**: Custom color palette (Deep Red #C1121F, Warm Orange #F77F00)
- **Professional Icons**: Lucide React icons for consistent visual language
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance**: Next.js 14 with App Router for optimal performance
- **Animations**: GSAP-powered smooth animations and transitions

## 🎨 Design System

### Color Palette
- **Primary**: Deep Red (#C1121F) - Trust, safety, urgency
- **Accent**: Warm Orange (#F77F00) - Energy, warmth, visibility
- **Neutral**: Smoke Gray (#F5F5F5) - Clean, professional
- **Text**: Dark Charcoal (#1A1A1A) - High contrast readability

### Typography
- **Headings**: Poppins (Bold, confident)
- **Body**: Inter (Clean, readable)

## 📁 Project Structure

```
├── app/
│   ├── about/page.js          # About page with company story
│   ├── contact/page.js        # Contact form and information
│   ├── globals.css           # Global styles and fire safety theme
│   ├── layout.js             # Root layout with SEO metadata
│   └── page.js               # Home page
├── components/
│   ├── layout/
│   │   ├── Footer.js         # Footer with emergency contact
│   │   └── Navbar.js         # Navigation with rounded design
│   └── sections/
│       ├── About.js          # About section component
│       ├── Hero.js           # Hero section with CTA
│       └── Services.js       # Services grid component
├── public/
│   └── hero-fire-safety.jpg  # Hero background image placeholder
└── tailwind.config.js        # Fire safety color configuration
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Professional icon library
- **GSAP** - Animation library for smooth transitions
- **Locomotive Scroll** - Smooth scrolling experience

## 🚨 Key Pages

### Home Page
- Hero section with fire safety messaging
- Company statistics and trust indicators
- Services overview
- About section with certifications

### About Page
- Company story and mission
- Team information with certifications
- Statistics and impact metrics
- Values and certifications

### Services Page
- Fire extinguisher sales
- Fire alarm installation
- Safety audits and compliance
- Emergency response services
- Maintenance and training

### Contact Page
- Professional contact form
- Emergency hotline (1-800-FIRE-911)
- Office information and hours
- Certifications display

## 🎯 Fire Safety Industry Focus

### Services Offered
1. **Fire Extinguisher Sales** - Professional-grade equipment
2. **Fire Alarm Installation** - Complete detection systems
3. **Safety Audits** - Compliance and risk assessments
4. **Emergency Response** - 24/7 emergency services
5. **Maintenance Services** - Regular inspections and servicing
6. **Safety Training** - Professional training programs

### Certifications
- NFPA Certified technicians
- State licensed professionals
- OSHA compliant operations
- ISO 9001 quality management

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Responsive grid layouts
- **Desktop Enhanced**: Full feature set on larger screens
- **Touch Optimized**: Easy navigation on touch devices

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#C1121F', // Deep Red
  },
  accent: {
    500: '#F77F00', // Warm Orange
  }
}
```

### Content
- Update company information in layout components
- Modify services in `components/sections/Services.js`
- Customize contact information in `app/contact/page.js`

### Images
Replace placeholder images in the `public/` folder:
- `hero-fire-safety.jpg` - Hero background image
- Add company photos and equipment images

## 📈 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data for fire safety services
- Mobile-optimized performance
- Fast loading times

## 🛡️ Security & Compliance

- Professional fire safety industry standards
- NFPA compliance messaging
- Emergency contact prominence
- Trust indicators and certifications

## 📞 Emergency Contact

**24/7 Emergency Service**: 1-800-FIRE-911

For immediate fire safety emergencies, the emergency hotline is prominently displayed throughout the website.

## 📄 License

This project is created for FireGuard Safety Solutions. All rights reserved.

---

**FireGuard Safety Solutions** - Protecting what matters most with professional fire safety solutions since 2008.