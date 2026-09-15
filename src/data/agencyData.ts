import {
  ServiceItem,
  GrowthFrameworkStep,
  CaseStudyItem,
  BenefitItem,
  ProcessPhase,
  TestimonialItem,
  IndustryItem,
  InsightArticle,
  FaqItem
} from '../types';

export const BRAND = {
  name: 'NEXORA DIGITAL',
  shortName: 'NEXORA',
  tagline: 'Grow Smarter. Market Better. Scale Faster.',
  positioning: 'A modern digital growth agency helping businesses turn attention into measurable growth.',
  trustPillars: ['Strategy', 'Creativity', 'Performance', 'Growth'],
  established: 2020,
  locations: ['New York', 'London', 'Singapore'],
  phone: '+1 (800) 489-3290',
  email: 'growth@nexoradigital.com',
  address: '350 Fifth Avenue, 42nd Floor, New York, NY 10118'
};

export const STATS = [
  { value: 120, suffix: '+', label: 'Campaigns Launched', desc: 'Across 14 global markets' },
  { value: 45, suffix: '+', label: 'Brands Supported', desc: 'From seed-stage to Enterprise' },
  { value: 3.8, suffix: '×', label: 'Average ROAS', desc: 'Blended paid media efficiency', isFloat: true },
  { value: 92, suffix: '%', label: 'Client Retention', desc: 'Multi-year retained partnerships' }
];

