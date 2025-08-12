# Transport & Logistics Solutions - React Template

A professional React template designed specifically for transport, logistics, and shipping companies.

## Project Type

Transport & Logistics Business Template - ideal for freight companies, shipping services, cargo transport, and logistics providers.

## Key Features

- **Multi-Home Layouts**: 3 different homepage variations
- **Transport Services**: Air freight, ocean freight, road freight pages
- **Service Showcase**: Comprehensive transport service presentations  
- **Blog System**: Blog listing and detail pages
- **Pricing Plans**: Service pricing and package displays
- **Team Profiles**: Professional team member showcases
- **Contact Forms**: Contact pages with form validation
- **Newsletter**: Email subscription integration
- **Testimonials**: Customer feedback sections

## Technology Stack

- **Frontend Framework**: React 18.0.0
- **Routing**: React Router Dom 6.3.0
- **UI Framework**: React Bootstrap + Material UI
- **Styling**: Bootstrap 5.1.3 + Custom SCSS
- **Animations**: CSS transitions and effects
- **Sliders**: React Slick + Swiper
- **Forms**: Simple React Validator + React Datepicker
- **Build Tool**: Create React App
- **Additional Features**: Image zoom, modal video, notifications

## Project Structure

```
├── public/                 # Static assets and index.html
├── src/
│   ├── components/        # Reusable components
│   │   ├── about/        # About section components
│   │   ├── BlogSection/  # Blog-related components
│   │   ├── features/     # Feature showcase components
│   │   ├── header/       # Navigation and header
│   │   ├── Footer/       # Footer component
│   │   ├── hero/         # Hero/banner sections
│   │   ├── ServiceArea/  # Service presentation
│   │   ├── Team/         # Team showcase
│   │   └── testimonial/  # Customer testimonials
│   ├── main-component/   # Page components
│   │   ├── HomePage/     # Home page variations
│   │   ├── AboutPage/    # About page
│   │   ├── BlogPage/     # Blog pages
│   │   ├── ContactPage/  # Contact page
│   │   └── AirFreight/   # Service-specific pages
│   ├── images/           # Image assets
│   ├── css/             # Stylesheets
│   ├── fonts/           # Custom fonts
│   └── integrations/    # Third-party integrations
│       └── supabase/    # Supabase configuration (optional)
```

## Page Functionality

### Home Pages
- **Home V1** (/): Main landing with hero, services, features
- **Home V2** (/home2): Alternative layout with different sections
- **Home V3** (/home3): Third variation with unique design

### Service Pages
- **Air Freight** (/air-freight): Air transport services
- **Ocean Freight** (/ocean-freight): Sea cargo services  
- **Road Freight** (/road-freight): Ground transport services

### Core Pages
- **About** (/about): Company information and mission
- **Team** (/team): Team member profiles
- **Pricing** (/pricing): Service packages and pricing
- **Blog** (/blog): Blog listing and categories
- **Blog Details** (/blog-details): Individual blog posts
- **Contact** (/contact): Contact forms and information

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   Opens http://localhost:3000 in your browser

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Content Modification
- Update company information in `src/components/header/index.js`
- Modify service offerings in service-specific components
- Replace images in `src/images/` directory
- Update contact details in footer and contact components

### Styling
- Main styles in `src/css/` directory
- Component-specific styles in each component folder
- Responsive breakpoints defined in CSS
- Custom colors and fonts easily customizable

### Features
- **Form Validation**: Built-in form validation for contact forms
- **Image Optimization**: Responsive image handling
- **SEO Ready**: Proper meta tags and structure
- **Mobile Responsive**: Full mobile compatibility

## Integrations

- **Supabase**: Basic configuration available in `src/integrations/supabase/`
- **Email Forms**: Newsletter and contact form handling setup
- **Analytics Ready**: Structure prepared for analytics integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized bundle size: ~172KB (gzipped)
- Lazy loading for images
- Code splitting implemented
- Production build optimized

## Notes

- Uses React Router v6 for modern routing
- Bootstrap 5 for responsive grid system
- Material UI components for enhanced UX
- Custom SCSS for unique styling
- Form validation with user feedback
- Newsletter subscription functionality

## Support

For customization assistance, refer to React documentation and component-specific documentation within the codebase.