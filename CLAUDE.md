# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev`: Start development server with Turbopack (http://localhost:3000)
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run deploy`: Build and deploy to Cloudflare Workers
- `npm run preview`: Build and preview locally using OpenNext for Cloudflare

No test framework is configured. There are no automated tests.

## Architecture Overview

Next.js 15 portfolio site using App Router, TypeScript (strict mode), Tailwind CSS v4, and React 19. Deployed to Cloudflare Workers via OpenNext (`wrangler.jsonc` + `open-next.config.ts`). Uses R2 bucket for incremental cache storage.

### Key Architectural Decisions

- **All UI components are client components** (`"use client"`) — the site is mostly interactive (theme toggle, mobile nav, scroll detection, form state)
- **Static data pattern**: Content lives in TypeScript files under `data/` rather than a CMS or MDX files. Articles have metadata in `articles.ts` and full markdown content in `articleContent.ts`
- **Article rendering**: Uses `react-markdown` with custom `TerminalCodeBlock` component (wraps `react-syntax-highlighter`) for code blocks with terminal-style UI and multiple themes
- **Theme system**: `next-themes` with `attribute="class"`, CSS custom properties in `globals.css` define color tokens for light/dark modes
- **Dynamic routes**: Projects use numeric `[id]`, articles use `[slug]`. Both implement `generateStaticParams` for static generation

### Project Structure

- `app/` — App Router pages: home, `/resume`, `/projects`, `/articles`, `/contact`, plus `/api/contact` route
- `components/` — Header (with mobile nav + scroll border), Footer, ThemeToggle, ThemeProvider, TerminalCodeBlock
- `data/` — Static content: `projects.ts`, `articles.ts`, `articleContent.ts`
- `types/` — TypeScript interfaces (`Project`, `ProjectCategory`)
- `public/` — Static assets organized by category (`images/`, `projects/`, `articles/`)

### Code Style

- React Arrow Function Component Export (rafce) pattern
- PascalCase components, no "Page" suffix
- `@/*` path alias for imports
- Mobile-first responsive design
- Contact API route uses Resend email service (requires `RESEND_API_KEY` env var)
