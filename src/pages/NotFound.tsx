import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-white pt-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-20">
        <div className="text-center">
          <div className="text-9xl font-bold text-[#1B5E20] opacity-20 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1B5E20]">Page non trouvée</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/" 
              className="px-6 py-3 bg-[#1B5E20] text-white font-semibold rounded-full hover:bg-[#2E7D32] transition-colors"
            >
              Retour à l'accueil
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 border-2 border-[#1B5E20] text-[#1B5E20] font-semibold rounded-full hover:bg-[#F1F8E9] transition-colors"
            >
              Me contacter
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              to="/about" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">👤</div>
              <h3 className="font-bold text-gray-800 mb-2">À propos</h3>
              <p className="text-gray-600 text-sm">Découvrez mon parcours militant</p>
            </Link>
            <Link 
              to="/actions" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-800 mb-2">Domaines d'action</h3>
              <p className="text-gray-600 text-sm">Explorez mes axes d'engagement</p>
            </Link>
            <Link 
              to="/campaigns" 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-bold text-gray-800 mb-2">Campagnes</h3>
              <p className="text-gray-600 text-sm">Voir mes engagements passés</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default NotFound;