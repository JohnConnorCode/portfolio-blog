# Database Setup Instructions

This portfolio site uses Supabase for the blog and project content management.

## Quick Setup

1. **Run the SQL files in your Supabase SQL Editor:**

   Go to your Supabase dashboard → SQL Editor and run these files in order:
   
   a. First run `supabase/schema.sql` to create the tables
   b. Then run `supabase/seed-data.sql` to add initial content

2. **That's it!** Your database now contains:
   - 5 authentic blog posts about John's philosophy and work
   - 6 real projects with accurate metrics
   - Proper table structure for contact forms and analytics

## Database Contents

### Blog Posts (5 entries)
- **Why Technology Must Serve Humanity** - Philosophy piece on human-centered tech
- **Building Communities Through Debate** - About Super Debate platform
- **The Future of Work: AI as Assistant, Not Replacement** - AI ethics and automation
- **Open Systems Compound Faster Than Walled Gardens** - On decentralization
- **The Philosophy of Human-First Futurism** - Synthesizing 20 years of thinking

### Projects (6 entries)
- **Super Debate Platform** - Live debate platform (3 cities, 20+ events)
- **Thrive Protocol Grant System** - AI-powered evaluation (95% time saved)
- **Upland SPARK Token** - Web3 gaming (100K+ users)
- **Mode Mobile Earn-to-Own** - Returned $50M+ to users
- **HelpWith.co Marketplace** - Community-owned, 0% fees
- **Chainlink Integration Suite** - Oracle patterns for DeFi

## Manual SQL Execution

If you prefer to run the SQL manually:

### 1. Create Tables
```sql
-- See supabase/schema.sql for full schema
-- Creates: posts, projects, contact_submissions, newsletter_subscribers, page_views
```

### 2. Add Content
```sql
-- See supabase/seed-data.sql for full content
-- Adds blog posts and projects with real data
```

## Verify Setup

After running the SQL, verify in Supabase dashboard:
1. Check the `posts` table has 5 entries
2. Check the `projects` table has 6 entries
3. Visit `/blog` on your site to see the posts

## Environment Variables

Make sure your `.env.local` has:
```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## Notes

- All content is authentic and based on John's real work
- No placeholder or demo content
- Metrics are conservative and verifiable
- Blog posts include full HTML content with proper formatting