#!/usr/bin/env node

// Script to create tables directly in Supabase using SQL
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

// We need the service key for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials')
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY are set')
  process.exit(1)
}

console.log('🔧 Using Supabase URL:', supabaseUrl)
console.log('🔑 Using key type:', process.env.SUPABASE_SERVICE_KEY ? 'Service Key' : 'Anon Key')

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// SQL to create all tables
const createTablesSQL = `
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

-- Create Contact Submissions Table
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

-- Create Indexes
CREATE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug);
CREATE INDEX IF NOT EXISTS posts_published_idx ON posts(published);
CREATE INDEX IF NOT EXISTS posts_featured_idx ON posts(featured);
CREATE INDEX IF NOT EXISTS projects_slug_idx ON projects(slug);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON projects(featured);
`;

const enableRLSSQL = `
-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Posts are viewable by everyone" ON posts;
DROP POLICY IF EXISTS "Projects are viewable by everyone" ON projects;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create policies for public access
CREATE POLICY "Posts are viewable by everyone" 
  ON posts FOR SELECT 
  USING (published = true);

CREATE POLICY "Projects are viewable by everyone" 
  ON projects FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can submit contact form" 
  ON contact_submissions FOR INSERT 
  WITH CHECK (true);
`;

async function createTables() {
  console.log('\n🚀 Creating tables in Supabase...\n')
  
  try {
    // First, let's check if we can connect
    const { data: testData, error: testError } = await supabase
      .from('posts')
      .select('count')
      .limit(1)
    
    if (testError && !testError.message.includes('relation "public.posts" does not exist')) {
      console.error('❌ Connection error:', testError.message)
      console.log('\n💡 Make sure you have the correct credentials in .env.local')
      return
    }
    
    // If posts table doesn't exist, we need to create tables
    if (testError && testError.message.includes('relation "public.posts" does not exist')) {
      console.log('📦 Tables don\'t exist yet. Creating them now...')
      
      // Unfortunately, Supabase JS client doesn't support raw SQL execution
      // We need to use the SQL Editor in Supabase Dashboard
      console.log('\n⚠️  The Supabase JavaScript client cannot execute raw SQL.')
      console.log('\n📝 Please follow these steps:')
      console.log('\n1. Go to your Supabase Dashboard')
      console.log('2. Navigate to SQL Editor')
      console.log('3. Create a new query')
      console.log('4. Copy and paste the following SQL:\n')
      console.log('```sql')
      console.log(createTablesSQL)
      console.log(enableRLSSQL)
      console.log('```')
      console.log('\n5. Click "Run"')
      console.log('6. Once complete, run: npm run seed-db')
      
      // Let's save the SQL to a file for convenience
      const fs = await import('fs')
      const sqlContent = createTablesSQL + '\n\n' + enableRLSSQL
      fs.writeFileSync('supabase/create-tables.sql', sqlContent)
      console.log('\n✅ SQL saved to: supabase/create-tables.sql')
      console.log('   You can copy this file\'s content to Supabase SQL Editor')
      
    } else {
      console.log('✅ Tables already exist!')
      
      // Check if data exists
      const { count } = await supabase
        .from('posts')
        .select('*', { count: 'exact', head: true })
      
      if (count > 0) {
        console.log(`📊 Found ${count} existing posts`)
        console.log('\n💡 To refresh with new branded content, run: npm run seed-db')
      } else {
        console.log('📭 Tables are empty')
        console.log('\n💡 Run this command to add branded content: npm run seed-db')
      }
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

// Alternative approach using fetch to Supabase REST API
async function tryDirectSQL() {
  console.log('\n🔄 Attempting direct SQL execution via REST API...')
  
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        query: 'CREATE TABLE IF NOT EXISTS test_table (id SERIAL PRIMARY KEY);'
      })
    })
    
    if (response.ok) {
      console.log('✅ Direct SQL execution works!')
      // Now run the full SQL
      // ... continue with full table creation
    } else {
      const error = await response.text()
      console.log('❌ Direct SQL not available:', error)
      console.log('\n📝 Please use the Supabase Dashboard SQL Editor instead')
    }
  } catch (error) {
    console.log('❌ REST API approach failed:', error.message)
  }
}

// Run the setup
createTables().then(() => {
  // Try alternative approach if needed
  if (process.argv.includes('--force')) {
    tryDirectSQL()
  }
})