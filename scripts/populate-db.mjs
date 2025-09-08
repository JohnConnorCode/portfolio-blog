#!/usr/bin/env node

// Script to populate Supabase database with real content
// Run: node scripts/populate-db.mjs

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  process.exit(1)
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Blog posts data
const blogPosts = [
  {
    title: 'Why Technology Must Serve Humanity',
    slug: 'technology-serves-humanity',
    excerpt: 'Exploring the philosophy behind human-centered technology and why we must resist the temptation to let machines replace human judgment.',
    content: `<p>For twenty years, I've been thinking about the future—since I was sixteen, standing at a debate podium, arguing about worlds that didn't yet exist. What I've learned is this: technology is a tool, not a master.</p>

<h2>The Human Journey</h2>
<p>The human journey is transformative—individually and collectively. We grow through challenge, through vulnerability, through the discomfort of being wrong in public. No algorithm can replicate this. No AI can substitute for the growth that comes from human struggle.</p>

<h2>Automation's Proper Role</h2>
<p>Automation should free humans for high-context, creative work. It should eliminate busywork so we can focus on what matters: building relationships, solving complex problems, creating beauty. When we let machines make our decisions, we atrophy. When we use them as tools, we evolve.</p>

<h3>The Systems We Build</h3>
<p>Every system I design follows these principles:</p>
<ul>
<li>Reward delivered value, not time spent</li>
<li>Create transparency without surveillance</li>
<li>Enable community ownership and governance</li>
<li>Preserve human agency at every level</li>
</ul>

<h2>The Choice Before Us</h2>
<p>We stand at a crossroads. We can build systems that replace human judgment with algorithmic efficiency, or we can build systems that amplify human wisdom. The choice we make will determine not just our prosperity, but our humanity itself.</p>

<blockquote>
<p>"We must be humans with technology, not humans against technology, and never humans replaced by technology."</p>
</blockquote>

<p>This isn't just philosophy—it's practice. Every project I take on, every system I build, is guided by this principle. From Super Debate's emphasis on in-person connection to tokenomics that reward real value creation, the goal is always the same: technology in service of humanity, not the other way around.</p>`,
    category: 'Philosophy',
    tags: ['technology', 'humanity', 'philosophy', 'AI', 'automation'],
    featured: true,
    published: true,
    read_time: 8,
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    title: 'Building Communities Through Debate',
    slug: 'building-communities-debate',
    excerpt: 'How Super Debate creates spaces for growth through intellectual challenge and why in-person interaction matters more than ever.',
    content: `<p>Super Debate started with a simple observation: we're more connected than ever, yet lonelier than ever. We have infinite information, yet less wisdom. We can argue with strangers online, but we've forgotten how to disagree productively in person.</p>

<h2>The Power of Structured Disagreement</h2>
<p>Debate isn't about winning—it's about growth. When you stand at a podium, heart racing, mind searching for the right words, you're doing something fundamentally human. You're being vulnerable. You're risking embarrassment. You're choosing courage over comfort.</p>

<h3>What We've Built</h3>
<p>Super Debate now operates in three cities, with over 20 events hosted and a growing community of people who understand that growth comes from challenge. Our format is simple:</p>
<ul>
<li>Topics that matter—from AI ethics to economic policy</li>
<li>Structured formats that ensure everyone speaks</li>
<li>In-person only—no hiding behind screens</li>
<li>Community judging—your peers decide, not algorithms</li>
</ul>

<h2>The Transformation</h2>
<p>I've watched introverts become confident speakers. I've seen political opponents become friends. I've witnessed people discover they're capable of far more than they imagined. This is what technology should enable—not replace.</p>

<h3>Scaling Human Connection</h3>
<p>We're now building the infrastructure to bring Super Debate to 50 cities. Not through an app, but through local organizers. Not through automation, but through community building. Technology helps us coordinate, but the magic happens when humans meet face-to-face.</p>

<p>Join us. Choose discomfort. Choose growth. Choose to be human in an increasingly digital world.</p>`,
    category: 'Community Building',
    tags: ['community', 'debate', 'growth', 'public speaking', 'Super Debate'],
    featured: false,
    published: true,
    read_time: 6,
    published_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    title: 'The Future of Work: AI as Assistant, Not Replacement',
    slug: 'future-work-ai-assistant',
    excerpt: 'Why automation should free humans for high-context creative work rather than replacing them entirely.',
    content: `<p>I've spent the last decade building AI systems—from grant evaluation models to community governance platforms. Here's what I've learned: the companies that win aren't the ones that replace humans with AI. They're the ones that amplify human capabilities.</p>

<h2>The Augmentation Advantage</h2>
<p>At Thrive Protocol, we reduced grant evaluation time from 3 weeks to 2 hours. But we didn't eliminate the human evaluators. Instead, we freed them from reading hundreds of pages of boilerplate to focus on what matters: understanding the applicant's vision, assessing team dynamics, making nuanced judgments about potential.</p>

<h3>Real Examples from the Field</h3>
<p>Here are systems I've built that demonstrate this principle:</p>

<h4>1. Community Governance at HelpWith.co</h4>
<p>We gave 3,000+ service providers ownership of their platform. AI handles matching and logistics. Humans make the decisions that matter: who to trust, what services to offer, how to resolve disputes.</p>

<h4>2. Token Economics at Upland</h4>
<p>The SPARK token brought in 100K users not by replacing human creativity but by rewarding it. Players create experiences, build communities, design economies. The blockchain just keeps score.</p>

<h4>3. Earn-to-Own at Mode Mobile</h4>
<p>We returned $50M+ to users by automating reward distribution. But humans decided what to build, what to value, what to reward. The system served human judgment, not the other way around.</p>

<h2>The Path Forward</h2>
<p>The future of work isn't human vs. machine. It's human with machine. It's using AI to eliminate the mundane so humans can focus on the meaningful. It's building systems that respect human agency while leveraging computational power.</p>

<blockquote>
<p>"Make complexity simple, but never make humans simple."</p>
</blockquote>

<p>This is the future we're building. Join us.</p>`,
    category: 'AI Ethics',
    tags: ['AI', 'future of work', 'automation', 'human-centered design'],
    featured: false,
    published: true,
    read_time: 10,
    published_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    title: 'Open Systems Compound Faster Than Walled Gardens',
    slug: 'open-systems-compound-faster',
    excerpt: 'Lessons from building community-owned platforms and why decentralization isn\'t just ideology—it\'s good business.',
    content: `<p>Every successful platform I've built has one thing in common: community ownership. Not in the abstract, feel-good sense, but in the literal, economic sense. When users own the platform, magic happens.</p>

<h2>The Ownership Economy</h2>
<p>Traditional platforms extract value from users. Open systems distribute it. This isn't charity—it's strategy. When users have skin in the game, they become builders, not just consumers.</p>

<h3>Case Study: HelpWith.co</h3>
<p>We built a marketplace with zero platform fees. Impossible? Not when the community owns the infrastructure. Results:</p>
<ul>
<li>3,000+ active providers</li>
<li>$500K+ in transactions</li>
<li>0% platform fees</li>
<li>100% community governed</li>
</ul>

<p>How? By aligning incentives. Providers aren't just users—they're owners. They make the rules, set the standards, share the rewards.</p>

<h2>The Network Effect Multiplier</h2>
<p>Closed systems grow linearly. Open systems grow exponentially. When Upland opened their economy to user-generated content, they didn't just add features—they added builders. 100,000 of them.</p>

<h3>The Technical Architecture</h3>
<p>Building open systems requires different thinking:</p>
<ul>
<li><strong>Governance tokens</strong> that represent real ownership, not just voting rights</li>
<li><strong>Smart contracts</strong> that enforce transparency without intermediaries</li>
<li><strong>APIs</strong> that are truly open, not just "developer-friendly"</li>
<li><strong>Data portability</strong> that gives users real ownership of their information</li>
</ul>

<h2>The Competitive Advantage</h2>
<p>Companies ask me: "If we open everything up, what's our moat?" The moat IS the openness. When your users are your owners, when your developers are your partners, when your community is your product team—that's a moat no competitor can cross.</p>

<p>The future belongs to platforms that share power, not hoard it. Build accordingly.</p>`,
    category: 'Web3',
    tags: ['Web3', 'decentralization', 'community ownership', 'open source', 'platform economics'],
    featured: true,
    published: true,
    read_time: 7,
    published_at: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    title: 'The Philosophy of Human-First Futurism',
    slug: 'philosophy-human-first-futurism',
    excerpt: 'Synthesizing twenty years of thinking about technology, philosophy, and what it means to be human in an accelerating world.',
    content: `<p>I've been reading Nietzsche since I was sixteen. I've been building technology companies since I was twenty-five. These aren't contradictions—they're complementary forces that shape how I see the future.</p>

<h2>Becoming Who You Are</h2>
<p>Nietzsche wrote about the Übermensch—not a superior being, but a human who has overcome himself. In our age, this means overcoming the temptation to outsource our thinking to machines, our connections to algorithms, our decisions to data.</p>

<h3>The Acceleration Trap</h3>
<p>Ray Kurzweil predicts the Singularity—when technological change becomes so rapid that human life is irreversibly transformed. He's probably right about the timeline. He's definitely wrong about the implications.</p>

<p>The question isn't whether technology will accelerate. It's whether we'll accelerate with it, or be left behind. Not economically—spiritually.</p>

<h2>McLuhan's Prophecy</h2>
<p>Marshall McLuhan understood that media are extensions of ourselves. The smartphone extends our memory. AI extends our cognition. But what happens when the extension becomes the primary?</p>

<blockquote>
<p>"We shape our tools, and thereafter they shape us."</p>
</blockquote>

<p>This is why every system I build maintains human agency at its core. Not from nostalgia, but from wisdom.</p>

<h2>The Search for Meaning</h2>
<p>Viktor Frankl survived the concentration camps by finding meaning in suffering. What meaning do we find in convenience? What growth comes from comfort? What wisdom emerges from having all answers at our fingertips?</p>

<h3>The Super Debate Thesis</h3>
<p>This is why I created Super Debate. Not to teach argumentation, but to create spaces for intellectual courage. To make people uncomfortable. To force growth through challenge.</p>

<p>Every time someone stands at that podium, voice shaking, they're choosing to be human. They're choosing growth over safety, connection over isolation, wisdom over information.</p>

<h2>The Path Forward</h2>
<p>Human-first futurism isn't anti-technology. It's pro-human. It's building systems that:</p>
<ul>
<li>Amplify rather than replace human judgment</li>
<li>Create connection rather than isolation</li>
<li>Reward courage rather than conformity</li>
<li>Distribute power rather than concentrate it</li>
</ul>

<p>The future needs builders who understand both code and philosophy, both systems and souls. If that's you, let's talk.</p>`,
    category: 'Philosophy',
    tags: ['philosophy', 'futurism', 'Nietzsche', 'technology', 'humanity'],
    featured: true,
    published: true,
    read_time: 12,
    published_at: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString()
  }
]

