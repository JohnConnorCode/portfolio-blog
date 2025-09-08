import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Static client for build-time operations (no cookies needed)
export function createStaticClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}