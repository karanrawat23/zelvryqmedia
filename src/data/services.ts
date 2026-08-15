export type Pillar = "digital" | "creative" | "web" | "growth";

export interface PillarDef {
  id: Pillar;
  title: string;
  kicker: string;
  description: string;
  services: string[];
}

export const pillars: PillarDef[] = [
  {
    id: "digital",
    title: "DIGITAL",
    kicker: "Digital Marketing & Performance",
    description:
      "Campaigns, channels and search visibility engineered around business outcomes — not vanity metrics.",
    services: [
      "Social Media Marketing",
      "Social Media Management",
      "Search Engine Optimization",
      "Local SEO",
      "Google Ads",
      "Meta Ads",
      "PPC Campaigns",
      "Content Marketing",
      "Email Marketing",
      "Lead Generation",
      "Digital Marketing Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    id: "creative",
    title: "CREATIVE",
    kicker: "Branding & Content",
    description:
      "Identity, design and content systems that make a brand recognisable and worth remembering.",
    services: [
      "Logo Design",
      "Brand Identity",
      "Brand Strategy",
      "Graphic Design",
      "Social Media Creatives",
      "Content Creation",
      "Video Production",
      "Reels",
      "Product Photography",
      "Creative Campaigns",
      "Marketing Collateral",
    ],
  },
  {
    id: "web",
    title: "WEB",
    kicker: "Web & Technology",
    description:
      "Fast, accessible websites, stores and applications built on modern, maintainable technology.",
    services: [
      "Website Design",
      "Website Development",
      "Business Websites",
      "E-commerce Development",
      "Custom Web Applications",
      "Web-based Software",
      "Mobile Applications",
      "Payment Gateway Integration",
      "API Integration",
      "Website Maintenance",
      "Website Optimization",
    ],
  },
  {
    id: "growth",
    title: "GROWTH",
    kicker: "Strategy & Business Growth",
    description:
      "The strategic layer that ties marketing, creative and technology to measurable business progress.",
    services: [
      "Marketing Strategy",
      "Brand Strategy",
      "Campaign Strategy",
      "Lead Generation",
      "Conversion Optimization",
      "Analytics",
      "Reputation Management",
      "Digital Consultancy",
    ],
  },
];

export interface ServicePage {
  slug: string;
  pillar: Pillar;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string;
  problem: string[];
  solution: string[];
  includes: string[];
  benefits: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const defaultProcessNote =
  "Every engagement follows the ZELVRYQ six-step process: Discover, Strategize, Create, Build, Launch, Optimize.";

export const processNote = defaultProcessNote;

export const servicePages: ServicePage[] = [
  {
    slug: "digital-marketing",
    pillar: "digital",
    title: "Digital Marketing",
    metaTitle: "Digital Marketing Agency in Dehradun | ZELVRYQ",
    metaDescription:
      "Full-service digital marketing from ZELVRYQ — strategy, social, search, ads and analytics built around your business objectives.",
    hero: "Marketing that starts with the business objective, not the channel.",
    intro:
      "We plan, run and measure digital marketing programmes for businesses in India and internationally — combining organic, paid and content channels into one coherent system.",
    problem: [
      "Marketing activity is scattered across channels with no shared plan.",
      "Spend goes out every month, but reporting does not explain what it produced.",
      "Content is published inconsistently and rarely tied to a business goal.",
      "Different vendors handle social, ads and website — nobody owns the outcome.",
    ],
    solution: [
      "A single marketing plan covering audience, message, channels and budget.",
      "Channel execution handled in-house: social, search, ads, email and content.",
      "Tracking configured properly so every enquiry can be attributed.",
      "A monthly review cycle where decisions are made from data, not opinion.",
    ],
    includes: [
      "Digital marketing strategy & roadmap",
      "Social media marketing and management",
      "Search engine optimization and local SEO",
      "Google Ads and Meta Ads management",
      "Content marketing and email marketing",
      "Lead generation campaigns",
      "Analytics, tracking and monthly reporting",
    ],
    benefits: [
      { title: "One accountable partner", body: "Strategy, creative and media handled by one team." },
      { title: "Clear measurement", body: "Tracking and reporting configured from day one." },
      { title: "Compounding output", body: "Organic and paid channels reinforce each other over time." },
    ],
    faqs: [
      {
        q: "How long before we see results?",
        a: "Paid channels can produce enquiries within weeks; SEO and content typically need three to six months of consistent work. We do not guarantee specific results.",
      },
      {
        q: "Do you work on retainers or projects?",
        a: "Both. Marketing usually works best as a monthly retainer, while strategy and launches can run as fixed-scope projects.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    pillar: "digital",
    title: "Social Media Marketing",
    metaTitle: "Social Media Marketing & Management | ZELVRYQ",
    metaDescription:
      "Social media marketing and management by ZELVRYQ — content strategy, creatives, reels, community management and reporting.",
    hero: "Social profiles that behave like a brand, not a noticeboard.",
    intro:
      "We build content systems that keep your brand visible, consistent and recognisable across Instagram, Facebook, LinkedIn and YouTube.",
    problem: [
      "Posting is irregular and the feed looks visually inconsistent.",
      "Content gets likes but does not move anyone toward an enquiry.",
      "There is no calendar, so every week starts from zero.",
      "Comments and DMs go unanswered for days.",
    ],
    solution: [
      "A monthly content calendar mapped to campaigns and business events.",
      "A defined visual system so every creative is unmistakably yours.",
      "A mix of static, carousel, reel and story formats per platform.",
      "Community management with defined response guidelines.",
    ],
    includes: [
      "Platform audit and content strategy",
      "Monthly content calendar",
      "Static creatives and carousels",
      "Reels and short-form video",
      "Copywriting and hashtag strategy",
      "Community management",
      "Monthly performance reporting",
    ],
    benefits: [
      { title: "Consistency", body: "A calendar you can rely on every month." },
      { title: "Recognition", body: "A distinct visual language across every post." },
      { title: "Direction", body: "Content that leads somewhere — profile, site or DM." },
    ],
    faqs: [
      {
        q: "Do you shoot content locally?",
        a: "Yes, shoots can be arranged in and around Dehradun. For remote clients we work from supplied footage or plan a shoot schedule.",
      },
      { q: "Can you manage our profiles completely?", a: "Yes — planning, creatives, publishing, community management and reporting." },
    ],
  },
  {
    slug: "seo",
    pillar: "digital",
    title: "Search Engine Optimization",
    metaTitle: "SEO & Local SEO Services | ZELVRYQ",
    metaDescription:
      "Technical, on-page, local and content SEO from ZELVRYQ — built to earn qualified organic traffic sustainably.",
    hero: "Be found by people already searching for what you do.",
    intro:
      "SEO at ZELVRYQ covers the full stack: technical health, on-page structure, content depth, local presence and authority building.",
    problem: [
      "The site does not rank for the terms customers actually type.",
      "Technical issues quietly block indexing and slow the site down.",
      "Pages are thin and do not answer real buyer questions.",
      "The Google Business Profile is incomplete or unmanaged.",
    ],
    solution: [
      "A technical audit and fix plan covering speed, crawlability and structure.",
      "Keyword and intent research mapped to a page architecture.",
      "On-page optimisation and substantial content built page by page.",
      "Local SEO: profile optimisation, citations and review strategy.",
    ],
    includes: [
      "Technical SEO audit and fixes",
      "Keyword and competitor research",
      "On-page optimisation",
      "Content planning and creation",
      "Local SEO and Google Business Profile",
      "Internal linking and site architecture",
      "Rank, traffic and conversion reporting",
    ],
    benefits: [
      { title: "Durable traffic", body: "Rankings keep working after the invoice is paid." },
      { title: "Better qualified visits", body: "Intent-matched pages attract buyers, not browsers." },
      { title: "Faster site", body: "Technical work improves experience for every visitor." },
    ],
    faqs: [
      { q: "Can you guarantee first position?", a: "No credible agency can. We commit to the work, the reporting and continuous improvement." },
      { q: "Do you handle local SEO?", a: "Yes — Google Business Profile, local landing pages, citations and review strategy." },
    ],
  },
  {
    slug: "google-ads",
    pillar: "digital",
    title: "Google Ads",
    metaTitle: "Google Ads Management | PPC Agency | ZELVRYQ",
    metaDescription:
      "Google Ads management from ZELVRYQ — search, performance max and remarketing campaigns with conversion tracking done properly.",
    hero: "Capture demand the moment it appears.",
    intro:
      "We build and manage Google Ads accounts with tight structure, accurate conversion tracking and landing pages that respect the click.",
    problem: [
      "Budget is spent on broad keywords with no negative list.",
      "Conversions are not tracked, so optimisation is guesswork.",
      "Ads point to a homepage instead of a relevant page.",
      "Nobody reviews search terms or bidding on a regular basis.",
    ],
    solution: [
      "Account structure by intent, with a disciplined negative keyword strategy.",
      "Conversion tracking for calls, forms and WhatsApp enquiries.",
      "Landing pages aligned to each ad group's promise.",
      "Weekly optimisation and transparent cost-per-enquiry reporting.",
    ],
    includes: [
      "Account audit or fresh build",
      "Keyword and competitor research",
      "Search, Performance Max and remarketing campaigns",
      "Ad copywriting and extensions",
      "Conversion tracking setup",
      "Landing page recommendations",
      "Weekly optimisation and monthly reporting",
    ],
    benefits: [
      { title: "Fast feedback", body: "Learn what messaging converts within weeks." },
      { title: "Cost control", body: "Spend is monitored against cost per qualified enquiry." },
      { title: "Full visibility", body: "You own the ad account and the data." },
    ],
    faqs: [
      { q: "Is ad spend included in the fee?", a: "No. Media spend is paid directly to Google; our fee covers strategy and management." },
      { q: "What is a sensible starting budget?", a: "It depends on your industry and geography — we recommend a budget after keyword research." },
    ],
  },
  {
    slug: "meta-ads",
    pillar: "digital",
    title: "Meta Ads",
    metaTitle: "Meta Ads — Facebook & Instagram Advertising | ZELVRYQ",
    metaDescription:
      "Facebook and Instagram advertising by ZELVRYQ — creative-led campaigns, audience testing and clean conversion tracking.",
    hero: "Creative-led advertising on Instagram and Facebook.",
    intro:
      "On Meta, creative is the targeting. We produce campaign creative and structure accounts so testing is fast and learnings compound.",
    problem: [
      "Boosted posts consume budget without producing enquiries.",
      "One creative runs for months until it fatigues completely.",
      "Pixel and events are misconfigured or missing.",
      "Leads arrive but never reach a follow-up process.",
    ],
    solution: [
      "Campaign structure built for creative testing at a sensible budget.",
      "Multiple creative angles per audience, refreshed on a schedule.",
      "Pixel, Conversions API and event setup verified before launch.",
      "Lead routing into email, sheet or WhatsApp for immediate follow-up.",
    ],
    includes: [
      "Ad account and pixel setup or audit",
      "Audience and offer strategy",
      "Static, carousel and video ad creative",
      "Lead generation and conversion campaigns",
      "Retargeting funnels",
      "Creative testing calendar",
      "Monthly reporting",
    ],
    benefits: [
      { title: "Creative that performs", body: "Ads produced in-house, iterated on data." },
      { title: "Clean tracking", body: "Events verified so reporting can be trusted." },
      { title: "Usable leads", body: "Delivered where your team will actually see them." },
    ],
    faqs: [
      { q: "Do you produce the ad creative?", a: "Yes — static, carousel and short video creative are produced by our creative team." },
      { q: "Can you run both Google and Meta?", a: "Yes, and we recommend it where budget allows: one captures demand, the other creates it." },
    ],
  },
  {
    slug: "branding",
    pillar: "creative",
    title: "Branding & Brand Identity",
    metaTitle: "Branding & Brand Identity Agency | ZELVRYQ",
    metaDescription:
      "Brand strategy, identity systems and guidelines from ZELVRYQ — build a brand that is recognisable and consistent everywhere.",
    hero: "A brand is a decision system, not a logo file.",
    intro:
      "We define what your brand stands for, how it sounds and how it looks — then package it so every future asset stays consistent.",
    problem: [
      "The brand looks different on every platform and print piece.",
      "There is no agreed positioning, so messaging changes constantly.",
      "Design decisions are made ad hoc by whoever is available.",
      "The identity no longer fits the business you have become.",
    ],
    solution: [
      "Positioning work: audience, value, differentiators and tone.",
      "A complete visual identity — logo system, colour, type, imagery.",
      "Brand guidelines any designer or vendor can follow.",
      "Core collateral and templates so the system starts being used.",
    ],
    includes: [
      "Brand discovery and positioning",
      "Naming support and messaging framework",
      "Logo system design",
      "Colour, typography and iconography",
      "Brand guidelines document",
      "Stationery and collateral templates",
      "Social media brand kit",
    ],
    benefits: [
      { title: "Recognition", body: "Consistency is what makes a brand memorable." },
      { title: "Speed", body: "Guidelines remove debate from every future asset." },
      { title: "Premium perception", body: "Considered design signals a serious business." },
    ],
    faqs: [
      { q: "How many logo directions do we see?", a: "We typically present two to three strategically distinct directions, then refine the selected one." },
      { q: "Do we own the files?", a: "Yes. On completion you receive full source and export files." },
    ],
  },
  {
    slug: "logo-design",
    pillar: "creative",
    title: "Logo Design",
    metaTitle: "Professional Logo Design Services | ZELVRYQ",
    metaDescription:
      "Original logo design from ZELVRYQ — strategy-led marks, complete file kits and usage guidelines for every application.",
    hero: "A mark that works at every size, in every medium.",
    intro:
      "Logo design at ZELVRYQ is grounded in positioning first, then crafted for real-world use — signage, screens, print and packaging.",
    problem: [
      "The current mark is unreadable at small sizes.",
      "Only a low-resolution file exists, with no vector source.",
      "The design follows a trend rather than the business.",
      "There are no rules for spacing, colour or usage.",
    ],
    solution: [
      "A short discovery to agree on personality and application needs.",
      "Concept exploration in black and white before colour.",
      "Refinement across responsive lockups and sizes.",
      "A complete file kit plus a usage sheet.",
    ],
    includes: [
      "Discovery questionnaire and brand brief",
      "Two to three logo directions",
      "Refinement rounds",
      "Primary, secondary and icon lockups",
      "Colour and monochrome versions",
      "Vector, raster and web file kit",
      "Usage guidelines",
    ],
    benefits: [
      { title: "Practical", body: "Tested at favicon size and on a signboard." },
      { title: "Original", body: "Designed for you — never templated or traced." },
      { title: "Complete", body: "Every file format your vendors will ask for." },
    ],
    faqs: [
      { q: "How long does it take?", a: "Most logo projects run two to four weeks depending on feedback speed." },
      { q: "Can you refresh our existing logo?", a: "Yes — an evolution keeps existing recognition while fixing what does not work." },
    ],
  },
  {
    slug: "content",
    pillar: "creative",
    title: "Content Creation",
    metaTitle: "Content Creation, Reels & Video Production | ZELVRYQ",
    metaDescription:
      "Photography, video, reels and design content from ZELVRYQ — a steady content system your brand can actually sustain.",
    hero: "Content produced as a system, not as one-off requests.",
    intro:
      "We plan, shoot, edit and deliver content in batches so your channels stay active without last-minute scrambling.",
    problem: [
      "Content is created reactively and quality varies wildly.",
      "Product and location photos do not reflect the real quality.",
      "Video feels intimidating, so it never gets made.",
      "Nothing is repurposed — every asset is used once.",
    ],
    solution: [
      "A content plan built around themes and business moments.",
      "Batch shoots that produce weeks of assets in a day.",
      "Editing formatted per platform and aspect ratio.",
      "A repurposing model: one shoot, many outputs.",
    ],
    includes: [
      "Content strategy and shot planning",
      "Product and brand photography",
      "Video production and editing",
      "Reels and short-form vertical video",
      "Social creatives and carousels",
      "Copywriting",
      "Marketing collateral and print design",
    ],
    benefits: [
      { title: "Efficient", body: "Batch production lowers cost per asset." },
      { title: "On-brand", body: "Every asset follows one visual system." },
      { title: "Platform-ready", body: "Delivered in the right ratios and formats." },
    ],
    faqs: [
      { q: "Do you travel for shoots?", a: "Yes, within Uttarakhand and to other cities where the project justifies it." },
      { q: "Can you work with our existing footage?", a: "Yes — editing-only engagements are available." },
    ],
  },
  {
    slug: "web-development",
    pillar: "web",
    title: "Website Design & Development",
    metaTitle: "Website Design & Development Company | ZELVRYQ",
    metaDescription:
      "Custom website design and development from ZELVRYQ — fast, accessible, SEO-ready business websites built on modern technology.",
    hero: "Websites built to be found, trusted and used.",
    intro:
      "We design and build business websites that load fast, read clearly on every screen and are structured for search from the first line of code.",
    problem: [
      "The site is slow, heavy and painful on mobile.",
      "It describes the company but never asks for the enquiry.",
      "Content cannot be updated without calling a developer.",
      "SEO basics — structure, metadata, sitemap — are missing.",
    ],
    solution: [
      "Information architecture planned around what buyers need to decide.",
      "Custom design in your brand system, mobile-first.",
      "Modern, performant build with accessibility considered.",
      "SEO foundations, analytics and clear handover.",
    ],
    includes: [
      "Discovery and sitemap planning",
      "UI design for every key template",
      "Responsive front-end development",
      "Copy structuring and SEO metadata",
      "Contact, enquiry and WhatsApp integration",
      "Analytics setup",
      "Training, handover and maintenance options",
    ],
    benefits: [
      { title: "Performance", body: "Speed is a ranking factor and a conversion factor." },
      { title: "Conversion-first", body: "Every page has a next step." },
      { title: "Maintainable", body: "Built so it can grow instead of being rebuilt." },
    ],
    faqs: [
      { q: "Can you redesign our existing website?", a: "Yes. We audit what performs, keep the equity and rebuild the rest." },
      { q: "Do you offer maintenance?", a: "Yes — monthly maintenance covering updates, backups, monitoring and small changes." },
    ],
  },
  {
    slug: "ecommerce",
    pillar: "web",
    title: "E-commerce Development",
    metaTitle: "E-commerce Website Development | ZELVRYQ",
    metaDescription:
      "E-commerce development by ZELVRYQ — online stores with clean catalogues, payment gateways and conversion-focused checkout.",
    hero: "Stores designed around the buying decision.",
    intro:
      "From catalogue structure to checkout, we build online stores that are easy to browse, quick to buy from and simple to operate.",
    problem: [
      "Customers cannot find products without excessive scrolling.",
      "Carts are abandoned at a clumsy checkout.",
      "Product pages lack the detail needed to decide.",
      "Stock and orders are managed across disconnected tools.",
    ],
    solution: [
      "Catalogue and filter architecture designed for your range.",
      "Product page templates that answer objections.",
      "Streamlined checkout with Indian and international payment gateways.",
      "Order, inventory and shipping integrations where needed.",
    ],
    includes: [
      "Store planning and platform selection",
      "Catalogue and category architecture",
      "Product and checkout page design",
      "Payment gateway integration",
      "Shipping and tax configuration",
      "Analytics and e-commerce tracking",
      "Launch support and optimisation",
    ],
    benefits: [
      { title: "Fewer drop-offs", body: "A shorter path from product to payment." },
      { title: "Operable", body: "Your team can manage products without developers." },
      { title: "Ready to market", body: "Tracking wired for ads and remarketing." },
    ],
    faqs: [
      { q: "Which platforms do you work with?", a: "We recommend a platform based on catalogue size, operations and budget rather than defaulting to one." },
      { q: "Can you support international payments?", a: "Yes, subject to the gateways available to your registered business." },
    ],
  },
  {
    slug: "web-applications",
    pillar: "web",
    title: "Custom Web Applications",
    metaTitle: "Custom Web Application Development | ZELVRYQ",
    metaDescription:
      "Custom web applications and internal software from ZELVRYQ — dashboards, portals and workflow tools built for real operations.",
    hero: "Software shaped around how your business actually runs.",
    intro:
      "When spreadsheets and off-the-shelf tools stop fitting, we design and build web applications: portals, dashboards and internal systems.",
    problem: [
      "Critical processes live in fragile spreadsheets.",
      "Staff re-enter the same data into several tools.",
      "Off-the-shelf software forces awkward workarounds.",
      "There is no reliable view of operational data.",
    ],
    solution: [
      "Workflow mapping before any interface is designed.",
      "A scoped first release that solves the highest-cost problem.",
      "Secure authentication, roles and permissions.",
      "Integrations with the tools you already depend on.",
    ],
    includes: [
      "Requirement and workflow discovery",
      "Technical architecture and data modelling",
      "UI/UX design for admin and user views",
      "Application development and testing",
      "Authentication, roles and permissions",
      "API and third-party integrations",
      "Deployment, documentation and support",
    ],
    benefits: [
      { title: "Exact fit", body: "The system matches your process, not the reverse." },
      { title: "Time recovered", body: "Manual, repetitive work is automated away." },
      { title: "Extendable", body: "Built in phases so it can keep growing." },
    ],
    faqs: [
      { q: "How is a project like this scoped?", a: "We start with a paid discovery phase that produces a specification, timeline and estimate." },
      { q: "Do you maintain the application after launch?", a: "Yes, through a support and enhancement retainer." },
    ],
  },
  {
    slug: "mobile-apps",
    pillar: "web",
    title: "Mobile App Development",
    metaTitle: "Mobile App Development Company | ZELVRYQ",
    metaDescription:
      "Mobile application development from ZELVRYQ — cross-platform apps with clean UX, integrations and store launch support.",
    hero: "Mobile products people keep on the home screen.",
    intro:
      "We design and build cross-platform mobile applications, from a focused first version through to store release and iteration.",
    problem: [
      "The idea keeps expanding and never reaches a first version.",
      "An existing app has poor retention and unclear UX.",
      "The app and website hold different, conflicting data.",
      "Store submission and compliance are blocking release.",
    ],
    solution: [
      "A ruthless first-release scope focused on the core job.",
      "UX designed for one-handed, real-world use.",
      "A shared backend and API across web and mobile.",
      "Store listing preparation and release management.",
    ],
    includes: [
      "Product discovery and feature prioritisation",
      "UX and UI design",
      "Cross-platform app development",
      "Backend and API development",
      "Payment and third-party integrations",
      "Testing and QA",
      "App store launch support",
    ],
    benefits: [
      { title: "Faster to market", body: "A focused v1 beats a perfect roadmap." },
      { title: "One codebase", body: "Cross-platform keeps cost and upkeep sane." },
      { title: "Measurable", body: "Analytics from the first release." },
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "Cross-platform suits most business apps. We recommend native only when hardware-level performance demands it." },
      { q: "Do you handle store accounts?", a: "We guide setup and manage submission; the accounts remain in your name." },
    ],
  },
  {
    slug: "lead-generation",
    pillar: "growth",
    title: "Lead Generation",
    metaTitle: "Lead Generation Services | ZELVRYQ",
    metaDescription:
      "Lead generation systems from ZELVRYQ — offers, landing pages, campaigns and follow-up flows that turn attention into enquiries.",
    hero: "A system for enquiries, not a burst of traffic.",
    intro:
      "We connect offer, campaign, landing page and follow-up into one measurable funnel — so marketing produces conversations your sales team can act on.",
    problem: [
      "Traffic arrives but very little of it converts.",
      "Leads are collected but followed up days later.",
      "There is no offer compelling enough to prompt action.",
      "Lead quality is never measured, only lead volume.",
    ],
    solution: [
      "Offer design and messaging built for a specific audience.",
      "Dedicated landing pages with a single conversion goal.",
      "Paid and organic campaigns driving qualified traffic.",
      "Automated routing, notification and nurture flows.",
    ],
    includes: [
      "Funnel and offer strategy",
      "Landing page design and build",
      "Lead magnets and campaign creative",
      "Google and Meta lead campaigns",
      "Form, CRM and WhatsApp routing",
      "Email nurture sequences",
      "Conversion tracking and reporting",
    ],
    benefits: [
      { title: "Qualified enquiries", body: "Filters built in before a lead reaches sales." },
      { title: "Fast follow-up", body: "Instant notification and routing." },
      { title: "Improvable", body: "Every stage is measured and testable." },
    ],
    faqs: [
      { q: "Do you guarantee a number of leads?", a: "No. We commit to building, running and improving the system, and we report honestly on results." },
      { q: "Can leads go into our CRM?", a: "Yes, where an integration or webhook is available." },
    ],
  },
];

export const servicesByPillar = (pillar: Pillar) =>
  servicePages.filter((service) => service.pillar === pillar);

export const getServicePage = (slug: string) =>
  servicePages.find((service) => service.slug === slug);
