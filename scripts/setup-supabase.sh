#!/bin/bash

# Setup Supabase tables using REST API
source .env.local

SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

echo "🔧 Setting up Supabase tables..."
echo "📍 Project: $SUPABASE_URL"

# Test connection
echo "Testing connection..."
curl -s "$SUPABASE_URL/rest/v1/" \
  -H "apikey: $ANON_KEY" \
  -H "Authorization: Bearer $ANON_KEY"

echo -e "\n\n⚠️  Important: Tables must be created via Supabase Dashboard"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Go to: $SUPABASE_URL"
echo "2. Navigate to SQL Editor"
echo "3. Run the SQL from: supabase/migrations/20240108_create_tables.sql"
echo ""
echo "Or copy and run this one-liner setup:"
echo ""
cat supabase/migrations/20240108_create_tables.sql
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "After creating tables, run: npm run seed-db"