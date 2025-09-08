# Supabase Database Setup - Complete Guide

## The Reality

Supabase doesn't allow direct table creation via API or MCP for security reasons. You need to use their Dashboard SQL Editor. This takes 2 minutes.

## Step 1: Create Tables (One-Time Setup)

1. **Open your Supabase Dashboard**
   - Go to: https://jtzckyoeixizzoqmxwkp.supabase.co
   - Or find your project at: https://supabase.com/dashboard

2. **Navigate to SQL Editor**
   - Click "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Copy and paste this entire SQL block:**

```sql
-- Create all tables for John Connor's portfolio

-- Posts Table for blog
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT,
  tags TEXT[],
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  author_name TEXT DEFAULT 'John Thomas Connor',
  read_time INTEGER,
  featured_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  client TEXT,
  description TEXT,
  philosophy TEXT,
  impact TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  image_url TEXT,
  project_url TEXT,
  case_study_url TEXT,
  technologies TEXT[],
  metrics JSONB,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  project_type TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  responded_at TIMESTAMP WITH TIME ZONE
);

-- Create Indexes for performance
CREATE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug);
CREATE INDEX IF NOT EXISTS posts_published_idx ON posts(published);
CREATE INDEX IF NOT EXISTS posts_featured_idx ON posts(featured);
CREATE INDEX IF NOT EXISTS projects_slug_idx ON projects(slug);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON projects(featured);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create Policies for public access
CREATE POLICY "Posts are viewable by everyone" 
  ON posts FOR SELECT 
  USING (published = true);

CREATE POLICY "Projects are viewable by everyone" 
  ON projects FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can submit contact form" 
  ON contact_submissions FOR INSERT 
  WITH CHECK (true);
```

4. **Click "Run" button**
   - You should see "Success. No rows returned"
   - Tables are now created!

## Step 2: Populate with Branded Content

Run this command in your terminal:

```bash
npm run seed-db
```

This adds:
- 5 blog posts (direct, declarative, your voice)
- 6 projects (Accelerate, Super Debate, Sparkblox, etc.)

## Step 3: Verify It Worked

1. In Supabase Dashboard, click "Table Editor"
2. You should see:
   - `posts` table with 5 entries
   - `projects` table with 6 entries

Or visit your site at `/blog` to see the posts live!

## Troubleshooting

### "relation does not exist" error
- You haven't created the tables yet. Go back to Step 1.

### "permission denied" error  
- Check your `.env.local` has the correct `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Posts not showing on site
- Make sure posts have `published: true`
- Check browser console for errors

## Why Manual Setup?

Supabase requires manual table creation for security. This prevents malicious scripts from modifying your database structure. It's a one-time setup that takes 2 minutes.

## Files Reference

- **SQL Schema**: `supabase/migrations/20240108_create_tables.sql`
- **Seed Script**: `scripts/populate-db-branded.mjs`
- **Environment**: `.env.local`

---

That's it. Two steps. Tables created, content loaded, site ready. 🚀