# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev`: Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build`: Build the application for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint to check for code quality issues
- `npm run preview`: Build and preview using OpenNext for Cloudflare
- `npm run deploy`: Build and deploy to Cloudflare Workers
- `npm run upload`: Build and upload to Cloudflare
- `npm run cf-typegen`: Generate Cloudflare types for the environment

## Architecture Overview

This is a Next.js 15 portfolio project using the App Router architecture with the following key characteristics:

- **Framework**: Next.js 15.3.5 with App Router and Turbopack for development
- **Styling**: Tailwind CSS v4 with PostCSS
- **Typography**: JetBrains Mono font family via next/font/google
- **Language**: TypeScript with strict mode enabled (ES2017 target)
- **Linting**: ESLint with Next.js configuration
- **Icons**: React Icons for UI icons
- **Theme Management**: next-themes for dark/light mode switching
- **Deployment**: Cloudflare Workers via OpenNext with R2 bucket for caching

### Project Structure

- `app/`: App Router pages with file-based routing
  - `api/contact/route.ts`: Contact form API endpoint
  - `layout.tsx`: Root layout with theme provider and navigation
  - `page.tsx`: Homepage with animated About section
  - Individual route folders: `/resume`, `/projects`, `/articles`, `/contact`
  - Dynamic routes: `/projects/[id]` and `/articles/[slug]`
- `components/`: Reusable UI components (Header, Footer, ThemeToggle, ThemeProvider, CodeBlock)
- `data/`: Static data files for projects and articles
- `types/`: TypeScript type definitions
- `public/`: Static assets organized by category (images, projects, articles)
- Configuration files: `wrangler.jsonc`, `open-next.config.ts` for Cloudflare deployment

### Component Architecture

- **Layout System**: Single root layout wraps all pages with consistent header/footer
- **Theme System**: Dark/light mode using `next-themes` with CSS custom properties
- **Navigation**: Responsive header with mobile hamburger menu, smooth transitions, and scroll-based border visibility
- **Component Patterns**: Functional components with explicit `"use client"` directives for interactivity
- **Styling**: Utility-first Tailwind with custom CSS variables for theming

### Contact Form System

The contact form integrates with external email service:

- **API Route**: `/app/api/contact/route.ts` handles form submissions with proper validation
- **Email Templates**: Professional HTML and plain text versions with styled layouts
- **Error Handling**: Comprehensive error responses and status management
- **Security**: Input validation and proper error handling
- **Configuration**: Uses environment variables for API keys and email settings

### Interactive Features

- **Scroll Detection**: Header shows border only when scrolled (useEffect pattern)
- **Form State Management**: React hooks for form data, submission state, and status feedback
- **Mobile Navigation**: Collapsible menu with smooth animations and proper cleanup
- **Theme Toggle**: Persistent dark/light mode with system preference detection

### Code Style Conventions

- **Components**: React Arrow Function Component Export (rafce) pattern
- **Naming**: PascalCase for components, descriptive names without "Page" suffix
- **TypeScript**: Strict mode with ES2017 target and `@/*` path alias for imports
- **Responsive Design**: Mobile-first approach with consistent spacing patterns
- **Client Components**: Use `"use client"` directive for any component requiring interactivity
- **API Routes**: RESTful patterns with proper error handling and validation
- **Data Management**: Static data files in `/data` directory for projects and articles

### Deployment Architecture

This portfolio is configured for deployment on Cloudflare Workers:

- **Build Tool**: OpenNext for Cloudflare compatibility
- **Asset Handling**: Static assets served via Cloudflare's CDN
- **Caching**: R2 bucket for incremental cache storage
- **Configuration**: `wrangler.jsonc` defines worker settings and bindings
- **Worker Name**: `ingchina-portfolio` with Node.js compatibility enabled

### Content Management

- **Projects**: Defined in `/data/projects.ts` with TypeScript interfaces
- **Articles**: Managed through `/data/articles.ts` with dynamic routing
- **Static Assets**: Organized in `/public` with category-specific folders
- **SEO**: Comprehensive metadata configuration in root layout with OpenGraph support

### SEO Implementation

The portfolio includes advanced SEO features:

- **Structured Data (JSON-LD)**: Person and WebSite schemas with SiteNavigationElement for rich search results
- **Meta Tags**: Comprehensive title templates, descriptions, keywords, and social media cards
- **Sitemap Generation**: Dynamic sitemap at `/app/sitemap.ts` for search engine indexing
- **Robots.txt**: Located in `/public/robots.txt` with sitemap reference
- **Google Search Console**: Verification file in `/public` for ownership verification
- **Rich Snippets**: Configured to display structured navigation links in search results similar to major websites

### Environment Configuration

- **Cloudflare R2**: Bucket named `ingchina-portfolio` for incremental cache storage
- **Worker Name**: `ingchina-portfolio` as defined in `wrangler.jsonc`
- **Node.js Compatibility**: Enabled via `nodejs_compat` flag for server-side functionality
- **Asset Binding**: Static assets served through `ASSETS` binding for optimal performance
