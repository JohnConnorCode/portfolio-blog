# Claude AI Assistant Instructions

## CRITICAL RULES

### NEVER PUSH WITHOUT VERIFICATION
- ALWAYS take screenshots to verify changes are working
- Test both locally AND on production after deployment
- Verify dark mode, animations, and responsive design
- If something isn't working, DO NOT claim it is

### ALWAYS CHECK WHICH APP IS RUNNING
- Before testing, ALWAYS check what's running on each port
- Use `lsof -i :3000` to see what's on port 3000
- If wrong app is running, kill it and start the correct one
- Or run the correct app on a different port (e.g., `npm run dev -- --port 3001`)
- Be holistic - understand the full context before testing

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
- Check what's on a port: `lsof -i :3000`
- Local dev: `npm run dev`
- Local dev on specific port: `npm run dev -- --port 3001`
- Build test: `npm run build`
- Screenshot: `npx playwright screenshot [url] [filename].png --viewport-size=1920,1080`
- Always check the screenshot with Read tool before claiming success