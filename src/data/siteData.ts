export interface Campaign {
  id: string;
  title: string;
  year: string;
  description: string;
  impact?: string;
  tags: string[];
}

export interface ActionArea {
  id: string;
  title: string;
  description: string;
  examples: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
}

export interface SiteConfig {
  personal: {
    name: string;
    title: string;
    slogan: string;
    quote: string;
    email: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  socialLinks: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
  };
  blog: {
    url: string;
    manager: string;
  };
}

export const siteConfig: SiteConfig = {
  personal: {
    name: "Laurent NASSARA",
    title: "Juriste · Défenseur des Droits Humains · Activiste Environnement",
    slogan: "Du local au global, lutter pour un monde équitable et durable",
    quote: "La plus grande menace pour notre planète est la croyance que quelqu'un d'autre la sauvera.",
    email: "contact@laurentnassara.org"
  },
  colors: {
    primary: "#1B5E20",
    secondary: "#2E7D32",
    accent: "#E8572A",
    background: "#F1F8E9",
    text: "#1B1B1B"
  },
  socialLinks: {
    instagram: "https://instagram.com/laurentnassara",
    twitter: "https://x.com/laurentnassara",
    linkedin: "https://linkedin.com/in/laurentnassara",
    facebook: "https://facebook.com/laurentnassara",
  },
  blog: {
    url: "https://laurentnassara.wordpress.com",
    manager: "WordPress"
  }
};

export const actionAreas: ActionArea[] = [
  {
    id: "human-rights-climate",
    title: "Droits Humains & Climat",
    description: "Défense des communautés vulnérables face aux changements climatiques, avec une approche centrée sur la justice sociale et l'équité intergénérationnelle.",
    examples: [
      "Accompagnement juridique des réfugiés climatiques",
      "Plaidoyer pour la révision du Code pénal et du Code du numérique",
      "Formation en web activisme sain avec Amnesty International Bénin",
      "Participation aux colloques sur la santé sexuelle et reproductive",
      "Plaidoyer pour la reconnaissance du crime d'écocide",
      "Soutien aux communautés lacustres de Ganvié"
    ],
    icon: "👥"
  },
  {
    id: "climate-justice-ecosystems",
    title: "Justice Climatique & Écosystèmes",
    description: "Protection des écosystèmes aquatiques et lutte contre les inégalités environnementales, en particulier dans les zones lacustres et les quartiers informels du Bénin.",
    examples: [
      "Collecte communautaire de jacinthes d'eau à Ganvié",
      "Sensibilisation aux ODD dans les écoles primaires",
      "Actions pour la préservation des écosystèmes aquatiques (MJPEA)",
      "Documentation de l'impact de la pollution sur la santé des jeunes filles",
      "Participation aux COP et sommets climatiques",
      "Animation d'ateliers de restitution sur l'environnement"
    ],
    icon: "🌱"
  },
  {
    id: "digital-responsibility",
    title: "Numérique Responsable & Plaidoyer Digital",
    description: "Utilisation éthique des technologies pour l'activisme, contribution aux projets Wikimedia et formation aux outils militants sécurisés.",
    examples: [
      "Contribution aux projets Wikidata et Wikipédia lors de Make Africa 2025",
      "Formation au web activisme sain et à la cybersécurité",
      "Enrichissement de Wikipédia en langue Fon",
      "Sensibilisation aux risques de l'IA et du deepfake",
      "Stratégie de communication digitale pour Amnesty International Bénin",
      "Veille sur l'impact environnemental du numérique"
    ],
    icon: "💻"
  }
];

