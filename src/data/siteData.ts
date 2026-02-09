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
    mastodon?: string;
    github?: string;
  };
  blog: {
    url: string;
    manager: string;
  };
}

export const siteConfig: SiteConfig = {
  personal: {
    name: "Laurent Activiste",
    title: "Activiste pour la Justice Climatique et les Droits Humains",
    slogan: "Du local au global, lutter pour un monde équitable et durable",
    quote: "La plus grande menace pour notre planète est la croyance que quelqu'un d'autre la sauvera.",
    email: "contact@laurent-activiste.org"
  },
  colors: {
    primary: "#1B5E20", // Vert profond
    secondary: "#2E7D32", // Vert moyen
    accent: "#FF9800",   // Orange urgence
    background: "#F1F8E9", // Vert très clair
    text: "#1B1B1B"
  },
  socialLinks: {
    instagram: "https://instagram.com/laurent.activiste",
    twitter: "https://twitter.com/laurent_activ",
    linkedin: "https://linkedin.com/in/laurent-activiste",
    mastodon: "https://mastodon.social/@laurent",
    github: "https://github.com/laurent-activiste"
  },
  blog: {
    url: "https://blog.laurent-activiste.org",
    manager: "Vous (je peux vous aider à le configurer si besoin)"
  }
};

export const actionAreas: ActionArea[] = [
  {
    id: "human-rights-climate",
    title: "Droits Humains & Climat",
    description: "Défense des communautés vulnérables face aux changements climatiques, avec une approche centrée sur la justice sociale et l'équité intergénérationnelle.",
    examples: [
      "Accompagnement juridique des réfugiés climatiques",
      "Plaintes contre des États pour inaction climatique",
      "Campagnes de sensibilisation sur les liens santé-climat",
      "Formation des jeunes aux droits environnementaux",
      "Plaidoyer pour la reconnaissance du crime d'écocide",
      "Soutien aux peuples autochtones dans la protection de leurs terres"
    ],
    icon: "👥"
  },
  {
    id: "climate-justice-ecosystems",
    title: "Justice Climatique & Écosystèmes",
    description: "Protection des écosystèmes et lutte contre les inégalités environnementales, en particulier dans les zones les plus touchées par la pollution et la dégradation.",
    examples: [
      "Restauration de zones humides menacées",
      "Actions directes non-violentes contre les projets polluants",
      "Création de jardins communautaires en zones urbaines",
      "Documentation des impacts des mégaprojets",
      "Participation aux COP et sommets climatiques",
      "Coordination de grèves climatiques étudiantes"
    ],
    icon: "🌱"
  },
  {
    id: "digital-responsibility",
    title: "Numérique Responsable & Plaidoyer Digital",
    description: "Utilisation éthique des technologies pour l'activisme, promotion de la sobriété numérique et formation aux outils militants sécurisés.",
    examples: [
      "Création de plateformes de pétitions numériques",
      "Formations à la sécurité numérique pour militants",
      "Développement d'outils open-source pour le suivi environnemental",
      "Campagnes de désinvestissement des GAFAM polluants",
      "Veille sur l'impact environnemental du numérique",
      "Animation de communautés en ligne engagées"
    ],
    icon: "💻"
  }
];