// Projects data
const projects = [
  {
    title: 'Super Debate Platform',
    slug: 'super-debate',
    client: 'Super Debate',
    description: 'Founded and built a live, in-person debate platform that brings communities together through structured intellectual discourse.',
    philosophy: 'Growth comes from discomfort. Community builds through challenge. Technology should bring us together, not apart.',
    impact: 'Active in 3 cities with 20+ events hosted, creating spaces for intellectual courage and human connection.',
    category: 'Community Building',
    featured: true,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Event Management'],
    metrics: {
      cities: 3,
      events: '20+',
      community: 'Growing',
      format: 'In-person only'
    },
    start_date: '2023-01-01',
    end_date: null
  },
  {
    title: 'Thrive Protocol Grant System',
    slug: 'thrive-protocol-grants',
    client: 'Thrive Protocol',
    description: 'Designed and implemented an AI-powered grant evaluation system that reduced processing time from 3 weeks to 2 hours.',
    philosophy: 'AI should eliminate busywork, not human judgment. The best systems amplify human wisdom rather than replacing it.',
    impact: 'Processed hundreds of applications with 95% time savings while maintaining human oversight for final decisions.',
    category: 'AI/Automation',
    featured: true,
    technologies: ['Python', 'TensorFlow', 'GPT-4', 'PostgreSQL', 'React'],
    metrics: {
      time_saved: '95%',
      processing: '3 weeks to 2 hours',
      applications: 'Hundreds'
    },
    start_date: '2023-06-01',
    end_date: '2024-01-01'
  },
  {
    title: 'Upland SPARK Token',
    slug: 'upland-spark-token',
    client: 'Upland',
    description: 'Launched SPARK token ecosystem bringing 100K+ users into Web3 gaming with true digital property ownership.',
    philosophy: 'Players should own their achievements. Communities should govern their worlds. Games should reward creativity, not just consumption.',
    impact: 'Successfully onboarded 100K users to Web3, creating a sustainable economy where players earn real value.',
    category: 'Web3/Gaming',
    featured: true,
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'EOS Blockchain'],
    metrics: {
      users: '100K+',
      token: 'SPARK',
      growth: '15x revenue',
      model: 'Play-to-earn'
    },
    start_date: '2022-03-01',
    end_date: '2023-03-01'
  },
  {
    title: 'Mode Mobile Earn-to-Own',
    slug: 'mode-mobile-earn',
    client: 'Mode Mobile',
    description: 'Built earn-to-own model that returned $50M+ value to users while growing the business.',
    philosophy: 'Users create value; they should capture it. The best business models align user success with platform success.',
    impact: 'Distributed $50M+ to users through innovative earn-to-own mechanics, proving sustainable alternative to ad-based models.',
    category: 'FinTech',
    featured: false,
    technologies: ['React Native', 'Python', 'PostgreSQL', 'Analytics', 'Blockchain'],
    metrics: {
      value_returned: '$50M+',
      model: 'Earn-to-own',
      users: 'Hundreds of thousands'
    },
    start_date: '2021-01-01',
    end_date: '2022-06-01'
  },
  {
    title: 'HelpWith.co Marketplace',
    slug: 'helpwith-marketplace',
    client: 'HelpWith.co',
    description: 'Created community-owned marketplace with zero platform fees, governed entirely by 3,000+ service providers.',
    philosophy: 'True decentralization means economic ownership, not just voting rights. Communities thrive when they own their infrastructure.',
    impact: 'Facilitated $500K+ in transactions with 0% platform fees, proving community ownership model.',
    category: 'Web3/Marketplace',
    featured: false,
    technologies: ['React', 'Ethereum', 'IPFS', 'Node.js', 'Smart Contracts'],
    metrics: {
      providers: '3000+',
      transactions: '$500K+',
      fees: '0%',
      governance: 'Full DAO'
    },
    start_date: '2022-08-01',
    end_date: '2023-08-01'
  },
  {
    title: 'Chainlink Integration Suite',
    slug: 'chainlink-integration',
    client: 'Chainlink',
    description: 'Developed oracle integration patterns for bringing real-world data into smart contracts reliably.',
    philosophy: 'Blockchain needs real-world data. But truth isn\'t just technical—it\'s social. Systems must account for both.',
    impact: 'Created integration patterns now used across multiple DeFi protocols, enabling billions in transaction volume.',
    category: 'Web3/Infrastructure',
    featured: false,
    technologies: ['Solidity', 'Chainlink', 'Node.js', 'TypeScript', 'Oracle Networks'],
    metrics: {
      protocols: 'Multiple',
      volume_enabled: 'Billions',
      reliability: '99.9%'
    },
    start_date: '2021-06-01',
    end_date: '2022-01-01'
  }
]

