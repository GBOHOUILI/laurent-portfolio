import React from 'react';
import { siteConfig } from '../data/siteData';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-white">
      {/* Header */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos</h1>
          <p className="text-xl text-green-100">{siteConfig.personal.title}</p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 max-w-6xl py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1B5E20]">Mon parcours</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Tout a commencé par une prise de conscience simple mais brutale : 
                les plus touchés par la crise climatique sont ceux qui y ont le moins contribué.
              </p>
              <p>
                Diplômé en droit de l'environnement, j'ai rapidement compris que les textes de loi 
                ne suffisaient pas. C'est dans les rues, aux côtés des communautés affectées, 
                dans les salles de tribunal et sur les terrains dégradés que se joue la véritable 
                bataille pour la justice.
              </p>
              <p>
                Depuis 10 ans, je mène des combats sur plusieurs fronts : accompagnement juridique 
                des victimes de pollutions, actions de désobéissance civile non-violente, 
                plaidoyer politique et formation des nouvelles générations de militants.
              </p>
              <p>
                Ma conviction ? L'écologie sans justice sociale n'est que du jardinage. 
                C'est pourquoi chaque action, chaque campagne, chaque parole est guidée par 
                cette recherche d'équité et de solidarité concrète.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#2E7D32]">Mes valeurs</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF9800] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <span className="text-gray-700"><strong>Justice avant tout :</strong> climatique, sociale, économique</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF9800] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <span className="text-gray-700"><strong>Non-violence :</strong> désobéissance civile constructive</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF9800] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <span className="text-gray-700"><strong>Solidarité internationale :</strong> et intersectionnalité</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF9800] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <span className="text-gray-700"><strong>Transparence :</strong> et redevabilité dans l'action militante</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#E8F5E9] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#1B5E20]">Chiffres clés</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#1B5E20]">5+</div>
                  <div className="text-gray-600">Années d'engagement</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#1B5E20]">35+</div>
                  <div className="text-gray-600">Campagnes menées</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#1B5E20]">100+</div>
                  <div className="text-gray-600">Personnes formées</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#1B5E20]">3+</div>
                  <div className="text-gray-600">Pays d'intervention</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Citation */}
        <div className="mt-12 p-8 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-2xl text-white">
          <p className="text-2xl italic mb-4">"{siteConfig.personal.quote}"</p>
          <p className="text-right">— Robert Swan</p>
        </div>
      </main>
    </div>
  );
};

export default About;