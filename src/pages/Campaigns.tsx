import React from 'react';
import { campaigns } from '../data/siteData';
import Footer from '../components/Footer';

const Campaigns: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-white">
      {/* Header */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Engagements & Campagnes</h1>
          <p className="text-xl text-green-100">Un aperçu des combats menés et des victoires collectives</p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 max-w-6xl py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B5E20]">Campagnes principales</h2>
          <p className="text-gray-600 mb-8">
            Voici quelques-unes des campagnes et mobilisations que j'ai menées ou auxquelles j'ai participé activement.
          </p>
        </div>

        <div className="space-y-8">
          {campaigns.map((campaign) => (
            <div 
              key={campaign.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="inline-block px-4 py-1 bg-[#2E7D32] text-white text-sm rounded-full mb-2">
                      {campaign.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {campaign.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    {campaign.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#E8F5E9] text-[#1B5E20] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">
                  {campaign.description}
                </p>
                
                {campaign.impact && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-green-800">Impact et résultats</h4>
                        <p className="text-green-700">{campaign.impact}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Méthodologie */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1B5E20]">Ma méthodologie d'action</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Diagnostic</h3>
              <p className="text-gray-600 text-sm">Analyse approfondie des enjeux et parties prenantes</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Coalition</h3>
              <p className="text-gray-600 text-sm">Mobilisation des acteurs concernés et alliés</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Action</h3>
              <p className="text-gray-600 text-sm">Mise en œuvre de stratégies adaptées et éthiques</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Évaluation</h3>
              <p className="text-gray-600 text-sm">Mesure d'impact et apprentissages pour l'avenir</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Campaigns;