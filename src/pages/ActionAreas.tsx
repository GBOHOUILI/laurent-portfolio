import React from 'react';
import { actionAreas } from '../data/siteData';
import Footer from '../components/Footer';

const Actions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-white">
      {/* Header */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Domaines d'action</h1>
          <p className="text-xl text-green-100">Trois axes interdépendants pour une lutte cohérente et efficace</p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {actionAreas.map((area) => (
            <div 
              key={area.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#2E7D32]">
                  {area.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {area.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#1B5E20] text-lg">Exemples concrets :</h4>
                  <ul className="space-y-3">
                    {area.examples.map((example, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#FF9800] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-8 py-4 bg-[#F1F8E9] border-t border-gray-200">
                <a 
                  href="/contact"
                  className="text-[#1B5E20] font-semibold hover:text-[#FF9800] transition-colors inline-flex items-center"
                >
                  Collaborer sur ce domaine →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Approche globale */}
        <div className="mt-16 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Mon approche globale</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Intersectionnalité</h3>
              <p className="text-green-100">Chaque lutte est connectée. La justice climatique ne peut exister sans justice sociale, raciale et économique.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Action multi-niveaux</h3>
              <p className="text-green-100">Agir simultanément au niveau local, national et international pour un impact maximal.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Pédagogie active</h3>
              <p className="text-green-100">Former et outiller les nouvelles générations pour pérenniser les luttes et les victoires.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Actions;