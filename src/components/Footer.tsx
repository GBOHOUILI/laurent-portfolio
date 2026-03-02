import React from 'react';
import { siteConfig } from '../data/siteData';

const Footer: React.FC = () => {
  const navLinks = [
    { href: '/about', label: 'À propos' },
    { href: '/actions', label: "Domaines d'action" },
    { href: '/campaigns', label: 'Campagnes' },
    { href: '/certificates', label: 'Certifications' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialIcons: { key: keyof typeof siteConfig.socialLinks; label: string; path: string }[] = [
    {
      key: 'instagram',
      label: 'Instagram',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
      key: 'twitter',
      label: 'Twitter / X',
      path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
  ];

  return (
    <footer
      className="bg-[#0A1A0A] text-white relative overflow-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Decorative top border gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-[#E8572A] via-[#7CB97E] to-[#1565C0]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ background: '#E8572A' }}
      />

      <div className="relative container mx-auto px-6 md:px-12 max-w-6xl py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand col */}
          <div className="md:col-span-5">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-1 h-12 bg-[#E8572A] flex-shrink-0 mt-1" />
              <div>
                <h3
                  className="text-3xl font-bold text-white leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {siteConfig.personal.name}
                </h3>
                <p className="text-[#7CB97E] font-sans text-sm mt-1">
                  {siteConfig.personal.title}
                </p>
              </div>
            </div>

            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8 max-w-xs">
              {siteConfig.personal.slogan}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ key, label, path }) =>
                siteConfig.socialLinks[key] ? (
                  <a
                    key={key}
                    href={siteConfig.socialLinks[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E8572A] hover:border-[#E8572A] transition-all duration-300 group"
                  >
                    <svg className="w-4 h-4 fill-gray-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d={path} />
                    </svg>
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.25em] uppercase font-sans text-gray-500 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-400 font-sans text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#E8572A] transition-all duration-300 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.25em] uppercase font-sans text-gray-500 mb-6">
              Contact
            </h4>

            <a
              href={`mailto:${siteConfig.personal.email}`}
              className="group flex items-start gap-3 mb-8"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8572A] group-hover:border-[#E8572A] transition-all duration-300">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-sans uppercase tracking-wider mb-0.5">Email</div>
                <span className="text-[#7CB97E] font-sans text-sm group-hover:text-white transition-colors">
                  {siteConfig.personal.email}
                </span>
              </div>
            </a>

            {/* Blog link */}
            <a
              href={siteConfig.blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#1B5E20] hover:border-[#1B5E20] transition-all duration-300 group"
            >
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400 group-hover:text-white font-sans text-sm transition-colors">
                Mon blog WordPress
              </span>
              <svg className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors ml-auto" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 font-sans text-xs">
            © {new Date().getFullYear()} {siteConfig.personal.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7CB97E] animate-pulse" />
            <p className="text-gray-600 font-sans text-xs">
              Site hébergé sur des serveurs à énergie renouvelable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;