import React, { useEffect, useRef, useState } from 'react';
import { campaigns } from '../data/siteData';

const tagColors: Record<string, string> = {
  'Droits humains': '#1565C0',
  'Plaidoyer': '#6A1B9A',
  'International': '#00838F',
  'Action directe': '#E8572A',
  'Énergie fossile': '#BF360C',
  'Mobilisation': '#E8572A',
  'Communauté': '#1B5E20',
  'Végétalisation': '#2E7D32',
  'Justice sociale': '#1B5E20',
  'Numérique': '#1565C0',
  'Formation': '#F57F17',
  'Sobriété': '#00695C',
  'Justice': '#6A1B9A',
  'Victoire': '#1B5E20',
  'Jeunesse': '#AD1457',
  'Réseau': '#0277BD',
};

const methodSteps = [
  { icon: '🔍', title: 'Diagnostic', desc: 'Analyse approfondie des enjeux et parties prenantes' },
  { icon: '🤝', title: 'Coalition', desc: 'Mobilisation des acteurs concernés et alliés' },
  { icon: '🎯', title: 'Action', desc: 'Mise en œuvre de stratégies adaptées et éthiques' },
  { icon: '📊', title: 'Évaluation', desc: "Mesure d'impact et apprentissages pour l'avenir" },
];

const Campaigns: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FAFAF8]"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ─── HEADER ─── */}
      <div className="relative pt-28 pb-20 overflow-hidden bg-[#0D1F0D]">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[35%] h-full opacity-10 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent 50%, #E8572A 100%)' }}
        />

        <div className="relative container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex items-start gap-5">
            <div className="w-1 h-20 bg-[#E8572A] flex-shrink-0 mt-2" />
            <div>
              <p className="text-[#E8572A] text-sm tracking-[0.25em] uppercase font-sans mb-3">
                Terrain & Mobilisation
              </p>
              <h1
                className="text-5xl md:text-7xl font-bold text-white leading-none mb-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                Engagements<br />
                <span className="text-[#7CB97E]">& Campagnes</span>
              </h1>
              <p className="text-gray-400 font-sans text-lg mt-6 max-w-xl leading-relaxed">
                Un aperçu des combats menés et des victoires collectives — du local à l'international.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-12 mt-14 pl-6">
            {[
              { n: campaigns.length.toString(), l: 'Campagnes' },
              { n: '2K+', l: 'Personnes mobilisées' },
              { n: '3', l: 'Victoires juridiques' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-white">{s.n}</div>
                <div className="text-gray-400 font-sans text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 md:px-12 max-w-6xl py-20">

        {/* ─── CAMPAIGNS LIST ─── */}
        <div className="mb-8 flex items-center gap-4">
          <div className="w-8 h-[2px] bg-[#E8572A]" />
          <p className="text-[#E8572A] text-xs tracking-[0.3em] uppercase font-sans">Campagnes principales</p>
        </div>

        <div className="space-y-6 mb-24">
          {campaigns.map((campaign, index) => (
            <article
              key={campaign.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
              style={{
                opacity: visibleItems.has(index) ? 1 : 0,
                transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${(index % 4) * 80}ms`,
                borderLeft: '3px solid transparent',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = '#E8572A'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'; }}
            >
              {/* Big year watermark */}
              <div
                className="absolute top-4 right-6 text-[80px] font-bold leading-none select-none pointer-events-none opacity-[0.04]"
                style={{ color: '#0D1F0D' }}
              >
                {campaign.year.replace('-', '')}
              </div>

              <div className="relative p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  {/* Year badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="px-4 py-2 rounded-xl text-sm font-sans font-bold text-center min-w-[80px]"
                      style={{ background: '#0D1F0D', color: '#7CB97E' }}
                    >
                      {campaign.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                      {campaign.title}
                    </h3>

                    <p className="text-gray-600 font-sans leading-relaxed mb-5">
                      {campaign.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {campaign.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-sans font-semibold"
                          style={{
                            background: `${tagColors[tag] || '#1B5E20'}15`,
                            color: tagColors[tag] || '#1B5E20',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    {campaign.impact && (
                      <div
                        className="inline-flex items-start gap-3 px-5 py-3 rounded-xl"
                        style={{ background: '#E8F5E9', border: '1px solid #A5D6A7' }}
                      >
                        <svg
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: '#1B5E20' }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <span
                            className="text-xs uppercase tracking-wider font-sans font-bold block mb-0.5"
                            style={{ color: '#1B5E20' }}
                          >
                            Impact & résultats
                          </span>
                          <span className="text-sm font-sans" style={{ color: '#2E7D32' }}>
                            {campaign.impact}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ─── MÉTHODOLOGIE ─── */}
        <div
          ref={(el) => { itemRefs.current[campaigns.length] = el; }}
          data-index={campaigns.length}
          className="relative rounded-3xl overflow-hidden bg-[#0D1F0D] p-10 md:p-16"
          style={{
            opacity: visibleItems.has(campaigns.length) ? 1 : 0,
            transform: visibleItems.has(campaigns.length) ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-48 h-48 rounded-tl-full opacity-10 pointer-events-none"
            style={{ background: '#E8572A' }}
          />

          <div className="relative">
            <p className="text-[#E8572A] text-xs tracking-[0.3em] uppercase font-sans mb-4">
              Processus
            </p>
            <h2
              className="text-4xl font-bold text-white mb-14"
              style={{ letterSpacing: '-0.02em' }}
            >
              Ma méthodologie d'action
            </h2>

            <div className="grid md:grid-cols-4 gap-0 relative">
              {/* Connector line */}
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-white/10 hidden md:block" />

              {methodSteps.map((step, i) => (
                <div key={i} className="relative text-center px-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 relative z-10"
                    style={{ background: '#E8572A18', border: '1px solid #E8572A30' }}
                  >
                    {step.icon}
                  </div>
                  <div
                    className="text-xs font-sans font-bold tracking-widest uppercase mb-1"
                    style={{ color: '#E8572A' }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Campaigns;