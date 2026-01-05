#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials')
  process.exit(1)
}

console.log('🔧 Creating contact_submissions table...')

const supabase = createClient(supabaseUrl, supabaseKey)

// Use raw SQL to create the table
const { data, error } = await supabase.rpc('create_contact_table', {
  sql: `
    CREATE TABLE IF NOT EXISTS public.contact_submissions (
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
    
    -- Create indexes
    CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON public.contact_submissions(email);
    CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON public.contact_submissions(status);
    CREATE INDEX IF NOT EXISTS contact_submissions_created_idx ON public.contact_submissions(created_at DESC);
  `
}).catch(async () => {
  // If RPC doesn't exist, try direct SQL through the Supabase dashboard
  console.log('⚠️ RPC not available. Please run this SQL in your Supabase dashboard:')
  console.log(`
CREATE TABLE IF NOT EXISTS public.contact_submissions (
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

-- Enable RLS but allow public inserts
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for contact form submissions)
CREATE POLICY "Anyone can insert contact submissions" ON public.contact_submissions
  FOR INSERT TO public WITH CHECK (true);

-- Only authenticated users can read/update/delete
CREATE POLICY "Authenticated users can manage submissions" ON public.contact_submissions
  FOR ALL USING (auth.role() = 'authenticated');
  `)
  
  // For now, let's just insert without the table and see if Supabase auto-creates it
  console.log('\n🔄 Attempting to use the table anyway...')
  
  const { error: testError } = await supabase
    .from('contact_submissions')
    .select('*')
    .limit(1)
  
  if (testError) {
    console.error('❌ Table definitely does not exist:', testError.message)
    console.log('\n📋 Please create the table manually in Supabase Dashboard')
    console.log('Go to: https://supabase.com/dashboard/project/jtzckyoeixizzoqmxwkp/editor')
  } else {
    console.log('✅ Table exists or was auto-created!')
  }
})

if (error) {
  console.error('Error:', error)
} else if (data) {
  console.log('✅ Table created successfully!')
}