export const CLIENT_LOGOS = [
  { name: 'Vanguard Dynamics', sector: 'Enterprise Tech' },
  { name: 'Aura Living', sector: 'Luxury DTC' },
  { name: 'Kinetix Health', sector: 'MedTech' },
  { name: 'Prism Payments', sector: 'Fintech' },
  { name: 'Solstice Media', sector: 'Publishing' },
  { name: 'HyperScale AI', sector: 'B2B SaaS' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'digital-strategy',
    title: 'Digital Strategy',
    shortDescription: 'Data-driven marketing strategies designed around business objectives and sustainable revenue.',
    iconName: 'Compass',
    deliverables: [
      'Comprehensive Market & Competitor Audit',
      'Customer Persona & ICP Journey Mapping',
      'Multi-Channel Attribution Architecture',
      'Quarterly OKR & Media Budget Allocation'
    ],
    metricsTarget: 'Clear 12-month Scalable Growth Roadmap',
    detailedOverview: 'We architect omni-channel growth blueprints that eliminate guesswork. By unifying performance media, audience telemetry, and unit economics, we identify your highest-leverage acquisition channels.',
    technologies: ['Tableau', 'GA4 Enterprise', 'Mixpanel', 'Segment']
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Build visibility, community, engagement, and brand authority across high-impact platforms.',
    iconName: 'Share2',
    deliverables: [
      'Executive Thought Leadership & Founder Branding',
      'Short-Form Video Production (Reels, TikTok, Shorts)',
      'Community Activation & Retention Campaigns',
      'Influencer & Creator Affiliate Management'
    ],
    metricsTarget: '+200% Organic Engagement & Brand Sentiment',
    detailedOverview: 'Organic social is no longer about vanity follower counts—it is your frontline distribution engine. We produce scroll-stopping creative and executive personal branding that turns casual followers into brand advocates.',
    technologies: ['Meta Business Suite', 'TikTok Creative Studio', 'LinkedIn Campaign Manager']
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    shortDescription: 'Increase organic visibility and attract high-intent customers who are ready to purchase.',
    iconName: 'Search',
    deliverables: [
      'Technical Core Web Vitals & Indexing Audits',
      'High-Intent Commercial Keyword Architecture',
      'Programmatic SEO & Content Hub Architecture',
      'Authoritative Digital PR & Tier-1 Backlink Acquisition'
    ],
    metricsTarget: 'Top 3 Search Positions for Commercial Terms',
    detailedOverview: 'In the era of AI-integrated search engines (Google SGE, Perplexity), basic keyword stuffing is obsolete. We engineer semantic entity authority, programmatic content systems, and bulletproof technical infrastructure.',
    technologies: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console']
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    shortDescription: 'Performance-focused campaigns across major advertising platforms engineered for maximum ROAS.',
    iconName: 'Target',
    deliverables: [
      'Meta (Facebook/Instagram) Dynamic Creative Testing',
      'Google Search, Performance Max & YouTube Ads',
      'B2B Account-Based Marketing (ABM) on LinkedIn',
      'Programmatic Native & Retargeting Funnels'
    ],
    metricsTarget: '3.5× – 5.2× First-Party Attributed ROAS',
    detailedOverview: 'We treat media buying like algorithmic capital allocation. Utilizing rapid multivariate creative testing and server-side tracking (CAPI), we scale ad accounts without hitting audience fatigue walls.',
    technologies: ['Meta CAPI', 'Google Ads 360', 'LinkedIn ABM', 'Triple Whale']
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    shortDescription: 'Create valuable content that attracts, educates, and converts visitors into loyal evangelists.',
    iconName: 'FileText',
    deliverables: [
      'Industry Whitepapers, Research Reports & Playbooks',
      'Editorial Long-Form Guides & Pillar Articles',
      'Video Scriptwriting & Production Oversight',
      'Lead Magnet & Interactive Assessment Assets'
    ],
    metricsTarget: '4.2× Higher Assisted Conversion Rates',
    detailedOverview: 'Content is the moat that insulates your brand against rising ad costs. We craft deep-dive industry research, thought leadership essays, and comparison guides that accelerate sales velocity and shorten sales cycles.',
    technologies: ['HubSpot CMS', 'WordPress VIP', 'Clearscope', 'Figma']
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    shortDescription: 'Build automated customer journeys, hyper-personalized flows, and compounding retention systems.',
    iconName: 'Mail',
    deliverables: [
      'Behavior-Triggered Lifecycle Flows (Browse, Cart, Winback)',
      'VIP Loyalty & Retention Tier Segmentation',
      'A/B Subject Line, Copy & Offer Optimization',
      'SMS & Omnichannel Push Integration'
    ],
    metricsTarget: '30%+ of Total Revenue Driven by Owned Channels',
    detailedOverview: 'Your owned audience is your most profitable asset. We build high-converting automated sequences, dynamic product recommendation blocks, and tailored predictive churn prevention campaigns.',
    technologies: ['Klaviyo', 'ActiveCampaign', 'Customer.io', 'Attentive']
  },
  {
    id: 'branding-creative',
    title: 'Branding & Creative',
    shortDescription: 'Create a consistent, memorable, professional brand identity that commands premium pricing.',
    iconName: 'Sparkles',
    deliverables: [
      'Visual Identity Systems (Logo, Typography, Color Palette)',
      'Design Language Systems & UI Component Libraries',
      'High-Converting Direct Response Ad Creatives',
      'Packaging, Merchandise & Presentation Decks'
    ],
    metricsTarget: 'Elevated Perceived Brand Value & Recall',
    detailedOverview: 'True brand authority allows you to charge higher prices and outcompete commodity alternatives. We deliver comprehensive brand systems that balance aesthetic perfection with conversion psychology.',
    technologies: ['Figma', 'Adobe Creative Cloud', 'Cinema 4D', 'After Effects']
  },
  {
    id: 'analytics-optimization',
    title: 'Analytics & Optimization',
    shortDescription: 'Turn raw marketing data into profitable decisions, stronger conversion rates, and predictable growth.',
    iconName: 'BarChart3',
    deliverables: [
      'Server-Side Event Tracking (GTM Server / CAPI)',
      'Conversion Rate Optimization (CRO) & A/B Testing',
      'Executive Dashboards & Lifetime Value (LTV) Modeling',
      'Multi-Touch Attribution & Media Mix Modeling (MMM)'
    ],
    metricsTarget: '+35% Baseline Checkout / Landing Page CVR',
    detailedOverview: 'You cannot scale what you cannot accurately measure. We replace subjective opinions with statistical rigor, deploying heatmaps, session replays, and multivariate experimentation to maximize every single visitor.',
    technologies: ['Google Tag Manager', 'VWO', 'PostHog', 'Looker Studio']
  }
];

