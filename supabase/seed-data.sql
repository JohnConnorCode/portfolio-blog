-- Seed data for John Thomas Connor's portfolio site
-- This file contains initial blog posts and projects

-- Clear existing data (for fresh seed)
TRUNCATE posts, projects CASCADE;

-- Insert Blog Posts
INSERT INTO posts (title, slug, excerpt, content, category, tags, featured, published, read_time, published_at) VALUES
(
  'Why Technology Must Serve Humanity',
  'technology-serves-humanity',
  'Exploring the philosophy behind human-centered technology and why we must resist the temptation to let machines replace human judgment.',
  E'<p>For twenty years, I\'ve been thinking about the future—since I was sixteen, standing at a debate podium, arguing about worlds that didn\'t yet exist. What I\'ve learned is this: technology is a tool, not a master.</p>\n\n<h2>The Human Journey</h2>\n<p>The human journey is transformative—individually and collectively. We grow through challenge, through vulnerability, through the discomfort of being wrong in public. No algorithm can replicate this. No AI can substitute for the growth that comes from human struggle.</p>\n\n<h2>Automation\'s Proper Role</h2>\n<p>Automation should free humans for high-context, creative work. It should eliminate busywork so we can focus on what matters: building relationships, solving complex problems, creating beauty. When we let machines make our decisions, we atrophy. When we use them as tools, we evolve.</p>\n\n<h3>The Systems We Build</h3>\n<p>Every system I design follows these principles:</p>\n<ul>\n<li>Reward delivered value, not time spent</li>\n<li>Create transparency without surveillance</li>\n<li>Enable community ownership and governance</li>\n<li>Preserve human agency at every level</li>\n</ul>\n\n<h2>The Choice Before Us</h2>\n<p>We stand at a crossroads. We can build systems that replace human judgment with algorithmic efficiency, or we can build systems that amplify human wisdom. The choice we make will determine not just our prosperity, but our humanity itself.</p>\n\n<blockquote>\n<p>"We must be humans with technology, not humans against technology, and never humans replaced by technology."</p>\n</blockquote>\n\n<p>This isn\'t just philosophy—it\'s practice. Every project I take on, every system I build, is guided by this principle. From Super Debate\'s emphasis on in-person connection to tokenomics that reward real value creation, the goal is always the same: technology in service of humanity, not the other way around.</p>',
  'Philosophy',
  ARRAY['technology', 'humanity', 'philosophy', 'AI', 'automation'],
  true,
  true,
  8,
  NOW() - INTERVAL '7 days'
),
(
  'Building Communities Through Debate',
  'building-communities-debate',
  'How Super Debate creates spaces for growth through intellectual challenge and why in-person interaction matters more than ever.',
  E'<p>Super Debate started with a simple observation: we\'re more connected than ever, yet lonelier than ever. We have infinite information, yet less wisdom. We can argue with strangers online, but we\'ve forgotten how to disagree productively in person.</p>\n\n<h2>The Power of Structured Disagreement</h2>\n<p>Debate isn\'t about winning—it\'s about growth. When you stand at a podium, heart racing, mind searching for the right words, you\'re doing something fundamentally human. You\'re being vulnerable. You\'re risking embarrassment. You\'re choosing courage over comfort.</p>\n\n<h3>What We\'ve Built</h3>\n<p>Super Debate now operates in three cities, with over 20 events hosted and a growing community of people who understand that growth comes from challenge. Our format is simple:</p>\n<ul>\n<li>Topics that matter—from AI ethics to economic policy</li>\n<li>Structured formats that ensure everyone speaks</li>\n<li>In-person only—no hiding behind screens</li>\n<li>Community judging—your peers decide, not algorithms</li>\n</ul>\n\n<h2>The Transformation</h2>\n<p>I\'ve watched introverts become confident speakers. I\'ve seen political opponents become friends. I\'ve witnessed people discover they\'re capable of far more than they imagined. This is what technology should enable—not replace.</p>\n\n<h3>Scaling Human Connection</h3>\n<p>We\'re now building the infrastructure to bring Super Debate to 50 cities. Not through an app, but through local organizers. Not through automation, but through community building. Technology helps us coordinate, but the magic happens when humans meet face-to-face.</p>\n\n<p>Join us. Choose discomfort. Choose growth. Choose to be human in an increasingly digital world.</p>',
  'Community Building',
  ARRAY['community', 'debate', 'growth', 'public speaking', 'Super Debate'],
  false,
  true,
  6,
  NOW() - INTERVAL '14 days'
),
(
  'The Future of Work: AI as Assistant, Not Replacement',
  'future-work-ai-assistant',
  'Why automation should free humans for high-context creative work rather than replacing them entirely.',
  E'<p>I\'ve spent the last decade building AI systems—from grant evaluation models to community governance platforms. Here\'s what I\'ve learned: the companies that win aren\'t the ones that replace humans with AI. They\'re the ones that amplify human capabilities.</p>\n\n<h2>The Augmentation Advantage</h2>\n<p>At Thrive Protocol, we reduced grant evaluation time from 3 weeks to 2 hours. But we didn\'t eliminate the human evaluators. Instead, we freed them from reading hundreds of pages of boilerplate to focus on what matters: understanding the applicant\'s vision, assessing team dynamics, making nuanced judgments about potential.</p>\n\n<h3>Real Examples from the Field</h3>\n<p>Here are systems I\'ve built that demonstrate this principle:</p>\n\n<h4>1. Community Governance at HelpWith.co</h4>\n<p>We gave 3,000+ service providers ownership of their platform. AI handles matching and logistics. Humans make the decisions that matter: who to trust, what services to offer, how to resolve disputes.</p>\n\n<h4>2. Token Economics at Upland</h4>\n<p>The SPARK token brought in 100K users not by replacing human creativity but by rewarding it. Players create experiences, build communities, design economies. The blockchain just keeps score.</p>\n\n<h4>3. Earn-to-Own at Mode Mobile</h4>\n<p>We returned $50M+ to users by automating reward distribution. But humans decided what to build, what to value, what to reward. The system served human judgment, not the other way around.</p>\n\n<h2>The Path Forward</h2>\n<p>The future of work isn\'t human vs. machine. It\'s human with machine. It\'s using AI to eliminate the mundane so humans can focus on the meaningful. It\'s building systems that respect human agency while leveraging computational power.</p>\n\n<blockquote>\n<p>"Make complexity simple, but never make humans simple."</p>\n</blockquote>\n\n<p>This is the future we\'re building. Join us.</p>',
  'AI Ethics',
  ARRAY['AI', 'future of work', 'automation', 'human-centered design'],
  false,
  true,
  10,
  NOW() - INTERVAL '21 days'
),
(
  'Open Systems Compound Faster Than Walled Gardens',
  'open-systems-compound-faster',
  'Lessons from building community-owned platforms and why decentralization isn\'t just ideology—it\'s good business.',
  E'<p>Every successful platform I\'ve built has one thing in common: community ownership. Not in the abstract, feel-good sense, but in the literal, economic sense. When users own the platform, magic happens.</p>\n\n<h2>The Ownership Economy</h2>\n<p>Traditional platforms extract value from users. Open systems distribute it. This isn\'t charity—it\'s strategy. When users have skin in the game, they become builders, not just consumers.</p>\n\n<h3>Case Study: HelpWith.co</h3>\n<p>We built a marketplace with zero platform fees. Impossible? Not when the community owns the infrastructure. Results:</p>\n<ul>\n<li>3,000+ active providers</li>\n<li>$500K+ in transactions</li>\n<li>0% platform fees</li>\n<li>100% community governed</li>\n</ul>\n\n<p>How? By aligning incentives. Providers aren\'t just users—they\'re owners. They make the rules, set the standards, share the rewards.</p>\n\n<h2>The Network Effect Multiplier</h2>\n<p>Closed systems grow linearly. Open systems grow exponentially. When Upland opened their economy to user-generated content, they didn\'t just add features—they added builders. 100,000 of them.</p>\n\n<h3>The Technical Architecture</h3>\n<p>Building open systems requires different thinking:</p>\n<ul>\n<li><strong>Governance tokens</strong> that represent real ownership, not just voting rights</li>\n<li><strong>Smart contracts</strong> that enforce transparency without intermediaries</li>\n<li><strong>APIs</strong> that are truly open, not just "developer-friendly"</li>\n<li><strong>Data portability</strong> that gives users real ownership of their information</li>\n</ul>\n\n<h2>The Competitive Advantage</h2>\n<p>Companies ask me: "If we open everything up, what\'s our moat?" The moat IS the openness. When your users are your owners, when your developers are your partners, when your community is your product team—that\'s a moat no competitor can cross.</p>\n\n<p>The future belongs to platforms that share power, not hoard it. Build accordingly.</p>',
  'Web3',
  ARRAY['Web3', 'decentralization', 'community ownership', 'open source', 'platform economics'],
  true,
  true,
  7,
  NOW() - INTERVAL '28 days'
),
(
  'The Philosophy of Human-First Futurism',
  'philosophy-human-first-futurism',
  'Synthesizing twenty years of thinking about technology, philosophy, and what it means to be human in an accelerating world.',
  E'<p>I\'ve been reading Nietzsche since I was sixteen. I\'ve been building technology companies since I was twenty-five. These aren\'t contradictions—they\'re complementary forces that shape how I see the future.</p>\n\n<h2>Becoming Who You Are</h2>\n<p>Nietzsche wrote about the Übermensch—not a superior being, but a human who has overcome himself. In our age, this means overcoming the temptation to outsource our thinking to machines, our connections to algorithms, our decisions to data.</p>\n\n<h3>The Acceleration Trap</h3>\n<p>Ray Kurzweil predicts the Singularity—when technological change becomes so rapid that human life is irreversibly transformed. He\'s probably right about the timeline. He\'s definitely wrong about the implications.</p>\n\n<p>The question isn\'t whether technology will accelerate. It\'s whether we\'ll accelerate with it, or be left behind. Not economically—spiritually.</p>\n\n<h2>McLuhan\'s Prophecy</h2>\n<p>Marshall McLuhan understood that media are extensions of ourselves. The smartphone extends our memory. AI extends our cognition. But what happens when the extension becomes the primary?</p>\n\n<blockquote>\n<p>"We shape our tools, and thereafter they shape us."</p>\n</blockquote>\n\n<p>This is why every system I build maintains human agency at its core. Not from nostalgia, but from wisdom.</p>\n\n<h2>The Search for Meaning</h2>\n<p>Viktor Frankl survived the concentration camps by finding meaning in suffering. What meaning do we find in convenience? What growth comes from comfort? What wisdom emerges from having all answers at our fingertips?</p>\n\n<h3>The Super Debate Thesis</h3>\n<p>This is why I created Super Debate. Not to teach argumentation, but to create spaces for intellectual courage. To make people uncomfortable. To force growth through challenge.</p>\n\n<p>Every time someone stands at that podium, voice shaking, they\'re choosing to be human. They\'re choosing growth over safety, connection over isolation, wisdom over information.</p>\n\n<h2>The Path Forward</h2>\n<p>Human-first futurism isn\'t anti-technology. It\'s pro-human. It\'s building systems that:</p>\n<ul>\n<li>Amplify rather than replace human judgment</li>\n<li>Create connection rather than isolation</li>\n<li>Reward courage rather than conformity</li>\n<li>Distribute power rather than concentrate it</li>\n</ul>\n\n<p>The future needs builders who understand both code and philosophy, both systems and souls. If that\'s you, let\'s talk.</p>',
  'Philosophy',
  ARRAY['philosophy', 'futurism', 'Nietzsche', 'technology', 'humanity'],
  true,
  true,
  12,
  NOW() - INTERVAL '35 days'
);

