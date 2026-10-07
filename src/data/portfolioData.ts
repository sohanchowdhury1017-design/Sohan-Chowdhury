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
  fullName: 'N.B.N. Sohan Chowdhury',
  shortName: 'Sohan Chowdhury',
  preferredCall: 'NBN Sohan',
  searchAliases: [
    'nbn sohan',
    'n b n sohan',
    'nbn sohan chowdhury',
    'n b n sohan chowdhury',
    'NBN Sohan',
    'N B N Sohan',
    'NBN Sohan Chowdhury',
    'N.B.N. Sohan Chowdhury',
    'Sohan Chowdhury'
  ],
  headline: 'Entrepreneur • Brand & Marketing Professional • Law Student',
  headlineBn: 'উদ্যোক্তা • ব্র্যান্ড ও মার্কেটিং প্রফেশনাল • আইন শিক্ষার্থী',
  workingCategory: 'Entrepreneur / Business Owner',
  workingCategoryBn: 'উদ্যোক্তা / বিজনেস ওনার',
  currentRole: 'CEO & Founder — SIFRI',
  currentRoleBn: 'সিইও এবং প্রতিষ্ঠাতা — SIFRI',
  
  // ব্যক্তিগত ও পারিবারিক তথ্য
  birthDate: '19 July 2006 (১৯ জুলাই ২০০৬, বুধবার)',
  birthDateEn: '19 July 2006, Wednesday',
  birthDateDisplay: '19 July 2006',
  family: {
    father: {
      name: 'Sazzad Chowdhury',
      nameBn: 'সাজ্জাদ চৌধুরী',
      role: 'Businessman',
      roleBn: 'ব্যবসায়ী',
    },
    mother: {
      name: 'Urmi Chowdhury',
      nameBn: 'উর্মি চৌধুরী',
      role: 'Director, Private School',
      roleBn: 'একটি প্রাইভেট স্কুলের ডিরেক্টর',
    },
  },
  businessJourneyStartYear: '২০২১',
  businessJourneyStartYearEn: '2021',

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
  coverPhoto2: 'https://res.cloudinary.com/b5z0n3sl/image/upload/c_fill,w_1024,h_346,g_auto/v1791186496/Gemini_Generated_Image_ibv4uwibv4uwibv4.jpg',
  coverPhoto2Local: '/assets/sohan_banner_2.jpg',
  bannerSlides: [
    {
      id: 1,
      image: 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791128782/6f2545b3-fd9a-4079-bd24-577ae9b0cf31.jpg',
      fallback: '/assets/sohan_banner.jpg',
      alt: 'N.B.N Sohan Chowdhury - Official Brand Banner 1',
      title: 'Official Brand Identity',
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/b5z0n3sl/image/upload/c_fill,w_1024,h_346,g_auto/v1791186496/Gemini_Generated_Image_ibv4uwibv4uwibv4.jpg',
      fallback: '/assets/sohan_banner_2.jpg',
      alt: 'N.B.N Sohan Chowdhury - Official Brand Banner 2',
      title: 'Executive Vision & Leadership',
    }
  ],
  siteIcon: 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791103462/Hand-drawn_letter_S_icon_2K_20261004121610.jpg',
  whatsappAvatar: 'https://res.cloudinary.com/b5z0n3sl/image/upload/v1791190538/edc07784-1c6c-44c8-8142-210351edf74a.jpg',
  whatsappAvatarLocal: '/assets/whatsapp_avatar.jpg',

  aboutMeParagraphs: [
    'আমি NBN Sohan (N.B.N. Sohan Chowdhury)—একজন তরুণ Entrepreneur, Brand & Marketing Professional এবং Law Student।',
    'Business, Branding, Marketing, Fashion, Law, Digital Media, Investigation এবং Journalism-এর প্রতি আমার বিশেষ আগ্রহ রয়েছে। আমি নতুন কিছু শেখা, বাস্তব অভিজ্ঞতা অর্জন করা এবং নিজের Professional Skills নিয়মিত উন্নত করার চেষ্টা করি।',
    'আমার কাজের ক্ষেত্রে Creativity, Critical Thinking, Observation, Logical Reasoning এবং Professional Communication-কে বিশেষ গুরুত্ব দিই। আমার লক্ষ্য হলো জ্ঞান ও বাস্তব অভিজ্ঞতাকে কাজে লাগিয়ে নিজের জন্য একটি শক্তিশালী এবং সফল Professional Career তৈরি করা।',
    'পেশাগত কাজের পাশাপাশি সুর ও বাদ্যযন্ত্রের জগতে আমার বিশেষ বিচরণ রয়েছে—আমি অ্যাকোস্টিক গিটার বাজাই। গিটারের সুরেলা অ্যাকোস্টিক মেলোডি, রিদম ও কর্ডস আমার চিন্তাভাবনায় নতুন সৃজনশীলতা, একাগ্রতা ও অনুপ্রেরণা জোগায়।'
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
      category: 'Guitar Performance & Music',
      categoryBn: 'অ্যাকোস্টিক গিটার বাদন ও সংগীতকলা',
      title: 'Acoustic Guitar Performance / Music Certification',
      titleBn: 'অ্যাকোস্টিক গিটার পারফরম্যান্স ও মিউজিক সার্টিফিকেশন',
      credentialBadge: 'Certified Guitarist',
      description: 'অ্যাকোস্টিক গিটার বাদন ও যন্ত্রসংগীতে প্রাতিষ্ঠানিক স্বীকৃতি ও নিয়মিত গিটারচর্চা। গিটারের সুরেলা অ্যাকোস্টিক কর্ডস, রিদম ও মেলোডিক ফ্রেজিং, স্বরলিপি এবং নান্দনিক বাদ্যযন্ত্র পারফরম্যান্সের শৈল্পিক প্রকাশ।',
      skills: [
        'Acoustic Guitar Playing',
        'Guitar Chords & Rhythms',
        'Melodic Phrasing & Fingerstyle',
        'Instrumental Composition Appreciation',
        'Acoustic Sound & Stage Performance'
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
    degreeBn: 'ব্যাচেলর অব লজ (LL.B.)',
    year: 'Law Student — 1st Year (প্রথম বর্ষ)',
    description: 'বর্তমানে আমি LLB-এর ১ম বর্ষে অধ্যয়নরত। প্রাতিষ্ঠানিক আইন শিক্ষা, লিগ্যাল রিসার্চ, ক্রিটিক্যাল থিংকিং, ইনভেস্টিগেশন এবং বিশ্লেষণধর্মী আইনি দক্ষতা উন্নয়নের ওপর বিশেষ গুরুত্ব দিচ্ছি।',
    timeline: [
      {
        id: 'llb',
        level: 'LLB (Bachelor of Laws)',
        levelBn: 'আইন শিক্ষা — ১ম বর্ষ (LL.B.)',
        status: 'বর্তমানে ১ম বর্ষে অধ্যয়নরত',
        statusEn: 'Currently Enrolled — 1st Year',
        institution: 'আইন অনুষদ (Faculty of Law)',
        institutionBn: 'আইন বিভাগ',
        badge: 'বর্তমান প্রাতিষ্ঠানিক ডিগ্রি',
        current: true,
        description: 'আইনি জ্ঞান, প্রাতিষ্ঠানিক গবেষণা, বিশ্লেষণধর্মী দৃষ্টিভঙ্গি ও পেশাগত দক্ষতা উন্নয়ন।'
      },
      {
        id: 'hsc',
        level: 'Higher Secondary Certificate (HSC)',
        levelBn: 'উচ্চ মাধ্যমিক (HSC)',
        status: 'এইচএসসি সম্পন্ন',
        statusEn: 'Completed',
        institution: 'রংপুর (Rangpur)',
        institutionBn: 'রংপুর',
        badge: 'উচ্চ মাধ্যমিক শিক্ষা',
        current: false,
        description: 'রংপুর থেকে সাফল্যের সাথে উচ্চ মাধ্যমিক (HSC) সম্পন্ন।'
      },
      {
        id: 'ssc',
        level: 'Secondary School Certificate (SSC)',
        levelBn: 'মাধ্যমিক (SSC)',
        status: 'এসএসসি সম্পন্ন',
        statusEn: 'Completed',
        institution: 'Nurjahanpur RMC High School',
        institutionBn: 'নূরজাহানপুর আরএমসি হাই স্কুল',
        badge: 'মাধ্যমিক শিক্ষা',
        current: false,
        description: 'Nurjahanpur RMC High School থেকে কৃতিত্বের সাথে মাধ্যমিক (SSC) সম্পন্ন।'
      }
    ],
    academicInterests: [
      'Law & Jurisprudence',
      'Criminal & Civil Law',
      'Legal Research',
      'Investigation & Inquiry',
      'Journalism & Media',
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
