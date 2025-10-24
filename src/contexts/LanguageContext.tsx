import { createContext, useContext, useState, ReactNode } from "react";

// Définition des langues supportées
type Language = "fr" | "en" | "fon" | "es" | "de" | "yo";

// Structure du contexte
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

// ====================
// Traductions complètes
// ====================

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: "Développeur Full-Stack & Data Scientist",
      description:
        "Passionné par les nouvelles technologies et l'intelligence artificielle, je transforme des idées complexes en solutions innovantes.",
      cta1: "Voir mes projets",
      cta2: "Me contacter",
      downloadCV: "Télécharger CV",
    },
    about: {
      title: "À Propos de Moi",
      intro:
        "Professionnel polyvalent en Data Science et développement web/mobile, toujours à la recherche de solutions innovantes.",
      values: "Mes Valeurs",
      learning: "Apprentissage Continu",
      learningDesc: "Passionné par l'acquisition de nouvelles compétences",
      flexibility: "Flexibilité",
      flexibilityDesc: "Capacité d’adaptation rapide aux nouveaux environnements",
      patience: "Patience & Rigueur",
      patienceDesc: "Approche méthodique pour résoudre les problèmes complexes",
      travel: "Curiosité",
      travelDesc: "Ouvert au monde et aux nouvelles expériences",
    },
    skills: {
      title: "Compétences Techniques",
      dataScience: "Data Science & IA",
      webDev: "Développement Web",
      tools: "Outils & Autres",
    },
    projects: {
      title: "Projets Réalisés",
      viewCode: "Voir le code",
      viewDemo: "Démo live",
      inProgress: "En cours",
      confidential: "Projet Confidentiel",
    },
    services: {
      title: "Services Freelance",
      subtitle: "Solutions sur mesure pour vos besoins",
      web: "Développement Web",
      webDesc: "Applications web modernes avec React, Node.js, Laravel",
      ai: "Intelligence Artificielle",
      aiDesc: "Solutions IA, ML, NLP et RAG pour automatiser vos processus",
      data: "Data Science",
      dataDesc: "Analyse de données, visualisation et modélisation prédictive",
      automation: "Automatisation",
      automationDesc: "Scraping, workflows avec Make/n8n, intégrations API",
    },
    blog: {
      title: "Blog & Articles",
      subtitle: "Prochainement - Partage de connaissances et tutoriels",
      coming: "Bientôt disponible",
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Discutons de votre prochain projet",
      location: "Godomey, Abomey-Calavi, Bénin",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Full-Stack Developer & Data Scientist",
      description:
        "Passionate about new technologies and artificial intelligence, I transform complex ideas into innovative solutions.",
      cta1: "View Projects",
      cta2: "Contact Me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      intro:
        "Versatile professional in Data Science and web/mobile development, always seeking innovative solutions.",
      values: "My Values",
      learning: "Continuous Learning",
      learningDesc: "Passionate about acquiring new skills",
      flexibility: "Flexibility",
      flexibilityDesc: "Quick adaptation to new environments",
      patience: "Patience & Rigor",
      patienceDesc: "Methodical approach to solving complex problems",
      travel: "Curiosity",
      travelDesc: "Open to the world and new experiences",
    },
    skills: {
      title: "Technical Skills",
      dataScience: "Data Science & AI",
      webDev: "Web Development",
      tools: "Tools & Others",
    },
    projects: {
      title: "Featured Projects",
      viewCode: "View Code",
      viewDemo: "Live Demo",
      inProgress: "In Progress",
      confidential: "Confidential Project",
    },
    services: {
      title: "Freelance Services",
      subtitle: "Custom solutions for your needs",
      web: "Web Development",
      webDesc: "Modern web applications with React, Node.js, Laravel",
      ai: "Artificial Intelligence",
      aiDesc: "AI, ML, NLP and RAG solutions to automate your processes",
      data: "Data Science",
      dataDesc: "Data analysis, visualization and predictive modeling",
      automation: "Automation",
      automationDesc: "Scraping, workflows with Make/n8n, API integrations",
    },
    blog: {
      title: "Blog & Articles",
      subtitle: "Coming Soon - Knowledge sharing and tutorials",
      coming: "Coming Soon",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project",
      location: "Godomey, Abomey-Calavi, Benin",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
  },

  fon: {
    nav: {
      home: "Xwédo",
      about: "Wémè",
      skills: "Sɔsɔtɔ",
      projects: "Nɔ̀ Kɔ̀",
      services: "Dɔ̀dɔ̀",
      blog: "Blogo",
      contact: "Wɛ nú",
    },
    hero: {
      greeting: "Mí kɔ́ ɖé, nɔ mí wá",
      title: "Tɔ̀nkpɔn ní sɔ́sɔtɔ & Data Scientist",
      description:
        "Nɔ̀ wá jí tékínolojì àti AI gbé wà, mí kɔ́ wɛ gbédodo sɔ wá hùn nu nɔnso.",
      cta1: "Wá kɔ̀ mí nɔ̀",
      cta2: "Wɛ nú mí",
      downloadCV: "Tó CV",
    },
    about: {
      title: "Wémè mí",
      intro:
        "Mí nɔ̀ dɔ́ tɔ́nkpɔn, mí nɔ̀ Data Science àti web-développement gbé jé.",
      values: "Wémɛ mí",
      learning: "Kɔ́ nú kpɔ́nsɔ",
      learningDesc: "Mí sɔ́ gbédodo nú jà sɔ́sɔtɔ",
      flexibility: "Wèwè",
      flexibilityDesc: "Mí kɔ́ yí do kplɔ́ nú tékínolojì tò",
      patience: "Wáyè & Dɔ̀kpɔ̀",
      patienceDesc: "Mí sɔ́ sɔ́sɔtɔ gbé ɖe hùn nu nɔnso",
      travel: "Yésisɔ",
      travelDesc: "Mí gbé kpɔn wémɛ ɖe dɔ̀kpɔ̀",
    },
    contact: {
      title: "Wɛ nú mí",
      subtitle: "Wá gbé mí nɔn do nɔ̀ ɖo",
      location: "Godomey, Abomey-Calavi, Benin",
      name: "Sɔ̀",
      email: "Email",
      message: "Nɔ̀nkpɔ̀",
      send: "Sɔ́",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      services: "Servicios",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      title: "Desarrollador Full-Stack y Científico de Datos",
      description:
        "Apasionado por la tecnología y la inteligencia artificial, transformo ideas complejas en soluciones innovadoras.",
      cta1: "Ver proyectos",
      cta2: "Contactarme",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      intro:
        "Profesional versátil en Ciencia de Datos y desarrollo web/móvil, siempre en busca de soluciones innovadoras.",
      values: "Mis Valores",
      learning: "Aprendizaje Continuo",
      learningDesc: "Apasionado por adquirir nuevas habilidades",
      flexibility: "Flexibilidad",
      flexibilityDesc: "Adaptación rápida a nuevos entornos",
      patience: "Paciencia y Rigor",
      patienceDesc: "Enfoque metódico para resolver problemas complejos",
      travel: "Curiosidad",
      travelDesc: "Abierto al mundo y a nuevas experiencias",
    },
    services: {
      title: "Servicios Freelance",
      subtitle: "Soluciones personalizadas para tus necesidades",
      web: "Desarrollo Web",
      webDesc: "Aplicaciones web modernas con React, Node.js, Laravel",
      ai: "Inteligencia Artificial",
      aiDesc: "Soluciones de IA, ML, NLP y RAG para automatizar tus procesos",
      data: "Ciencia de Datos",
      dataDesc: "Análisis de datos, visualización y modelado predictivo",
      automation: "Automatización",
      automationDesc: "Scraping, flujos de trabajo con Make/n8n, integraciones API",
    },
    blog: {
      title: "Blog & Artículos",
      subtitle: "Próximamente - Compartiendo conocimientos y tutoriales",
      coming: "Próximamente",
    },


  },

  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      services: "Dienstleistungen",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      title: "Full-Stack-Entwickler & Data Scientist",
      description:
        "Leidenschaftlich über neue Technologien und KI, verwandle ich komplexe Ideen in innovative Lösungen.",
      cta1: "Projekte ansehen",
      cta2: "Kontaktiere mich",
      downloadCV: "Lebenslauf herunterladen",
    },
    services:{
      title: "Freelance Dienstleistungen",
      subtitle: "Maßgeschneiderte Lösungen für Ihre Anforderungen",
      web: "Webentwicklung",
      webDesc: "Moderne Webanwendungen mit React, Node.js, Laravel",
      ai: "Künstliche Intelligenz",
      aiDesc: "KI-, ML-, NLP- und RAG-Lösungen zur Automatisierung Ihrer Prozesse",
      data: "Datenwissenschaft",
      dataDesc: "Datenanalyse, Visualisierung und prädiktive Modellierung",
      automation: "Automatisierung",
      automationDesc: "Scraping, Workflows mit Make/n8n, API-Integrationen",
    },
    blog: {
      title: "Blog & Artikel",
      subtitle: "Bald verfügbar - Wissensaustausch und Tutorials",
      coming: "Bald verfügbar",
    },

  },

  yo: {
    nav: {
      home: "Ile",
      about: "Nipa mi",
      skills: "Ogbón",
      projects: "Àwọn iṣẹ́",
      services: "Ìṣẹ́",
      blog: "Búlóògì",
      contact: "Kan si mi",
    },
    hero: {
      greeting: "Báwo, orúkọ mi ni",
      title: "Oníṣẹ́ Full-Stack & Onímọ̀ Data",
      description:
        "Mo nífẹ̀ẹ́ sí imọ̀-ẹrọ àti AI, mo ń yí èrò díẹ̀díẹ̀ sí ojútùú tuntun.",
      cta1: "Wo iṣẹ́ mi",
      cta2: "Kan sí mi",
      downloadCV: "Gba CV",
    },
    about: {
      title: "Über mich",
      intro:
        "Vielseitiger Profi in Data Science und Web/Mobile-Entwicklung, stets auf der Suche nach innovativen Lösungen.",
      values: "Meine Werte",
      learning: "Kontinuierliches Lernen",
      learningDesc: "Leidenschaft für den Erwerb neuer Fähigkeiten",
      flexibility: "Flexibilität",
      flexibilityDesc: "Schnelle Anpassung an neue Umgebungen",
      patience: "Geduld & Genauigkeit",
      patienceDesc: "Methodisches Vorgehen zur Lösung komplexer Probleme",
      travel: "Neugier",
      travelDesc: "Offen für die Welt und neue Erfahrungen",
    },
    services: {
      title: "Ìṣẹ́ Freelance",
      subtitle: "Àwọn ojútùú tó yẹ fún ìbéèrè rẹ",
      web: "Ìdàgbàsókè Wẹẹbù",
      webDesc: "Àwọn ohun elo wẹẹbù tuntun pẹ̀lú React, Node.js, Laravel",
      ai: "Ọgbọ́n atọwọdọwọ",
      aiDesc: "Ọgbọ́n atọwọdọwọ, ML, NLP ati RAG fún ìmúlò iṣẹ́ rẹ",
      data: "Imọ̀ Data",
      dataDesc: "Ìtúpalẹ̀ data, àfihàn àti àfojúsùn àlẹmọ",
      automation: "Ìmúlò àtẹ̀yìnwá",
      automationDesc: "Scraping, àwọn workflows pẹ̀lú Make/n8n, ìṣọ̀kan API",
    },
    blog: {
      title: "Búlóògì & Àwọn Àkọọlẹ",
      subtitle: "Ní pípẹ́ - Pín ìmọ̀ àti àwọn ìtọnisọna",
      coming: "Ní pípẹ́",
    },

  },
};

// ====================
// CONTEXTE DE LANGUE
// ====================

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  // Fallback automatique sur FR si une clé manque
  const currentTranslations = {
    ...translations.fr,
    ...(translations[language] || {}),
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
