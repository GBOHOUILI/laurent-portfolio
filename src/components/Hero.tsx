import React from 'react';
import { siteConfig } from '../data/siteData';

const forestBgImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-[100vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${forestBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 25%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />

      {/* Contenu centré */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col items-center justify-center text-center max-w-5xl">
        {/* Badge thématique centré */}
        <div className="inline-block px-6 py-3 bg-white/15 backdrop-blur-lg rounded-full mb-8 border border-white/20 shadow-lg">
          <span className="text-base md:text-lg font-semibold tracking-wide">
            #JusticeClimatique #ForêtDurable #DroitsHumains
          </span>
        </div>

        {/* Titre principal centré */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight my-16 md:mx-24 drop-shadow-2xl">
          La crise climatique n’est pas seulement environnementale.<br className="hidden sm:block" />
          Elle révèle qui décide, qui subit et qui est protégé.
        </h1>

        {/* Sous-titre centré */}
        <p className="text-lg sm:text-xl md:text-2xl mb-10 font-semi-bold md:mb-14 text-green-50/90 drop-shadow-lg max-w-3xl">
          {siteConfig.personal.slogan ||
            "Protéger les forêts, défendre les droits, construire un avenir juste et résilient face au climat."
          }
        </p>

        {/* Call to Actions centrés */}
        <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center">
          <a
            href="#contact"
            className="px-9 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
          >
            Collaborer ensemble
          </a>
          <a
            href="#engagements"
            className="px-9 py-4 bg-transparent border-2 border-white hover:bg-white/15 text-white font-bold rounded-full transition-all backdrop-blur-sm text-lg"
          >
            Voir mes actions →
          </a>
        </div>

        {/* Social proof + scroll indicator */}
        <div className="mt-16 text-base opacity-90 font-bold flex flex-col items-center gap-6">
          <span>Rejoins +100 partenaires et acteurs du changement</span>

          {/* Scroll hint discret */}
          <div className="bg-white/60 mt-12 border-4 border-green-600 p-6 
                rounded-[40%_60%_55%_45%/60%_40%_60%_40%] 
                flex flex-col items-center 
                animate-bounce text-green-600 
                mt-4 md:mt-12 backdrop-blur-sm">
            <span className="text-sm uppercase tracking-wider">Scroll</span>

            <svg
              className="w-7 h-7 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;