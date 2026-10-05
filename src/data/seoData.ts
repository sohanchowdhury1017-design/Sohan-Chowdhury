export interface PageSEO {
  path: string;
  sectionId?: string;
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogType: 'website' | 'profile' | 'article';
  schemaType: string;
  schemaData?: Record<string, any>;
}

export const SITE_BASE_URL = 'https://sohans.site';
export const DEFAULT_OG_IMAGE = 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791128782/6f2545b3-fd9a-4079-bd24-577ae9b0cf31.jpg';

export const PAGE_SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    path: '/',
    sectionId: 'home',
    title: 'N.B.N Sohan Chowdhury | Official Portfolio & Leadership',
    description: 'Official portfolio of N.B.N Sohan Chowdhury—Entrepreneur, CEO & Founder at SIFRI, Brand & Marketing Professional, and Law Student based in Dhaka, Bangladesh.',
    keywords: [
      'N.B.N Sohan Chowdhury',
      'Sohan Chowdhury',
      'SIFRI',
      'Entrepreneur Bangladesh',
      'Brand & Marketing Professional',
      'Law Student',
      'Acoustic Guitarist',
      'sohans.site'
    ],
    canonical: `${SITE_BASE_URL}/`,
    ogType: 'profile',
    schemaType: 'ProfilePage',
  },
  about: {
    path: '/about/',
    sectionId: 'about',
    title: 'About N.B.N Sohan Chowdhury | Entrepreneur & Law Scholar',
    description: 'Discover the background, professional vision, leadership mindset, and creative acoustic guitar artistry of N.B.N Sohan Chowdhury.',
    keywords: [
      'About N.B.N Sohan Chowdhury',
      'Sohan Chowdhury Biography',
      'Entrepreneur Profile',
      'Law Student Profile',
      'SIFRI Founder',
      'Acoustic Guitar Artistry'
    ],
    canonical: `${SITE_BASE_URL}/about/`,
    ogType: 'profile',
    schemaType: 'AboutPage',
  },
  contact: {
    path: '/contact/',
    sectionId: 'contact',
    title: 'Contact N.B.N Sohan Chowdhury | Direct Reach & Inquiries',
    description: 'Get in touch with N.B.N Sohan Chowdhury for business partnerships, brand marketing consultancy, legal inquiries, or direct collaboration.',
    keywords: [
      'Contact Sohan Chowdhury',
      'N.B.N Sohan Chowdhury Phone',
      'Sohan Chowdhury Email',
      'SIFRI Business Inquiries',
      'Dhaka Entrepreneur Contact'
    ],
    canonical: `${SITE_BASE_URL}/contact/`,
    ogType: 'website',
    schemaType: 'ContactPage',
  },
  education: {
    path: '/education/',
    sectionId: 'education',
    title: 'Legal Education & Academic Journey | N.B.N Sohan Chowdhury',
    description: 'Explore N.B.N Sohan Chowdhury\'s educational background: LLB (1st Year), HSC from Rangpur, and SSC from Nurjahanpur RMC High School.',
    keywords: [
      'N.B.N Sohan Chowdhury Education',
      'Bachelor of Laws LL.B.',
      'Nurjahanpur RMC High School SSC',
      'Rangpur HSC',
      'Legal Studies Bangladesh',
      'Law Scholar Dhaka'
    ],
    canonical: `${SITE_BASE_URL}/education/`,
    ogType: 'website',
    schemaType: 'ItemPage',
  },
  philosophy: {
    path: '/philosophy/',
    sectionId: 'about',
    title: 'Leadership & Work Philosophy | N.B.N Sohan Chowdhury',
    description: 'Principles, ethical standards, disciplined decision-making, and core professional values guiding N.B.N Sohan Chowdhury\'s work and leadership.',
    keywords: [
      'Sohan Chowdhury Philosophy',
      'Leadership Mindset',
      'Business Ethics',
      'Entrepreneurial Principles',
      'Professional Values'
    ],
    canonical: `${SITE_BASE_URL}/philosophy/`,
    ogType: 'article',
    schemaType: 'AboutPage',
  },
  sifri: {
    path: '/sifri/',
    sectionId: 'sifri',
    title: 'SIFRI BD E-Commerce & Brand Leadership | Sohan Chowdhury',
    description: 'Explore SIFRI (sifribd.com)—premium lifestyle & fashion e-commerce platform founded and led by Brand & Marketing Director N.B.N Sohan Chowdhury.',
    keywords: [
      'SIFRI BD',
      'sifribd.com',
      'Sifri Fashion & Lifestyle',
      'Sohan Chowdhury SIFRI',
      'E-commerce Founder Bangladesh',
      'Online Shopping Bangladesh'
    ],
    canonical: `${SITE_BASE_URL}/sifri/`,
    ogType: 'website',
    schemaType: 'Organization',
  },
  writing: {
    path: '/writing/',
    sectionId: 'areas',
    title: 'Articles, Insights & Writing | N.B.N Sohan Chowdhury',
    description: 'Read articles, investigative perspectives, and insights on entrepreneurship, brand marketing, legal reasoning, and digital commerce.',
    keywords: [
      'Sohan Chowdhury Writing',
      'Business Insights',
      'Brand Strategy Articles',
      'Legal Perspectives',
      'Digital Media Opinions'
    ],
    canonical: `${SITE_BASE_URL}/writing/`,
    ogType: 'article',
    schemaType: 'CollectionPage',
  },
  skills: {
    path: '/skills/',
    sectionId: 'skills',
    title: 'Certifications & Expertise | N.B.N Sohan Chowdhury',
    description: 'Verified certifications in graphic design, digital marketing, acoustic guitar performance, and corporate strategy by N.B.N Sohan Chowdhury.',
    keywords: [
      'Sohan Chowdhury Certifications',
      'Photoshop Expert',
      'Digital Marketing Certified',
      'Certified Guitarist',
      'Professional Skills'
    ],
    canonical: `${SITE_BASE_URL}/skills/`,
    ogType: 'website',
    schemaType: 'ItemPage',
  },
  areas: {
    path: '/areas/',
    sectionId: 'areas',
    title: 'Core Professional Areas & Focus | N.B.N Sohan Chowdhury',
    description: 'Specialized competencies in business growth, brand management, digital marketing, and investigative analysis by N.B.N Sohan Chowdhury.',
    keywords: [
      'Professional Areas Sohan Chowdhury',
      'Brand Management',
      'Business Strategy',
      'Marketing Analytics',
      'Consumer Research'
    ],
    canonical: `${SITE_BASE_URL}/areas/`,
    ogType: 'website',
    schemaType: 'ItemPage',
  },
};

export function getPageSEO(pathname: string): PageSEO {
  const clean = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (!clean || clean === 'home') {
    return PAGE_SEO_CONFIG.home;
  }
  return PAGE_SEO_CONFIG[clean] || PAGE_SEO_CONFIG.home;
}
