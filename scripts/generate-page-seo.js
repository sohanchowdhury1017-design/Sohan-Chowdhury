import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://sohans.site';
const OG_IMAGE = 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791128782/6f2545b3-fd9a-4079-bd24-577ae9b0cf31.jpg';

const PAGES = {
  about: {
    title: 'About N.B.N Sohan Chowdhury | Entrepreneur & Law Scholar',
    description: 'Discover the background, professional vision, leadership mindset, and creative acoustic guitar artistry of N.B.N Sohan Chowdhury.',
    canonical: `${SITE_URL}/about/`,
    keywords: 'About N.B.N Sohan Chowdhury, Sohan Chowdhury Biography, Entrepreneur Profile, Law Student Profile, SIFRI Founder, Acoustic Guitar Artistry',
    ogType: 'profile'
  },
  contact: {
    title: 'Contact N.B.N Sohan Chowdhury | Direct Reach & Inquiries',
    description: 'Get in touch with N.B.N Sohan Chowdhury for business partnerships, brand marketing consultancy, legal inquiries, or direct collaboration.',
    canonical: `${SITE_URL}/contact/`,
    keywords: 'Contact Sohan Chowdhury, N.B.N Sohan Chowdhury Phone, Sohan Chowdhury Email, SIFRI Business Inquiries, Dhaka Entrepreneur Contact',
    ogType: 'website'
  },
  education: {
    title: 'Legal Education & Academic Journey | N.B.N Sohan Chowdhury',
    description: 'Explore N.B.N Sohan Chowdhury\'s educational background: LLB (1st Year), HSC from Rangpur, and SSC from Nurjahanpur RMC High School.',
    canonical: `${SITE_URL}/education/`,
    keywords: 'N.B.N Sohan Chowdhury Education, Nurjahanpur RMC High School SSC, Rangpur HSC, Bachelor of Laws LL.B., Legal Studies Bangladesh',
    ogType: 'website'
  },
  philosophy: {
    title: 'Leadership & Work Philosophy | N.B.N Sohan Chowdhury',
    description: 'Principles, ethical standards, disciplined decision-making, and core professional values guiding N.B.N Sohan Chowdhury\'s work and leadership.',
    canonical: `${SITE_URL}/philosophy/`,
    keywords: 'Sohan Chowdhury Philosophy, Leadership Mindset, Business Ethics, Entrepreneurial Principles, Professional Values',
    ogType: 'article'
  },
  sifri: {
    title: 'SIFRI BD E-Commerce & Brand Leadership | Sohan Chowdhury',
    description: 'Explore SIFRI (sifribd.com)—premium lifestyle & fashion e-commerce platform founded and led by Brand & Marketing Director N.B.N Sohan Chowdhury.',
    canonical: `${SITE_URL}/sifri/`,
    keywords: 'SIFRI BD, sifribd.com, Sifri Fashion & Lifestyle, Sohan Chowdhury SIFRI, E-commerce Founder Bangladesh, Online Shopping Bangladesh',
    ogType: 'website'
  },
  writing: {
    title: 'Articles, Insights & Writing | N.B.N Sohan Chowdhury',
    description: 'Read articles, investigative perspectives, and insights on entrepreneurship, brand marketing, legal reasoning, and digital commerce.',
    canonical: `${SITE_URL}/writing/`,
    keywords: 'Sohan Chowdhury Writing, Business Insights, Brand Strategy Articles, Legal Perspectives, Digital Media Opinions',
    ogType: 'article'
  },
  skills: {
    title: 'Certifications & Expertise | N.B.N Sohan Chowdhury',
    description: 'Verified certifications in graphic design, digital marketing, acoustic guitar performance, and corporate strategy by N.B.N Sohan Chowdhury.',
    canonical: `${SITE_URL}/skills/`,
    keywords: 'Sohan Chowdhury Certifications, Photoshop Expert, Digital Marketing Certified, Certified Guitarist, Professional Skills',
    ogType: 'website'
  },
  areas: {
    title: 'Core Professional Areas & Focus | N.B.N Sohan Chowdhury',
    description: 'Specialized competencies in business growth, brand management, digital marketing, and investigative analysis by N.B.N Sohan Chowdhury.',
    canonical: `${SITE_URL}/areas/`,
    keywords: 'Professional Areas Sohan Chowdhury, Brand Management, Business Strategy, Marketing Analytics, Consumer Research',
    ogType: 'website'
  }
};

const baseHtmlPath = path.resolve('dist/index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('Base dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

for (const [pageKey, meta] of Object.entries(PAGES)) {
  let pageHtml = baseHtml;

  // Replace Title
  pageHtml = pageHtml.replace(
    /<title>.*?<\/title>/s,
    `<title>${meta.title}</title>`
  );

  // Replace Meta Description
  pageHtml = pageHtml.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace Keywords
  pageHtml = pageHtml.replace(
    /<meta\s+name=["']keywords["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="keywords" content="${meta.keywords}" />`
  );

  // Replace Canonical Link
  pageHtml = pageHtml.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Replace OpenGraph Title & Description & URL
  pageHtml = pageHtml.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${meta.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${meta.description}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonical}" />`
  );

  // Replace Twitter Title & Description
  pageHtml = pageHtml.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${meta.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${meta.description}" />`
  );

  // Save to dist/{page}/index.html and {page}/index.html
  const distDir = path.resolve(`dist/${pageKey}`);
  const rootDir = path.resolve(pageKey);

  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
  if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir, { recursive: true });

  fs.writeFileSync(path.join(distDir, 'index.html'), pageHtml, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'index.html'), pageHtml, 'utf-8');

  console.log(`Generated SEO meta tags for page: /${pageKey}/`);
}

console.log('All page SEO meta titles and descriptions successfully generated.');
