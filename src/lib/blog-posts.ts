export const blogPosts = [
  {
    slug: 'why-ecosystem-funding-is-broken',
    title: 'Why Ecosystem Funding Is Broken',
    excerpt: 'The current model of ecosystem funding creates perverse incentives that work against genuine innovation.',
    content: `
      <h2>The Problem with Current Funding Models</h2>
      <p>Ecosystem funding has become a game of metrics manipulation rather than value creation. Teams optimize for vanity metrics instead of building sustainable products that serve real users.</p>
      
      <h3>Key Issues</h3>
      <ul>
        <li>Short-term thinking dominates long-term vision</li>
        <li>Capital allocation favors hype over substance</li>
        <li>Genuine builders get drowned out by growth hackers</li>
      </ul>
      
      <h2>A Better Path Forward</h2>
      <p>We need funding models that align incentives with long-term value creation. This means:</p>
      <ol>
        <li>Milestone-based funding tied to real usage</li>
        <li>Community-driven allocation mechanisms</li>
        <li>Focus on sustainable unit economics from day one</li>
      </ol>
      
      <p>The future of ecosystem funding isn't about bigger rounds or faster deployments. It's about building systems that reward genuine value creation over financial engineering.</p>
    `,
    category: 'Web3',
    publishedAt: '2024-01-15',
    readTime: 5,
    author: 'John Connor'
  },
  {
    slug: 'debate-as-leadership-practice',
    title: 'Debate as Leadership Practice',
    excerpt: 'Why the ability to engage in structured debate is the most undervalued leadership skill.',
    content: `
      <h2>The Lost Art of Productive Disagreement</h2>
      <p>Modern leadership culture has forgotten how to disagree productively. We've replaced debate with echo chambers and genuine discourse with performative agreement.</p>
      
      <h3>Why Debate Matters</h3>
      <p>Great leaders understand that the best ideas emerge from collision, not consensus. Structured debate:</p>
      <ul>
        <li>Forces clarity of thought</li>
        <li>Reveals hidden assumptions</li>
        <li>Builds intellectual courage</li>
        <li>Creates anti-fragile strategies</li>
      </ul>
      
      <h2>Building a Culture of Debate</h2>
      <p>Creating space for productive disagreement requires intentional design:</p>
      <ol>
        <li>Establish clear debate protocols</li>
        <li>Separate ideas from identity</li>
        <li>Reward steel-manning over straw-manning</li>
        <li>Make changing your mind a virtue, not a weakness</li>
      </ol>
      
      <p>The organizations that will thrive in uncertainty are those that can harness disagreement as a tool for discovering truth.</p>
    `,
    category: 'Leadership',
    publishedAt: '2024-01-10',
    readTime: 6,
    author: 'John Connor'
  },
  {
    slug: 'automation-as-human-right',
    title: 'Automation as a Human Right',
    excerpt: 'Why access to automation tools should be considered a fundamental right in the digital age.',
    content: `
      <h2>The Automation Divide</h2>
      <p>We're creating a two-tier society: those with access to automation and those without. This divide will define the next century of human development.</p>
      
      <h3>The Current Reality</h3>
      <p>Today's automation tools are gated behind:</p>
      <ul>
        <li>Technical expertise requirements</li>
        <li>Expensive subscriptions</li>
        <li>Corporate employment</li>
        <li>Geographic restrictions</li>
      </ul>
      
      <h2>Democratizing Automation</h2>
      <p>Making automation accessible to everyone isn't charity—it's economic necessity. When we automate away busywork, we free humans for creative and strategic thinking.</p>
      
      <h3>The Path Forward</h3>
      <ol>
        <li>Open-source automation frameworks</li>
        <li>No-code tools that actually work</li>
        <li>Universal basic automation education</li>
        <li>Public infrastructure for AI tools</li>
      </ol>
      
      <p>The question isn't whether we should democratize automation, but how quickly we can make it happen.</p>
    `,
    category: 'Technology',
    publishedAt: '2024-01-05',
    readTime: 7,
    author: 'John Connor'
  },
  {
    slug: 'building-systems-that-compound',
    title: 'Building Systems That Compound',
    excerpt: 'The difference between linear and exponential growth lies in system design.',
    content: `
      <h2>Linear Thinking in an Exponential World</h2>
      <p>Most builders think in straight lines: more effort equals more output. But the best builders create systems where effort compounds.</p>
      
      <h3>Compound Systems in Practice</h3>
      <p>Real examples from my work:</p>
      <ul>
        <li>Content systems that improve with every piece published</li>
        <li>Community platforms where each member increases value for all</li>
        <li>Automation frameworks that learn from usage</li>
        <li>Knowledge bases that self-organize over time</li>
      </ul>
      
      <h2>Design Principles for Compound Growth</h2>
      <ol>
        <li><strong>Network Effects First:</strong> Every addition should benefit the whole</li>
        <li><strong>Feedback Loops:</strong> Systems must learn from their outputs</li>
        <li><strong>Modular Architecture:</strong> Components that combine multiplicatively</li>
        <li><strong>Time as an Asset:</strong> Systems that improve with age, not decay</li>
      </ol>
      
      <p>The future belongs to builders who think in systems, not features.</p>
    `,
    category: 'Strategy',
    publishedAt: '2024-01-01',
    readTime: 8,
    author: 'John Connor'
  },
  {
    slug: 'founders-debate-roadmaps',
    title: 'Why Founders Should Debate Their Roadmaps',
    excerpt: 'Public roadmap debates create accountability and surface hidden assumptions.',
    content: `
      <h2>The Problem with Private Planning</h2>
      <p>Most product roadmaps are created in isolation, validated by yes-men, and executed without real scrutiny. This is why so many products fail.</p>
      
      <h3>The Power of Public Debate</h3>
      <p>When founders debate their roadmaps publicly:</p>
      <ul>
        <li>Assumptions get challenged early</li>
        <li>Community insights emerge organically</li>
        <li>Accountability becomes unavoidable</li>
        <li>Strategic pivots happen faster</li>
      </ul>
      
      <h2>Implementing Roadmap Debates</h2>
      <p>Here's how we do it at Super Debate:</p>
      <ol>
        <li>Monthly public roadmap presentations</li>
        <li>Structured debate format with time limits</li>
        <li>Community voting on priorities</li>
        <li>Published rationale for all decisions</li>
      </ol>
      
      <h3>The Results</h3>
      <p>Teams that debate their roadmaps publicly ship better products faster. They waste less time on bad ideas and double down on what works.</p>
      
      <p>Your roadmap is a hypothesis. Treat it like one.</p>
    `,
    category: 'Product',
    publishedAt: '2023-12-28',
    readTime: 6,
    author: 'John Connor'
  }
]

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts() {
  return blogPosts
}