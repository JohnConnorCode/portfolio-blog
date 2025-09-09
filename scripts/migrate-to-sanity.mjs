import { createClient } from '@supabase/supabase-js'
import { createClient as createSanityClient } from '@sanity/client'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env.local') })

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Sanity client with write permissions
const sanityClient = createSanityClient({
  projectId: 'c24x6hh0',
  dataset: 'production',
  apiVersion: '2024-01-08',
  token: process.env.SANITY_AUTH_TOKEN, // You'll need to add this
  useCdn: false
})

async function migratePosts() {
  console.log('🚀 Starting migration from Supabase to Sanity...')
  
  // Fetch all posts from Supabase
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching posts:', error)
    return
  }
  
  console.log(`Found ${posts?.length || 0} posts to migrate`)
  
  // Create default author if doesn't exist
  const author = {
    _id: 'author-john-connor',
    _type: 'author',
    name: 'John Connor',
    slug: { current: 'john-connor' },
    bio: 'Product Strategist & Growth Catalyst'
  }
  
  try {
    await sanityClient.createOrReplace(author)
    console.log('✅ Author created/updated')
  } catch (err) {
    console.log('Author might already exist')
  }
  
  // Migrate each post
  for (const post of posts || []) {
    try {
      // Convert HTML content to Portable Text blocks
      const portableTextContent = [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: post.content || post.excerpt || 'Content to be added'
            }
          ]
        }
      ]
      
      const categoryId = post.category ? 
        `category-${post.category.toLowerCase().replace(/[&\s]+/g, '-')}` : null
      
      const sanityPost = {
        _type: 'post',
        title: post.title,
        slug: { current: post.slug },
        excerpt: post.excerpt,
        body: portableTextContent,
        publishedAt: post.published_at || post.created_at,
        author: { _ref: 'author-john-connor' },
        categories: categoryId ? [
          {
            _type: 'reference',
            _ref: categoryId
          }
        ] : []
      }
      
      // Create category if it exists
      if (post.category && categoryId) {
        const category = {
          _id: categoryId,
          _type: 'category',
          title: post.category,
          slug: { current: post.category.toLowerCase().replace(/[&\s]+/g, '-') }
        }
        
        try {
          await sanityClient.createOrReplace(category)
        } catch (err) {
          console.log(`Category ${post.category} might already exist`)
        }
      }
      
      const result = await sanityClient.create(sanityPost)
      console.log(`✅ Migrated: ${post.title}`)
    } catch (err) {
      console.error(`❌ Failed to migrate ${post.title}:`, err.message)
    }
  }
  
  console.log('🎉 Migration complete!')
}

// Run migration
migratePosts()