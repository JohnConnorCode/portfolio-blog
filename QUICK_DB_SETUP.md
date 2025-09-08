# Quick Database Setup - 2 Steps Only!

## Step 1: Create Tables (Run this SQL in Supabase)

Go to your Supabase dashboard → SQL Editor → New Query

Copy and paste this entire block:

```sql
-- Create Posts Table
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

-- Create Projects Table
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

-- Create Indexes
CREATE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug);
CREATE INDEX IF NOT EXISTS posts_published_idx ON posts(published);
CREATE INDEX IF NOT EXISTS projects_slug_idx ON projects(slug);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Posts are viewable by everyone" ON posts
  FOR SELECT USING (published = true);

CREATE POLICY "Projects are viewable by everyone" ON projects
  FOR SELECT USING (true);
```

Click "Run" ✅

## Step 2: Populate with Content

After tables are created, run this command in your terminal:

```bash
node scripts/populate-db.mjs
```

This will add:
- 5 authentic blog posts
- 6 real projects

## That's it! 🎉

Visit `/blog` to see your posts live!

---

### If Step 2 fails:

Go back to Supabase SQL Editor and run the content manually from `supabase/seed-data.sql`