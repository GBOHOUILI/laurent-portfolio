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
  subtitle?: string;
  issuer: string;
  year: string;
  category: string;
  description?: string;
  skills?: string[];
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
    quote:
      "La plus grande menace pour notre planète est la croyance que quelqu'un d'autre la sauvera.",
    email: " laurentnassarah@gmail.com",
  },
  colors: {
    primary: "#1A1916",
    secondary: "#C4A882",
    accent: "#8B7355",
    background: "#F7F4EF",
    text: "#1A1916",
  },
  socialLinks: {
    instagram: "https://instagram.com/laurent.nassara",
    twitter: "https://x.com/laurentnassara",
    linkedin: "http://linktr.ee/laurent.nassara",
    facebook: "https://facebook.com/nassara.laurent",
  },
  blog: {
    url: "https://laurentnassara.wordpress.com",
    manager: "WordPress",
  },
};

export const actionAreas: ActionArea[] = [
  {
    id: "human-rights-climate",
    title: "Droits Humains & Climat",
    description:
      "Défense des communautés vulnérables face aux changements climatiques, avec une approche centrée sur la justice sociale et l'équité intergénérationnelle.",
    examples: [
      "Accompagnement juridique des réfugiés climatiques",
      "Plaidoyer pour la révision du Code pénal et du Code du numérique",
      "Formation en web activisme sain avec Amnesty International Bénin",
      "Participation aux colloques sur la santé sexuelle et reproductive",
      "Plaidoyer pour la reconnaissance du crime d'écocide",
      "Soutien aux communautés lacustres de Ganvié",
    ],
    image: "/Droits_Humains___Climat-removebg-preview.png",
  },
  {
    id: "climate-justice-ecosystems",
    title: "Justice Climatique & Écosystèmes",
    description:
      "Protection des écosystèmes aquatiques et lutte contre les inégalités environnementales, en particulier dans les zones lacustres et les quartiers informels du Bénin.",
    examples: [
      "Collecte communautaire de jacinthes d'eau à Ganvié (5 tonnes, 50 jeunes)",
      "Sensibilisation aux ODD dans les écoles primaires de Ganvié",
      "Actions pour la préservation des écosystèmes aquatiques (MJPEA)",
      "Documentation de l'impact de la pollution sur la santé des jeunes filles",
      "Participation aux COP et sommets climatiques",
      "Animation d'ateliers de restitution sur l'environnement",
    ],
    image: "/Justice_Climatique___Écosystèmes-removebg-preview.png",
  },
  {
    id: "digital-responsibility",
    title: "Numérique Responsable & Plaidoyer Digital",
    description:
      "Utilisation éthique des technologies pour l'activisme, contribution aux projets Wikimedia et formation aux outils militants sécurisés.",
    examples: [
      "Contribution aux projets Wikidata et Wikipédia lors de Make Africa 2025",
      "Formation au web activisme sain et à la cybersécurité (CIWA, Amnesty)",
      "Enrichissement de Wikipédia en langue Fon",
      "Sensibilisation aux risques de l'IA et du deepfake",
      "Stratégie de communication digitale pour Amnesty International Bénin",
      "Veille sur l'impact environnemental du numérique",
    ],
    image: "/Numérique_Responsable___Plaidoyer_Digital-removebg-preview.png",
  },
];

export const campaigns: Campaign[] = [
  {
    id: "campaign-1",
    title: "Collecte communautaire de jacinthes d'eau – Ganvié",
    year: "2025",
    description:
      "Trois jours d'action collective à Ganvié avec le MJPEA pour collecter des jacinthes d'eau au profit de la coopérative féminine TOGBLE-TOGNON, alliant écologie et entrepreneuriat féminin.",
    impact: "5 tonnes collectées · 50 jeunes mobilisés",
    tags: ["Environnement", "Genre", "Communauté"],
  },
  {
    id: "campaign-2",
    title: "#StopEACOP – Contre l'oléoduc en Afrique de l'Est",
    year: "2024",
    description:
      "Mobilisation contre le projet d'oléoduc EACOP, destructeur pour les communautés et les écosystèmes. Campagne de plaidoyer et de sensibilisation au Bénin.",
    impact: "Plaidoyer international",
    tags: ["Climat", "Droits", "Plaidoyer"],
  },
  {
    id: "campaign-3",
    title: "Sensibilisation ODD – Écoles de Ganvié",
    year: "2025",
    description:
      "À l'occasion des 10 ans de l'Agenda 2030, sensibilisation des élèves de Ganvié aux Objectifs de Développement Durable avec le MJPEA et l'APODD.",
    impact: "Plusieurs classes touchées",
    tags: ["Éducation", "ODD", "Jeunesse"],
  },
];

