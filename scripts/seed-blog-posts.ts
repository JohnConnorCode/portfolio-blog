import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

const blogPosts = [
  {
    _type: 'post',
    title: 'From Grants to Targeted Solutions in Web3',
    slug: { current: 'why-ecosystem-funding-is-broken' },
    excerpt: 'Traditional grant systems reward promises over delivery. The future lies in targeted solution finding that aligns incentives with actual value creation.',
    publishedAt: new Date().toISOString(),
    tags: ['web3', 'grants', 'ecosystem', 'incentives', 'governance'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The current Web3 grant ecosystem is fundamentally broken. After evaluating hundreds of grant applications and designing systems that reduced evaluation time from 3 weeks to 2 hours, I've seen the same patterns repeat: teams optimizing for application success rather than project success, evaluators drowning in buzzwords rather than understanding value, and millions in funding going to projects that never ship." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Grant Theater Problem' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Grant applications have become a performance art. Teams spend weeks crafting perfect narratives, hiring grant writers, and studying what worked before. The result? We're funding the best grant writers, not the best builders. We're rewarding promises, not proof." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "At Thrive Protocol, we flipped this model. Instead of open calls for proposals, we identified specific problems the ecosystem needed solved. Instead of judging applications, we tracked on-chain metrics. Instead of upfront payments, we created milestone-based releases tied to actual usage." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Moving to Targeted Solution Finding' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The future isn't grants—it's bounties. Not open applications—targeted recruitment. Not promises—proof of work. Here's how we make this shift:" }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: '1. Define Problems, Not Categories' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Stop asking 'What will you build?' Start asking 'Can you solve this specific problem?' When Chainlink needed better oracle patterns, they didn't open grant applications—they recruited teams with proven track records in data infrastructure." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: '2. Pay for Results, Not Effort' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Every payment should be tied to measurable outcomes. Not 'built a prototype' but 'prototype processed 1,000 transactions.' Not 'launched on mainnet' but 'acquired 100 active users.' This isn't harsh—it's honest. It aligns builder incentives with ecosystem needs." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: '3. Create Retroactive Rewards' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The best predictor of future success is past success. Optimism's retroactive public goods funding got this right: reward teams that have already delivered value. This removes speculation and rewards proven builders." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Builder-First Ecosystem' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "When we shift from grants to targeted solutions, magic happens. Builders focus on building, not grant writing. Ecosystems get solutions to real problems, not theoretical innovations. Capital flows to value creation, not value signaling." }]
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [{ _type: 'span', text: "Stop funding promises. Start solving problems. The builders who matter will thank you." }]
      }
    ]
  },
  {
    _type: 'post',
    title: 'Competitive Debate as the Revival of the Greek Agora',
    slug: { current: 'debate-as-leadership-practice' },
    excerpt: 'The ancient Greeks knew something we\'ve forgotten: wisdom emerges from structured disagreement. Super Debate brings back the agora for the digital age.',
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['debate', 'philosophy', 'community', 'leadership', 'Super Debate'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Two thousand years ago, citizens gathered in the agora not to agree, but to argue. Not to comfort, but to challenge. The greatest minds of Athens—Socrates, Plato, Aristotle—understood that truth emerges not from consensus but from collision. We've lost this. Super Debate is bringing it back." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Death of Productive Disagreement' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Modern discourse has devolved into two extremes: toxic online warfare or polite offline silence. Twitter fights generate heat but no light. Corporate meetings prioritize harmony over honesty. We've forgotten how to disagree productively—to challenge ideas without attacking people, to be wrong in public without shame, to change our minds without losing face." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "This isn't just unfortunate—it's dangerous. When we stop debating, we stop thinking. When we stop challenging, we stop growing. When we prioritize comfort over truth, we choose stagnation over evolution." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Super Debate Renaissance' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Super Debate isn't about winning arguments—it's about strengthening thinking. Every event follows the same principles that made the Greek agora transformative:" }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'In-Person Only' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "You can't hide behind an avatar. You can't rage-quit. You must look your opponent in the eye and see their humanity even as you challenge their ideas. This creates accountability that no online platform can replicate." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Structured Format' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Time limits prevent monologues. Turn-taking ensures everyone speaks. Topics rotate to prevent expertise bias. The structure isn't restrictive—it's liberating. It frees participants to focus on ideas rather than managing conversation dynamics." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Community Judging' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Your peers decide who made the stronger argument. Not based on credentials or charisma, but on logic and evidence. This democratizes wisdom—the best argument wins, regardless of who makes it." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Leadership Through Intellectual Courage' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "I've watched CEOs discover their assumptions were wrong. I've seen introverts become powerful speakers. I've witnessed political opponents become friends. This is leadership development at its purest: learning to think clearly under pressure, speak truth with compassion, and change your mind with grace." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The leaders we need aren't those who are always right—they're those who can be wrong productively. Who can steelman their opponents' arguments. Who can synthesize opposing views into higher truth." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Scaling the Agora' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "We're now in three cities with plans for fifty. Not through an app—through local organizers. Not through automation—through human connection. Each city's agora reflects its community while maintaining core principles." }]
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [{ _type: 'span', text: "Democracy isn't voting—it's thinking together. Join us. Stand at the podium. Feel your heart race. Find your voice. Discover that the person arguing against you might just change your mind—and that's exactly the point." }]
      }
    ]
  },
  {
    _type: 'post',
    title: 'Automation IS Coming for All Your Jobs',
    slug: { current: 'automation-as-human-right' },
    excerpt: 'AI will replace human labor—and that\'s exactly what should happen. The question isn\'t whether, but how we ensure humans benefit from their own obsolescence.',
    publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['AI', 'automation', 'future of work', 'UBI', 'human potential'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Let me be clear: AI will take your job. Not might. Will. The question isn't whether automation will replace human labor—it's whether we'll let this be humanity's greatest tragedy or greatest liberation. After spending a decade building AI systems, I believe it should be the latter. Here's why." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Inevitability of Obsolescence' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Every job consists of tasks. Every task can be decomposed into patterns. Every pattern can be learned by machines. This isn't speculation—it's mathematics. Whether you're a radiologist reading scans, a lawyer reviewing contracts, or a programmer writing code, your job is a collection of patterns. And machines are getting exponentially better at pattern recognition." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The timeline? Shorter than you think. GPT-4 can already pass the bar exam. AI radiologists outperform human ones. GitHub Copilot writes 40% of code in projects where it's enabled. This isn't the future—it's the present." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Why This Should Be Celebrated' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Here's the radical truth: humans shouldn't have jobs. Jobs are what we created when we needed human bodies and minds to sustain civilization. But if machines can sustain civilization better, cheaper, and faster, then clinging to jobs is like insisting on plowing fields by hand when tractors exist." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Think about what you actually want from life. Is it to review legal documents for 60 hours a week? To enter data into spreadsheets? To stand at a checkout counter? Or is it to create, to love, to explore, to grow? Jobs were always a means, not an end. Automation offers us the chance to skip the means and go straight to the end." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Distribution Problem' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The crisis isn't automation—it's distribution. When machines create value, who captures it? Under our current system, the owners of the machines. This is where we need radical restructuring, not Luddite resistance." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Universal Basic Income is Just the Start' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "UBI treats the symptom, not the cause. The cause is that we've separated value creation from value capture. The solution isn't just redistributing wealth after it's created—it's ensuring everyone owns a piece of the automation infrastructure." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Universal Basic Assets' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Every human should own shares in the autonomous systems that replace human labor. Not as charity, but as birthright. When an AI replaces a radiologist, the radiologist should automatically receive equity in that AI system. When automation eliminates a job category, the displaced workers should collectively own the automation." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Human Premium' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "What remains for humans? Everything that matters. Machines can optimize; only humans can imagine what to optimize for. Machines can create content; only humans can create meaning. Machines can solve problems; only humans can decide which problems are worth solving." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The future isn't humans competing with machines—it's humans directing machines toward human flourishing. This requires us to develop uniquely human capabilities: ethical reasoning, aesthetic judgment, emotional intelligence, spiritual growth." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Choice Before Us' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "We can fight automation and lose, preserving jobs that machines do better while humans suffer. Or we can embrace automation and win, liberating humans from labor to pursue what only humans can do: love, create, explore, become." }]
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [{ _type: 'span', text: "The machines are coming for your job. Good. Let them have it. Your life is waiting on the other side." }]
      }
    ]
  },
  {
    _type: 'post',
    title: 'From Vanity Metrics to Human Solutions',
    slug: { current: 'death-of-growth-theater' },
    excerpt: 'MAUs, DAUs, and growth rates are theater. Real success is measured in problems solved, lives improved, and value created for actual humans.',
    publishedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['product', 'metrics', 'growth', 'startups', 'human-centered design'],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Every startup deck has the same slide: a hockey stick graph going up and to the right. Monthly Active Users. Daily Active Users. Growth Rate. Engagement. Retention. These metrics have become the language of success. They're also why 90% of startups fail—not despite hitting these metrics, but because of them." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Vanity Metric Trap' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "I've seen companies with millions of users and zero value creation. Apps that maximize 'engagement' by making users angry. Platforms that boost 'retention' through dark patterns. Products that grow by solving imaginary problems while ignoring real ones." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The problem isn't metrics—it's measuring the wrong things. When you optimize for usage instead of usefulness, engagement instead of enlightenment, retention instead of results, you build products that consume human attention without creating human value." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Growth Theater Performance' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Startups have become performers in an elaborate theater. The audience? VCs who pattern-match on previous exits. The script? Hit certain metrics at certain stages. The problem? The performance has become disconnected from the purpose." }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Teams spend more time optimizing metrics than solving problems. They chase viral growth instead of sustainable value. They prioritize user acquisition over user success. The result? Products that look successful on dashboards but fail in reality." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Measuring What Matters' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "At Mode Mobile, we didn't track DAUs—we tracked dollars returned to users. At HelpWith, we didn't measure engagement—we measured problems solved. At Super Debate, we don't count app downloads—we count minds changed. These aren't vanity metrics. They're value metrics." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Problem-Solution Fit Over Product-Market Fit' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Before asking 'will people use this?' ask 'should this exist?' Identify a real problem affecting real humans. Measure whether you're solving it. Everything else is secondary." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Value Created Over Value Captured' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Track the value you create for users, not the value you extract from them. How much time did you save them? How much money did you make them? How much friction did you remove from their lives? These are metrics that matter." }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Transformation Over Transaction' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The best products don't just serve users—they transform them. Super Debate doesn't just host events—it builds confident speakers. Measure transformation: skills gained, confidence built, connections made." }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Human Success Framework' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "Here's how to build products that create real value:" }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "1. Start with a human problem, not a market opportunity" }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "2. Measure value created, not engagement captured" }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "3. Optimize for user success, not user addiction" }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "4. Track transformation, not just transaction" }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "5. Build for sustainability, not just scalability" }]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The End of Theater' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: "The next generation of successful products won't be those with the best metrics—they'll be those that solve real problems for real people. They won't optimize for engagement—they'll optimize for enrichment. They won't trap users—they'll transform them." }]
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [{ _type: 'span', text: "Stop performing for VCs. Start solving for humans. The metrics that matter aren't on your dashboard—they're in the lives you improve." }]
      }
    ]
  }
]

async function seedBlogPosts() {
  console.log('Starting blog post seed...')
  
  try {
    // Delete existing blog posts
    console.log('Deleting existing posts...')
    const existingPosts = await client.fetch('*[_type == "post"]')
    for (const post of existingPosts) {
      await client.delete(post._id)
    }
    
    // Create new blog posts
    console.log('Creating new blog posts...')
    for (const post of blogPosts) {
      await client.create(post)
      console.log(`Created: ${post.title}`)
    }
    
    console.log('✅ Blog posts seeded successfully!')
  } catch (error) {
    console.error('Error seeding blog posts:', error)
    process.exit(1)
  }
}

seedBlogPosts()
