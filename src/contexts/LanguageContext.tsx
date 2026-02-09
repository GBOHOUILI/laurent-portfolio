import { createContext, useContext, useState, ReactNode } from "react";

// Types des langues supportées (tu pourras en ajouter)
type Language = "fr" | "en" | "fon" // | "es" | "de" | "yo";

// Structure des traductions (ajoute ce dont tu as besoin)
interface Translations {
  nav: {
    home: string;
    about: string;
    domaines: string;
    engagements: string;
    blog: string;        // ou publications
    publications?: string;
    certificats?: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    intro2?: string;
    values: string;
    solidarity?: string;
    solidarityDesc?: string;
    justiceClimatique?: string;
    justiceClimatiqueDesc?: string;
    communities?: string;
    communitiesDesc?: string;
    equity?: string;
    equityDesc?: string;
    global?: string;
    globalDesc?: string;
    quote?: string;
  };
  domaines?: Record<string, string>; // pour les 3 axes si tu veux les traduire
  blog?: {
    title: string;
    subtitle: string;
    coming: string;
  };
  contact: {
    title: string;
    subtitle: string;
    location: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  common?: {
    soon: string;
    collaborate: string;
    [key: string]: string;
  };
}

// Contexte
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions de base (placeholders / fausses pour tester)
const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      domaines: "Domaines d’action",
      engagements: "Engagements & luttes",
      blog: "Blog & veille",
      publications: "Publications & veille",
      certificats: "Certificats",
      contact: "Contact / Collaborer",
    },
    hero: {
      greeting: "Engagé pour un monde juste",
      title: "Activiste – Justice climatique & droits humains",
      description: "Pour des territoires vivants, des communautés respectées et un numérique qui ne détruit pas la planète.",
      cta1: "Découvrir mes combats",
      cta2: "Collaborons",
    },
    about: {
      title: "Eldo-Moréo GBOHOUILI",
      subtitle: "Activiste pour la justice climatique et les droits des communautés vulnérables",
      intro: "Militant béninois engagé depuis plusieurs années dans la défense des droits humains face aux impacts du changement climatique, de l’extractivisme et des inégalités numériques.",
      intro2: "À travers le plaidoyer, la sensibilisation, l’accompagnement juridique des communautés et la mobilisation citoyenne, je contribue à construire une transition juste et solidaire.",
      values: "Valeurs qui guident mon engagement",
      solidarity: "Solidarité",
      solidarityDesc: "Être aux côtés des plus touchés par les injustices environnementales et sociales.",
      justiceClimatique: "Justice climatique",
      justiceClimatiqueDesc: "Protéger les écosystèmes et défendre les droits des générations futures.",
      communities: "Défense des communautés",
      communitiesDesc: "Accompagner les populations vulnérables face aux projets destructeurs.",
      equity: "Équité & redevabilité",
      equityDesc: "Plaidoyer pour une gouvernance inclusive et une transition juste.",
      global: "Vision globale",
      globalDesc: "Lien entre climat, droits humains et numérique responsable.",
      quote: "La crise climatique n’est pas une fatalité, c’est une injustice qu’on peut et qu’on doit combattre.",
    },
    blog: {
      title: "Publications & Veille",
      subtitle: "Analyses, articles et ressources sur le climat, les droits et le numérique",
      coming: "Les premiers articles arrivent très bientôt...",
    },
    contact: {
      title: "Contactez-moi / Collaborez",
      subtitle: "Pour des partenariats, invitations, médias, soutiens ou échanges",
      location: "Cotonou / Abomey-Calavi, Bénin",
      name: "Nom / Organisation",
      email: "Email",
      message: "Votre message",
      send: "Envoyer",
    },
    common: {
      soon: "Bientôt disponible",
      collaborate: "Collaborer",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      domaines: "Areas of Action",
      engagements: "Commitments & Struggles",
      blog: "Publications & Watch",
      publications: "Publications & Watch",
      certificats: "Certificates",
      contact: "Contact / Collaborate",
    },
    hero: {
      greeting: "Committed to a just world",
      title: "Activist – Climate Justice & Human Rights",
      description: "For living territories, respected communities and digital technology that does not destroy the planet.",
      cta1: "Discover my fights",
      cta2: "Let's collaborate",
    },
    about: {
      title: "Eldo-Moréo GBOHOUILI",
      subtitle: "Activist for climate justice and the rights of vulnerable communities",
      intro: "Beninese activist engaged for several years in defending human rights against the impacts of climate change, extractivism and digital inequalities.",
      intro2: "Through advocacy, awareness-raising, legal support for communities and citizen mobilization, I contribute to building a just and solidarity-based transition.",
      values: "Values guiding my commitment",
      solidarity: "Solidarity",
      solidarityDesc: "Standing with those most affected by environmental and social injustices.",
      justiceClimatique: "Climate Justice",
      justiceClimatiqueDesc: "Protecting ecosystems and defending the rights of future generations.",
      communities: "Community Defense",
      communitiesDesc: "Supporting vulnerable populations against destructive projects.",
      equity: "Equity & Accountability",
      equityDesc: "Advocacy for inclusive governance and a just transition.",
      global: "Global Perspective",
      globalDesc: "Linking climate, human rights and responsible digital practices.",
      quote: "The climate crisis is not inevitable, it is an injustice we can and must fight.",
    },
    blog: {
      title: "Publications & Insights",
      subtitle: "Analyses, articles and resources on climate, rights and digital issues",
      coming: "First articles coming very soon...",
    },
    contact: {
      title: "Contact me / Collaborate",
      subtitle: "For partnerships, invitations, media, support or discussions",
      location: "Cotonou / Abomey-Calavi, Benin",
      name: "Name / Organization",
      email: "Email",
      message: "Your message",
      send: "Send",
    },
    common: {
      soon: "Coming soon",
      collaborate: "Collaborate",
    },
  },

  // Décommente et complète quand tu auras les traductions
  // fon: { ... },
  // yo: { ... },
};

// Provider
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  // On merge toujours avec le français comme fallback
  const base = translations.fr;
  const current = translations[language] || base;

  // Fonction safe pour accéder aux traductions (évite les undefined)
  const t = new Proxy(current, {
    get(target, prop: string) {
      if (prop in target) return target[prop as keyof Translations];
      // Fallback intelligent
      if (prop in base) return base[prop as keyof Translations];
      return `[${prop.toUpperCase()}]`; // affiche la clé en majuscules si vraiment manquant
    },
  }) as Translations;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};