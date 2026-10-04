export interface EducationDetail {
  degree: string;
  year: string;
  description: string;
  academicInterests: string[];
}

export interface CertificationItem {
  id: string;
  category: string;
  categoryBn: string;
  title: string;
  titleBn: string;
  credentialBadge: string;
  description: string;
  skills: string[];
  icon: 'palette' | 'megaphone' | 'music' | 'award';
}

export const PERSONAL_INFO = {
  fullName: 'N.B.N Sohan Chowdhury',
  shortName: 'Sohan Chowdhury',
  preferredCall: 'NBN Sohan',
  headline: 'Entrepreneur • Brand & Marketing Professional • Law Student',
  headlineBn: 'উদ্যোক্তা • ব্র্যান্ড ও মার্কেটিং প্রফেশনাল • আইন শিক্ষার্থী',
  workingCategory: 'Entrepreneur / Business Owner',
  workingCategoryBn: 'উদ্যোক্তা / বিজনেস ওনার',
  currentRole: 'CEO & Founder — SIFRI',
  currentRoleBn: 'সিইও এবং প্রতিষ্ঠাতা — SIFRI',
  email: 'sohanchowdhury130@gmail.com',
  phone1: '01312815029',
  phone2: '01831841017',
  whatsappUrl: 'https://wa.me/8801312815029',
  facebookUrl: 'https://facebook.com/nbn.sohan',
  domain: 'sohans.site',
  location: 'ঢাকা, বাংলাদেশ (Dhaka, Bangladesh)',
  coordinates: '23.7688° N, 90.4255° E',
  sifriUrl: 'https://sifribd.com',
  sifriDisplayUrl: 'sifribd.com',
  coverPhoto: 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791128782/6f2545b3-fd9a-4079-bd24-577ae9b0cf31.jpg',
  coverPhotoLocal: '/assets/sohan_banner.jpg',
  siteIcon: 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791103462/Hand-drawn_letter_S_icon_2K_20261004121610.jpg',

  aboutMeParagraphs: [
    'আমি N.B.N Sohan Chowdhury—একজন তরুণ Entrepreneur, Brand & Marketing Professional এবং Law Student।',
    'Business, Branding, Marketing, Fashion, Law, Digital Media, Investigation এবং Journalism-এর প্রতি আমার বিশেষ আগ্রহ রয়েছে। আমি নতুন কিছু শেখা, বাস্তব অভিজ্ঞতা অর্জন করা এবং নিজের Professional Skills নিয়মিত উন্নত করার চেষ্টা করি।',
    'আমার কাজের ক্ষেত্রে Creativity, Critical Thinking, Observation, Logical Reasoning এবং Professional Communication-কে বিশেষ গুরুত্ব দিই। আমার লক্ষ্য হলো জ্ঞান ও বাস্তব অভিজ্ঞতাকে কাজে লাগিয়ে নিজের জন্য একটি শক্তিশালী এবং সফল Professional Career তৈরি করা।'
  ],

  coreFocus: [
    'Entrepreneurship',
    'Branding',
    'Marketing',
    'E-commerce',
    'Business Development',
    'Fashion Business',
    'Digital Media',
    'Strategy'
  ],

  professionalAreas: [
    'Entrepreneurship & Business Management',
    'Brand Strategy & Brand Management',
    'Marketing & Digital Marketing',
    'E-commerce & Online Business',
    'Fashion & Clothing Business',
    'Business Development & Growth Strategy',
    'Social Media & Content Management',
    'Customer Relationship Management',
    'Sales & Marketing Strategy',
    'Personal Branding & Professional Identity',
    'Business Operations & Management',
    'Team Coordination',
    'Market Research & Consumer Insights',
    'Strategic Planning & Creative Problem Solving',
    'Business Communication & Client Handling'
  ],

  certifications: [
    {
      id: 'photoshop',
      category: 'Photoshop & Graphic Design',
      categoryBn: 'ফটোশপ ও গ্রাফিক ডিজাইন',
      title: 'Photoshop Expert / Photoshop Certification',
      titleBn: 'ফটোশপ এক্সপার্ট ও গ্রাফিক ডিজাইন সার্টিফিকেশন',
      credentialBadge: 'Certified Expert',
      description: 'অ্যাডোবি ফটোশপ ও আধুনিক গ্রাফিক ডিজাইনে বিশেষ দক্ষতা। ব্র্যান্ড ভিজ্যুয়াল আইডেন্টিটি তৈরি, ফটো ম্যানিপুলেশন, রিটাচিং এবং প্রিমিয়াম ডিজিটাল ক্রিয়েটিভ আর্টওয়ার্ক আর্কিটেকচার।',
      skills: [
        'Adobe Photoshop Expert',
        'Graphic Design & Layouts',
        'Photo Retouching & Manipulation',
        'Visual Brand Assets',
        'Creative Direction'
      ],
      icon: 'palette' as const
    },
    {
      id: 'marketing',
      category: 'Marketing',
      categoryBn: 'মার্কেটিং ও ব্র্যান্ড স্ট্র্যাটেজি',
      title: 'Marketing Expert / Marketing Certification',
      titleBn: 'মার্কেটিং এক্সপার্ট ও ব্র্যান্ডিং সার্টিফিকেশন',
      credentialBadge: 'Certified Strategist',
      description: 'ডিজিটাল মার্কেটিং, স্ট্র্যাটেজিক ক্যাম্পেইন ম্যানেজমেন্ট এবং ব্র্যান্ড গ্রোথ ড্রাইভ করার প্রফেশনাল সার্টিফিকেশন। কনজিউমার সাইকোলজি, সোশ্যাল মিডিয়া পারফরম্যান্স ও রিটার্ন অন ইনভেস্টমেন্ট অপ্টিমাইজেশন।',
      skills: [
        'Marketing Expert',
        'Brand Strategy & Management',
        'Digital & Social Media Marketing',
        'Campaign Performance Analytics',
        'Customer Acquisition & Retention'
      ],
      icon: 'megaphone' as const
    },
    {
      id: 'music',
      category: 'Music & Singing',
      categoryBn: 'সংগীত ও সুরকলা',
      title: 'Singing / Music Certificates',
      titleBn: 'সংগীত ও কণ্ঠশিল্প সার্টিফিকেট',
      credentialBadge: 'Certified Artiste',
      description: 'কণ্ঠসংগীত ও মিউজিকে প্রাতিষ্ঠানিক স্বীকৃতি ও সংগীতচর্চা। সুর, তাল, নান্দনিক অডিও এক্সপ্রেশন এবং সৃজনশীল শৈল্পিক পারফরম্যান্সের অনন্য মেলবন্ধন।',
      skills: [
        'Vocal Music & Singing',
        'Acoustic Expression',
        'Musical Composition Appreciation',
        'Voice Modulation & Stage Presence',
        'Creative Arts Integration'
      ],
      icon: 'music' as const
    },
    {
      id: 'other-credentials',
      category: 'Other Credentials',
      categoryBn: 'অন্যান্য সার্টিফিকেশন ও প্রফেশনাল ক্রেডেনশিয়ালস',
      title: 'Venture Leadership & Legal Foundations',
      titleBn: 'উদ্যোক্তা নেতৃত্ব ও আইনি গবেষণা ভিত্তি',
      credentialBadge: 'Executive Credentials',
      description: 'ই-কমার্স বিজনেস ম্যানেজমেন্ট, এন্টারপ্রেনারশিপ লিডারশিপ, লিগ্যাল রিসার্চ মেথডলজি ও এক্সিকিউটিভ নেগোসিয়েশন সার্টিফিকেশন।',
      skills: [
        'E-Commerce Business Operations',
        'Legal Research & Analysis',
        'Critical Reasoning & Problem Solving',
        'Professional Communication & Negotiation'
      ],
      icon: 'award' as const
    }
  ],

  education: {
    degree: 'Bachelor of Laws — LL.B.',
    year: 'Law Student — 1st Year',
    description: 'বর্তমানে Law বিষয়ে পড়াশোনা করছি এবং Legal Knowledge, Research, Critical Thinking, Investigation ও Professional Development-এর ওপর গুরুত্ব দিচ্ছি।',
    academicInterests: [
      'Law',
      'Criminal & Civil Law',
      'Legal Research',
      'Investigation & Inquiry',
      'Journalism',
      'Business & Entrepreneurship',
      'Corporate & Commercial Affairs',
      'Legal Reasoning'
    ]
  },

  skills: {
    professional: [
      'Brand Management',
      'Marketing & Digital Marketing',
      'Business Development',
      'E-commerce Management',
      'Social Media Management',
      'Business Planning',
      'Customer Relationship Management',
      'Team Coordination',
      'Client Handling',
      'Sales & Communication',
      'Creative Problem Solving'
    ],
    analytical: [
      'Observation Skill',
      'Critical Thinking',
      'Logical Reasoning',
      'Analytical Thinking',
      'Decision Making',
      'Research & Information Analysis',
      'Problem Solving',
      'Strategic Thinking'
    ],
    communication: [
      'Professional Communication',
      'Customer Communication',
      'Client Handling',
      'Negotiation',
      'Team Communication',
      'Social Media Communication'
    ]
  },

  professionalInterests: [
    'Entrepreneurship',
    'Business & Brand Building',
    'Fashion & Clothing',
    'E-commerce',
    'Digital Business',
    'Law & Legal Studies',
    'Investigation',
    'Journalism',
    'Business Strategy',
    'Personal Branding',
    'Digital Media',
    'Marketing & Communication'
  ],

  sifriDetails: {
    name: 'SIFRI',
    tagline: 'Fashion, Lifestyle & E-Commerce Venture',
    url: 'https://sifribd.com',
    role: 'CEO & Founder — SIFRI',
    description: 'SIFRI হলো একটি আধুনিক লাইফস্টাইল ও ফ্যাশন ভিত্তিক ই-কমার্স উদ্যোগ। প্রধান নির্বাহী ও প্রতিষ্ঠাতা হিসেবে এখানে ব্র্যান্ড স্ট্র্যাটেজি, প্রোডাক্ট কিউরেশন, ডিজিটাল মার্কেটিং, কাস্টমার স্যাটিসফ্যাকশন এবং আধুনিক ডিজিটাল রিটেইল ইকোসিস্টেমের সামগ্রিক নেতৃত্ব প্রদান করা হয়।',
    pillars: [
      {
        title: 'Founder’s Vision & Leadership',
        desc: 'SIFRI-এর মার্কেট পজিশনিং, আধুনিক ব্র্যান্ড আইডেন্টিটি এবং দীর্ঘমেয়াদি বিজনেস ভ্যালু তৈরি।'
      },
      {
        title: 'Marketing & Digital Media',
        desc: 'টার্গেটেড ডিজিটাল ক্যাম্পেইন, সোশ্যাল মিডিয়া প্রেজেন্স এবং কনটেন্ট আর্কিটেকচার।'
      },
      {
        title: 'E-commerce & Operations',
        desc: 'সহজ অনলাইন অর্ডারিং, নির্ভরযোগ্য ডেলিভারি এবং ৬৪ জেলায় কাস্টমার ট্রাস্ট।'
      },
      {
        title: 'Customer Relationship',
        desc: 'সরাসরি সম্মানজনক গ্রাহক সেবা, সততা এবং দীর্ঘমেয়াদি রিলেশনশিপ বিল্ডিং।'
      }
    ],
    stats: [
      { label: 'রোল / পদবী', value: 'CEO & Founder' },
      { label: 'কভারেজ', value: '৬৪ জেলা বাংলাদেশ' },
      { label: 'অফিসিয়াল স্টোর', value: 'sifribd.com' }
    ]
  }
};
