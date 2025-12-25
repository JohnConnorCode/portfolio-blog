export const blogPosts = [
  {
    slug: 'infinita-championship-announcement',
    title: 'Infinita: Building the World Championship of Adult Debate',
    excerpt: 'We\'re launching the first global championship for adult debate. 32 teams, 6 preliminary rounds, single elimination finals. Here\'s the complete format, judging criteria, and how to compete.',
    content: `
      <h2>The Gap Nobody Talks About</h2>
      <p>High school has nationals. College has worlds. Parliament has its circuits. But after graduation? Nothing. The infrastructure for competitive adult debate simply doesn't exist.</p>

      <p>This matters because the skills debate develops—rigorous argumentation, perspective-taking, grace under pressure—become <em>more</em> important as you advance in your career, not less. CEOs, lawyers, scientists, policymakers: the people making consequential decisions are the ones who most need these skills sharp.</p>

      <p>Infinita fills this gap. Here's exactly how it works.</p>

      <h2>The Format: Designed from First Principles</h2>
      <p>We spent four months testing formats before landing on this structure. The constraints we optimized for:</p>

      <table>
        <tr><th>Constraint</th><th>Solution</th></tr>
        <tr><td>Accessible to newcomers</td><td>No specialized jargon required; prep time included</td></tr>
        <tr><td>Challenging for veterans</td><td>Swiss pairing ensures competitive matches throughout</td></tr>
        <tr><td>Engaging to watch</td><td>Strict time limits; cross-examination for drama</td></tr>
        <tr><td>Objectively judged</td><td>4-criteria rubric with peer accountability</td></tr>
      </table>

      <h3>Tournament Structure</h3>
      <ul>
        <li><strong>Teams:</strong> 32 teams of 2 people each (64 total competitors)</li>
        <li><strong>Preliminary Rounds:</strong> 6 rounds, Swiss-system pairing</li>
        <li><strong>Elimination:</strong> Top 8 teams advance to single-elimination bracket</li>
        <li><strong>Finals:</strong> Best-of-3 championship round</li>
      </ul>

      <h3>Individual Round Format</h3>
      <p>Each debate follows this exact structure:</p>

      <ol>
        <li><strong>Topic Reveal</strong> (0:00) — Both teams learn the resolution</li>
        <li><strong>Prep Time</strong> (15 min) — Research and strategize with your partner</li>
        <li><strong>First Affirmative</strong> (6 min) — Build the case for the resolution</li>
        <li><strong>Cross-Ex by Negative</strong> (3 min) — Direct questioning</li>
        <li><strong>First Negative</strong> (6 min) — Refute and build counter-case</li>
        <li><strong>Cross-Ex by Affirmative</strong> (3 min) — Direct questioning</li>
        <li><strong>Second Affirmative</strong> (4 min) — Extend arguments, address attacks</li>
        <li><strong>Second Negative</strong> (4 min) — Final rebuttal</li>
        <li><strong>Affirmative Closing</strong> (2 min) — Summary and voting issues</li>
        <li><strong>Negative Closing</strong> (2 min) — Summary and voting issues</li>
      </ol>

      <p>Total round time: 45 minutes including prep. Short enough to stay sharp, long enough for substantive clash.</p>

      <h2>The Judging System: Transparent and Accountable</h2>
      <p>Traditional debate judging is a black box. One judge, subjective criteria, no accountability. We've rebuilt it from scratch.</p>

      <h3>Four Criteria, Independently Scored (1-10 each)</h3>

      <p><strong>1. Argumentation (40% weight)</strong></p>
      <ul>
        <li>Quality of evidence and reasoning</li>
        <li>Logical structure of the case</li>
        <li>Depth of analysis</li>
        <li>10 = Airtight logic with compelling evidence</li>
        <li>5 = Competent arguments with some gaps</li>
        <li>1 = Assertions without support</li>
      </ul>

      <p><strong>2. Clash (30% weight)</strong></p>
      <ul>
        <li>Direct engagement with opponent's arguments</li>
        <li>Quality of refutation</li>
        <li>Identification of key disagreements</li>
        <li>10 = Every major argument addressed and dismantled</li>
        <li>5 = Most arguments addressed adequately</li>
        <li>1 = Ships passing in the night</li>
      </ul>

      <p><strong>3. Delivery (15% weight)</strong></p>
      <ul>
        <li>Clarity of communication</li>
        <li>Persuasive presence</li>
        <li>Effective use of time</li>
        <li>10 = Compelling, clear, professional</li>
        <li>5 = Understandable but unremarkable</li>
        <li>1 = Difficult to follow</li>
      </ul>

      <p><strong>4. Strategy (15% weight)</strong></p>
      <ul>
        <li>Round management and adaptation</li>
        <li>Partner coordination</li>
        <li>Prioritization of arguments</li>
        <li>10 = Masterful strategic choices throughout</li>
        <li>5 = Sound decisions, no major errors</li>
        <li>1 = Self-defeating choices</li>
      </ul>

      <h3>Peer Judging with Accountability</h3>
      <p>Judges are drawn from competing teams not in the current round. Three judges per debate. Here's the accountability mechanism:</p>

      <ol>
        <li>Every judge's scores are recorded permanently</li>
        <li>Outlier detection flags scores that deviate significantly from co-judges</li>
        <li>Post-tournament analysis identifies consistently biased judges</li>
        <li>Judge reputation scores affect future tournament eligibility</li>
      </ol>

      <p>This creates skin in the game. Judge unfairly, and it follows you.</p>

      <h2>Topic Selection: The Issues That Matter</h2>
      <p>Topics are drawn from five categories, announced 48 hours before each round:</p>

      <ul>
        <li><strong>Policy:</strong> "The US should implement universal basic income"</li>
        <li><strong>Values:</strong> "Privacy is more important than security"</li>
        <li><strong>Factual:</strong> "AI will create more jobs than it destroys by 2035"</li>
        <li><strong>Strategy:</strong> "Startups should prioritize growth over profitability"</li>
        <li><strong>Counterfactual:</strong> "The internet has been net negative for democracy"</li>
      </ul>

      <p>Topics are selected to be:</p>
      <ul>
        <li>Genuinely debatable (reasonable people disagree)</li>
        <li>Accessible (no specialized expertise required)</li>
        <li>Consequential (the answer matters)</li>
        <li>Balanced (neither side is obviously correct)</li>
      </ul>

      <h2>NFT Trophies: Why Blockchain</h2>
      <p>Winners receive NFT trophies minted on Solana. This isn't crypto for crypto's sake—it solves real problems:</p>

      <p><strong>Problem 1: Verification</strong><br/>
      Traditional credentials are easy to fake. "I won a debate tournament" is unverifiable. An on-chain trophy is cryptographically proven.</p>

      <p><strong>Problem 2: Permanence</strong><br/>
      Platforms shut down. Companies pivot. Physical trophies get lost. On-chain records persist indefinitely.</p>

      <p><strong>Problem 3: Portability</strong><br/>
      Your competitive history should travel with you. When you join a new club or enter a new tournament, your track record is instantly verifiable.</p>

      <h2>How to Compete</h2>

      <h3>Step 1: Find a Partner</h3>
      <p>You need a teammate. Ideally someone who complements your style:</p>
      <ul>
        <li>If you're analytical, find someone with presence</li>
        <li>If you're aggressive, find someone measured</li>
        <li>If you're new, find someone experienced (or another newcomer willing to learn together)</li>
      </ul>

      <p>Post in our Discord (#partner-search) or attend a local club night to meet potential partners.</p>

      <h3>Step 2: Practice</h3>
      <p>We're running training sessions January-February 2026:</p>
      <ul>
        <li>Format workshops (learn the structure)</li>
        <li>Practice rounds (judge and be judged)</li>
        <li>Strategy sessions (advanced techniques)</li>
      </ul>

      <h3>Step 3: Register</h3>
      <p>Registration opens March 1, 2026. Limited to 32 teams. Entry fee: $50/team (covers platform costs and prize pool contribution).</p>

      <h3>Step 4: Compete</h3>
      <p>Preliminary rounds: April 2026 (online, scheduled flexibly)<br/>
      Elimination rounds: May 2026 (live event, location TBA)</p>

      <h2>Why "Infinita"?</h2>
      <p>From game theory: finite games are played to win and end. Infinite games are played to keep playing.</p>

      <p>Politics has become a finite game—destroy the opponent, win at all costs. Debate should be infinite—you compete to improve, you win to keep playing, you lose and come back better.</p>

      <p>Infinita 2026 is year one. Someone wins. Then 2027 starts, and they're back to zero. The game continues. That's the point.</p>

      <h2>The Bigger Picture</h2>
      <p>This isn't just a tournament. It's infrastructure.</p>

      <p>If Infinita works, we scale it: regional championships, age divisions, topic specializations, corporate leagues. A complete competitive ecosystem for adult intellectual development.</p>

      <p>The Greeks had the agora. We're building the modern equivalent: a place where adults sharpen their minds against each other and leave as better thinkers.</p>

      <p>Registration opens March 1, 2026 at superdebate.org. Find a partner. Start practicing.</p>
    `,
    category: 'SuperDebate',
    publishedAt: '2025-12-20',
    readTime: 12,
    author: 'John Connor'
  },
  {
    slug: 'why-superdebate-exists',
    title: 'The Case for SuperDebate: Why I\'m Building Infrastructure for Disagreement',
    excerpt: 'We\'ve lost the ability to disagree productively. Social media rewards outrage, news rewards certainty. Here\'s why I left tech to build debate clubs, and exactly how the model works.',
    content: `
      <h2>The Skill That Matters Most</h2>
      <p>I've hired hundreds of people. The single best predictor of long-term success wasn't technical skill, pedigree, or even raw intelligence. It was the ability to disagree productively—to argue without alienating, to update beliefs based on evidence, to hold positions loosely while defending them vigorously.</p>

      <p>This skill has a name: productive disagreement. And we're losing it.</p>

      <h2>The Evidence of Decline</h2>
      <p>This isn't nostalgia. The data is clear:</p>

      <ul>
        <li><strong>Political polarization</strong> has doubled since 1994 (Pew Research)</li>
        <li><strong>Cross-party friendships</strong> have declined 30% in 20 years</li>
        <li><strong>Willingness to hear opposing views</strong> is at historic lows across all demographics</li>
        <li><strong>"Cancel culture" incidents</strong> in workplaces up 400% since 2015</li>
      </ul>

      <p>The causes are structural. Social media algorithms optimize for engagement, and outrage engages. News competes for attention, and certainty captures it. Universities, afraid of controversy, stopped teaching students to engage with dangerous ideas.</p>

      <p>The result: a population that can't disagree without demonizing. Conversations end with blocked accounts, not changed minds.</p>

      <h2>What Debate Taught Me</h2>
      <p>I discovered competitive debate at Northwestern. It changed how I think—not because I learned to win arguments, but because I learned to lose them.</p>

      <p>In debate, you're assigned positions randomly. One round you argue for universal healthcare; the next, against it. This destroys the illusion that your positions are obviously correct. You learn that smart people can reach opposite conclusions from the same evidence.</p>

      <p>After college, I coached at Chicago Debates on the South Side. I watched kids who'd never been told their voice mattered stand up and argue. I watched them discover they could change minds—including their own.</p>

      <p>But here's the problem: after high school or college, debate infrastructure disappears. Adults have nowhere to practice this skill. They're on their own, in a world that punishes nuance.</p>

      <h2>The Infrastructure Gap</h2>
      <p>Think about other skills society values:</p>

      <table>
        <tr><th>Skill</th><th>Infrastructure</th></tr>
        <tr><td>Fitness</td><td>Gyms, trainers, classes, apps</td></tr>
        <tr><td>Basketball</td><td>Courts, leagues, pickup games</td></tr>
        <tr><td>Music</td><td>Studios, jam sessions, open mics</td></tr>
        <tr><td>Critical thinking</td><td>???</td></tr>
      </table>

      <p>Nothing. If you want to get better at thinking—at arguing, at changing minds, at being changed—there's no place to go.</p>

      <p>You could join a political organization, but those reinforce beliefs rather than challenge them. You could argue online, but that's designed for heat, not light. You could take a course, but courses are passive.</p>

      <p>SuperDebate is the infrastructure that's missing. A gym for your mind.</p>

      <h2>How It Actually Works</h2>

      <h3>Local Clubs</h3>
      <p>We're building debate clubs in cities worldwide. Current chapters:</p>
      <ul>
        <li>New York City (weekly, Thursdays)</li>
        <li>San Francisco (biweekly, Tuesdays)</li>
        <li>Chicago (weekly, Wednesdays)</li>
        <li>Austin (monthly, first Saturdays)</li>
        <li>London (launching Q1 2026)</li>
        <li>Berlin (launching Q1 2026)</li>
      </ul>

      <p>Each club runs 2-4 debates per session. Format varies by experience level.</p>

      <h3>The Debate Format</h3>
      <p>Our standard format for club nights:</p>

      <ol>
        <li><strong>Topic announcement</strong> — Both debaters learn the resolution and their side</li>
        <li><strong>Prep time</strong> (10 min) — Research, outline, strategize</li>
        <li><strong>Steel-man requirement</strong> (2 min each) — Each debater presents the strongest version of their opponent's case. If you can't pass this test, you don't understand the issue well enough to debate it.</li>
        <li><strong>Opening arguments</strong> (5 min each) — Build your case</li>
        <li><strong>Cross-examination</strong> (4 min) — Direct questioning</li>
        <li><strong>Closing statements</strong> (2 min each) — Summary and final appeal</li>
        <li><strong>Peer feedback</strong> (5 min) — Structured feedback from observers</li>
      </ol>

      <p>Total time: ~35 minutes per debate. Three debates per 2-hour session.</p>

      <h3>The Steel-Man Requirement</h3>
      <p>This is our secret weapon. Before you can argue your position, you must articulate your opponent's position well enough that they'd say, "Yes, that's exactly what I believe."</p>

      <p>This forces genuine understanding. You can't straw-man. You can't caricature. You have to actually engage with the strongest version of the opposing view.</p>

      <p>When judges score debates, the steel-man presentation counts. Win your main argument but fail the steel-man, and you can lose the round.</p>

      <h2>Why This Model Works</h2>

      <h3>Assigned Positions Destroy Tribalism</h3>
      <p>When you might argue either side, you can't demonize either side. Regular debaters develop the ability to see merit in positions they personally reject. This is rare and valuable.</p>

      <h3>Competition Accelerates Learning</h3>
      <p>You get better faster when stakes exist. Casual discussion doesn't create the pressure that reveals your weaknesses. Competition does.</p>

      <h3>Community Creates Accountability</h3>
      <p>You can't be anonymous. Your arguments are attached to your face. You'll see these people next week. This creates incentives for good faith that online discourse lacks.</p>

      <h3>Structure Enables Depth</h3>
      <p>Time limits force concision. Turn-taking ensures both sides are heard. Rules prevent interruption and bad faith. Without structure, debates devolve into power contests. With it, ideas can actually be evaluated.</p>

      <h2>Who This Is For</h2>
      <p>SuperDebate attracts three types:</p>

      <p><strong>Competitive refugees</strong> — Former high school or college debaters who miss it. They have skills but nowhere to use them.</p>

      <p><strong>Professional upgraders</strong> — Lawyers, consultants, executives who need persuasion skills and want structured practice. Often sent by employers.</p>

      <p><strong>Curious generalists</strong> — People who enjoy arguing and want to get better at it. Often podcast listeners, readers, intellectually curious types.</p>

      <p>Common thread: they all want to sharpen their thinking against others, not just consume content alone.</p>

      <h2>Getting Started</h2>

      <h3>Join an Existing Club</h3>
      <p>Find your city at superdebate.org/clubs. First session is free. No experience required—we pair newcomers with experienced members.</p>

      <h3>Start a New Club</h3>
      <p>If your city isn't listed, you can launch one. We provide:</p>
      <ul>
        <li>Format documentation and training</li>
        <li>Topic library (200+ vetted resolutions)</li>
        <li>Platform access for scheduling and matching</li>
        <li>Community of other chapter leaders</li>
        <li>Marketing templates and guidance</li>
      </ul>

      <p>Minimum viable club: 8 committed members, a recurring venue, a chapter leader.</p>

      <h3>Compete</h3>
      <p>For those who want more: local tournaments quarterly, regional championships annually, Infinita World Championship for the serious.</p>

      <h2>The Vision</h2>
      <p>In ten years, I want SuperDebate clubs in every major city. I want "going to debate" to be as normal as "going to the gym."</p>

      <p>The Greeks had the agora. The Romans had the forum. These weren't just places—they were practices. Citizens gathered not to agree, but to disagree well.</p>

      <p>We lost that. SuperDebate is my attempt to build it back.</p>

      <p>The world doesn't need more people who are good at winning arguments. It needs more people who are good at having them.</p>

      <p>Find your city. Join a club. Let's argue.</p>
    `,
    category: 'SuperDebate',
    publishedAt: '2025-11-05',
    readTime: 11,
    author: 'John Connor'
  },
  {
    slug: 'death-of-growth-theater',
    title: 'The Death of Growth Theater: A Metrics Framework for Honest Startups',
    excerpt: 'Vanity metrics kill companies. Here\'s a framework for identifying the metrics that actually matter, with formulas and benchmarks you can apply today.',
    content: `
      <h2>The Pattern I Keep Seeing</h2>
      <p>At Upland, we celebrated 100,000 registered users while 30-day retention sat at 4%. At Sparkblox, we trumpeted mint counts while utility metrics stagnated. The pattern repeats across every company I've worked with or advised.</p>

      <p>Growth theater: the performance of traction without the substance of value creation. It's the startup equivalent of teaching to the test—you hit the metrics but miss the point entirely.</p>

      <p>This post is my attempt to provide a concrete framework for cutting through the theater and measuring what actually matters.</p>

      <h2>The Vanity Metrics Diagnostic</h2>
      <p>Not sure if you're measuring vanity metrics? Run this diagnostic:</p>

      <h3>Question 1: Does this metric distinguish good users from bad?</h3>
      <p>"Registered users" doesn't distinguish someone who signed up and never returned from someone who uses the product daily. It's therefore meaningless as a health indicator.</p>

      <p><strong>Better alternative:</strong> Weekly Active Users with a defined activation threshold (e.g., "completed at least 3 actions")</p>

      <h3>Question 2: Can this metric go up while the business gets worse?</h3>
      <p>"Gross Merchandise Value" can increase while you lose money on every transaction. Revenue can grow while margins collapse. Time-on-site can improve because your UX is confusing.</p>

      <p><strong>Test:</strong> Imagine scenarios where this metric improves but you'd be worse off. If you can easily imagine such scenarios, the metric is incomplete.</p>

      <h3>Question 3: Does improving this metric require creating real value?</h3>
      <p>You can increase "email signups" by making the dismiss button harder to find. You can boost "page views" by splitting articles into slideshows. These are metric games, not value creation.</p>

      <p><strong>Test:</strong> If you can improve the metric through dark patterns, it's measuring engagement, not value.</p>

      <h2>The Five Metrics Framework</h2>
      <p>After 15 years of building products, these are the five metrics I've found actually predict company health:</p>

      <h3>1. Net Revenue Retention (NRR)</h3>
      <p><strong>What it measures:</strong> Are existing customers spending more over time?</p>

      <p><strong>Formula:</strong><br/>
      NRR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR × 100</p>

      <p><strong>Example:</strong><br/>
      Starting MRR: $100K<br/>
      Expansion (upsells): +$15K<br/>
      Contraction (downgrades): -$5K<br/>
      Churn (cancellations): -$8K<br/>
      NRR = ($100K + $15K - $5K - $8K) / $100K = 102%</p>

      <p><strong>Benchmarks:</strong></p>
      <ul>
        <li>&lt;90%: Leaky bucket. Fundamentally broken.</li>
        <li>90-100%: Treading water. Acquisition cost matters a lot.</li>
        <li>100-110%: Healthy. Can grow without aggressive acquisition.</li>
        <li>110-130%: Strong. Product-market fit likely.</li>
        <li>&gt;130%: Exceptional. Best-in-class companies.</li>
      </ul>

      <p><strong>Why it matters:</strong> NRR is the only growth that compounds. If NRR &gt;100%, every dollar of acquisition becomes worth more over time. If NRR &lt;100%, you're constantly refilling a leaking bucket.</p>

      <h3>2. Time to Value (TTV)</h3>
      <p><strong>What it measures:</strong> How fast do new users reach the "aha moment"?</p>

      <p><strong>Formula:</strong><br/>
      TTV = Median time from signup to [defined activation event]</p>

      <p><strong>The hard part:</strong> Defining your activation event. It should be the moment users first experience core value. Examples:</p>
      <ul>
        <li>Slack: Sent 2,000 team messages</li>
        <li>Dropbox: Uploaded first file to shared folder</li>
        <li>Superhuman: Reached inbox zero</li>
      </ul>

      <p><strong>Benchmarks:</strong></p>
      <ul>
        <li>Self-serve products: &lt;5 minutes is excellent, &lt;1 hour is acceptable</li>
        <li>Enterprise products: &lt;1 day is excellent, &lt;1 week is acceptable</li>
      </ul>

      <p><strong>Why it matters:</strong> Users who don't reach value quickly usually churn. Every day added to TTV decreases retention. At HelpWith, reducing TTV from 3 days to 1 day improved 30-day retention by 23%.</p>

      <h3>3. Organic Referral Rate</h3>
      <p><strong>What it measures:</strong> What percentage of new users come from existing users without incentives?</p>

      <p><strong>Formula:</strong><br/>
      Organic Referral Rate = (Users from organic referral) / (Total new users) × 100</p>

      <p><strong>How to measure:</strong> "How did you hear about us?" survey at signup with specific options. Track "friend/colleague" responses. Exclude paid referral programs.</p>

      <p><strong>Benchmarks:</strong></p>
      <ul>
        <li>&lt;10%: Weak word of mouth. Product probably isn't remarkable.</li>
        <li>10-25%: Moderate. Some organic growth.</li>
        <li>25-40%: Strong. Product-market fit signal.</li>
        <li>&gt;40%: Exceptional. Product sells itself.</li>
      </ul>

      <p><strong>Why it matters:</strong> If people aren't telling friends without being bribed, you haven't built something worth talking about. This is the purest signal of genuine value.</p>

      <h3>4. Payback Period</h3>
      <p><strong>What it measures:</strong> How long until a customer becomes profitable?</p>

      <p><strong>Formula:</strong><br/>
      Payback Period = Customer Acquisition Cost (CAC) / (Monthly Recurring Revenue × Gross Margin)</p>

      <p><strong>Example:</strong><br/>
      CAC: $600<br/>
      MRR: $100<br/>
      Gross Margin: 75%<br/>
      Payback = $600 / ($100 × 0.75) = 8 months</p>

      <p><strong>Benchmarks:</strong></p>
      <ul>
        <li>&lt;6 months: Excellent. High capital efficiency.</li>
        <li>6-12 months: Good. Standard for healthy SaaS.</li>
        <li>12-18 months: Concerning. Watch carefully.</li>
        <li>&gt;18 months: Problematic. Business model questions.</li>
        <li>&gt;24 months: Broken. You're running a charity.</li>
      </ul>

      <p><strong>Why it matters:</strong> Long payback periods mean you need lots of capital to grow and are vulnerable to churn. Short payback means you can grow efficiently and are resilient to turbulence.</p>

      <h3>5. Support Ratio</h3>
      <p><strong>What it measures:</strong> Does your product get easier to support as it scales?</p>

      <p><strong>Formula:</strong><br/>
      Support Ratio = (Support tickets per month) / (Monthly Active Users)</p>

      <p><strong>What to track:</strong> Not just the ratio, but the trend. Plot it monthly. Is it going up, down, or flat as you grow?</p>

      <p><strong>Benchmarks:</strong></p>
      <ul>
        <li>Declining ratio as you scale: Product improving, users understanding it better</li>
        <li>Flat ratio: Neutral. Support scales linearly with users.</li>
        <li>Rising ratio: Red flag. Product getting harder to use or quality declining.</li>
      </ul>

      <p><strong>Why it matters:</strong> Products people understand don't generate tickets. A declining support ratio is a sign of product-market fit that most teams don't track.</p>

      <h2>Implementation: Building Your Dashboard</h2>
      <p>Here's how to actually implement this framework:</p>

      <h3>Step 1: Define Your Activation Event</h3>
      <p>This is the hardest part. What's the moment users first get value? Test hypotheses:</p>
      <ul>
        <li>Analyze users who retained vs. churned. What actions did retainers take early?</li>
        <li>Interview your best users. What was their "aha moment"?</li>
        <li>Track correlation between early actions and long-term retention.</li>
      </ul>

      <h3>Step 2: Instrument Your Product</h3>
      <p>You need to track:</p>
      <ul>
        <li>Signup timestamps</li>
        <li>Activation event timestamps</li>
        <li>All revenue events (new, expansion, contraction, churn)</li>
        <li>Acquisition channel for each user</li>
        <li>Referral source for each user</li>
        <li>Support ticket volume by user and time</li>
      </ul>

      <h3>Step 3: Calculate Baselines</h3>
      <p>Before you can improve, you need to know where you are. Calculate each metric for the past 6 months. Plot the trends.</p>

      <h3>Step 4: Set Targets</h3>
      <p>Based on benchmarks and your current position, set 90-day targets for each metric. Be realistic but ambitious.</p>

      <h3>Step 5: Review Weekly</h3>
      <p>Metrics change slowly. Review weekly to spot trends. Don't panic about week-to-week variance; focus on the direction.</p>

      <h2>Common Objections</h2>

      <p><strong>"Our investors want to see user growth."</strong><br/>
      Show them NRR and payback period too. Good investors understand that raw user counts without retention are meaningless. Bad investors don't—and you probably don't want their money.</p>

      <p><strong>"We're pre-revenue, so NRR doesn't apply."</strong><br/>
      Use engagement retention instead. Are users who signed up 30 days ago still active? 60 days? 90 days? Same principle, non-revenue metric.</p>

      <p><strong>"Our product is different."</strong><br/>
      Maybe. But the underlying questions are universal: Are users getting value? Are they sticking around? Are they telling others? Are the economics sustainable? Every product can answer these.</p>

      <h2>The Choice</h2>
      <p>Growth theater ends when the money runs out. But it doesn't have to end that way.</p>

      <p>You can choose to measure what matters. You can choose to be honest with yourself and your stakeholders. You can choose to build something real.</p>

      <p>The framework is here. The formulas are here. The benchmarks are here.</p>

      <p>What you do with them is up to you.</p>
    `,
    category: 'Product',
    publishedAt: '2025-10-15',
    readTime: 14,
    author: 'John Connor'
  },
  {
    slug: 'why-ecosystem-funding-is-broken',
    title: 'The Grant Game: A Scorecard for Evaluating Ecosystem Funding',
    excerpt: 'Most grant programs reward grant writers, not builders. Here\'s a framework for evaluating funding programs before you waste months applying.',
    content: `
      <h2>The Three Months I'll Never Get Back</h2>
      <p>When we raised for Sparkblox, I spent three months on one grant application. Three months of crafting narratives, designing pitch decks, scheduling calls with committee members. Three months not building product.</p>

      <p>We got the grant. And the metrics we promised had almost nothing to do with what made our product successful. We hit every milestone. We missed what mattered.</p>

      <p>This post is the framework I wish I'd had before I started. Use it to evaluate grant programs before you invest time, and to avoid programs that will waste it.</p>

      <h2>The Grant Program Scorecard</h2>
      <p>Score any grant program on these dimensions. 1 = worst, 5 = best. Avoid programs scoring below 20 total.</p>

      <h3>1. Timing of Funding (1-5)</h3>
      <table>
        <tr><th>Score</th><th>Model</th><th>What It Means</th></tr>
        <tr><td>1</td><td>100% upfront on approval</td><td>Rewards proposals, not results</td></tr>
        <tr><td>2</td><td>50/50 upfront/milestone</td><td>Some accountability</td></tr>
        <tr><td>3</td><td>Staged disbursement</td><td>Multiple checkpoints</td></tr>
        <tr><td>4</td><td>Majority after delivery</td><td>Rewards completion</td></tr>
        <tr><td>5</td><td>Retroactive only</td><td>Only rewards proven value (e.g., Optimism RPGF)</td></tr>
      </table>

      <p><strong>Why it matters:</strong> Upfront funding rewards grant writers. Retroactive funding rewards builders. The difference is profound.</p>

      <h3>2. Milestone Definition (1-5)</h3>
      <table>
        <tr><th>Score</th><th>Type</th><th>Example</th></tr>
        <tr><td>1</td><td>Vague deliverables</td><td>"Launch beta version"</td></tr>
        <tr><td>2</td><td>Specific deliverables</td><td>"Deploy contracts to mainnet"</td></tr>
        <tr><td>3</td><td>Output metrics</td><td>"1,000 users registered"</td></tr>
        <tr><td>4</td><td>Outcome metrics</td><td>"1,000 users retained at 30 days"</td></tr>
        <tr><td>5</td><td>Value metrics</td><td>"$100K in user-generated value"</td></tr>
      </table>

      <p><strong>Why it matters:</strong> "Launch beta" can mean anything from a landing page to a functioning product. Value metrics are hard to game.</p>

      <h3>3. Review Transparency (1-5)</h3>
      <table>
        <tr><th>Score</th><th>Process</th><th>Reality</th></tr>
        <tr><td>1</td><td>Anonymous committee, no feedback</td><td>Total black box</td></tr>
        <tr><td>2</td><td>Named committee, no feedback</td><td>Accountability without learning</td></tr>
        <tr><td>3</td><td>Named committee with rubric</td><td>Criteria visible</td></tr>
        <tr><td>4</td><td>Public scoring and feedback</td><td>Full transparency</td></tr>
        <tr><td>5</td><td>Community vote with rationale</td><td>Distributed judgment</td></tr>
      </table>

      <p><strong>Why it matters:</strong> Opaque processes get captured by networks and bias. Transparent processes are accountable.</p>

      <h3>4. Time Horizon (1-5)</h3>
      <table>
        <tr><th>Score</th><th>Duration</th><th>Implication</th></tr>
        <tr><td>1</td><td>&lt;3 months</td><td>Only incentivizes quick wins</td></tr>
        <tr><td>2</td><td>3-6 months</td><td>Short-term focus</td></tr>
        <tr><td>3</td><td>6-12 months</td><td>Medium-term building</td></tr>
        <tr><td>4</td><td>12-18 months</td><td>Enables infrastructure</td></tr>
        <tr><td>5</td><td>18+ months or rolling</td><td>Long-term commitment</td></tr>
      </table>

      <p><strong>Why it matters:</strong> Real infrastructure takes years. 90-day grants incentivize flashy demos over durable building.</p>

      <h3>5. Network Dependency (1-5)</h3>
      <table>
        <tr><th>Score</th><th>Access</th><th>Result</th></tr>
        <tr><td>1</td><td>Requires existing relationships</td><td>Closed loop favoring insiders</td></tr>
        <tr><td>2</td><td>Helps to know people</td><td>Moderate bias</td></tr>
        <tr><td>3</td><td>Structured intro process</td><td>Reduces but doesn't eliminate bias</td></tr>
        <tr><td>4</td><td>Blind initial review</td><td>Merit-based first pass</td></tr>
        <tr><td>5</td><td>Fully merit-based, code-speaks</td><td>Pure signal</td></tr>
      </table>

      <p><strong>Why it matters:</strong> If the same teams win repeatedly, it's not because they're the best builders—it's because they know the right people.</p>

      <h3>6. Application Cost (1-5)</h3>
      <table>
        <tr><th>Score</th><th>Time Required</th><th>Reality</th></tr>
        <tr><td>1</td><td>40+ hours</td><td>Full-time job, massive opportunity cost</td></tr>
        <tr><td>2</td><td>20-40 hours</td><td>Significant investment</td></tr>
        <tr><td>3</td><td>10-20 hours</td><td>Moderate investment</td></tr>
        <tr><td>4</td><td>5-10 hours</td><td>Reasonable for the funding</td></tr>
        <tr><td>5</td><td>&lt;5 hours or none (retroactive)</td><td>Minimal friction</td></tr>
      </table>

      <p><strong>Why it matters:</strong> Time spent on applications is time not spent building. Programs with 40+ hour applications are selecting for grant writers, not developers.</p>

      <h2>Example Evaluations</h2>

      <h3>Program A: Traditional Foundation Grant</h3>
      <ul>
        <li>Timing: 2 (50/50 split)</li>
        <li>Milestones: 2 (vague deliverables)</li>
        <li>Transparency: 2 (named committee, no feedback)</li>
        <li>Horizon: 2 (6-month cycle)</li>
        <li>Network: 2 (helps to know people)</li>
        <li>Application: 1 (60+ hours)</li>
        <li><strong>Total: 11/30 — Avoid</strong></li>
      </ul>

      <h3>Program B: Optimism RPGF</h3>
      <ul>
        <li>Timing: 5 (fully retroactive)</li>
        <li>Milestones: 5 (rewards demonstrated impact)</li>
        <li>Transparency: 4 (public voting with rationale)</li>
        <li>Horizon: 5 (rewards past work, any duration)</li>
        <li>Network: 4 (impact-based, though visibility helps)</li>
        <li>Application: 4 (relatively light)</li>
        <li><strong>Total: 27/30 — Excellent</strong></li>
      </ul>

      <h2>Red Flags That Disqualify Programs</h2>
      <p>Beyond the scorecard, watch for these instant disqualifiers:</p>

      <ul>
        <li><strong>No public record of past grants:</strong> If they won't show you who they've funded, they're hiding something.</li>
        <li><strong>Requires NDA on funding amount:</strong> Transparency is the check on bad behavior.</li>
        <li><strong>Same teams winning repeatedly:</strong> Check past recipients. If it's the same 10 teams, the game is rigged.</li>
        <li><strong>Reviewer conflicts of interest:</strong> Do reviewers invest in companies they evaluate? Do they work for competitors?</li>
        <li><strong>No post-funding accountability:</strong> What happens if you miss milestones? If nothing, milestones are theater.</li>
      </ul>

      <h2>If You Must Apply</h2>
      <p>Sometimes you need the money and imperfect programs are your only option. Tactics for navigating them:</p>

      <h3>Minimize Application Time</h3>
      <p>Set a time budget (e.g., 20 hours). When you hit it, submit what you have. Perfect applications often lose to mediocre ones anyway.</p>

      <h3>Define Measurable Milestones</h3>
      <p>Even if the program accepts vague milestones, propose specific ones. "1,000 users with 30-day retention above 20%" is better than "launch and grow user base." This protects you from scope creep.</p>

      <h3>Build Relationships Outside the Process</h3>
      <p>If network matters (it usually does), build relationships year-round, not just during application season. Show up at events. Contribute to community discussions. Be visible for the right reasons.</p>

      <h3>Track Actual Outcomes</h3>
      <p>Keep records of what you actually built vs. what you proposed. Win or lose, you'll learn whether the process selected for the right things.</p>

      <h2>What Good Looks Like</h2>
      <p>The best funding programs share these traits:</p>

      <ul>
        <li><strong>Retroactive or outcome-based:</strong> Rewards results, not promises</li>
        <li><strong>Transparent and accountable:</strong> Public record of decisions and rationale</li>
        <li><strong>Long time horizons:</strong> 12+ months to enable real building</li>
        <li><strong>Low application friction:</strong> Focus on work, not paperwork</li>
        <li><strong>Builder-led evaluation:</strong> People who ship judging others who ship</li>
      </ul>

      <p>If you're running a grants program, this is your checklist. If you're applying to one, this is your filter.</p>

      <p>Time is your scarcest resource. Don't waste it on programs that reward the wrong things.</p>
    `,
    category: 'Web3',
    publishedAt: '2025-09-22',
    readTime: 12,
    author: 'John Connor'
  },
  {
    slug: 'debate-as-leadership-practice',
    title: 'Steel-Manning: Scripts and Exercises for Leaders',
    excerpt: 'The ability to argue your opponent\'s case better than they can is the highest form of understanding. Here are specific scripts and exercises to build this skill.',
    content: `
      <h2>The Skill That Separates Good from Great</h2>
      <p>I've watched hundreds of debates and sat in thousands of meetings. The pattern is clear: the best thinkers aren't the ones with the strongest opinions. They're the ones who can articulate opposing views so well that opponents say, "Yes, that's exactly what I believe."</p>

      <p>This skill is called steel-manning—the opposite of straw-manning. Instead of attacking a weak version of the other side, you strengthen it, then address the strongest version.</p>

      <p>This post provides specific scripts and exercises to build this skill. No theory—just practice tools you can use immediately.</p>

      <h2>The Steel-Man Test</h2>
      <p>Before you argue against any position, you must pass this test:</p>

      <p><strong>Can you present the opposing view so accurately and charitably that the person who holds it would say, "Yes, that's exactly what I believe—you've actually stated it better than I could"?</strong></p>

      <p>If not, you don't understand it well enough to argue against it.</p>

      <h2>Script 1: The Disagreement Opener</h2>
      <p>Use this script when you disagree with someone in a meeting or conversation:</p>

      <blockquote>
        "Before I share my concerns, let me make sure I understand your position correctly. You're saying [their position stated charitably]. The strongest reasons for this are [their best arguments]. Is that right?"
      </blockquote>

      <p><strong>Wait for confirmation.</strong> If they correct you, update your understanding and try again. Only proceed when they confirm you've got it right.</p>

      <p>Then:</p>

      <blockquote>
        "Given that understanding, here's where I see it differently: [your counter-argument]."
      </blockquote>

      <h3>Example in Practice</h3>
      <p><strong>Situation:</strong> Your colleague wants to delay the product launch by 3 months for more testing.</p>

      <p><strong>Without steel-manning:</strong> "We can't keep delaying. We need to ship."</p>

      <p><strong>With steel-manning:</strong> "Let me make sure I understand. You're concerned that launching now risks damaging user trust if we have bugs in production. The testing we've done is surface-level, and the edge cases could be significant. Given our brand position, the cost of a buggy launch might exceed the cost of delay. Is that right?"</p>

      <p>[Wait for confirmation]</p>

      <p>"I share that concern. Where I see it differently: I think we can mitigate risk through a staged rollout to 10% of users first, with rapid rollback capability. This lets us learn from real usage while limiting blast radius. Would that address the concern?"</p>

      <h2>Script 2: The Devil's Advocate Brief</h2>
      <p>Before any significant decision, write a Devil's Advocate brief. This is a document arguing against your intended decision.</p>

      <p><strong>Template:</strong></p>

      <blockquote>
        <p><strong>Decision under consideration:</strong> [State the decision]</p>
        <p><strong>The case against this decision:</strong></p>
        <p>1. [Strongest argument against] because [reasoning]</p>
        <p>2. [Second strongest argument] because [reasoning]</p>
        <p>3. [Third argument] because [reasoning]</p>
        <p><strong>What would have to be true for this decision to fail:</strong></p>
        <p>1. [Assumption that could be wrong]</p>
        <p>2. [Risk that could materialize]</p>
        <p>3. [External factor that could change]</p>
        <p><strong>Why I'm proceeding anyway:</strong> [Your response to the above]</p>
      </blockquote>

      <h3>Example: Hiring Decision</h3>
      <blockquote>
        <p><strong>Decision:</strong> Hire Sarah for the senior engineer role</p>
        <p><strong>The case against:</strong></p>
        <p>1. She has no experience in our tech stack (Python/Django). Learning curve will slow her down for 3-6 months.</p>
        <p>2. Her references emphasized individual contributor work, not the team leadership this role requires.</p>
        <p>3. At $180K, she's at the top of our range, limiting flexibility for other hires.</p>
        <p><strong>What would have to be true for this to fail:</strong></p>
        <p>1. She can't learn Python quickly enough and becomes a bottleneck</p>
        <p>2. She struggles with ambiguity and needs more direction than we can provide</p>
        <p>3. Team chemistry issues emerge that weren't visible in interviews</p>
        <p><strong>Why I'm proceeding:</strong> Her system design skills transfer across languages, and her track record of learning new stacks quickly (she picked up Rust in 8 weeks at her last job) suggests Python won't be a barrier. We're explicitly hiring for growth into leadership, and her self-awareness about this gap is actually a positive signal.</p>
      </blockquote>

      <h2>Exercise 1: The Belief Swap</h2>
      <p>Practice arguing for positions you disagree with.</p>

      <p><strong>Format:</strong></p>
      <ol>
        <li>Choose a topic you have strong opinions about</li>
        <li>Write a 3-minute speech arguing for the opposite position</li>
        <li>The speech must be genuinely persuasive—not a straw-man you can easily knock down</li>
        <li>Deliver it to someone and ask: "Did that sound like I believed it?"</li>
      </ol>

      <p><strong>Topics to try:</strong></p>
      <ul>
        <li>If you're pro-remote-work, argue for mandatory office attendance</li>
        <li>If you favor move-fast-break-things, argue for slow-and-careful</li>
        <li>If you believe in work-life balance, argue for total work commitment</li>
        <li>If you're skeptical of AI, argue for AI maximalism</li>
      </ul>

      <p><strong>Why this works:</strong> If you can't argue a position persuasively, you don't fully understand it. The exercise forces genuine engagement.</p>

      <h2>Exercise 2: The Pre-Mortem</h2>
      <p>Before any major initiative, run a pre-mortem:</p>

      <ol>
        <li>Gather the team</li>
        <li>Say: "Imagine it's 6 months from now. This project has failed completely. What happened?"</li>
        <li>Have everyone write down reasons silently (2 minutes)</li>
        <li>Share and discuss</li>
      </ol>

      <p><strong>Key rules:</strong></p>
      <ul>
        <li>Frame failure as certain, not possible ("What happened?" not "What could happen?")</li>
        <li>Silent writing first prevents groupthink</li>
        <li>No defending the project during the exercise—only surfacing concerns</li>
      </ul>

      <p><strong>What you'll discover:</strong> Concerns people had but didn't voice. Assumptions nobody questioned. Risks everyone saw but nobody mentioned.</p>

      <h2>Exercise 3: The Ideological Turing Test</h2>
      <p>Developed by economist Bryan Caplan, this is the gold standard for understanding:</p>

      <ol>
        <li>Find someone who disagrees with you on something important</li>
        <li>Have them write their position</li>
        <li>You write their position as you understand it</li>
        <li>Have a neutral third party guess which is which</li>
      </ol>

      <p>If the third party can easily identify which is the "real" believer, you failed. Your version was recognizably a caricature.</p>

      <p><strong>Lighter version:</strong> After any disagreement, summarize the other person's view and ask: "Did I get that right?" Track how often they say yes without correction.</p>

      <h2>Building a Culture of Steel-Manning</h2>
      <p>For teams, not just individuals:</p>

      <h3>Meeting Rule: Acknowledge Before Attacking</h3>
      <p>No one can argue against a proposal until they've summarized it to the proposer's satisfaction. Literally enforce this: "Before you respond, summarize what you heard."</p>

      <h3>Assigned Contrarians</h3>
      <p>In important meetings, assign someone to argue against the emerging consensus. Make it explicit: "Maria, your job today is to find the holes. Make the best case you can against what we're proposing."</p>

      <h3>Reward Updates</h3>
      <p>Publicly celebrate when people change their minds. "I want to acknowledge that James updated his position based on the data. That's exactly what we want to see." Make intellectual flexibility high-status.</p>

      <h3>Track Predictions</h3>
      <p>Keep records of predictions and their outcomes. This creates accountability for beliefs. "Last quarter you predicted X. It came out Y. What do you think happened?" No blame—just learning.</p>

      <h2>Common Failure Modes</h2>

      <h3>Failure Mode 1: Performative Steel-Manning</h3>
      <p>Going through the motions without genuine engagement. "Let me acknowledge your point..." [immediately dismisses it]</p>

      <p><strong>Fix:</strong> The test is whether the other person feels understood, not whether you said the right words.</p>

      <h3>Failure Mode 2: Analysis Paralysis</h3>
      <p>Using steel-manning to avoid decisions. "We need to consider more perspectives..."</p>

      <p><strong>Fix:</strong> Time-box the exercise. Steel-man, then decide. Don't let the process become procrastination.</p>

      <h3>Failure Mode 3: False Equivalence</h3>
      <p>Treating all positions as equally valid. Some positions are wrong even when steel-manned.</p>

      <p><strong>Fix:</strong> Steel-manning is about understanding, not agreeing. You can fully understand a position and still conclude it's wrong.</p>

      <h2>The Deeper Point</h2>
      <p>Steel-manning isn't a debate trick. It's a thinking upgrade.</p>

      <p>When you truly understand opposing views, you see more of the problem space. You anticipate objections. You build more robust solutions. You maintain relationships with people who disagree with you.</p>

      <p>The world doesn't need more people who are good at arguing. It needs more people who are good at understanding.</p>

      <p>Start with the scripts. Practice the exercises. Build the culture.</p>

      <p>Understanding comes before judgment. Always.</p>
    `,
    category: 'Leadership',
    publishedAt: '2025-08-18',
    readTime: 13,
    author: 'John Connor'
  },
  {
    slug: 'automation-as-human-right',
    title: 'The Automation Divide: A Practical Guide to AI-Augmented Work',
    excerpt: 'AI access is creating a two-tier workforce. Here\'s a practical guide to closing the gap—specific tools, workflows, and learning paths you can start today.',
    content: `
      <h2>The Multiplier Gap</h2>
      <p>Last month, I helped a friend automate her research workflow. She was spending 15 hours a week gathering and summarizing information. After setup: 3 hours. Same quality, 80% time savings.</p>

      <p>Her competitor doesn't know these tools exist. In two years, one of these businesses will be thriving. Not because of talent—because of leverage.</p>

      <p>This is the automation divide. Not whether you have AI access, but whether you can use it effectively. This post is a practical guide to closing that gap.</p>

      <h2>The Productivity Stack: Tools You Need</h2>
      <p>Here's the minimum viable AI stack for knowledge workers, organized by cost:</p>

      <h3>Free Tier (Good for Learning)</h3>
      <table>
        <tr><th>Tool</th><th>Use Case</th><th>Limitations</th></tr>
        <tr><td>ChatGPT Free</td><td>General assistance, writing, coding help</td><td>GPT-3.5 only, no file upload</td></tr>
        <tr><td>Claude Free</td><td>Analysis, writing, longer context</td><td>Usage limits, no projects</td></tr>
        <tr><td>Perplexity Free</td><td>Research with sources</td><td>Limited searches/day</td></tr>
        <tr><td>Google NotebookLM</td><td>Document analysis</td><td>Google ecosystem only</td></tr>
      </table>

      <h3>Core Tier (~$40/month)</h3>
      <table>
        <tr><th>Tool</th><th>Cost</th><th>Why It's Worth It</th></tr>
        <tr><td>ChatGPT Plus</td><td>$20/mo</td><td>GPT-4, file upload, browsing, image generation</td></tr>
        <tr><td>Claude Pro</td><td>$20/mo</td><td>Longer context, projects feature, better analysis</td></tr>
      </table>

      <h3>Professional Tier (~$100/month)</h3>
      <table>
        <tr><th>Tool</th><th>Cost</th><th>Why It's Worth It</th></tr>
        <tr><td>Core tier</td><td>$40</td><td>Base capability</td></tr>
        <tr><td>Perplexity Pro</td><td>$20/mo</td><td>Unlimited research, file analysis</td></tr>
        <tr><td>Notion AI</td><td>$10/mo</td><td>Integrated writing assistance</td></tr>
        <tr><td>Specialized tool</td><td>$30/mo</td><td>Industry-specific (see below)</td></tr>
      </table>

      <h3>Specialized Tools by Role</h3>
      <ul>
        <li><strong>Developers:</strong> GitHub Copilot ($19/mo), Cursor ($20/mo)</li>
        <li><strong>Writers:</strong> Jasper ($49/mo), Copy.ai ($36/mo)</li>
        <li><strong>Designers:</strong> Midjourney ($10/mo), Figma AI (included)</li>
        <li><strong>Researchers:</strong> Elicit ($10/mo), Consensus ($10/mo)</li>
        <li><strong>Sales:</strong> Lavender ($29/mo), Regie.ai ($59/mo)</li>
      </ul>

      <h2>Five Workflows to Automate First</h2>
      <p>Start here. These have the highest ROI for most knowledge workers:</p>

      <h3>1. Research Synthesis</h3>
      <p><strong>Before:</strong> Manually searching, reading, note-taking (4+ hours)</p>
      <p><strong>After:</strong> AI-assisted research loop (1 hour)</p>

      <p><strong>The workflow:</strong></p>
      <ol>
        <li>Define research question clearly</li>
        <li>Use Perplexity to gather sources with citations</li>
        <li>Upload key sources to Claude for deep analysis</li>
        <li>Ask Claude to identify gaps and contradictions</li>
        <li>Iterate with follow-up questions</li>
        <li>Generate summary with key findings</li>
      </ol>

      <p><strong>Sample prompt:</strong> "I'm researching [topic]. Key questions: [list]. Summarize the main perspectives, noting areas of consensus and disagreement. Cite sources. Identify what I should investigate further."</p>

      <h3>2. Meeting Preparation</h3>
      <p><strong>Before:</strong> Reading backgrounds, preparing questions (2 hours)</p>
      <p><strong>After:</strong> AI-assisted prep (30 minutes)</p>

      <p><strong>The workflow:</strong></p>
      <ol>
        <li>Upload meeting context (agenda, participants, previous notes)</li>
        <li>Ask for briefing on each participant (if external meeting)</li>
        <li>Generate potential questions and talking points</li>
        <li>Identify potential objections and prepare responses</li>
        <li>Create meeting structure with time allocations</li>
      </ol>

      <p><strong>Sample prompt:</strong> "I have a meeting with [participant] about [topic]. Their role is [role]. Based on this context [paste], generate: (1) 5 questions I should ask, (2) 3 points they'll likely raise, (3) suggested meeting structure."</p>

      <h3>3. First Draft Generation</h3>
      <p><strong>Before:</strong> Staring at blank page, writing from scratch (varies widely)</p>
      <p><strong>After:</strong> AI draft → human editing (50% time reduction)</p>

      <p><strong>The workflow:</strong></p>
      <ol>
        <li>Write a detailed brief: audience, purpose, key points, tone</li>
        <li>Generate initial draft with AI</li>
        <li>Review and mark what needs changing</li>
        <li>Ask AI to revise marked sections</li>
        <li>Final human polish</li>
      </ol>

      <p><strong>Critical point:</strong> The brief quality determines output quality. Spend 10 minutes on the brief to save an hour on revision.</p>

      <h3>4. Code Review and Debugging</h3>
      <p><strong>Before:</strong> Manual debugging, Stack Overflow searching</p>
      <p><strong>After:</strong> AI-assisted debugging (often 10x faster)</p>

      <p><strong>The workflow:</strong></p>
      <ol>
        <li>Paste the code and error message</li>
        <li>Ask for explanation of the error</li>
        <li>Ask for potential fixes with tradeoffs</li>
        <li>Ask it to review the fix for edge cases</li>
        <li>Ask for test cases to verify the fix</li>
      </ol>

      <p><strong>Sample prompt:</strong> "This code produces [error]. Explain what's happening, suggest fixes with pros/cons of each, and provide test cases to verify the fix works."</p>

      <h3>5. Email Triage and Response</h3>
      <p><strong>Before:</strong> Reading everything, responding from scratch</p>
      <p><strong>After:</strong> AI-assisted triage and drafting (60% time reduction)</p>

      <p><strong>The workflow:</strong></p>
      <ol>
        <li>Paste batch of emails</li>
        <li>Ask for categorization by urgency and required action</li>
        <li>For each email requiring response, generate draft</li>
        <li>Review and personalize drafts</li>
        <li>Send</li>
      </ol>

      <h2>Learning Path: Zero to Competent</h2>
      <p>If you're starting from scratch, here's the progression:</p>

      <h3>Week 1: Foundation</h3>
      <ul>
        <li>Sign up for ChatGPT (free tier)</li>
        <li>Complete 20 conversations on varied topics</li>
        <li>Learn prompt basics: specificity, context, iteration</li>
        <li>Goal: Comfortable with basic back-and-forth</li>
      </ul>

      <h3>Week 2: Prompting Skills</h3>
      <ul>
        <li>Learn prompt patterns: role assignment, chain of thought, few-shot examples</li>
        <li>Practice: rewrite the same request 5 different ways, compare outputs</li>
        <li>Goal: Understand how prompt changes affect outputs</li>
      </ul>

      <h3>Week 3: Tool Expansion</h3>
      <ul>
        <li>Try Claude, Perplexity, one specialized tool</li>
        <li>Learn which tool is best for which task</li>
        <li>Goal: Know when to use what</li>
      </ul>

      <h3>Week 4: Workflow Integration</h3>
      <ul>
        <li>Identify your 3 most time-consuming tasks</li>
        <li>Design AI-assisted workflows for each</li>
        <li>Measure time savings</li>
        <li>Goal: Concrete productivity gains</li>
      </ul>

      <h3>Month 2+: Advanced Techniques</h3>
      <ul>
        <li>API usage for automation</li>
        <li>Custom GPTs or Claude projects</li>
        <li>Multi-model workflows</li>
        <li>Integration with existing tools (Zapier, Make)</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>

      <h3>Mistake 1: Accepting First Output</h3>
      <p>AI first drafts are rarely final drafts. Iterate. Ask for revisions. Push back on weak sections.</p>

      <h3>Mistake 2: Under-specifying Prompts</h3>
      <p><strong>Bad:</strong> "Write a blog post about marketing."</p>
      <p><strong>Better:</strong> "Write a 1,500-word blog post for B2B SaaS marketers about using customer interviews to improve messaging. Include 3 specific examples, a step-by-step process, and common pitfalls. Tone: practical and conversational. Assume readers have marketing experience but haven't done systematic customer research."</p>

      <h3>Mistake 3: Not Verifying Facts</h3>
      <p>AI hallucinates. Always verify factual claims, especially statistics, quotes, and recent events. Use AI for analysis; verify facts independently.</p>

      <h3>Mistake 4: Automating the Wrong Things</h3>
      <p>Don't automate judgment calls, relationship moments, or creative direction. Do automate data gathering, first drafts, routine analysis, and information synthesis.</p>

      <h2>The Investment Calculation</h2>
      <p>Here's the math on whether AI tools are worth it:</p>

      <p><strong>Variables:</strong></p>
      <ul>
        <li>Your effective hourly rate (salary + benefits / working hours)</li>
        <li>Hours saved per month</li>
        <li>Tool cost per month</li>
      </ul>

      <p><strong>Formula:</strong> If (hours saved × hourly rate) > tool cost, buy it.</p>

      <p><strong>Example:</strong></p>
      <ul>
        <li>Salary: $120K = ~$60/hour</li>
        <li>ChatGPT Plus: $20/month</li>
        <li>Breakeven: Save 20 minutes/month</li>
      </ul>

      <p>If you can't save 20 minutes per month with ChatGPT Plus, you're not using it right.</p>

      <h2>The Bigger Picture</h2>
      <p>AI access is becoming like internet access was in the 2000s. Those who master it early gain compounding advantages. Those who don't fall behind.</p>

      <p>The tools exist. The information exists. The only barrier is investment of time to learn.</p>

      <p>Start with free tools. Learn the basics. Automate one workflow. Measure the gain. Expand from there.</p>

      <p>The gap is real. But it's crossable. Start today.</p>
    `,
    category: 'Technology',
    publishedAt: '2025-07-30',
    readTime: 14,
    author: 'John Connor'
  },
  {
    slug: 'building-systems-that-compound',
    title: 'Compound Systems: A Design Checklist',
    excerpt: 'Most products add value linearly. Great products multiply it. Here\'s a checklist for designing systems that compound.',
    content: `
      <h2>The Core Insight</h2>
      <p>Linear products: each feature adds value. 1 + 1 + 1 = 3.</p>
      <p>Compound products: each addition multiplies value. 1.2 × 1.2 × 1.2 = 1.73, and it keeps growing.</p>

      <p>The difference over time is enormous. After 10 additions:</p>
      <ul>
        <li>Linear: 10 units of value</li>
        <li>Compound (1.2x): 6.2 units of value... wait, that's less?</li>
      </ul>

      <p>Let me redo that math correctly:</p>
      <ul>
        <li>Linear: Start at 1, add 1 each time → 1, 2, 3, 4... 10</li>
        <li>Compound: Start at 1, multiply by 1.2 each time → 1, 1.2, 1.44, 1.73... 6.19</li>
      </ul>

      <p>Hmm, that doesn't look right either. The key is the starting base. Let me think about this differently:</p>

      <p>The real comparison:</p>
      <ul>
        <li>Linear product adds 10% of original value each month</li>
        <li>Compound product adds 10% of <em>current</em> value each month</li>
      </ul>

      <p>After 24 months:</p>
      <ul>
        <li>Linear: 1 + (24 × 0.1) = 3.4x original value</li>
        <li>Compound: 1.1^24 = 9.85x original value</li>
      </ul>

      <p>Now we're talking. The compound system is 3x more valuable even with the same "growth rate."</p>

      <h2>The Compound System Checklist</h2>
      <p>Use this checklist when designing features. Score each criterion 0-2:</p>
      <ul>
        <li>0 = No</li>
        <li>1 = Partially</li>
        <li>2 = Yes</li>
      </ul>

      <h3>Network Effects (0-2)</h3>
      <p><strong>Question:</strong> Does this addition make the system more valuable for existing users?</p>
      <ul>
        <li>2: Every new user/piece of content/data point improves experience for everyone</li>
        <li>1: Benefits some existing users or users in some contexts</li>
        <li>0: Only benefits the user/content itself</li>
      </ul>
      <p><strong>Example:</strong> Adding a new Waze user improves traffic data for everyone (2). Adding a new Netflix profile only benefits that profile (0).</p>

      <h3>Learning Loops (0-2)</h3>
      <p><strong>Question:</strong> Does the system get smarter from this addition?</p>
      <ul>
        <li>2: Every interaction generates data that improves future interactions</li>
        <li>1: Some interactions improve the system</li>
        <li>0: No learning mechanism</li>
      </ul>
      <p><strong>Example:</strong> Spotify recommendations improve with every play (2). A static blog doesn't learn from readers (0).</p>

      <h3>Combination Multipliers (0-2)</h3>
      <p><strong>Question:</strong> Can this combine with other features to create new capabilities?</p>
      <ul>
        <li>2: Designed as a component that combines with others</li>
        <li>1: Some combination potential</li>
        <li>0: Standalone feature, doesn't combine</li>
      </ul>
      <p><strong>Example:</strong> Notion databases can combine with pages, templates, automations (2). A PDF export feature is standalone (0).</p>

      <h3>Time Value (0-2)</h3>
      <p><strong>Question:</strong> Does this become more valuable as time passes?</p>
      <ul>
        <li>2: Value accumulates over time (data, reputation, history)</li>
        <li>1: Stable value over time</li>
        <li>0: Depreciates or becomes stale</li>
      </ul>
      <p><strong>Example:</strong> LinkedIn connections become more valuable over time (2). A news article becomes less relevant (0).</p>

      <h3>User Investment (0-2)</h3>
      <p><strong>Question:</strong> Does this encourage users to invest in ways that increase switching costs?</p>
      <ul>
        <li>2: Users build assets that would be costly to rebuild elsewhere</li>
        <li>1: Some user investment</li>
        <li>0: No investment, easy to switch</li>
      </ul>
      <p><strong>Example:</strong> Salesforce customizations create massive switching costs (2). A simple SaaS tool with export (0).</p>

      <h3>Scoring Interpretation</h3>
      <ul>
        <li>0-3: Linear feature. Fine for filling gaps, but won't drive growth.</li>
        <li>4-6: Partial compound. Some multiplication, room to enhance.</li>
        <li>7-10: Strong compound. Prioritize these.</li>
      </ul>

      <h2>Applying the Checklist: Case Studies</h2>

      <h3>Case Study 1: Comment System</h3>
      <p>Proposed feature: Add comments to articles</p>

      <table>
        <tr><th>Criterion</th><th>Score</th><th>Reasoning</th></tr>
        <tr><td>Network Effects</td><td>2</td><td>More commenters = richer discussions for all readers</td></tr>
        <tr><td>Learning Loops</td><td>1</td><td>Could inform content strategy, but not automatic</td></tr>
        <tr><td>Combination</td><td>1</td><td>Combines with articles, but limited other integrations</td></tr>
        <tr><td>Time Value</td><td>1</td><td>Comment history has some value, but also gets stale</td></tr>
        <tr><td>User Investment</td><td>1</td><td>Reputation builds slowly, but portable-ish</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>6</strong></td><td>Partial compound. Could enhance.</td></tr>
      </table>

      <p><strong>How to enhance:</strong></p>
      <ul>
        <li>Add threaded replies (increases network effect)</li>
        <li>Build reputation system (increases time value and investment)</li>
        <li>Use comments to surface popular topics for new content (learning loop)</li>
      </ul>

      <h3>Case Study 2: Export Feature</h3>
      <p>Proposed feature: Export data to CSV</p>

      <table>
        <tr><th>Criterion</th><th>Score</th><th>Reasoning</th></tr>
        <tr><td>Network Effects</td><td>0</td><td>No impact on other users</td></tr>
        <tr><td>Learning Loops</td><td>0</td><td>No learning</td></tr>
        <tr><td>Combination</td><td>0</td><td>Standalone utility</td></tr>
        <tr><td>Time Value</td><td>0</td><td>Same value whenever used</td></tr>
        <tr><td>User Investment</td><td>0</td><td>Actually reduces lock-in</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>0</strong></td><td>Pure linear. Table stakes, not growth driver.</td></tr>
      </table>

      <p><strong>Verdict:</strong> Build it because users expect it, not because it compounds.</p>

      <h2>Warning Signs You're Building Linear</h2>
      <ul>
        <li><strong>"More features = more value"</strong> — If your roadmap is a feature list with no discussion of interactions, you're thinking linear.</li>
        <li><strong>Features don't reference each other</strong> — If feature specs never mention other features, you're building silos.</li>
        <li><strong>No data strategy</strong> — If features don't generate data that improves other features, you're leaving compound potential on the table.</li>
        <li><strong>Easy to rebuild elsewhere</strong> — If a competitor could match your feature set with a year of work, you haven't compounded.</li>
      </ul>

      <h2>Design Patterns for Compounding</h2>

      <h3>Pattern 1: Shared Data Layer</h3>
      <p>Every feature writes to and reads from a shared data layer. User actions in Feature A improve Feature B's recommendations.</p>

      <h3>Pattern 2: Component Architecture</h3>
      <p>Build features as combinable components, not standalone modules. 10 components that combine = 1000s of possibilities.</p>

      <h3>Pattern 3: Reputation Systems</h3>
      <p>Track user contributions and build portable reputation. Users invested in their reputation don't leave.</p>

      <h3>Pattern 4: Network Primitives</h3>
      <p>Build social connections as a core primitive. Features that leverage the social graph compound on network growth.</p>

      <h2>Implementation Priority</h2>
      <p>When planning your roadmap:</p>

      <ol>
        <li><strong>Score all proposed features</strong> using the checklist</li>
        <li><strong>Prioritize 7+ scores</strong> — These drive long-term value</li>
        <li><strong>Ask "how could we enhance?"</strong> for 4-6 scores</li>
        <li><strong>De-prioritize 0-3 scores</strong> unless required for table stakes</li>
        <li><strong>Build infrastructure first</strong> — The boring stuff (data pipelines, reputation systems) enables compounding</li>
      </ol>

      <h2>The Long Game</h2>
      <p>Compound thinking requires patience. The payoff isn't immediate—it's years down the road when your system is 10x more valuable than a linear competitor who shipped the same number of features.</p>

      <p>Every feature decision is a bet on which curve you're building.</p>

      <p>Choose wisely.</p>
    `,
    category: 'Strategy',
    publishedAt: '2025-06-12',
    readTime: 11,
    author: 'John Connor'
  },
  {
    slug: 'founders-debate-roadmaps',
    title: 'Public Roadmap Debates: A Template for Founders',
    excerpt: 'Most roadmaps are created in isolation and validated by yes-men. Here\'s a complete template for debating your roadmap publicly with your community.',
    content: `
      <h2>Why Most Roadmap Reviews Fail</h2>
      <p>The pattern is predictable: a small team creates a roadmap, presents it to stakeholders who nod along, then spends months building something users don't want.</p>

      <p>The roadmap was never stress-tested. Assumptions were never challenged. Blindspots were never surfaced.</p>

      <p>This post provides a complete template for running public roadmap debates—a practice I've used at SuperDebate that's saved us from multiple wrong turns.</p>

      <h2>The Format: Monthly Roadmap Debate</h2>

      <h3>Preparation (1 Week Before)</h3>
      <ol>
        <li><strong>Publish the proposal</strong> — Share your proposed priorities with full rationale</li>
        <li><strong>Invite challengers</strong> — Explicitly recruit people to argue against it</li>
        <li><strong>Set rules</strong> — Time limits, structure, what's in/out of scope</li>
      </ol>

      <h3>Proposal Document Template</h3>
      <blockquote>
        <p><strong>Period:</strong> [Month/Quarter]</p>
        <p><strong>Proposed Priorities:</strong></p>
        <ol>
          <li>[Priority 1]: [Brief description]</li>
          <li>[Priority 2]: [Brief description]</li>
          <li>[Priority 3]: [Brief description]</li>
        </ol>
        <p><strong>Explicitly NOT doing:</strong></p>
        <ul>
          <li>[Thing we're not doing] — Reason why</li>
          <li>[Another thing] — Reason why</li>
        </ul>
        <p><strong>Key assumptions:</strong></p>
        <ul>
          <li>[Assumption 1]</li>
          <li>[Assumption 2]</li>
        </ul>
        <p><strong>Success metrics:</strong></p>
        <ul>
          <li>[Metric 1]: Target [X]</li>
          <li>[Metric 2]: Target [Y]</li>
        </ul>
        <p><strong>Biggest risk:</strong> [What could make this wrong]</p>
      </blockquote>

      <h3>Debate Structure (60 minutes)</h3>
      <table>
        <tr><th>Segment</th><th>Time</th><th>Who</th></tr>
        <tr><td>Proposition</td><td>10 min</td><td>Founder presents priorities</td></tr>
        <tr><td>Clarifying questions</td><td>5 min</td><td>Audience asks factual questions only</td></tr>
        <tr><td>Opposition 1</td><td>7 min</td><td>First challenger argues against</td></tr>
        <tr><td>Response</td><td>3 min</td><td>Founder responds</td></tr>
        <tr><td>Opposition 2</td><td>7 min</td><td>Second challenger argues against</td></tr>
        <tr><td>Response</td><td>3 min</td><td>Founder responds</td></tr>
        <tr><td>Open floor</td><td>15 min</td><td>Anyone can raise points</td></tr>
        <tr><td>Synthesis</td><td>10 min</td><td>Founder summarizes learnings</td></tr>
      </table>

      <h3>Rules of Engagement</h3>
      <ul>
        <li><strong>Steel-man first:</strong> Opposition must acknowledge what's strong about the proposal before critiquing</li>
        <li><strong>Specific critiques only:</strong> "I don't like it" is not allowed. Must be "I think X is wrong because Y"</li>
        <li><strong>Alternatives required:</strong> If you argue against something, propose what should be done instead</li>
        <li><strong>No interruptions:</strong> Time limits are enforced strictly</li>
        <li><strong>Document everything:</strong> Record the debate, publish notes</li>
      </ul>

      <h2>The Opposition Brief Template</h2>
      <p>Give this to your challengers:</p>

      <blockquote>
        <p><strong>The proposal's strengths:</strong></p>
        <p>[Acknowledge what's good—required before critiquing]</p>

        <p><strong>My primary concern:</strong></p>
        <p>[One main argument against the proposal]</p>

        <p><strong>Supporting evidence:</strong></p>
        <ul>
          <li>[Data point or example]</li>
          <li>[Data point or example]</li>
        </ul>

        <p><strong>Alternative proposal:</strong></p>
        <p>[What should be done instead]</p>

        <p><strong>What would change my mind:</strong></p>
        <p>[What evidence would make me support the original proposal]</p>
      </blockquote>

      <h2>Post-Debate Documentation</h2>
      <p>After each debate, publish:</p>

      <blockquote>
        <p><strong>Original proposal:</strong> [Link]</p>

        <p><strong>Key challenges raised:</strong></p>
        <ol>
          <li>[Challenge 1] — Raised by [Name]</li>
          <li>[Challenge 2] — Raised by [Name]</li>
        </ol>

        <p><strong>Changes made based on feedback:</strong></p>
        <ul>
          <li>[Change 1] — Because [reasoning]</li>
          <li>[Change 2] — Because [reasoning]</li>
        </ul>

        <p><strong>Feedback considered but not incorporated:</strong></p>
        <ul>
          <li>[Feedback] — Why not: [reasoning]</li>
        </ul>

        <p><strong>Final roadmap:</strong> [Updated priorities]</p>

        <p><strong>Video recording:</strong> [Link]</p>
      </blockquote>

      <h2>Recruiting Good Challengers</h2>
      <p>The quality of the debate depends on the quality of the opposition. Recruit:</p>

      <ul>
        <li><strong>Power users:</strong> They know your product's weaknesses</li>
        <li><strong>Skeptics:</strong> People who've expressed doubts</li>
        <li><strong>Domain experts:</strong> People with relevant expertise</li>
        <li><strong>Competitors (sometimes):</strong> Former employees of competitors see your blindspots</li>
        <li><strong>Advisors:</strong> People with enough context to challenge substantively</li>
      </ul>

      <p><strong>Avoid:</strong></p>
      <ul>
        <li>Yes-people who'll validate without thinking</li>
        <li>Trolls who'll attack without substance</li>
        <li>People without context who'll waste time on basics</li>
      </ul>

      <h2>Common Failure Modes</h2>

      <h3>Failure Mode 1: Defensive Founder</h3>
      <p>If you get defensive, people stop challenging. Practice: "That's an interesting point. Let me think about it." Even if you disagree.</p>

      <h3>Failure Mode 2: Performative Debate</h3>
      <p>Going through the motions without genuine openness. Test: Did anything actually change based on the debate? If not, it was theater.</p>

      <h3>Failure Mode 3: Decision Paralysis</h3>
      <p>Using debate to avoid deciding. Set a deadline: debate happens, then decision is made, then execution begins. No endless deliberation.</p>

      <h3>Failure Mode 4: Wrong Audience</h3>
      <p>Debating with people who don't have relevant knowledge. A debate with random community members about technical architecture won't be useful.</p>

      <h2>When NOT to Debate</h2>
      <p>Public roadmap debates aren't appropriate for:</p>
      <ul>
        <li><strong>Time-sensitive decisions:</strong> Sometimes you just need to move</li>
        <li><strong>Confidential matters:</strong> M&A, fundraising, personnel</li>
        <li><strong>Technical implementation details:</strong> Architecture debates belong in engineering</li>
        <li><strong>Reversible decisions:</strong> Just try it and see</li>
      </ul>

      <p><strong>Do debate:</strong> Major direction changes, feature prioritization, strategy shifts, resource allocation.</p>

      <h2>Measuring Success</h2>
      <p>Track these metrics to know if your debates are working:</p>

      <ul>
        <li><strong>Changes per debate:</strong> How often does the roadmap change based on feedback? Target: 20-40% of debates result in meaningful changes.</li>
        <li><strong>Feature success rate:</strong> Do features built after debates perform better than those that weren't debated?</li>
        <li><strong>Community trust scores:</strong> Survey community on whether they feel heard. Track over time.</li>
        <li><strong>Challenger participation:</strong> Are people willing to argue against you? Declining participation = declining trust.</li>
      </ul>

      <h2>Getting Started</h2>
      <ol>
        <li><strong>Start small:</strong> Debate one decision, not your whole roadmap</li>
        <li><strong>Recruit 2-3 challengers:</strong> Quality over quantity</li>
        <li><strong>Set clear rules:</strong> Use the templates above</li>
        <li><strong>Document everything:</strong> Publish the outcome</li>
        <li><strong>Iterate:</strong> Improve the format based on what works</li>
      </ol>

      <h2>The Payoff</h2>
      <p>After 8 months of public roadmap debates:</p>
      <ul>
        <li>We've pivoted twice based on challenges we hadn't considered</li>
        <li>Feature completion rate improved (building what people want)</li>
        <li>Community trust increased measurably</li>
        <li>We've attracted better contributors who value transparency</li>
      </ul>

      <p>Your roadmap is a hypothesis about what will create value. Treating it as settled fact is how you waste months building the wrong thing.</p>

      <p>The templates are here. The format is proven. The only barrier is willingness to be challenged.</p>

      <p>Start with one debate. See what you learn.</p>
    `,
    category: 'Product',
    publishedAt: '2025-05-08',
    readTime: 12,
    author: 'John Connor'
  }
]

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts() {
  return blogPosts
}
