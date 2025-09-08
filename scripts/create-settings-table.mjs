import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createSettingsTable() {
  try {
    // Create settings table for site configuration
    const { error: createError } = await supabase
      .from('settings')
      .select('*')
      .limit(1)
    
    if (createError && createError.code === '42P01') {
      // Table doesn't exist, create it
      const { error } = await supabase.rpc('create_settings_table', {
        sql: `
          CREATE TABLE IF NOT EXISTS settings (
            id INTEGER PRIMARY KEY DEFAULT 1,
            content JSONB DEFAULT '{}'::jsonb,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
            CONSTRAINT single_row CHECK (id = 1)
          );
          
          -- Enable RLS
          ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
          
          -- Allow public read
          CREATE POLICY "Public read access" ON settings
            FOR SELECT USING (true);
          
          -- Allow authenticated update
          CREATE POLICY "Authenticated update" ON settings
            FOR UPDATE USING (true);
          
          -- Insert default row
          INSERT INTO settings (id, content) 
          VALUES (1, '{
            "heroTitle": "JOHN CONNOR",
            "heroTagline": "Product Strategist · Growth Catalyst",
            "heroDescription": "Transforming ideas into scalable products through strategic iteration.",
            "heroHighlight": "AI-powered building. Strategic consulting. Rapid growth.",
            "metrics": [
              {"number": "$50M+", "label": "Capital Facilitated", "context": "Through strategic consulting"},
              {"number": "10,000+", "label": "Products Launched", "context": "From concept to scale"},
              {"number": "15 Years", "label": "Strategic Leadership", "context": "Consulting & product strategy"},
              {"number": "10K+", "label": "Users Impacted", "context": "Through products and platforms"}
            ]
          }'::jsonb)
          ON CONFLICT (id) DO NOTHING;
        `
      })
      
      if (error) {
        console.error('Error creating table:', error)
      } else {
        console.log('✅ Settings table created successfully!')
      }
    } else {
      console.log('✅ Settings table already exists')
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

createSettingsTable()