export const GROWTH_FRAMEWORK: GrowthFrameworkStep[] = [
  {
    stepNumber: '01',
    title: 'DISCOVER',
    subtitle: 'Deep Immersion & Intelligence',
    description: 'Understand the business, market dynamics, customer psychology, and competitor blind spots before deploying a single dollar.',
    deliverables: [
      'Comprehensive digital ecosystem audit',
      'Customer interview synthesis & ICP definition',
      'Historical CAC, LTV & unit economics analysis',
      'Competitor media spend & creative intelligence'
    ],
    keyMetric: '100% Alignment on Baseline KPIs'
  },
  {
    stepNumber: '02',
    title: 'STRATEGIZE',
    subtitle: 'Growth Architecture & Modeling',
    description: 'Develop a clear growth strategy tailored around your specific financial targets, channel leverage points, and margin profile.',
    deliverables: [
      'Predictive financial & traffic growth models',
      'Channel prioritization matrix & capital allocation',
      'Offer positioning, hooks, and angle development',
      'Tracking & server-side attribution schema'
    ],
    keyMetric: '3-Year Scalable Media Roadmap'
  },
  {
    stepNumber: '03',
    title: 'CREATE',
    subtitle: 'High-Converting Asset Production',
    description: 'Build high-converting campaigns, editorial content, direct-response creative assets, and frictionless web experiences.',
    deliverables: [
      'High-velocity ad creative batches (static & video)',
      'Dedicated landing page design & development',
      'Automated email/SMS lifecycle flows',
      'Conversion-optimized sales copy and collateral'
    ],
    keyMetric: '30+ Custom Ad Variations per Sprint'
  },
  {
    stepNumber: '04',
    title: 'LAUNCH',
    subtitle: 'Precision Multi-Channel Deployment',
    description: 'Deploy campaigns across the right digital channels with calibrated bid strategies, targeted cohorts, and algorithmic tracking.',
    deliverables: [
      'Controlled ad account structure rollout',
      'Audience segmentation & lookalike configuration',
      'Dynamic budget rebalancing rules',
      'Real-time anomaly monitoring & safety limits'
    ],
    keyMetric: 'Rapid Algorithmic Learning Phase Exit'
  },
  {
    stepNumber: '05',
    title: 'OPTIMIZE',
    subtitle: 'Measure, Refine, and Scale',
    description: 'Measure performance rigorously, cut losing variations early, double down on winning levers, and scale spend profitably.',
    deliverables: [
      'Weekly performance reviews & sprint retrospectives',
      'Iterative landing page A/B split tests',
      'Media Mix Modeling (MMM) calibration',
      'Retention & repeat purchase loop enhancement'
    ],
    keyMetric: 'Continuous Compound ROAS Growth'
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'ecommerce-growth',
    title: 'E-commerce Revenue Acceleration',
    client: 'Velour & Co.',
    industry: 'Luxury Apparel & DTC',
    headlineMetric: '+187%',
    metricLabel: 'Net Revenue Growth in 6 Months',
    challenge: 'A high-end contemporary apparel brand struggled with climbing acquisition costs on Meta and stagnant customer lifetime value after scaling past $2M ARR.',
    strategy: 'Restructured their ad account with dynamic creative batches, engineered high-converting editorial advertorials, and revamped their Klaviyo lifecycle automation with VIP tier sequencing.',
    result: 'Generated $4.1M incremental revenue while reducing blended Customer Acquisition Cost (CAC) by 24% and achieving an average 4.2x ROAS across Q3/Q4.',
    chartData: [
      { label: 'Month 1', before: 180, after: 210 },
      { label: 'Month 2', before: 185, after: 280 },
      { label: 'Month 3', before: 190, after: 360 },
      { label: 'Month 4', before: 195, after: 440 },
      { label: 'Month 5', before: 200, after: 510 },
      { label: 'Month 6', before: 205, after: 588 }
    ],
    quote: {
      text: 'NEXORA completely transformed our financial economics. They are not just media buyers; they operate like fractional growth executives.',
      author: 'Marcus Vance',
      role: 'CEO & Co-Founder, Velour & Co.'
    }
  },
  {
    id: 'saas-leads',
    title: 'Enterprise SaaS Lead Engine',
    client: 'CloudSynth AI',
    industry: 'B2B Enterprise Software',
    headlineMetric: '+143%',
    metricLabel: 'Qualified Demo Pipeline Generated',
    challenge: 'CloudSynth offered an enterprise AI observability tool, but their cost-per-SQL (Sales Qualified Lead) on LinkedIn was hovering above $780 with low show-up rates.',
    strategy: 'Deployed account-based marketing (ABM) on LinkedIn targeted strictly at VP of Engineering & CTO personas, backed by an interactive benchmark calculator and retargeting case study videos.',
    result: 'Reduced Cost Per Qualified Demo from $780 down to $310, filling their enterprise sales reps with 260+ high-intent discovery calls in 90 days.',
    chartData: [
      { label: 'Q1', before: 42, after: 68 },
      { label: 'Q2', before: 48, after: 95 },
      { label: 'Q3', before: 51, after: 124 },
      { label: 'Q4', before: 55, after: 158 }
    ],
    quote: {
      text: 'The quality of leads we received from NEXORA was night and day compared to previous agencies. Every meeting was with a genuine decision maker.',
      author: 'Elena Rostova',
      role: 'VP of Marketing, CloudSynth'
    }
  },
  {
    id: 'local-business',
    title: 'Multi-Location Practice Expansion',
    client: 'Apex Longevity Clinics',
    industry: 'Healthcare & Aesthetics',
    headlineMetric: '3.2×',
    metricLabel: 'Return on Ad Spend Across 8 Locations',
    challenge: 'A growing medical wellness group faced steep local competition and high patient booking drop-offs with fragmented local search presence.',
    strategy: 'Implemented localized Google Search campaigns with call tracking, geo-targeted Meta promotional funnels, and an automated SMS confirmation flow.',
    result: 'Booked 1,420 new patient consultations across their 8 clinical centers within 4 months, maintaining a 3.2x ROAS and an 88% appointment show-up rate.',
    chartData: [
      { label: 'Center 1-2', before: 110, after: 290 },
      { label: 'Center 3-4', before: 95, after: 310 },
      { label: 'Center 5-6', before: 80, after: 275 },
      { label: 'Center 7-8', before: 70, after: 260 }
    ],
    quote: {
      text: 'Our treatment calendars were filled within 3 weeks of campaign activation. The appointment tracking systems gave us full revenue visibility.',
      author: 'Dr. Arthur Sterling',
      role: 'Chief Medical Officer, Apex Health'
    }
  },
  {
    id: 'personal-brand',
    title: 'Founder Thought Leadership & Authority',
    client: 'Aether Capital',
    industry: 'Fintech & Investment',
    headlineMetric: '+240%',
    metricLabel: 'Organic Reach & Investor Inbound',
    challenge: 'A prominent fintech investment fund founder wanted to establish national authority and drive proprietary deal flow without spending on traditional PR retainers.',
    strategy: 'Built an organic content engine combining weekly data-driven LinkedIn essays, short-form video breakdowns of macroeconomic trends, and an executive newsletter.',
    result: 'Grew founder audience from 14K to 92K followers, generating 14 proprietary co-investment opportunities and tier-1 media invitations on Bloomberg & CNBC.',
    chartData: [
      { label: 'Month 1', before: 14, after: 22 },
      { label: 'Month 2', before: 16, after: 38 },
      { label: 'Month 3', before: 18, after: 54 },
      { label: 'Month 4', before: 20, after: 72 },
      { label: 'Month 5', before: 22, after: 84 },
      { label: 'Month 6', before: 24, after: 92 }
    ],
    quote: {
      text: 'NEXORA turned my ideas into a compounding media engine. The credibility established has been our greatest source of proprietary deal flow.',
      author: 'Julian Thorne',
      role: 'Managing Partner, Aether Capital'
    }
  }
];

