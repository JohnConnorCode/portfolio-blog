# Claude AI Assistant Instructions

## CRITICAL RULES

### NEVER PUSH WITHOUT VERIFICATION
- ALWAYS take screenshots to verify changes are working
- Test both locally AND on production after deployment
- Verify dark mode, animations, and responsive design
- If something isn't working, DO NOT claim it is

## Project Context
This is a Next.js 15.5.2 portfolio site with:
- App Router
- Tailwind CSS
- Framer Motion
- Sanity CMS
- TypeScript

## Key Requirements
1. Dark mode MUST be default
2. Hero grid should be Tron-style perspective grid
3. Grid should animate forward (toward viewer)
4. All changes must be tested with screenshots

## Testing Commands
- Local dev: `npm run dev`
- Build test: `npm run build`
- Screenshot: `npx playwright screenshot [url] [filename].png --viewport-size=1920,1080`
- Always check the screenshot with Read tool before claiming success