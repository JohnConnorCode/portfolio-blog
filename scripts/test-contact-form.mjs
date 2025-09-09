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

console.log('🔧 Testing Supabase connection...')
console.log('URL:', supabaseUrl)

const supabase = createClient(supabaseUrl, supabaseKey)

async function testContactForm() {
  try {
    // Test inserting a contact submission
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: 'Test User',
          email: 'test@example.com',
          company: 'Test Corp',
          project_type: 'consulting',
          budget: '10k-50k',
          message: 'This is a test message from the test script',
          status: 'new'
        }
      ])
      .select()
      .single()
    
    if (error) {
      console.error('❌ Error inserting contact submission:', error)
      return
    }
    
    console.log('✅ Contact submission created successfully!')
    console.log('Data:', data)
    
    // Clean up test data
    if (data?.id) {
      const { error: deleteError } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', data.id)
      
      if (deleteError) {
        console.error('⚠️ Could not delete test submission:', deleteError)
      } else {
        console.log('🧹 Test data cleaned up')
      }
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err)
  }
}

testContactForm()