export const valueStrip = [
  { title: "STRATEGY", body: "Objectives before tactics." },
  { title: "CREATIVE", body: "Design that earns attention." },
  { title: "TECHNOLOGY", body: "Modern, practical builds." },
  { title: "PERFORMANCE", body: "Measured, then improved." },
];

export const whyZelvryq = [
  {
    title: "STRATEGY FIRST",
    body: "We don't just create content or campaigns. We start with the business objective.",
  },
  {
    title: "CREATIVE THAT CONNECTS",
    body: "Creative should capture attention and communicate a clear message.",
  },
  {
    title: "TECHNOLOGY THAT WORKS",
    body: "We use modern technology to build practical digital solutions.",
  },
  {
    title: "DATA-DRIVEN GROWTH",
    body: "Measure what matters and continuously improve.",
  },
  {
    title: "ONE DIGITAL PARTNER",
    body: "Marketing, branding, web and technology under one roof.",
  },
  {
    title: "BUILT FOR GROWTH",
    body: "Solutions designed to evolve as the business grows.",
  },
];

export const industries = [
  { name: "Education", body: "Schools, coaching institutes and training academies building admissions demand." },
  { name: "Restaurants & Cafes", body: "Menus, footfall campaigns, delivery visibility and food content." },
  { name: "Real Estate", body: "Project microsites, enquiry funnels and walkthrough content." },
  { name: "Retail", body: "Store visibility, local search presence and seasonal campaigns." },
  { name: "E-commerce", body: "Catalogue-led stores, product content and performance marketing." },
  { name: "Startups", body: "Brand foundations, launch sites and early traction experiments." },
  { name: "Healthcare", body: "Clinic presence, appointment journeys and trustworthy communication." },
  { name: "Hospitality", body: "Hotels and resorts needing direct bookings and visual storytelling." },
  { name: "Professional Services", body: "Consultants, agencies and firms building credibility and pipeline." },
  { name: "Local Businesses", body: "Google Business Profile, local SEO and neighbourhood campaigns." },
  { name: "Technology", body: "Product sites, technical content and demand generation." },
  { name: "D2C Brands", body: "Brand identity, creative volume and paid growth." },
];

export interface Project {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  technology: string[];
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  result: string;
  isDemo: boolean;
}

/**
 * DEMO CONTENT — REPLACE BEFORE LAUNCH.
 * These are clearly-labelled placeholder projects. No client names,
 * metrics or results are real. Replace with verified case studies.
 */
export const projects: Project[] = [
  {
    slug: "demo-education-brand",
    name: "Demo Project — Education Brand",
    industry: "Education",
    services: ["Brand Identity", "Website Development", "Social Media Marketing"],
    technology: ["Modern web stack", "Analytics", "Enquiry automation"],
    summary:
      "Placeholder case study showing how an admissions-focused brand and website programme is structured.",
    challenge:
      "Placeholder: an institution with strong academic outcomes but an inconsistent brand and no digital admissions journey.",
    approach:
      "Placeholder: positioning workshop, admissions funnel mapping and a content plan built around the enquiry calendar.",
    solution:
      "Placeholder: identity system, admissions website with enquiry routing, and a monthly social content engine.",
    result: "Verified results will be published here once a live engagement is complete.",
    isDemo: true,
  },
  {
    slug: "demo-cafe-launch",
    name: "Demo Project — Cafe Launch",
    industry: "Restaurants & Cafes",
    services: ["Logo Design", "Content Creation", "Meta Ads", "Local SEO"],
    technology: ["Google Business Profile", "Meta Ads Manager"],
    summary:
      "Placeholder case study outlining a launch programme for a new hospitality venue.",
    challenge:
      "Placeholder: a new cafe opening in a competitive area with no audience and no visual identity.",
    approach:
      "Placeholder: launch calendar, food photography plan and a hyper-local paid strategy.",
    solution:
      "Placeholder: brand identity, menu and signage design, launch reel series and local search setup.",
    result: "Verified results will be published here once a live engagement is complete.",
    isDemo: true,
  },
  {
    slug: "demo-real-estate-funnel",
    name: "Demo Project — Real Estate Funnel",
    industry: "Real Estate",
    services: ["Lead Generation", "Google Ads", "Landing Pages"],
    technology: ["Conversion tracking", "CRM routing"],
    summary:
      "Placeholder case study for a project enquiry funnel with qualified lead routing.",
    challenge:
      "Placeholder: high advertising spend producing unqualified enquiries with slow follow-up.",
    approach:
      "Placeholder: intent-based campaign structure with qualification questions and instant routing.",
    solution:
      "Placeholder: project landing pages, search campaigns and WhatsApp lead notification.",
    result: "Verified results will be published here once a live engagement is complete.",
    isDemo: true,
  },
  {
    slug: "demo-d2c-store",
    name: "Demo Project — D2C Store",
    industry: "E-commerce",
    services: ["E-commerce Development", "Creative Campaigns", "Analytics"],
    technology: ["Payment gateway", "E-commerce tracking"],
    summary:
      "Placeholder case study describing a store rebuild and creative testing programme.",
    challenge:
      "Placeholder: a growing product brand losing customers at a slow, cluttered checkout.",
    approach:
      "Placeholder: catalogue restructure, checkout simplification and a creative testing calendar.",
    solution:
      "Placeholder: rebuilt store, product content system and performance creative pipeline.",
    result: "Verified results will be published here once a live engagement is complete.",
    isDemo: true,
  },
];

