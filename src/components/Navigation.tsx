import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteData';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Domaines', path: '/actions' },
    { label: 'Campagnes', path: '/campaigns' },
    { label: 'Certifications', path: '/certificates' },
    { label: 'Publications', path: '/publications' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#1B5E20]">
              <img src="logo.png" alt="logo" className='max-w-24' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#1B5E20] text-white'
                    : 'text-gray-700 hover:text-[#1B5E20] hover:bg-[#F1F8E9]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1B5E20] text-white rounded-full hover:bg-[#2E7D32] transition-colors font-medium"
            >
              Blog
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#1B5E20] text-white'
                      : 'text-gray-700 hover:bg-[#F1F8E9]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-[#1B5E20] text-white rounded-lg hover:bg-[#2E7D32] transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accéder au blog
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;