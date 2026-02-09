import React from 'react';
import { Link } from 'react-router-dom';

const presentationImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";

const Presentation: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] bg-gradient-to-b from-[#F1F8E9] to-white overflow-hidden">
      {/* Bande diagonale supérieure en vert foncé (comme la turquoise d'Enabel mais verte) */}
      <div
        className="absolute top-0 left-0 right-0 h-24 md:h-40 bg-[#1B5E20] transform -skew-y-6 origin-top-left z-10"
      />

      {/* Conteneur principal */}
      <div className="relative z-20 container mx-auto px-6 pt-16 pb-20 md:pt-28 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Bloc texte – vert foncé sur fond clair */}
        <div className="w-full md:w-1/2 lg:w-5/12 space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2E7D32]">
            Je suis
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#1B5E20]">
            Laurent NASSARA
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 max-w-xl">
            J’utilise le droit, le numérique et l’action citoyenne pour transformer les injustices sociales et climatiques en solutions durables.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center text-[#1B5E20] text-lg font-semibold underline underline-offset-4 hover:underline-offset-8 hover:text-[#2E7D32] transition-all duration-300"
            >
              En savoir plus sur moi →
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 lg:w-6/12 -mr-8 md:-mr-16 lg:-mr-24 mt-8 md:mt-0">
          <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-tr-[50px] md:rounded-tr-[80px] shadow-2xl">
            <img
              src={presentationImage}
              alt="Laurent NASSARA en action ou portrait naturel"
              className="w-full h-full object-cover object-top scale-110 md:scale-105 translate-x-6 md:translate-x-12 translate-y-4 md:translate-y-8 rotate-2"
            />
          </div>
        </div>
      </div>

      {/* Overlay très léger pour unifier le contraste (optionnel, quasi invisible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none" />
    </section>
  );
};

export default Presentation;