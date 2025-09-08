# Supabase Setup Instructions

## Database Setup

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase/schema.sql`
4. Click "Run" to create all the necessary tables and policies

## Environment Variables

The following environment variables are already configured in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Features Implemented

### Database Tables
- **posts**: Blog posts with full content management
- **projects**: Portfolio projects and case studies
- **contact_submissions**: Contact form submissions
- **newsletter_subscribers**: Newsletter subscription management
- **page_views**: Basic analytics tracking

### API Endpoints
- `GET /api/posts` - Fetch all published posts
- `GET /api/posts/[slug]` - Fetch a single post by slug
- `POST /api/contact` - Submit contact form

### Row Level Security
All tables have RLS enabled with appropriate policies:
- Public read access for posts and projects
- Write-only access for contact forms and newsletter signups
- Analytics tracking for all visitors

## Testing the Integration

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Test the API endpoints:
   ```bash
   # Get all posts (will be empty initially)
   curl http://localhost:3000/api/posts
   
   # Submit a contact form
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
   ```

## Adding Content

You can add blog posts and projects directly through the Supabase dashboard:
1. Go to Table Editor
2. Select the `posts` or `projects` table
3. Click "Insert" to add new content

Make sure to set `published: true` for posts to appear on the site.