// All 25+ certificates from the WhatsApp document
export const certificates: Certificate[] = [
  // Internet Governance
  {
    id: "cert-icann-1",
    title: "Introduction to ICANN",
    subtitle: "Course 1021.1",
    issuer: "ICANN Learn",
    year: "2024",
    category: "Gouvernance Internet",
    credentialUrl:
      "https://drive.google.com/file/d/16Jc5K4HLmQxpxH5HDK3ENoZhoaeTFexu/view?usp=drivesdk",
  },
  {
    id: "cert-icann-2",
    title: "Introduction to Universal Acceptance (UA)",
    subtitle: "Course 605",
    issuer: "ICANN Learn",
    year: "2024",
    category: "Gouvernance Internet",
    credentialUrl:
      "https://drive.google.com/file/d/15xBWnrH4LidmzVPugXXUjMWQPI6vHDXF/view?usp=drivesdk",
  },
  {
    id: "cert-icann-3",
    title: "ICANN Public Meeting for Newcomers",
    subtitle: "Course 103",
    issuer: "ICANN Learn",
    year: "2024",
    category: "Gouvernance Internet",
    credentialUrl:
      "https://drive.google.com/file/d/15xieNY-B_by_vekUE5GsDRnOse_x_KFJ/view?usp=drivesdk",
  },
  {
    id: "cert-youth-igf",
    title:
      "Forum National de la Jeunesse sur la Gouvernance de l'Internet au Bénin",
    subtitle: "YOUTH IGF BENIN",
    issuer: "Youth IGF Bénin",
    year: "2024",
    category: "Gouvernance Internet",
    credentialUrl:
      "https://drive.google.com/file/d/16NqerxejTJEMooh0ciLjiFSnSCvxPqSf/view?usp=drivesdk",
  },
  {
    id: "cert-women-free",
    title: "École sur la Gouvernance de l'Internet",
    subtitle: "Certificat de succès",
    issuer: "Women Be Free",
    year: "2024",
    category: "Gouvernance Internet",
    credentialUrl:
      "https://drive.google.com/file/d/17C0q-H7hJdSwZOa-HD7amnH_yGQx4C6a/view?usp=drivesdk",
  },
  {
    id: "cert-desinformation",
    title:
      "Vérification des faits et enquête sur la désinformation et la mésinformation",
    subtitle: "Certificat de fin de formation",
    issuer: "Formation spécialisée",
    year: "2024",
    category: "Numérique",
    credentialUrl:
      "https://drive.google.com/file/d/1AsOsCkRlj6fyhNlqkICoFOQMjp2c/view?usp=drivesdk",
  },
  // Environnement
  {
    id: "cert-prme-cop30",
    title: "PRME Students COP 30 Programme",
    subtitle: "Certificate of completion",
    issuer: "PRME",
    year: "2025",
    category: "Environnement",
    credentialUrl:
      "https://drive.google.com/file/d/15sBZKwZ6nFkBm5zkgbYoWGjwAlAO6w9O/view?usp=drivesdk",
  },
  {
    id: "cert-uncc-enfants",
    title: "Les enfants et le changement climatique",
    subtitle: "Certificat UNCC-Learning",
    issuer: "UNCC-Learning",
    year: "2024",
    category: "Environnement",
    credentialUrl:
      "https://drive.google.com/file/d/16pAMeh5x-YwsSHfifytg0yZ0NfKq9j5q/view?usp=drivesdk",
  },
  {
    id: "cert-uncc-villes",
    title: "Les villes et le changement climatique",
    subtitle: "Certificat UNCC-Learning",
    issuer: "UNCC-Learning",
    year: "2024",
    category: "Environnement",
    credentialUrl:
      "https://drive.google.com/file/d/16QM7C81yDytO34tdvigTarjqxLPdEKB0/view?usp=drivesdk",
  },
  {
    id: "cert-uncc-guide",
    title:
      "Guide du participant au processus de l'ONU sur le changement climatique",
    subtitle: "Certificat de formation",
    issuer: "UNCC-Learning",
    year: "2024",
    category: "Environnement",
    credentialUrl:
      "https://drive.google.com/file/d/16RxzgcXur3qr2j5e4f183xsYXVEqjPIr/view?usp=drivesdk",
  },
  {
    id: "cert-bordeaux-participation",
    title: "Université d'été Bordeaux-Afrique 2025",
    subtitle:
      "Durabilité : le défi juridique du siècle — Attestation de participation",
    issuer: "Université de Bordeaux",
    year: "2025",
    category: "Environnement",
    credentialUrl:
      "https://drive.google.com/file/d/15s2SzxJAywTZKZGi27vSMVs0ekOS06HS/view?usp=drivesdk",
  },
  {
    id: "cert-bordeaux-reussite",
    title: "Université d'été Bordeaux-Afrique 2025",
    subtitle: "Certificat de réussite à l'évaluation",
    issuer: "Université de Bordeaux",
    year: "2025",
    category: "Environnement",
    credentialUrl:
      "https://drive.google.com/file/d/15npR2beOO_xs928pVv0RLxHyDcJ-i6pl/view?usp=drivesdk",
  },
  {
    id: "cert-carbon-justice",
    title: "Carbon Justice 2025",
    subtitle: "Course 101 Certificate",
    issuer: "Carbon Justice",
    year: "2025",
    category: "Environnement",
    credentialUrl:
      "https://drive.google.com/file/d/1BgtBx-eEdEgV7CIhYUy1FnTFcwhCNyqy/view?usp=drivesdk",
  },
  {
    id: "cert-aires-protegees",
    title: "Restaurer les aires protégées",
    subtitle: "Attestation de succès – Tutoriel",
    issuer: "MOOC Conservation",
    year: "2024",
    category: "Biodiversité",
    credentialUrl:
      "https://www.mooc-conservation.org/certificates/dde61c960c6845a6ab5d8b169053c8aa",
  },
  {
    id: "cert-eduquer-conservation",
    title: "Éduquer à la conservation de la nature",
    subtitle: "Certificat",
    issuer: "MOOC Conservation",
    year: "2024",
    category: "Biodiversité",
    credentialUrl:
      "https://www.mooc-conservation.org/certificates/3f02dc2afe6245898a3531e88c491713",
  },
  {
    id: "cert-aires-marines",
    title: "Aires marines protégées",
    subtitle: "Certificat MOOC",
    issuer: "MOOC Conservation",
    year: "2024",
    category: "Biodiversité",
    credentialUrl:
      "https://www.mooc-conservation.org/certificates/0429e1a83acb4e028c4a395430e837ee",
  },
  {
    id: "cert-oiseaux",
    title: "Identifier et dénombrer les oiseaux d'Afrique du Nord et du Sahel",
    subtitle: "Comment et dans quel but ?",
    issuer: "MOOC Conservation",
    year: "2024",
    category: "Biodiversité",
    credentialUrl:
      "https://www.mooc-conservation.org/certificates/07d024ea1b4d4b57befe422168c917da",
  },
  {
    id: "cert-lois-conservation",
    title: "Application des lois en matière de conservation",
    subtitle: "Certificat de réussite",
    issuer: "MOOC Conservation",
    year: "2024",
    category: "Biodiversité",
    credentialUrl:
      "https://www.mooc-conservation.org/certificates/84e5e61f6ab14209913328f18a25eb27",
  },
  // Droits & Gouvernance
  {
    id: "cert-democratie",
    title: "Démocratie, Citoyenneté et État de Droit",
    subtitle: "Attestation de succès",
    issuer: "Université de Senghor",
    year: "2024",
    category: "Droits Humains",
    credentialUrl:
      "https://drive.google.com/file/d/171-b0ctm0Pn8Fihm3DlkfDmKKvPsQZMz/view?usp=drivesdk",
  },
  {
    id: "cert-recours",
    title: "Formation sur la rédaction des recours",
    subtitle: "Attestation de participation",
    issuer: "Formation spécialisée",
    year: "2024",
    category: "Droits Humains",
    credentialUrl:
      "https://drive.google.com/file/d/170LnvLYdXePejCa1PmFsUGEwicvsfSqi/view?usp=drivesdk",
  },
  // Santé
  {
    id: "cert-cias-ssr",
    title:
      "Colloque international sur les avancées scientifiques en santé sexuelle et reproductive",
    subtitle: "CIAS-SSR 2025 — Attestation de participation",
    issuer: "ABPF / Enabel Bénin",
    year: "2025",
    category: "Santé Reproductive",
    credentialUrl:
      "https://drive.google.com/file/d/17I-iphzfbzWepwI4BFyFSsadKnIzgYng/view?usp=drivesdk",
  },
  {
    id: "cert-icfp",
    title: "Conférence internationale sur la planification familiale",
    subtitle: "ICFP Bogota 2025 — Certificat de participation",
    issuer: "ICFP — Bogota, Colombie",
    year: "2025",
    category: "Santé Reproductive",
    credentialUrl:
      "https://drive.google.com/file/d/15cBtyAURS9p4BHaWmbJcMP2g7Zf41TvX/view?usp=drivesdk",
  },
  // Paix & International
  {
    id: "cert-paix",
    title:
      "Introduction aux connaissances fondamentales des opérations de paix",
    subtitle: "Certificat de succès – Programme en ligne",
    issuer: "Formation internationale ONU",
    year: "2024",
    category: "Paix & Sécurité",
    credentialUrl:
      "https://drive.google.com/file/d/17683rkZljRkbdadVwrL_D3OLlaVhs8T3/view?usp=drivesdk",
  },
  {
    id: "cert-au-eu",
    title: "AU-EU Youth Voice Lab — Power of the Collective",
    subtitle: "Certificate of Attendance",
    issuer: "Union Africaine – Union Européenne",
    year: "2024",
    category: "Leadership Jeunesse",
    credentialUrl:
      "https://drive.google.com/file/d/176nu5_JPyqZzqrJcBYejTNqHiu3FVFz_/view?usp=drivesdk",
  },
  {
    id: "cert-multilateralisme",
    title: "Conférence d'initiative au multilatéralisme",
    subtitle: "Chef de la délégation de l'Union Africaine",
    issuer: "Conférence internationale",
    year: "2024",
    category: "Diplomatie",
    credentialUrl:
      "https://drive.google.com/file/d/172skRGPQC553EysqrehxNotziciDoFqh/view?usp=drivesdk",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title:
      "L'impact invisible de la pollution sur la santé sexuelle des jeunes filles vivant dans les quartiers informels du sud du Bénin",
    excerpt:
      "Dans les quartiers informels du Sud du Bénin — Toweta, Ladji, Ganvié — la pollution environnementale menace silencieusement la santé reproductive des jeunes filles. Un mal invisible, pourtant dévastateur.",
    date: "21 novembre 2025",
    readTime: "6 min",
    category: "Santé & Environnement",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/11/figure-1-combined-lower-res-640x213-1.png",
    url: "https://laurentnassara.wordpress.com/2025/11/21/pollution-et-droits-sexuels-jeunes-filles/",
  },
  {
    id: "blog-2",
    title: "Ma contribution aux projets Wikimedia lors de Make Africa 2025",
    excerpt:
      "Du 5 au 8 novembre 2025, le Wikimediens User Group du Bénin a organisé un atelier Wikidata dans le cadre du festival Make Africa — quatre jours pour enrichir la présence du Bénin sur les plateformes mondiales.",
    date: "9 novembre 2025",
    readTime: "4 min",
    category: "Numérique",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/11/20251109_211100.jpg",
    url: "https://laurentnassara.wordpress.com/2025/11/09/contribution-wikimedia-make-africa-2025/",
  },
  {
    id: "blog-3",
    title:
      "CIAS-SSR 2025 : Retour sur un colloque international dédié à la Santé Sexuelle et Reproductive",
    excerpt:
      "J'ai eu l'honneur de participer en tant que boursier junior au Colloque International sur les Avancées Scientifiques en Santé Sexuelle et Reproductive (CIAS-SSR 2025) à l'hôtel AZALAÏ de Cotonou.",
    date: "9 novembre 2025",
    readTime: "5 min",
    category: "Santé reproductive",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/11/img-20251030-wa0001.jpg",
    url: "https://laurentnassara.wordpress.com/2025/11/09/ciassr-2025-sante-sexuelle-reproductive-2/",
  },
  {
    id: "blog-4",
    title:
      "Ma participation à la formation pré-colloque dans le cadre du CIAS-SSR",
    excerpt:
      "Formation en prélude au colloque international sur les avancées scientifiques en santé sexuelle et reproductive — plaidoyer, outils SMART et cas pratiques avec des experts du domaine.",
    date: "27 octobre 2025",
    readTime: "4 min",
    category: "Santé reproductive",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/10/img-20251027-wa1213.jpg",
    url: "https://laurentnassara.wordpress.com/2025/10/27/pre-colloque-cias-ssr-2025/",
  },
  {
    id: "blog-5",
    title:
      "Ma participation à la formation des points focaux CIWA d'Amnesty International Bénin à Bohicon",
    excerpt:
      "Formation sur le web activisme sain organisée par le comité CIWA d'Amnesty International Bénin — comment influencer un changement social par le numérique, avec éthique et en préservant la sécurité des activistes.",
    date: "27 octobre 2025",
    readTime: "5 min",
    category: "Droits Humains",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/10/outlook-t4cds4ex.jpg",
    url: "https://laurentnassara.wordpress.com/2025/10/27/web-activisme-amnesty-benin/",
  },
  {
    id: "blog-6",
    title:
      "Restitution du Bootcamp YES 2025 : échange entre alumni et jeunes à l'UAC",
    excerpt:
      "Le 11 octobre 2025, à l'Université d'Abomey-Calavi, co-organisation de la restitution du Bootcamp YES Natitingou 2025 — partage sur la santé reproductive, l'entrepreneuriat durable et la protection de l'environnement.",
    date: "18 octobre 2025",
    readTime: "4 min",
    category: "Jeunesse",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/10/img_1296.jpg",
    url: "https://laurentnassara.wordpress.com/2025/10/18/bootcamp-yes-2025-restitution-abomey-calavi/",
  },
  {
    id: "blog-7",
    title:
      "Ganvié : trois jours de collecte communautaire de jacinthes d'eau par le MJPEA",
    excerpt:
      "Les eaux de Ganvié ont vibré au rythme d'une action collective inédite : la collecte de jacinthes d'eau pour soutenir l'entrepreneuriat féminin de la coopérative TOGBLE-TOGNON. Cinq tonnes collectées en trois jours.",
    date: "30 septembre 2025",
    readTime: "4 min",
    category: "Environnement",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/10/img-20250927-wa0394.jpg",
    url: "https://laurentnassara.wordpress.com/2025/09/30/trois-jours-de-collecte-communautaire-de-jacinthes-deau-organise-par-mjpea-pour-soutenir-lentrepreneuriat-feminin/",
  },
  {
    id: "blog-8",
    title:
      "Ganvié : les élèves de l'EPP GÈDÈVIÉ deviennent ambassadeurs des ODD",
    excerpt:
      "À l'occasion des 10 ans de l'Agenda 2030, le MJPEA et l'APODD ont sensibilisé les élèves de Ganvié aux Objectifs de Développement Durable.",
    date: "26 septembre 2025",
    readTime: "3 min",
    category: "Éducation",
    image:
      "https://laurentnassara.wordpress.com/wp-content/uploads/2025/10/img-20250927-wa047028129.jpg",
    url: "https://laurentnassara.wordpress.com/2025/09/26/celebration-10-ans-odd-mjpea/",
  },
];