export const processSteps = [
  { no: "01", title: "DISCOVER", body: "Understand your business, audience and goals." },
  { no: "02", title: "STRATEGIZE", body: "Build a clear roadmap." },
  { no: "03", title: "CREATE", body: "Develop the brand, content and digital experience." },
  { no: "04", title: "BUILD", body: "Develop websites, campaigns and technology." },
  { no: "05", title: "LAUNCH", body: "Deploy campaigns and digital products." },
  { no: "06", title: "OPTIMIZE", body: "Measure performance and continuously improve." },
];

export interface PackageGroup {
  id: string;
  title: string;
  intro: string;
  tiers: {
    name: string;
    price: string;
    priceNote: string;
    features: string[];
    featured?: boolean;
  }[];
}

/** Prices are PLACEHOLDER values — REPLACE BEFORE LAUNCH. */
export const packageGroups: PackageGroup[] = [
  {
    id: "social-media",
    title: "SOCIAL MEDIA PACKAGES",
    intro: "Content systems that keep your brand visible and consistent.",
    tiers: [
      {
        name: "STARTER",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price",
        features: [
          "Social media management",
          "Monthly content calendar",
          "Static creatives",
          "Basic reporting",
        ],
      },
      {
        name: "GROWTH",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price",
        featured: true,
        features: [
          "Social media management",
          "Higher creative volume",
          "Reels and short-form video",
          "Content strategy",
          "Analytics reporting",
        ],
      },
      {
        name: "PRO",
        price: "Custom Pricing",
        priceNote: "Scoped per brand",
        features: [
          "Full social media management",
          "High-volume content production",
          "Reels and video series",
          "Channel and campaign strategy",
          "Community management",
          "Detailed monthly reporting",
        ],
      },
    ],
  },
  {
    id: "seo",
    title: "SEO PACKAGES",
    intro: "Organic visibility built on technical health and real content.",
    tiers: [
      {
        name: "STARTER",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price",
        features: ["Technical audit", "On-page optimisation", "Local SEO setup", "Monthly rank report"],
      },
      {
        name: "GROWTH",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price",
        featured: true,
        features: [
          "Ongoing technical fixes",
          "Keyword and content plan",
          "Content production",
          "Internal linking",
          "Traffic and conversion reporting",
        ],
      },
      {
        name: "PRO",
        price: "Custom Pricing",
        priceNote: "Scoped per site",
        features: [
          "Full-stack SEO programme",
          "Content at scale",
          "Authority building",
          "CRO recommendations",
          "Executive reporting",
        ],
      },
    ],
  },
  {
    id: "website",
    title: "WEBSITE PACKAGES",
    intro: "From a credible first site to advanced platforms.",
    tiers: [
      {
        name: "STARTER WEBSITE",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price",
        features: ["Up to 5 pages", "Responsive design", "Enquiry form", "Basic SEO setup"],
      },
      {
        name: "BUSINESS WEBSITE",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price",
        featured: true,
        features: [
          "Custom design system",
          "Up to 12 pages",
          "SEO structure and metadata",
          "WhatsApp and analytics integration",
          "Content structuring",
        ],
      },
      {
        name: "ADVANCED WEBSITE",
        price: "Custom Pricing",
        priceNote: "Scoped per project",
        features: [
          "Custom templates and modules",
          "E-commerce or application features",
          "API and payment integrations",
          "Performance optimisation",
          "Maintenance plan",
        ],
      },
    ],
  },
  {
    id: "ads",
    title: "ADS PACKAGES",
    intro: "Paid media managed with proper tracking and weekly optimisation.",
    tiers: [
      {
        name: "STARTER ADS",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price · excludes media spend",
        features: ["One platform", "Campaign setup", "Conversion tracking", "Monthly report"],
      },
      {
        name: "GROWTH ADS",
        price: "Starting From ₹XX,XXX",
        priceNote: "Placeholder price · excludes media spend",
        featured: true,
        features: [
          "Google and Meta",
          "Creative production",
          "Retargeting funnels",
          "Weekly optimisation",
          "Monthly reporting",
        ],
      },
      {
        name: "PERFORMANCE ADS",
        price: "Custom Pricing",
        priceNote: "Scoped per account · excludes media spend",
        features: [
          "Multi-channel media plan",
          "Continuous creative testing",
          "Landing page builds",
          "Advanced tracking",
          "Strategic reviews",
        ],
      },
    ],
  },
];