export const WHY_CHOOSE_US: BenefitItem[] = [
  {
    id: 'strategy-first',
    title: 'Strategy First',
    description: 'Every campaign starts with a clear business objective, not random tactics or vanity metrics.',
    iconName: 'Compass',
    deliverables: [
      'Revenue-focused channel roadmap',
      'Competitive moat analysis',
      'Realistic unit economic forecasting'
    ]
  },
  {
    id: 'data-driven',
    title: 'Data Driven',
    description: 'Decisions are supported by measurable performance data, server-side telemetry, and statistical significance.',
    iconName: 'Activity',
    deliverables: [
      'Server-side first-party attribution',
      'Cross-platform reconciliation',
      'Cohort LTV & payback modeling'
    ]
  },
  {
    id: 'creative-converts',
    title: 'Creative That Converts',
    description: 'Creative work is designed to attract attention, establish emotional resonance, and drive profitable action.',
    iconName: 'Zap',
    deliverables: [
      'Direct-response visual psychology',
      'High-velocity creative iteration',
      'Custom motion & live-action scripts'
    ]
  },
  {
    id: 'continuous-optimization',
    title: 'Continuous Optimization',
    description: 'We continuously test, analyze, and improve performance—compounding gains week over week.',
    iconName: 'TrendingUp',
    deliverables: [
      'Multivariate A/B landing experiments',
      'Bid & budget algorithmic scaling',
      'Elimination of wasted ad spend'
    ]
  }
];

