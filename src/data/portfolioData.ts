import { Article, EducationDetail } from '../types';

export const PERSONAL_INFO = {
  fullName: 'N B N Sohan Chowdhury',
  shortName: 'Sohan',
  preferredCall: 'Sohan Chowdhury',
  headline: 'Founder of Sifri & Writer',
  tagline: 'Bridging Literature, Digital Commerce & Modern Brand Architecture',
  email: 'sohanchowdhury1017@gmail.com',
  domain: 'sohans.site',
  location: 'Dhaka, Bangladesh',
  coordinates: '23.7688° N, 90.4255° E',
  sifriUrl: 'https://sifribd.com',
  sifriDisplayUrl: 'sifribd.com',
  bio: 'N B N Sohan Chowdhury is an entrepreneur, writer, and researcher grounded in English literature from East West University. As the founder of Sifri (sifribd.com), Sohan leverages narrative theory, critical semiotics, and meticulous operational design to build high-trust digital consumer experiences in Bangladesh.',
  whatsapp: '+8801312815029',
  whatsappUrl: 'https://wa.me/8801312815029',
  facebookUrl: 'https://facebook.com/nbn.sohan',
  coverPhoto: 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791091989/494751244_1132441425318194_1261865038451570544_n.jpg',
  coverPhotoLocal: '/assets/sohan_cover_banner.jpg',
  socials: {
    github: 'https://github.com/sohanchowdhury',
    linkedin: 'https://linkedin.com/in/sohanchowdhury',
    facebook: 'https://facebook.com/nbn.sohan',
    whatsapp: 'https://wa.me/8801312815029',
    email: 'mailto:sohanchowdhury1017@gmail.com',
    sifri: 'https://sifribd.com',
  },
};

export const SIFRI_DETAILS = {
  name: 'Sifri',
  tagline: 'Curated lifestyle, contemporary aesthetics & dependable digital shopping for Bangladesh',
  url: 'https://sifribd.com',
  displayUrl: 'sifribd.com',
  foundedBy: 'N B N Sohan Chowdhury',
  mission: 'To redefine everyday modern lifestyle retail in Bangladesh by delivering thoughtful product curation, transparent customer communication, and uncompromised fulfillment speed.',
  pillars: [
    {
      title: 'Aesthetic Curation',
      desc: 'Carefully chosen products designed with clean ergonomics, premium materials, and timeless appeal.',
    },
    {
      title: 'Transparent Commerce',
      desc: 'Honest pricing, verified stock availability, and human customer support with zero friction.',
    },
    {
      title: 'Fast & Reliable Logistics',
      desc: 'Streamlined dispatch across Dhaka and nationwide delivery network with real-time tracking.',
    },
    {
      title: 'Brand Storytelling',
      desc: 'Rooted in authentic connection, editorial photography, and respectful customer dialogue.',
    },
  ],
  stats: [
    { label: 'Nationwide Reach', value: '64 Districts' },
    { label: 'Core Philosophy', value: 'Quality First' },
    { label: 'Active Platform', value: 'sifribd.com' },
  ],
};

export const EDUCATION_DATA: EducationDetail = {
  institution: 'East West University (EWU)',
  degree: 'Bachelor of Arts in English',
  department: 'Department of English',
  period: 'Class of Excellence',
  focusAreas: [
    'Critical Literary Analysis',
    'Semiotics & Discourse Analysis',
    'Modern & Post-Colonial Literature',
    'Rhetoric, Persuasion & Stylistics',
    'Creative Writing & Professional Prose',
  ],
  description:
    'Pursuing rigorous literary theory, textual hermeneutics, and modern linguistics at East West University. This academic foundation provides the intellectual backbone for Sohan’s brand storytelling, customer psychology insights, and strategic communication.',
  highlights: [
    'Specialized in how textual rhetoric influences perception and audience decision-making.',
    'Explored structuralism, semiotics, and narrative arcs applicable to consumer brand ecosystems.',
    'Active participant in literary workshops, debate forums, and university creative societies.',
    'Applied humanistic empathy and rigorous textual editing to modern digital ventures.',
  ],
};

