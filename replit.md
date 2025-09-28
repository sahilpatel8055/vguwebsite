# SAAPRO - VGU Online University Landing Page

## Overview
This is a Next.js 15 application for VGU (Online University) featuring a modern landing page with course offerings, application forms, and university information. The project was successfully imported from GitHub and configured for the Replit environment.

## Recent Changes (September 28, 2025)
- ✅ Configured Next.js for Replit environment with proper host settings
- ✅ Set up development workflow on port 5000 with webview output
- ✅ Fixed cross-origin issues for Replit proxy environment
- ✅ Configured deployment settings for production (autoscale)
- ✅ Updated package.json dev script for proper host binding (0.0.0.0:5000)
- ✅ Installed all dependencies successfully with npm install
- ✅ Fixed Next.js configuration for cross-origin requests from Replit proxy
- ✅ Verified application functionality - website displays correctly
- ✅ Removed Turbopack flags due to CSS processing conflicts
- ✅ Updated deployment configuration with autoscale target
- ✅ Completed project import and setup for Replit environment

## Project Architecture
- **Framework**: Next.js 15.5.4 with App Router
- **Styling**: Tailwind CSS 4 with custom CSS
- **Fonts**: Geist Sans & Geist Mono from Google Fonts
- **Build Tool**: Turbopack (Next.js integrated)
- **Development Port**: 5000 (configured for Replit environment)
- **Deployment**: Configured for autoscale deployment target

## Key Features
- Responsive university landing page
- Student application form with course selection
- Program showcase with fees and duration
- University rankings and accreditation display
- Mobile-friendly header with navigation

## File Structure
- `src/app/` - Next.js App Router pages and layouts
- `public/` - Static assets (images, logos, CSS files)
- `public/assets/` - University images and branding assets
- `public/programme/` - Course-specific images

## Configuration Files
- `next.config.mjs` - Next.js configuration with Replit-specific settings
- `package.json` - Dependencies and scripts configured for Replit
- `tailwindcss` - Styling configuration
- `eslint.config.mjs` - Code linting rules

## Development
- Run `npm run dev` to start development server
- Access via Replit's web preview on port 5000
- Hot reloading enabled with Fast Refresh

## Deployment
- Build: `npm run build`
- Start: `npm start`
- Configured for autoscale deployment target suitable for static website