export const campaigns: Campaign[] = [
  {
    id: "campaign-1",
    title: "Pétition pour la reconnaissance des réfugiés climatiques",
    year: "2023",
    description: "Lancement d'une pétition européenne demandant la création d'un statut juridique pour les personnes déplacées pour raisons climatiques.",
    impact: "125,000 signatures collectées, audition au Parlement européen",
    tags: ["Droits humains", "Plaidoyer", "International"]
  },
  {
    id: "campaign-2",
    title: "Action Stop Total",
    year: "2022-2023",
    description: "Coordination d'actions de désobéissance civile non-violente contre de nouveaux projets d'exploitation pétrolière.",
    impact: "Mobilisation de 500+ militants, médiatisation nationale",
    tags: ["Action directe", "Énergie fossile", "Mobilisation"]
  },
  {
    id: "campaign-3",
    title: "Projet Oasis Urbaines",
    year: "2021-2024",
    description: "Création de 12 jardins partagés et îlots de fraîcheur dans des quartiers défavorisés pour lutter contre les îlots de chaleur.",
    impact: "1,200 m² d'espaces verts créés, 500+ participants réguliers",
    tags: ["Communauté", "Végétalisation", "Justice sociale"]
  },
  {
    id: "campaign-4",
    title: "Campagne Clean Digital",
    year: "2023",
    description: "Sensibilisation des organisations et individus à l'impact environnemental de leurs pratiques numériques.",
    impact: "25 entreprises formées, guide de bonnes pratiques diffusé",
    tags: ["Numérique", "Formation", "Sobriété"]
  },
  {
    id: "campaign-5",
    title: "Recours contre l'État pour inaction climatique",
    year: "2020-2022",
    description: "Participation à l'action en justice citoyenne pour contraindre l'État à respecter ses engagements climatiques.",
    impact: "Victoire historique avec condamnation de l'État",
    tags: ["Justice", "Plaidoyer", "Victoire"]
  },
  {
    id: "campaign-6",
    title: "Réseau Jeunes pour le Climat",
    year: "2019-2024",
    description: "Coordination d'un réseau national de jeunes militants avec formations, actions et soutien psychologique.",
    impact: "2,000+ jeunes formés, 15 antennes locales créées",
    tags: ["Jeunesse", "Réseau", "Formation"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "L'intersectionnalité dans la lutte climatique : pourquoi c'est essentiel",
    excerpt: "Exploration des liens entre justice climatique, justice sociale et lutte contre toutes les formes de discriminations.",
    date: "15 mars 2024",
    readTime: "8 min",
    category: "Réflexion",
    image: "/blog/intersectionnalite.jpg"
  },
  {
    id: "blog-2",
    title: "Guide pratique : organiser une action non-violente efficace",
    excerpt: "Toutes les étapes, de la planification à la communication, pour des actions militantes qui font avancer la cause.",
    date: "28 février 2024",
    readTime: "12 min",
    category: "Action",
    image: "/blog/guide-action.jpg"
  },
  {
    id: "blog-3",
    title: "Le paradoxe du militantisme numérique : outils indispensables mais polluants",
    excerpt: "Comment concilier l'utilisation des technologies avec nos valeurs écologiques ? Analyse et alternatives.",
    date: "10 février 2024",
    readTime: "10 min",
    category: "Numérique",
    image: "/blog/paradoxe-numerique.jpg"
  },
  {
    id: "blog-4",
    title: "Témoignage : 6 mois avec les défenseurs de l'Amazonie",
    excerpt: "Récit d'une immersion auprès des gardiens de la forêt amazonienne et de leurs combats quotidiens.",
    date: "25 janvier 2024",
    readTime: "15 min",
    category: "Témoignage",
    image: "/blog/amazonie.jpg"
  }
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Diplôme en Droit de l'Environnement",
    issuer: "Université Paris 1 Panthéon-Sorbonne",
    year: "2022",
    description: "Spécialisation en droit international de l'environnement et contentieux climatique.",
    skills: ["Droit international", "Contentieux", "Négociation"],
    credentialUrl: "https://certificates.example.com/12345"
  },
  {
    id: "cert-2",
    title: "Certification en Action Non-Violente",
    issuer: "Centre pour l'Action Non-Violente",
    year: "2021",
    description: "Formation aux techniques de désobéissance civile, gestion des conflits et sécurité en manifestation.",
    skills: ["Désobéissance civile", "Médiation", "Sécurité"],
    credentialUrl: "https://certificates.example.com/67890"
  },
  {
    id: "cert-3",
    title: "Expert en Communication Militante",
    issuer: "École des Métiers de l'Engagement",
    year: "2020",
    description: "Stratégies de communication engageante, réseaux sociaux militants et relations presse.",
    skills: ["Communication", "Réseaux sociaux", "Relations presse"]
  },
  {
    id: "cert-4",
    title: "Facilitateur de Transition Écologique",
    issuer: "Institut de la Transition",
    year: "2019",
    description: "Accompagnement des collectivités et organisations dans leur transformation écologique.",
    skills: ["Transition écologique", "Accompagnement", "Stratégie"]
  },
  {
    id: "cert-5",
    title: "Sécurité Numérique pour Militants",
    issuer: "Digital Rights Foundation",
    year: "2023",
    description: "Protection des données, chiffrement des communications et sécurité opérationnelle en ligne.",
    skills: ["Sécurité numérique", "Chiffrement", "Protection données"]
  }
];