export const PROCESS_STEPS: ProcessPhase[] = [
  {
    step: '01',
    title: 'Discovery Call',
    timeframe: 'Day 1–3',
    description: 'We conduct an intensive 45-minute strategic deep dive into your business model, current blockers, and revenue targets.',
    deliverable: 'Initial Growth Opportunity Assessment'
  },
  {
    step: '02',
    title: 'Market & Competitor Research',
    timeframe: 'Day 4–10',
    description: 'We dissect your competitors ad spend, creative strategies, keyword portfolios, and conversion funnels.',
    deliverable: 'Competitive Landscape & Channel Audit'
  },
  {
    step: '03',
    title: 'Growth Strategy',
    timeframe: 'Day 11–16',
    description: 'We construct a mathematically grounded growth architecture, channel budget allocation, and target KPI model.',
    deliverable: '90-Day Execution Blueprint & Financial Model'
  },
  {
    step: '04',
    title: 'Campaign Development',
    timeframe: 'Day 17–25',
    description: 'Our creative team designs high-converting ad assets, landing pages, copy, and backend email sequences.',
    deliverable: 'Complete Creative Suite & Staged Funnels'
  },
  {
    step: '05',
    title: 'Launch',
    timeframe: 'Day 26–30',
    description: 'Campaigns are deployed across verified tracking pixels with controlled budget pacing and algorithmic learning oversight.',
    deliverable: 'Live Campaigns on Tier-1 Platforms'
  },
  {
    step: '06',
    title: 'Measurement & Optimization',
    timeframe: 'Ongoing Sprint',
    description: 'Continuous A/B multivariate testing, attribution auditing, budget scaling, and weekly transparent reporting.',
    deliverable: 'Weekly Live Dashboards & Scaling Sprints'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    clientName: 'Sarah Jenkins',
    jobTitle: 'Chief Growth Officer',
    company: 'Novus Retail Group',
    rating: 5,
    testimonial: 'NEXORA helped us scale our digital revenue from $350K to $1.2M per month in under seven months. Their relentless focus on unit economics and creative velocity made all the difference.',
    verifiedRoi: '+240% Net E-commerce Revenue'
  },
  {
    id: 'testimonial-2',
    clientName: 'David Zhang',
    jobTitle: 'Founder & CEO',
    company: 'Synapse Cloud Technologies',
    rating: 5,
    testimonial: 'Most agencies hand you vanity reports with impressions and clicks. NEXORA came in with pipeline metrics, SQLs, and closed-won revenue attribution. They are our most trusted growth partner.',
    verifiedRoi: '143% Increase in Enterprise SQLs'
  },
  {
    id: 'testimonial-3',
    clientName: 'Claire Beaumont',
    jobTitle: 'Head of Global Brand',
    company: 'Lumiere Skincare Paris',
    rating: 5,
    testimonial: 'Their creative execution matched our ultra-luxury brand standards while their media buying delivered a sustained 4.1x ROAS. Finding an agency that excels at both creative and data is exceptionally rare.',
    verifiedRoi: '4.1x Blended Global ROAS'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce & DTC',
    description: 'High-velocity creative testing, catalog remarketing, and lifecycle flows that maximize customer lifetime value.',
    iconName: 'ShoppingBag',
    growthLever: 'Omni-channel ROAS & LTV Expansion',
    typicalRoi: '3.5× – 5.8×'
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    description: 'Precision account-based marketing, self-serve free trial funnels, and enterprise sales pipeline generation.',
    iconName: 'Cpu',
    growthLever: 'Reduced CAC & Sales Qualified Pipeline',
    typicalRoi: '+140% SQLs'
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    description: 'Student enrollment funnels, high-trust webinar marketing, and automated application nurture campaigns.',
    iconName: 'GraduationCap',
    growthLever: 'Cost-per-enrolled student reduction',
    typicalRoi: '-38% CAC'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & MedTech',
    description: 'HIPAA-compliant patient acquisition, local clinic booking funnels, and patient trust-building content.',
    iconName: 'Stethoscope',
    growthLever: 'Qualified Consultation Bookings',
    typicalRoi: '3.2× ROAS'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & PropTech',
    description: 'High-net-worth investor acquisition, luxury development lead generation, and interactive property showcases.',
    iconName: 'Building2',
    growthLever: 'HNW Qualified Buyer Inbounds',
    typicalRoi: '4.5× Pipeline'
  },
  {
    id: 'finance',
    name: 'Finance & Fintech',
    description: 'Compliant financial lead funnels, retail app install campaigns, and high-trust institutional content.',
    iconName: 'Coins',
    growthLever: 'Funded Account Conversions',
    typicalRoi: '+165% Growth'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Travel',
    description: 'Direct booking optimization, seasonal demand generation, and luxury experiential brand campaigns.',
    iconName: 'Hotel',
    growthLever: 'Direct Bookings vs OTAs',
    typicalRoi: '+48% Direct'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Partner-level lead generation for legal, advisory, architectural, and management consulting firms.',
    iconName: 'Briefcase',
    growthLever: 'Retainer Client Acquisition',
    typicalRoi: '5.0× Return'
  },
  {
    id: 'startups',
    name: 'Venture-Backed Startups',
    description: 'Product-market fit validation, rapid customer acquisition sprints, and investor-ready growth traction metrics.',
    iconName: 'Rocket',
    growthLever: 'Speed-to-Scale & MoM Trajectory',
    typicalRoi: '+210% MoM'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'ai-changing-marketing',
    title: 'How AI Is Changing Digital Marketing: The Death of Generic Creative',
    category: 'AI & Innovation',
    excerpt: 'Algorithmic ad platforms have commoditized basic media buying. Why proprietary creative strategy is now the single largest leverage point in paid acquisition.',
    readTime: '6 min read',
    date: 'Sep 2026',
    author: {
      name: 'Julian Sterling',
      role: 'Director of Growth Strategy'
    },
    contentParagraphs: [
      'The modern digital ad network is essentially a black box powered by machine learning. Meta Advantage+ and Google Performance Max do not need human media buyers to manually toggle dayparting or micro-target interests; their algorithms do this better and faster.',
      'As machine optimization becomes ubiquitous, the competitive advantage shifts entirely to the input: creative strategy, hook velocity, direct response psychology, and offer positioning. Brands that succeed in 2026 are those operating like rapid content production studios.',
      'To capitalize on this shift, brands must decouple media buying from basic ad placement and invest in modular creative testing frameworks that stress-test 20+ hooks per week.'
    ]
  },
  {
    id: 'why-website-losing-customers',
    title: 'Why Your Website Is Losing Customers: 7 Silent Conversion Leaks',
    category: 'Conversion Optimization',
    excerpt: 'From cognitive friction to misaligned value propositions, discover the subtle psychological mistakes draining your revenue before checkout.',
    readTime: '8 min read',
    date: 'Aug 2026',
    author: {
      name: 'Maya Lin',
      role: 'Head of CRO & UX'
    },
    contentParagraphs: [
      'Most marketing executives believe their traffic problem is an acquisition problem. In over 80% of our enterprise audits, the true bottleneck is on-page cognitive friction.',
      'When prospective buyers land on your digital storefront or landing page, they ask three unconscious questions within 1.8 seconds: Am I in the right place? Can I trust these people? What is my exact next step?',
      'By streamlining the decision hierarchy, removing competing calls to action, and introducing contextual micro-proof points adjacent to conversion buttons, our clients routinely experience 25% to 40% immediate lifts in conversion rate.'
    ]
  },
  {
    id: 'seo-age-ai-search',
    title: 'SEO in the Age of AI Search: Navigating Google SGE and Perplexity',
    category: 'Search Engine Optimization',
    excerpt: 'Search is no longer 10 blue links. How to optimize your brand for semantic entity authority and Generative Engine Optimization (GEO).',
    readTime: '7 min read',
    date: 'Aug 2026',
    author: {
      name: 'Evan Ross',
      role: 'Principal SEO Architect'
    },
    contentParagraphs: [
      'Generative AI search engines don’t just index keywords—they ingest and synthesize knowledge. If your brand is not recognized as an authoritative semantic entity in your niche, AI summaries will bypass your content entirely.',
      'Modern GEO (Generative Engine Optimization) demands first-party research, unique proprietary data sets, expert executive quotes, and clear structured data schemas.',
      'Brands that thrive in the next decade of organic discovery will be those producing authoritative, citation-worthy insights that AI models are forced to credit as primary sources.'
    ]
  },
  {
    id: 'high-converting-landing-page',
    title: 'Building a High-Converting Landing Page: The 8-Point Visual Architecture',
    category: 'Design & UX',
    excerpt: 'A blueprint breakdown of wireframes, typography contrast, social proof placement, and mobile viewport hierarchy that drive 6%+ conversion rates.',
    readTime: '5 min read',
    date: 'Jul 2026',
    author: {
      name: 'Soren Patel',
      role: 'Creative Director'
    },
    contentParagraphs: [
      'A landing page is not a miniature corporate homepage; it is a dedicated persuasion corridor. Every element must either remove a barrier or intensify the desire to act.',
      'Our 8-point architecture centers around a high-contrast hero viewport, quantified outcome headlines, dynamic social proof tickers, visual product transparency, and an objection-crushing FAQ grid.',
      'Pairing these visual anchors with sub-second page loads ensures your paid ad traffic converts into pipeline before attention wanes.'
    ]
  },
  {
    id: 'psychology-high-performing-ads',
    title: 'The Psychology Behind High-Performing Ads: Why Curiosity Wins Over Features',
    category: 'Paid Advertising',
    excerpt: 'Feature lists bore prospects. Discover the three emotional triggers that stop the infinite thumb scroll and compel prospects to click.',
    readTime: '6 min read',
    date: 'Jul 2026',
    author: {
      name: 'Elena Vance',
      role: 'Head of Paid Media'
    },
    contentParagraphs: [
      'Consumers do not log onto Instagram, YouTube, or TikTok looking for software or products to buy. They are seeking entertainment, validation, or relief from boredom.',
      'To convert cold prospects, ads must disrupt the expectation pattern. The most effective direct-response creatives open with a curiosity gap, validate an existing unspoken frustration, and reveal the solution as the only logical conclusion.',
      'When you engineer creative around human cognitive biases rather than technical specifications, ad fatigue drops and cost-per-acquisition plummets.'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What does a digital marketing agency do?',
    answer: 'A modern digital marketing agency like NEXORA DIGITAL acts as your dedicated growth engine. We combine data-driven strategy, multi-channel media buying (Meta, Google, LinkedIn), search engine optimization (SEO), conversion rate optimization (CRO), direct-response creative, and lifecycle email automation to turn customer attention into predictable, compounding business revenue.',
    category: 'General'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'For paid acquisition (Google Ads, Meta, LinkedIn), we typically see initial performance signals, lead flow, and early sales within the first 14 to 21 days of campaign launch. For compounding organic channels like SEO and content marketing, meaningful domain authority and sustained organic rank increases typically manifest within 90 to 120 days.',
    category: 'Timeline'
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes. While we manage enterprise and mid-market growth programs, we regularly partner with high-ambition early-stage startups and established small businesses that have proven product-market fit and are ready to systematically scale acquisition. We tailor our modular retainers based on your stage and capital constraints.',
    category: 'Partnership'
  },
  {
    question: 'Do you offer customized marketing strategies?',
    answer: 'Every single partnership begins with a bespoke growth blueprint. We never deploy generic cookie-cutter templates. We analyze your unit economics, profit margins, competitor landscape, and target customer journey to build a custom multi-channel roadmap engineered specifically for your goals.',
    category: 'Strategy'
  },
  {
    question: 'Can you manage our social media?',
    answer: 'Yes. Our social media marketing service spans organic content creation, short-form video production (Reels, TikTok, Shorts), executive founder thought leadership, community engagement, and paid social amplification to build genuine brand authority.',
    category: 'Services'
  },
  {
    question: 'Do you provide SEO?',
    answer: 'Absolutely. We provide full-stack SEO encompassing technical Core Web Vitals audits, commercial keyword architecture, semantic entity optimization for AI search engines (Google SGE & Perplexity), high-converting content hubs, and authoritative digital PR backlink acquisition.',
    category: 'Services'
  },
  {
    question: 'How do you measure campaign success?',
    answer: 'We measure success through bottom-line commercial metrics: Net Revenue Growth, Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), Pipeline Value, and Customer Lifetime Value (LTV). We implement server-side tracking (CAPI) and provide you with a real-time executive dashboard so you have 100% transparency into every dollar spent.',
    category: 'Reporting'
  },
  {
    question: 'How do we get started?',
    answer: 'Getting started is simple. Book a 30-minute Strategy Call using our consultation form. We will conduct an initial preliminary audit of your current digital footprint, discuss your 12-month revenue goals, and present an actionable growth framework designed for your business.',
    category: 'Onboarding'
  }
];