export const ARTICLES_DATA: Article[] = [
  {
    id: 'syntax-of-commerce',
    title: 'The Syntax of Commerce: How Narrative Theory Builds Enduring Brands',
    category: 'Brand & Narrative',
    excerpt: 'Great enterprises are not merely balance sheets; they are cohesive narratives where every touchpoint is a carefully chosen punctuation mark.',
    date: 'February 2026',
    readTime: '5 min read',
    quote: 'When you study linguistics, you realize consumers never buy isolated products—they inhabit stories that confirm their values.',
    content: [
      'In traditional business literature, brand identity is often reduced to a color palette, an iconography kit, and a slogan. But through the lens of literary semiotics, a brand is fundamentally a narrative contract between human minds.',
      'Studying English at East West University made me look at digital interfaces the same way one analyzes a poem or a Victorian novel. Every element—from the clarity of the typography to the friction in the checkout flow—either maintains narrative suspense or ruptures suspension of disbelief.',
      'When we founded Sifri (sifribd.com), our guiding rule was textual consistency: the promise made on the homepage had to match the tone of the SMS dispatch notice and the tactile packaging upon unboxing. In commerce, consistency is not a marketing trick; it is moral clarity expressed through systems.',
    ],
  },
  {
    id: 'building-sifri-literature-to-startup',
    title: 'From Literary Semiotics to Startup Founding: Building Sifri in Bangladesh',
    category: 'Entrepreneurship',
    excerpt: 'Why an English literature scholar chose to build a digital retail venture, and what humanistic disciplines teach us about modern consumer trust.',
    date: 'January 2026',
    readTime: '6 min read',
    quote: 'The best founders are observant readers of human anxiety, desire, and silent aspirations.',
    content: [
      'People frequently ask why a student of English literature ventured into digital commerce in Bangladesh. The conventional wisdom expects software engineers or business graduates. Yet, business at its core is applied empathy.',
      'English literature trains the mind to embrace nuance, to detect subtext, and to listen to what is left unsaid. In Bangladesh’s rapid digital retail expansion, many brands failed because they treated customers as algorithmic data points rather than discerning individuals.',
      'At Sifri, we prioritized customer dignity. We invested time in clear product documentation, realistic photography without deceiving filters, and polite post-order assistance. Technology is merely the distribution engine; trust is an editorial accomplishment.',
    ],
  },
  {
    id: 'clean-digital-commerce',
    title: 'The Discipline of Clean Digital Commerce: Eliminating Noise in E-Commerce',
    category: 'Digital Commerce',
    excerpt: 'Examining why cluttered interfaces and false urgency tactics are losing relevance in favor of clean, respectful, minimalist buying experiences.',
    date: 'November 2025',
    readTime: '4 min read',
    quote: 'True luxury and credibility in the digital era is respect for the visitor’s attention span.',
    content: [
      'Walk through many contemporary e-commerce websites and you are assaulted by flashing countdown timers, popups begging for phone numbers, and simulated social proof banners. This is the visual equivalent of shouting.',
      'A clean, editorial digital platform does the opposite: it gives space for the product to breathe. It presents verified specifications with surgical clarity. It respects user agency.',
      'With Sifri, our digital presence is shaped by intentional whitespace, balanced visual rhythm, and swift response times. When customers sense that an entrepreneur took care in crafting the store, they trust the product before it even leaves the shelf.',
    ],
  },
  {
    id: 'founders-reading-classics',
    title: 'Why Builders Should Read Classic Literature: Empathy, Rhetoric & Long Horizons',
    category: 'Literature & Culture',
    excerpt: 'How reading deep literature sharpens strategic patience, cognitive resilience, and the capacity to articulate compelling visions.',
    date: 'September 2025',
    readTime: '5 min read',
    quote: 'Literature does not offer shortcuts; it gives you the stamina to see human enterprises in their full, messy richness.',
    content: [
      'The modern tech discourse is saturated with short-form productivity hacks and ephemeral frameworks that expire in six months. In contrast, literature has stood the test of centuries.',
      'Engaging with authors like George Eliot, James Joyce, or Rabindranath Tagore forces the thinker to confront complex moral dilemmas, structural ironies, and long-horizon human motivations.',
      'For any builder, this intellectual workout is invaluable. It prevents cynical cynicism, encourages ethical leadership, and instills a love for craft that superficial business metrics can never simulate.',
    ],
  },
];

export const CORE_PHILOSOPHIES = [
  {
    number: '01',
    title: 'Narrative Integrity',
    desc: 'Every brand touchpoint, copy sentence, and fulfillment pledge is an unbroken promise of authenticity.',
  },
  {
    number: '02',
    title: 'Human-Centric Commerce',
    desc: 'Putting customer trust and dignity ahead of short-term gimmicks or synthetic urgency.',
  },
  {
    number: '03',
    title: 'Interdisciplinary Edge',
    desc: 'Fusing the critical rigor of English literature with the pragmatic execution of modern digital ventures.',
  },
  {
    number: '04',
    title: 'Enduring Craftsmanship',
    desc: 'Belief in thoughtful minimalism, timeless design, and steady, high-conviction building.',
  },
];

export const SKILL_CATEGORIES = [
  {
    name: 'Leadership & Venture Building',
    skills: ['E-Commerce Strategy', 'Venture Direction', 'Product Lifecycle & Sourcing', 'Operational Execution', 'Customer Experience Design'],
  },
  {
    name: 'Language, Literature & Narrative',
    skills: ['Critical Discourse Analysis', 'Literary Semiotics', 'Persuasive Copywriting', 'Editorial Direction', 'Brand Voice Guidelines'],
  },
  {
    name: 'Digital Architecture & Tools',
    skills: ['Modern Web Architecture', 'UI/UX Editorial Aesthetics', 'Search Optimization', 'Analytics & Performance', 'Vite & GitHub Workflows'],
  },
];
