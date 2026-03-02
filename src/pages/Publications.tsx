import React, { useEffect, useRef, useState } from 'react';
import { blogPosts, siteConfig } from '../data/siteData';

/* ─── REAL BLOG POSTS from laurentnassara.wordpress.com ─── */
const wordpressPosts = [
  {
    id: 'wp-1',
    title: "L'impact invisible de la pollution sur la santé sexuelle des jeunes filles vivant dans les quartiers informels du sud du Bénin",
    excerpt: "Dans les quartiers informels du Sud du Bénin — Toweta, Ladji, Ganvié — la pollution environnementale menace silencieusement la santé reproductive des jeunes filles. Un mal invisible, pourtant dévastateur.",
    date: '21 novembre 2025',
    readTime: '6 min',
    category: 'Santé & Environnement',
    color: '#AD1457',
    link: 'https://laurentnassara.wordpress.com/',
  },
  {
    id: 'wp-2',
    title: "Ma contribution aux projets Wikimedia lors de Make Africa 2025",
    excerpt: "Du 5 au 8 novembre 2025, participation à l'atelier Wikidata du festival Make Africa — contribuer à enrichir la présence du Bénin sur les plateformes mondiales de connaissance libre.",
    date: '9 novembre 2025',
    readTime: '4 min',
    category: 'Numérique',
    color: '#1565C0',
    link: 'https://laurentnassara.wordpress.com/',
  },
  {
    id: 'wp-3',
    title: "CIAS-SSR 2025 : Retour sur un colloque international dédié à la Santé Sexuelle et Reproductive",
    excerpt: "En tant que boursier junior, deux jours d'échanges intenses à l'hôtel AZALAÏ de Cotonou — experts, chercheurs et décideurs réunis pour accélérer les progrès en DSSR en Afrique.",
    date: '9 novembre 2025',
    readTime: '5 min',
    category: 'Droits Humains',
    color: '#6A1B9A',
    link: 'https://laurentnassara.wordpress.com/',
  },
  {
    id: 'wp-4',
    title: "Ma participation à la formation des points focaux CIWA d'Amnesty International Bénin à Bohicon sur le web activisme",
    excerpt: "L'activisme numérique sain, c'est l'usage stratégique des outils numériques pour influencer un changement social. Une formation riche organisée par le comité CIWA à Bohicon.",
    date: '27 octobre 2025',
    readTime: '5 min',
    category: 'Militantisme',
    color: '#E8572A',
    link: 'https://laurentnassara.wordpress.com/',
  },
  {
    id: 'wp-5',
    title: "Ganvié : trois jours de collecte communautaire de jacinthes d'eau organisés par MJPEA pour soutenir l'entrepreneuriat féminin",
    excerpt: "Cinquante jeunes volontaires, cinq tonnes de jacinthes d'eau collectées, une coopérative féminine soutenue — transformer un problème écologique en opportunité économique durable.",
    date: '30 septembre 2025',
    readTime: '5 min',
    category: 'Justice Climatique',
    color: '#1B5E20',
    link: 'https://laurentnassara.wordpress.com/',
  },
  {
    id: 'wp-6',
    title: "Ganvié : Les élèves de l'EPP GÈDÈVIÉ deviennent ambassadeurs des ODD",
    excerpt: "À l'occasion des 10 ans de l'Agenda 2030 de l'ONU, le MJPEA et l'APODD ont sensibilisé les élèves de Ganvié aux Objectifs de Développement Durable.",
    date: '26 septembre 2025',
    readTime: '4 min',
    category: 'Éducation',
    color: '#F57F17',
    link: 'https://laurentnassara.wordpress.com/',
  },
];

const allCategories = ['Tous', ...Array.from(new Set(wordpressPosts.map(p => p.category)))];

const themes = [
  { icon: '🌍', label: 'Justice Climatique', items: ['Inégalités environnementales', 'Réfugiés climatiques', 'Transition juste', 'Écosystèmes aquatiques'], color: '#1B5E20' },
  { icon: '✊', label: 'Militantisme', items: ["Stratégies d'action", 'Web activisme', 'Santé des activistes', 'Éthique numérique'], color: '#E8572A' },
  { icon: '⚕️', label: 'Santé & Droits', items: ['DSSR en Afrique', 'Santé reproductive', 'Quartiers informels', 'Plaidoyer SSR'], color: '#AD1457' },
];