export const founders = [
  {
    name: "KARAN",
    role: "Founder",
    bio: "Karan is one of the founders of ZELVRYQ, focused on building the company's vision and digital solutions.",
    initials: "K",
  },
  {
    name: "AJAY",
    role: "Founder",
    bio: "Ajay is one of the founders of ZELVRYQ, contributing to the company's strategy, growth and creative direction.",
    initials: "A",
  },
];

export const faqs = [
  {
    q: "What services does ZELVRYQ provide?",
    a: "We work across four pillars: digital marketing and performance, branding and creative, web and technology, and growth strategy. That includes social media, SEO, Google and Meta Ads, brand identity, content production, websites, e-commerce, web and mobile applications, and lead generation.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. We are based in Dehradun, India and work with clients internationally. Communication runs over email, calls and video, with meeting times agreed around your timezone.",
  },
  {
    q: "Can you manage our social media completely?",
    a: "Yes. A full engagement covers strategy, content calendar, creative production, publishing, community management and monthly reporting.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes — technical SEO, on-page optimisation, content, local SEO and reporting. We do not promise guaranteed rankings, because no agency can control search algorithms.",
  },
  {
    q: "Can you run Google and Meta Ads?",
    a: "Yes. We handle account setup or audit, campaign structure, creative, conversion tracking and ongoing optimisation. Media spend is paid directly to the platform.",
  },
  {
    q: "Can you build our website?",
    a: "Yes. We design and develop business websites, e-commerce stores and custom web applications with SEO foundations and analytics included.",
  },
  {
    q: "Can you redesign our existing website?",
    a: "Yes. We audit the current site, retain what performs and rebuild the rest, protecting existing search equity through proper redirects.",
  },
  {
    q: "Do you provide e-commerce development?",
    a: "Yes — catalogue architecture, product and checkout experience, payment gateway integration and e-commerce tracking.",
  },
  {
    q: "Can you create our brand identity?",
    a: "Yes. Brand strategy, logo system, colour and typography, guidelines and collateral templates are all handled in-house.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Yes. Published packages are starting points; most engagements are scoped to the business after an initial consultation.",
  },
  {
    q: "How do we start a project?",
    a: "Send a project enquiry or message us on WhatsApp. We schedule a free consultation, understand your goals, and share a scope and proposal.",
  },
];

/** DEMO CONTENT — REPLACE BEFORE LAUNCH */
export const insights = [
  {
    slug: "why-strategy-precedes-content",
    title: "Why Strategy Should Always Precede Content",
    category: "Business Growth",
    date: "2026-01-12",
    excerpt:
      "Demo article. Content without a defined objective becomes noise. A short framework for deciding what to publish and why.",
  },
  {
    slug: "local-seo-checklist",
    title: "A Practical Local SEO Checklist for Indian Businesses",
    category: "SEO",
    date: "2026-01-26",
    excerpt:
      "Demo article. The fundamentals of local visibility: profile completeness, categories, reviews and location pages.",
  },
  {
    slug: "creative-testing-on-meta",
    title: "Creative Testing on Meta Without Wasting Budget",
    category: "Social Media",
    date: "2026-02-09",
    excerpt:
      "Demo article. How to structure a testing calendar so learnings compound instead of resetting every month.",
  },
  {
    slug: "brand-systems-not-logos",
    title: "Brand Systems, Not Just Logos",
    category: "Branding",
    date: "2026-02-23",
    excerpt:
      "Demo article. Why guidelines, templates and tone of voice matter more than the mark itself.",
  },
  {
    slug: "site-speed-and-conversion",
    title: "Site Speed Is a Conversion Feature",
    category: "Web Development",
    date: "2026-03-08",
    excerpt:
      "Demo article. Where performance is usually lost, and the fixes that make the biggest difference.",
  },
  {
    slug: "practical-ai-for-small-teams",
    title: "Practical AI for Small Marketing Teams",
    category: "AI & Technology",
    date: "2026-03-22",
    excerpt:
      "Demo article. Where automation genuinely saves time, and where human judgement still wins.",
  },
];
