import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Presentation from '../components/HomePresentation';
import KeyFigures from '../components/KeyFigures';
import { CampaignCard } from "../components/CampaignCard";
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-white">
      <Hero />

      <section className="bg-white">
        <Presentation />
      </section>

      <section className="">
        <KeyFigures />
      </section>

      {/* NOUVELLE SECTION 1 : Mes actions en cours */}

      <section className="py-4 md:py-8 bg-[#E8F5E9]">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#1B5E20]">
            Mes actions en cours
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <CampaignCard
              status="En cours"
              title="#StopEACOP – Mobilisation contre l'oléoduc en Afrique de l'Est"
              description="Campagne pour stopper ce projet destructeur pour les communautés et l'environnement. Rejoins-nous !"
              image="https://img.globalcitizen.org/wcMjwgw-OcGwulVTp_Bqk5XeILyvbEWxku6913d5/1600x900%2Ffilters%3Aquality%2885%29%3Afocal%282332%2C655%29%2Fhttps%3A%2F%2Fmedia.globalcitizen.org%2F3d%2F86%2F3d86f458-7c45-4ec8-839f-f3a5e7fba096%2Fhero.jpg"
              link="/campaigns/stop-eacop"
              linkLabel="En savoir plus →"
            />

            <CampaignCard
              status="À venir"
              title="Atelier Justice Climatique – Cotonou 2026"
              description="Formation gratuite sur l'intersection climat / droits humains. Inscriptions ouvertes !"
              image="https://curious.earth/wp-content/uploads/2024/03/TZ_OCE-Action-3-e1711447670860.jpeg"
              link="/events/atelier-2026"
              linkLabel="S'inscrire →"
            />

          </div>
        </div>
      </section>


      {/* Ton bloc Bienvenue actuel */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1B5E20]">
            Bienvenue sur mon espace militant
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explorez les différentes sections pour découvrir mes engagements, actions et réflexions
            sur la justice climatique et les droits humains.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <a href="/about" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 border border-gray-200">
              <div className="text-3xl mb-3">👤</div>
              <h3 className="font-bold text-gray-800">À propos</h3>
            </a>
            <a href="/actions" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 border border-gray-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-800">Domaines</h3>
            </a>
            <a href="/campaigns" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 border border-gray-200">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-bold text-gray-800">Campagnes</h3>
            </a>
            <a href="/certificates" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 border border-gray-200">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="font-bold text-gray-800">Certifications</h3>
            </a>
          </div>
        </div>
      </div>

      {/* NOUVELLE SECTION 2 : Dernières réflexions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#1B5E20]">
            Dernières réflexions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exemple d'article – duplique selon tes posts */}
            <div className="bg-[#F1F8E9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url('https://miro.medium.com/1*KFvc9yeJs4lw3AuKqj4sRQ.jpeg')" }}>
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">8 Février 2026</span>
                <h3 className="text-xl font-bold text-[#1B5E20] mt-2 mb-3">
                  La crise climatique révèle les inégalités profondes en Afrique de l'Ouest
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Pourquoi les communautés les plus vulnérables subissent-elles le plus les conséquences...
                </p>
                <a href="/blog/crise-inegalites" className="text-[#1B5E20] font-semibold hover:underline">
                  Lire l'article →
                </a>
              </div>
            </div>

            {/* Deuxième article exemple */}
            <div className="bg-[#F1F8E9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url('https://rwjf.scene7.com/is/image/rwjf/Climate_illustration?ts=1740618506789&dpr=off')" }}>
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">15 Janvier 2026</span>
                <h3 className="text-xl font-bold text-[#1B5E20] mt-2 mb-3">
                  5 leçons tirées des actions communautaires au Bénin
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Comment les initiatives locales peuvent changer la donne face au changement climatique...
                </p>
                <a href="/blog/5-lecons" className="text-[#1B5E20] font-semibold hover:underline">
                  Lire l'article →
                </a>
              </div>
            </div>

            {/* Troisième – teaser vers blog */}
            <div className="bg-[#F1F8E9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex items-center justify-center text-center p-10">
              <div>
                <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
                  Plus de réflexions à découvrir
                </h3>
                <a
                  href="/blog"
                  className="inline-block px-6 py-3 bg-[#1B5E20] text-white font-semibold rounded-full hover:bg-green-800 transition"
                >
                  Voir tous les articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;