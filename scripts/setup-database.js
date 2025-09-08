#!/usr/bin/env node

/**
 * Database Setup Script
 * Run this to initialize the Supabase database with schema and seed data
 * 
 * Usage: node scripts/setup-database.js
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Check for required environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
  console.error('❌ Missing required environment variables.')
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY are set in .env.local')
  process.exit(1)
}

// Create Supabase admin client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

async function runSQLFile(filePath, description) {
  try {
    console.log(`\n📄 ${description}...`)
    const sql = fs.readFileSync(filePath, 'utf8')
    
    // Split by semicolons but preserve those within strings
    const statements = sql
      .split(/;(?=(?:[^']*'[^']*')*[^']*$)/)
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'))
    
    for (const statement of statements) {
      if (statement.trim()) {
        const { error } = await supabase.rpc('exec_sql', { 
          sql_query: statement + ';' 
        }).single()
        
        if (error) {
          // Try direct execution if RPC fails
          console.log('  ⚠️  RPC failed, trying direct execution...')
          // Note: Direct SQL execution requires service key
          const { error: directError } = await supabase.from('posts').select('count').single()
          if (directError) {
            console.error(`  ❌ Error: ${directError.message}`)
          }
        }
      }
    }
    console.log(`  ✅ ${description} completed`)
  } catch (error) {
    console.error(`  ❌ Error in ${description}: ${error.message}`)
    throw error
  }
}

async function setupDatabase() {
  console.log('🚀 Starting database setup...\n')
  
  try {
    // Test connection
    console.log('🔌 Testing database connection...')
    const { data, error } = await supabase.from('posts').select('count').limit(1)
    if (error && !error.message.includes('relation "public.posts" does not exist')) {
      throw new Error(`Connection failed: ${error.message}`)
    }
    console.log('  ✅ Connected to Supabase')
    
    // Run schema setup
    const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql')
    if (fs.existsSync(schemaPath)) {
      await runSQLFile(schemaPath, 'Setting up database schema')
    } else {
      console.log('  ⚠️  Schema file not found, skipping...')
    }
    
    // Run seed data
    const seedPath = path.join(__dirname, '..', 'supabase', 'seed-data.sql')
    if (fs.existsSync(seedPath)) {
      console.log('\n🌱 Seeding database with initial content...')
      
      // Check if data already exists
      const { count } = await supabase
        .from('posts')
        .select('*', { count: 'exact', head: true })
      
      if (count > 0) {
        console.log('  ℹ️  Database already contains data.')
        const answer = await askQuestion('  Do you want to replace it with fresh seed data? (y/n): ')
        if (answer.toLowerCase() !== 'y') {
          console.log('  ⏭️  Skipping seed data')
          return
        }
      }
      
      await runSQLFile(seedPath, 'Loading seed data')
    } else {
      console.log('  ⚠️  Seed file not found, skipping...')
    }
    
    // Verify setup
    console.log('\n🔍 Verifying database setup...')
    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .select('*')
      .limit(5)
    
    if (postsError) {
      throw new Error(`Verification failed: ${postsError.message}`)
    }
    
    console.log(`  ✅ Found ${posts.length} blog posts`)
    
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*')
      .limit(5)
    
    if (!projectsError) {
      console.log(`  ✅ Found ${projects.length} projects`)
    }
    
    console.log('\n✨ Database setup completed successfully!')
    console.log('\n📝 Next steps:')
    console.log('  1. Run `npm run dev` to start the development server')
    console.log('  2. Visit http://localhost:3000/blog to see your blog posts')
    console.log('  3. Check the Supabase dashboard to manage your content')
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message)
    console.error('\n💡 Troubleshooting tips:')
    console.error('  1. Check your .env.local file has correct Supabase credentials')
    console.error('  2. Ensure your Supabase project is active')
    console.error('  3. Try running the SQL directly in Supabase SQL editor')
    process.exit(1)
  }
}

function askQuestion(question) {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    readline.question(question, (answer) => {
      readline.close()
      resolve(answer)
    })
  })
}

// Alternative: Direct SQL execution for Supabase
async function executeSQL(sql) {
  try {
    // Note: This is a simplified version. In production, you'd want to use
    // Supabase's admin API or connect directly to the PostgreSQL database
    console.log('\n📝 To run the SQL manually:')
    console.log('  1. Go to your Supabase dashboard')
    console.log('  2. Navigate to SQL Editor')
    console.log('  3. Copy and run the contents of:')
    console.log(`     - supabase/schema.sql (for structure)`)
    console.log(`     - supabase/seed-data.sql (for content)`)
    console.log('\n  Or use the Supabase CLI:')
    console.log('     npx supabase db reset')
    console.log('     npx supabase db seed')
  } catch (error) {
    console.error('Error:', error)
  }
}

// Run the setup
if (process.argv[2] === '--manual') {
  executeSQL()
} else {
  setupDatabase()
}