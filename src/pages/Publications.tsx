import React from 'react';
import { blogPosts, siteConfig } from '../data/siteData';
import Footer from '../components/Footer';

const Publications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-white">
      {/* Header */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications & Veille</h1>
          <p className="text-xl text-green-100">Analyses, réflexions et ressources pour approfondir la lutte</p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 max-w-6xl py-12">
        <div className="mb-12 text-center">
          <a 
            href={siteConfig.blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1B5E20] text-white font-semibold rounded-full hover:bg-[#2E7D32] transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Accéder à mon blog complet sur WordPress
          </a>
          <p className="mt-4 text-gray-600">
            {siteConfig.blog.url}
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-[#1B5E20]">Derniers articles</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#E8F5E9] text-[#1B5E20] text-sm rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{post.date}</span>
                  <button className="text-[#1B5E20] font-semibold hover:text-[#FF9800] transition-colors">
                    Lire l'article →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Thématiques */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#1B5E20]">Thématiques principales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-[#F1F8E9] to-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-[#2E7D32]">Justice Climatique</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inégalités environnementales</li>
                <li>• Réfugiés climatiques</li>
                <li>• Transition juste</li>
                <li>• Décroissance</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#F1F8E9] to-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-[#2E7D32]">Militantisme</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Stratégies d'action</li>
                <li>• Organisations militantes</li>
                <li>• Santé des activistes</li>
                <li>• Éthique militante</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#F1F8E9] to-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-[#2E7D32]">Technologie</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Numérique responsable</li>
                <li>• Outils militants</li>
                <li>• Sécurité numérique</li>
                <li>• Surveillance et libertés</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Publications;