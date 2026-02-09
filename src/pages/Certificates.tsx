import React from 'react';
import { certificates } from '../data/siteData';
import Footer from '../components/Footer';

const Certificates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-white">
      {/* Header */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Compétences</h1>
          <p className="text-xl text-green-100">Des formations qui renforcent l'action militante par l'expertise</p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 max-w-6xl py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B5E20]">Mes certifications</h2>
          <p className="text-gray-600">
            Ces certifications et formations me permettent d'allier expertise technique et engagement militant
            pour des actions plus efficaces et éthiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-4 py-1 bg-[#FF9800] text-white text-sm font-semibold rounded-full mb-3">
                      {cert.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-[#2E7D32] font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {cert.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">COMPÉTENCES ACQUISES</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#1B5E20] font-semibold hover:text-[#FF9800] transition-colors"
                  >
                    Voir la certification
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Compétences transversales */}
        <div className="mt-16 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Compétences transversales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Animation & Formation</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Animation de réunions et assemblées</li>
                <li>• Conception de formations militantes</li>
                <li>• Facilitation de groupes de travail</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Communication</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Stratégie de communication engageante</li>
                <li>• Relations presse et médias</li>
                <li>• Plaidoyer institutionnel</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Organisation</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Gestion de projets militants</li>
                <li>• Coordination d'équipes</li>
                <li>• Évaluation d'impact</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificates;