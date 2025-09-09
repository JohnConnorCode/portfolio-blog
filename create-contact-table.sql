
-- Run this in Supabase SQL editor
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
  FOR INSERT WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS contact_submissions_created_idx ON public.contact_submissions(created_at DESC);