export const campaigns: Campaign[] = [
  {
    id: "campaign-1",
    title: "Collecte communautaire de jacinthes d'eau – Ganvié",
    year: "2025",
    description: "Trois jours d'action collective à Ganvié avec le MJPEA pour collecter des jacinthes d'eau au profit de la coopérative féminine TOGBLE-TOGNON, alliant écologie et entrepreneuriat féminin.",
    impact: "5 tonnes de jacinthes collectées, 50+ jeunes mobilisés, voies navigables dégagées",
    tags: ["Écosystèmes", "Entrepreneuriat féminin", "Ganvié"]
  },
  {
    id: "campaign-2",
    title: "EPP GÈDÈVIÉ – Ambassadeurs des ODD",
    year: "2025",
    description: "Sensibilisation des élèves de l'EPP GÈDÈVIÉ à Ganvié aux Objectifs de Développement Durable, à l'occasion des 10 ans de l'Agenda 2030 de l'ONU.",
    impact: "Élèves devenus ambassadeurs des ODD, dons de matériel pédagogique",
    tags: ["ODD", "Éducation", "Jeunesse"]
  },
  {
    id: "campaign-3",
    title: "Formation CIWA – Web Activisme Sain",
    year: "2025",
    description: "Formation des points focaux du Comité d'Impulsion du Web Activisme d'Amnesty International Bénin à Bohicon, sur l'activisme numérique éthique et la sécurité des données.",
    impact: "Points focaux formés dans tout le Bénin, 4 outils de plaidoyer vulgarisés",
    tags: ["Droits humains", "Numérique", "Amnesty"]
  },
  {
    id: "campaign-4",
    title: "CIAS-SSR 2025 – Boursier Junior",
    year: "2025",
    description: "Participation au Colloque International sur les Avancées Scientifiques en Santé Sexuelle et Reproductive à Cotonou, en tant que boursier junior sélectionné.",
    impact: "Échanges avec experts UNFPA, Enabel, Partenariat de Ouagadougou et ABPF",
    tags: ["Santé reproductive", "Recherche", "International"]
  },
  {
    id: "campaign-5",
    title: "Make Africa 2025 – Contribution Wikimedia",
    year: "2025",
    description: "Contribution aux projets Wikidata et Wikipédia lors du festival Make Africa 2025, pour enrichir la présence du Bénin sur les plateformes numériques mondiales.",
    impact: "Marchés et quartiers du Bénin ajoutés, articles en langue Fon créés",
    tags: ["Numérique", "Wikimedia", "Bénin"]
  },
  {
    id: "campaign-6",
    title: "Restitution Bootcamp YES 2025",
    year: "2025",
    description: "Co-organisation de la séance de restitution du Bootcamp YES Natitingou 2025 à l'UAC, partageant les acquis en santé reproductive, entrepreneuriat durable et environnement.",
    impact: "15+ jeunes inspirés, espace d'échange créé entre alumni et nouvelle génération",
    tags: ["Jeunesse", "Entrepreneuriat", "UNFPA"]
  }
];