const Publications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const filtered = activeFilter === 'Tous'
    ? wordpressPosts
    : wordpressPosts.filter(p => p.category === activeFilter);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  useEffect(() => {
    setVisibleItems(new Set());
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleItems((prev) => new Set([...prev, idx]));
            }
          });
        },
        { threshold: 0.1 }
      );
      itemRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
      return () => observer.disconnect();
    }, 80);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const anim = (i: number, delay = 0): React.CSSProperties => ({
    opacity: visibleItems.has(i) ? 1 : 0,
    transform: visibleItems.has(i) ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ─── HEADER — image background ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl pt-32 pb-20">
          <div className="flex items-start gap-5">
            <div className="w-1 h-16 bg-[#E8572A] flex-shrink-0 mt-2" />
            <div>
              <p className="text-[#E8572A] text-sm tracking-[0.25em] uppercase font-sans mb-3">
                Analyses & Réflexions
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-none mb-4" style={{ letterSpacing: '-0.02em' }}>
                Blog &<br /><span className="text-[#7CB97E]">Publications</span>
              </h1>
              <p className="text-gray-300 font-sans text-lg mt-5 max-w-xl leading-relaxed">
                Récits d'expérience, réflexions et analyses — de Cotonou à Bogota.
              </p>
            </div>
          </div>
          {/* Blog link pill */}
          <a
            href={siteConfig.blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-sans text-sm font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            laurentnassara.wordpress.com
            <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 max-w-6xl py-16">

        {/* ─── FILTER BAR ─── */}
        <div
          ref={(el) => { itemRefs.current[0] = el; }}
          data-index={0}
          className="mb-12 flex flex-wrap gap-2"
          style={anim(0)}
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-sans font-semibold transition-all duration-300"
              style={activeFilter === cat
                ? { background: '#0D1F0D', color: 'white', boxShadow: '0 4px 12px rgba(13,31,13,0.3)' }
                : { background: 'white', color: '#374151', border: '1px solid #E5E7EB' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─── FEATURED ARTICLE ─── */}
        {featured && (
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => { itemRefs.current[1] = el; }}
            data-index={1}
            className="group block mb-8 rounded-3xl overflow-hidden bg-[#0D1F0D] hover:shadow-2xl transition-all duration-500 cursor-pointer no-underline"
            style={anim(1)}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#E8572A] via-[#7CB97E] to-[#1565C0]" />
            <div className="relative p-10 md:p-14">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none -translate-y-1/3 translate-x-1/3" style={{ background: featured.color }} />
              <div className="relative flex flex-col md:flex-row gap-10">
                <div className="md:w-3/5">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 rounded-full text-xs font-sans font-bold tracking-widest uppercase" style={{ background: '#7CB97E20', color: '#7CB97E', border: '1px solid #7CB97E40' }}>
                      ★ Article récent
                    </span>
                    <span className="text-gray-500 text-sm font-sans">{featured.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug group-hover:text-[#7CB97E] transition-colors duration-300" style={{ letterSpacing: '-0.01em' }}>
                    {featured.title}
                  </h3>
                  <p className="text-gray-400 font-sans leading-relaxed mb-8">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-sans text-sm">{featured.date}</span>
                    <span className="inline-flex items-center gap-2 text-[#7CB97E] font-sans font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                      Lire l'article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="md:w-2/5 flex items-center">
                  <div className="w-full border border-white/10 rounded-2xl p-8 space-y-5">
                    {[
                      { label: 'Catégorie', val: featured.category },
                      { label: 'Lecture', val: featured.readTime },
                      { label: 'Publié le', val: featured.date },
                    ].map((row, i) => (
                      <div key={i}>
                        {i > 0 && <div className="w-full h-[1px] bg-white/10 mb-5" />}
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-sans mb-1">{row.label}</div>
                        <div className="text-white font-semibold font-sans">{row.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>
        )}

        {/* ─── GRID ARTICLES ─── */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {rest.map((post, index) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { itemRefs.current[index + 2] = el; }}
                data-index={index + 2}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 no-underline"
                style={anim(index + 2, index * 80)}
              >
                <div className="h-1 w-full" style={{ background: post.color }} />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold" style={{ background: `${post.color}15`, color: post.color }}>
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs font-sans">{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#1B5E20] transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-400 font-sans text-xs">{post.date}</span>
                    <span className="text-[#1B5E20] font-sans font-semibold text-sm group-hover:text-[#E8572A] transition-colors">
                      Lire →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* ─── THÉMATIQUES ─── */}
        <div
          ref={(el) => { itemRefs.current[10] = el; }}
          data-index={10}
          style={anim(10)}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[2px] bg-[#E8572A]" />
            <p className="text-[#E8572A] text-xs tracking-[0.3em] uppercase font-sans">Thématiques principales</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {themes.map((t, i) => (
              <div key={i} className="p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ borderTop: `3px solid ${t.color}` }}>
                <div className="text-3xl mb-4">{t.icon}</div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">{t.label}</h4>
                <ul className="space-y-2">
                  {t.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-500 font-sans flex items-start gap-2">
                      <span style={{ color: t.color }} className="flex-shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CTA BANNER ─── */}
        <div
          ref={(el) => { itemRefs.current[11] = el; }}
          data-index={11}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #0D1F0D 0%, #1B5E20 100%)', ...anim(11) }}
        >
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-10 md:p-14">
            <div>
              <p className="text-green-400 text-xs tracking-[0.3em] uppercase font-sans mb-2">Blog complet</p>
              <h3 className="text-3xl font-bold text-white">Tous mes articles</h3>
              <p className="text-gray-400 font-sans mt-2 text-sm">{siteConfig.blog.url}</p>
            </div>
            <a
              href={siteConfig.blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#E8572A] text-white text-sm font-sans font-bold rounded-full hover:bg-[#D44D22] transition-all duration-300 hover:gap-5 shadow-lg"
            >
              Accéder au blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Publications;