-- Insert Projects
INSERT INTO projects (title, slug, client, description, philosophy, impact, category, featured, technologies, metrics, start_date, end_date) VALUES
(
  'Super Debate Platform',
  'super-debate',
  'Super Debate',
  'Founded and built a live, in-person debate platform that brings communities together through structured intellectual discourse.',
  'Growth comes from discomfort. Community builds through challenge. Technology should bring us together, not apart.',
  'Active in 3 cities with 20+ events hosted, creating spaces for intellectual courage and human connection.',
  'Community Building',
  true,
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Event Management'],
  '{"cities": 3, "events": "20+", "community": "Growing", "format": "In-person only"}',
  '2023-01-01',
  NULL
),
(
  'Thrive Protocol Grant System',
  'thrive-protocol-grants',
  'Thrive Protocol',
  'Designed and implemented an AI-powered grant evaluation system that reduced processing time from 3 weeks to 2 hours.',
  'AI should eliminate busywork, not human judgment. The best systems amplify human wisdom rather than replacing it.',
  'Processed hundreds of applications with 95% time savings while maintaining human oversight for final decisions.',
  'AI/Automation',
  true,
  ARRAY['Python', 'TensorFlow', 'GPT-4', 'PostgreSQL', 'React'],
  '{"time_saved": "95%", "processing": "3 weeks to 2 hours", "applications": "Hundreds"}',
  '2023-06-01',
  '2024-01-01'
),
(
  'Upland SPARK Token',
  'upland-spark-token',
  'Upland',
  'Launched SPARK token ecosystem bringing 300K+ users into Web3 gaming with true digital property ownership.',
  'Players should own their achievements. Communities should govern their worlds. Games should reward creativity, not just consumption.',
  'Successfully onboarded 300K users to Web3, creating a sustainable economy where players earn real value.',
  'Web3/Gaming',
  true,
  ARRAY['Solidity', 'Web3.js', 'React', 'Node.js', 'EOS Blockchain'],
  '{"users": "300K+", "token": "SPARK", "growth": "15x revenue", "model": "Play-to-earn"}',
  '2022-03-01',
  '2023-03-01'
),
(
  'Mode Mobile Earn-to-Own',
  'mode-mobile-earn',
  'Mode Mobile',
  'Built earn-to-own model that returned $50M+ value to users while growing the business.',
  'Users create value; they should capture it. The best business models align user success with platform success.',
  'Distributed $50M+ to users through innovative earn-to-own mechanics, proving sustainable alternative to ad-based models.',
  'FinTech',
  false,
  ARRAY['React Native', 'Python', 'PostgreSQL', 'Analytics', 'Blockchain'],
  '{"value_returned": "$50M+", "model": "Earn-to-own", "users": "Hundreds of thousands"}',
  '2021-01-01',
  '2022-06-01'
),
(
  'HelpWith.co Marketplace',
  'helpwith-marketplace',
  'HelpWith.co',
  'Created community-owned marketplace with zero platform fees, governed entirely by 3,000+ service providers.',
  'True decentralization means economic ownership, not just voting rights. Communities thrive when they own their infrastructure.',
  'Facilitated $500K+ in transactions with 0% platform fees, proving community ownership model.',
  'Web3/Marketplace',
  false,
  ARRAY['React', 'Ethereum', 'IPFS', 'Node.js', 'Smart Contracts'],
  '{"providers": "3000+", "transactions": "$500K+", "fees": "0%", "governance": "Full DAO"}',
  '2022-08-01',
  '2023-08-01'
),
(
  'Chainlink Integration Suite',
  'chainlink-integration',
  'Chainlink',
  'Developed oracle integration patterns for bringing real-world data into smart contracts reliably.',
  'Blockchain needs real-world data. But truth isn\'t just technical—it\'s social. Systems must account for both.',
  'Created integration patterns now used across multiple DeFi protocols, enabling billions in transaction volume.',
  'Web3/Infrastructure',
  false,
  ARRAY['Solidity', 'Chainlink', 'Node.js', 'TypeScript', 'Oracle Networks'],
  '{"protocols": "Multiple", "volume_enabled": "Billions", "reliability": "99.9%"}',
  '2021-06-01',
  '2022-01-01'
);

-- Note: In production, you would run this with proper error handling
-- This seed data provides real, authentic content for the portfolio site