// Real blog posts from laurentnassara.wordpress.com
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "L'impact invisible de la pollution sur la santé sexuelle des jeunes filles vivant dans les quartiers informels du sud du Bénin",
    excerpt: "Dans les quartiers informels du Sud du Bénin, notamment Toweta, Ladji ou Ganvié, l'impact de la pollution sur la santé sexuelle est un mal souvent ignoré, pourtant dévastateur.",
    date: "21 novembre 2025",
    readTime: "6 min",
    category: "Santé & Environnement",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    url: "https://laurentnassara.wordpress.com/2025/11/21/limpact-invisible-de-la-pollution/"
  },
  {
    id: "blog-2",
    title: "Ma contribution aux projets Wikimedia lors de Make Africa 2025",
    excerpt: "Du 5 au 8 novembre 2025, le Wikimediens User Group du Bénin a organisé un atelier Wikidata dans le cadre du festival Make Africa — quatre jours pour enrichir la présence du Bénin.",
    date: "9 novembre 2025",
    readTime: "4 min",
    category: "Numérique",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    url: "https://laurentnassara.wordpress.com/2025/11/09/wikimedia-make-africa-2025/"
  },
  {
    id: "blog-3",
    title: "CIAS-SSR 2025 : Retour sur un colloque international dédié à la Santé Sexuelle et Reproductive",
    excerpt: "J'ai eu l'honneur de participer en tant que boursier junior au Colloque International sur les Avancées Scientifiques en Santé Sexuelle et Reproductive à Cotonou.",
    date: "9 novembre 2025",
    readTime: "5 min",
    category: "Santé reproductive",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    url: "https://laurentnassara.wordpress.com/2025/11/09/cias-ssr-2025/"
  },
  {
    id: "blog-4",
    title: "Ma participation à la formation des points focaux CIWA d'Amnesty International Bénin à Bohicon",
    excerpt: "Formation sur le web activisme sain organisée par le comité CIWA d'Amnesty International Bénin — comment influencer un changement social par le numérique, avec éthique.",
    date: "27 octobre 2025",
    readTime: "5 min",
    category: "Droits Humains",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    url: "https://laurentnassara.wordpress.com/2025/10/27/formation-ciwa-amnesty/"
  },
  {
    id: "blog-5",
    title: "Ganvié : trois jours de collecte communautaire de jacinthes d'eau par le MJPEA",
    excerpt: "Les eaux de Ganvié ont vibré au rythme d'une action collective inédite : la collecte de jacinthes d'eau pour soutenir l'entrepreneuriat féminin de la coopérative TOGBLE-TOGNON.",
    date: "30 septembre 2025",
    readTime: "4 min",
    category: "Environnement",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    url: "https://laurentnassara.wordpress.com/2025/09/30/ganvie-jacinthes-deau-mjpea/"
  },
  {
    id: "blog-6",
    title: "Ganvié : Les élèves de l'EPP GÈDÈVIÉ deviennent ambassadeurs des ODD",
    excerpt: "À l'occasion des 10 ans de l'Agenda 2030, le MJPEA et l'APODD ont sensibilisé les élèves de l'EPP GÈDÈVIÉ aux Objectifs de Développement Durable.",
    date: "26 septembre 2025",
    readTime: "3 min",
    category: "Éducation",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    url: "https://laurentnassara.wordpress.com/2025/09/26/epp-gedvie-ambassadeurs-odd/"
  }
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    category: 'Biodiversité',
    icon: '🦅',
    title: 'Identifier et dénombrer les oiseaux d\'Afrique du Nord et du Sahel',
    subtitle: 'Comment et dans quel but ?',
    issuer: 'MOOC Conservation',
    year: '2024',
    color: '#1B5E20',
    credentialUrl: 'https://www.mooc-conservation.org/certificates/07d024ea1b4d4b57befe422168c917da',
    description: 'Certification en identification et dénombrement des oiseaux d\'Afrique du Nord et du Sahel.',
    skills: ['Ornithologie', 'Biodiversité', 'Conservation'],
  },
  {
    id: "cert-2",
    category: 'Conservation',
    icon: '⚖️',
    title: 'Application des lois en matière de conservation',
    subtitle: 'Certificat de réussite',
    issuer: 'MOOC Conservation',
    year: '2024',
    color: '#2E7D32',
    credentialUrl: 'https://www.mooc-conservation.org/certificates/84e5e61f6ab14209913328f18a25eb27',
    description: 'Maîtrise des cadres légaux en matière de conservation de la biodiversité.',
    skills: ['Droit environnemental', 'Conservation', 'Législation'],
  },
  {
    id: "cert-3",
    category: 'Droits Humains',
    icon: '🏛️',
    title: 'Démocratie, Citoyenneté et État de Droit',
    subtitle: 'Attestation de succès',
    issuer: 'Université de Senghor',
    year: '2024',
    color: '#1565C0',
    credentialUrl: 'https://drive.google.com/file/d/171-b0ctm0Pn8Fihm3DlkfDmKKvPsQZMz/view?usp=drivesdk',
    description: 'Formation sur la démocratie, la citoyenneté et l\'état de droit.',
    skills: ['Démocratie', 'Citoyenneté', 'État de droit'],
  },
  {
    id: "cert-4",
    category: 'Juridique',
    icon: '📋',
    title: 'Formation sur la rédaction des recours',
    subtitle: 'Attestation de participation',
    issuer: 'Formation spécialisée',
    year: '2024',
    color: '#E8572A',
    credentialUrl: 'https://drive.google.com/file/d/170LnvLYdXePejCa1PmFsUGEwicvsfSqi/view?usp=drivesdk',
    description: 'Formation pratique à la rédaction de recours juridiques.',
    skills: ['Rédaction juridique', 'Recours', 'Plaidoyer'],
  },
  {
    id: "cert-5",
    category: 'Santé Reproductive',
    icon: '🩺',
    title: 'Colloque international CIAS-SSR 2025',
    subtitle: 'Santé Sexuelle et Reproductive',
    issuer: 'ABPF / Enabel Bénin',
    year: '2025',
    color: '#6A1B9A',
    credentialUrl: 'https://drive.google.com/file/d/17I-iphzfbzWepwI4BFyFSsadKnIzgYng/view?usp=drivesdk',
    description: 'Participation en tant que boursier junior au colloque international sur les avancées scientifiques en DSSR.',
    skills: ['DSSR', 'Plaidoyer santé', 'Recherche'],
  },
  {
    id: "cert-6",
    category: 'Paix & Sécurité',
    icon: '🕊️',
    title: 'Introduction aux opérations de paix',
    subtitle: 'Certificat de succès – Programme en ligne',
    issuer: 'Formation internationale',
    year: '2024',
    color: '#00838F',
    credentialUrl: 'https://drive.google.com/file/d/17683rkZljRkbdadVwrL_D3OLlaVhs8T3/view?usp=drivesdk',
    description: 'Connaissances fondamentales des opérations de paix de l\'ONU.',
    skills: ['Opérations de paix', 'Sécurité internationale', 'ONU'],
  },
  {
    id: "cert-7",
    category: 'Santé Reproductive',
    icon: '🌐',
    title: 'Conférence internationale sur la planification familiale',
    subtitle: 'ICFP Bogota 2025',
    issuer: 'ICFP — Bogota, Colombie',
    year: '2025',
    color: '#AD1457',
    credentialUrl: 'https://drive.google.com/file/d/15cBtyAURS9p4BHaWmbJcMP2g7Zf41TvX/view?usp=drivesdk',
    description: 'Participation à la conférence internationale sur la planification familiale à Bogota.',
    skills: ['Planification familiale', 'DSSR', 'International'],
  },
  {
    id: "cert-8",
    category: 'Leadership Jeunesse',
    icon: '🤝',
    title: 'AU-EU Youth Voice Lab — Power of the Collective',
    subtitle: 'Certificate of Attendance',
    issuer: 'Union Africaine – Union Européenne',
    year: '2024',
    color: '#F57F17',
    credentialUrl: 'https://drive.google.com/file/d/176nu5_JPyqZzqrJcBYejTNqHiu3FVFz_/view?usp=drivesdk',
    description: 'Programme AU-EU Youth Voice Lab sur la puissance collective et le leadership jeunesse.',
    skills: ['Leadership', 'Coopération AU-EU', 'Jeunesse'],
  },
  {
    id: "cert-9",
    category: 'Diplomatie',
    icon: '🗺️',
    title: 'Conférence d\'initiative au multilatéralisme',
    subtitle: 'Chef de la délégation de l\'Union Africaine',
    issuer: 'Conférence internationale',
    year: '2024',
    color: '#1B5E20',
    credentialUrl: 'https://drive.google.com/file/d/172skRGPQC553EysqrehxNotziciDoFqh/view?usp=drivesdk',
    description: 'Participation en qualité de chef de la délégation de l\'Union Africaine.',
    skills: ['Diplomatie', 'Multilatéralisme', 'UA'],
  },
] as any;