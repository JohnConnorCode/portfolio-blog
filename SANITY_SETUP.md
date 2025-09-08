# Sanity CMS Setup Instructions

## Why Sanity?
- **Generous Free Tier**: 10,000 documents, 1M API requests/month - perfect for a portfolio
- **Visual Editing**: Live preview of changes as you edit
- **React-Based**: Fully customizable with React components
- **Git-Friendly**: Content can be versioned alongside code

## Quick Setup (5 minutes)

### 1. Create Sanity Account & Project
1. Go to [sanity.io](https://www.sanity.io) and sign up (free)
2. Click "Create new project"
3. Name it (e.g., "Portfolio Blog")
4. Choose the free plan
5. Copy your Project ID (looks like: `abcd1234`)

### 2. Add Environment Variables

Add these to your `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

Add the same to Vercel:
1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add both variables

### 3. Access Sanity Studio

Visit `/studio` on your site (locally or deployed) to access the visual editor.

## What You Can Edit

The Sanity Studio allows you to edit:
- **Blog Posts**: Full rich text editor with images, code blocks
- **Projects**: Portfolio items with descriptions and links
- **Authors**: Author profiles for blog posts
- **Categories**: Blog categories

## Current Issues to Fix

1. **CSS Import Order**: Fixed - moved @import before @tailwind
2. **Environment Variables**: Need to be configured with real Sanity project ID
3. **Sanity Schemas**: Already exist in `/sanity/schemas/`

## Testing Status

✅ **Builds successfully** - The site compiles without errors
✅ **Studio route exists** - `/studio` is set up and loads
⚠️ **Needs project ID** - Won't work until Sanity project is created
❌ **Not fully tested** - Needs real Sanity project to verify editing works

## Next Steps

1. Create Sanity project and get project ID
2. Update environment variables
3. Deploy to Vercel
4. Test visual editing at `/studio`

## Alternative: Keep Using Supabase Admin

If you prefer, the existing admin panel at `/admin` still works with Supabase for blog management. Sanity would be an additional option for visual editing.