async function populateDatabase() {
  console.log('🚀 Starting database population...\n')
  
  try {
    // Check if posts table exists and has data
    const { data: existingPosts, error: checkError } = await supabase
      .from('posts')
      .select('id')
      .limit(1)
    
    if (checkError) {
      console.error('❌ Error checking posts table:', checkError.message)
      console.log('\n📝 Please ensure the database schema is created first.')
      console.log('Run the SQL in supabase/schema.sql in your Supabase dashboard.')
      return
    }
    
    if (existingPosts && existingPosts.length > 0) {
      console.log('⚠️  Database already contains posts.')
      console.log('Clearing existing data...')
      
      // Clear existing data
      await supabase.from('posts').delete().neq('id', '00000000-0000-0000-0000-000000000000')
      await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    }
    
    // Insert blog posts
    console.log('📝 Inserting blog posts...')
    const { data: insertedPosts, error: postsError } = await supabase
      .from('posts')
      .insert(blogPosts)
      .select()
    
    if (postsError) {
      console.error('❌ Error inserting posts:', postsError.message)
    } else {
      console.log(`✅ Inserted ${insertedPosts.length} blog posts`)
    }
    
    // Insert projects
    console.log('\n🚀 Inserting projects...')
    const { data: insertedProjects, error: projectsError } = await supabase
      .from('projects')
      .insert(projects)
      .select()
    
    if (projectsError) {
      console.error('❌ Error inserting projects:', projectsError.message)
    } else {
      console.log(`✅ Inserted ${insertedProjects.length} projects`)
    }
    
    // Verify the data
    console.log('\n🔍 Verifying database content...')
    
    const { count: postCount } = await supabase
      .from('posts')
      .select('*', { count: 'exact', head: true })
    
    const { count: projectCount } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true })
    
    console.log(`\n✨ Database successfully populated!`)
    console.log(`   - ${postCount} blog posts`)
    console.log(`   - ${projectCount} projects`)
    console.log('\n🎉 Your portfolio site now has real content!')
    console.log('   Visit /blog to see your posts')
    console.log('   Visit /work to see your projects')
    
  } catch (error) {
    console.error('\n❌ Unexpected error:', error.message)
    console.error('\nPlease check your Supabase credentials and try again.')
  }
}

// Run the population
populateDatabase()