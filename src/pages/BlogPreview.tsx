import React, { useEffect, useRef, useState } from 'react';
import { actionAreas } from '../data/siteData';

const Actions: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const accentColors = ['#E8572A', '#1B5E20', '#1565C0'];
  const bgColors = ['#FFF5F2', '#F1F8E9', '#F0F4FF'];

  return (
    <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ─── HEADER — image background, compact ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl pt-32 pb-20">
          <div className="flex items-start gap-5">
            <div className="w-1 h-16 bg-[#E8572A] flex-shrink-0 mt-2" />
            <div>
              <p className="text-[#E8572A] text-sm tracking-[0.25em] uppercase font-sans mb-3">Expertise & Engagement</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-none mb-4" style={{ letterSpacing: '-0.02em' }}>
                Domaines<br /><span className="text-[#7CB97E]">d'action</span>
              </h1>
              <p className="text-gray-300 font-sans text-lg mt-5 max-w-xl leading-relaxed">
                Trois axes interdépendants pour une lutte cohérente — où chaque combat renforce les autres.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 max-w-6xl py-20">
        <div className="space-y-8">
          {actionAreas.map((area, index) => (
            <div
              key={area.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className="group relative rounded-3xl overflow-hidden transition-all duration-700"
              style={{
                opacity: visibleItems.has(index) ? 1 : 0,
                transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${index * 120}ms`,
                background: bgColors[index % bgColors.length],
                border: `1px solid ${accentColors[index % accentColors.length]}22`,
              }}
            >
              <div className="absolute top-6 right-8 text-[120px] font-bold leading-none select-none pointer-events-none" style={{ color: `${accentColors[index % accentColors.length]}10` }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-2/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: `${accentColors[index % accentColors.length]}18` }}>
                        {area.icon}
                      </div>
                      <div className="w-8 h-[2px]" style={{ background: accentColors[index % accentColors.length] }} />
                      <span className="text-xs tracking-[0.2em] uppercase font-sans font-semibold" style={{ color: accentColors[index % accentColors.length] }}>
                        Axe {index + 1}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-sans text-base">{area.description}</p>
                    <a href="/contact"
                      className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full text-white text-sm font-sans font-semibold transition-all duration-300 hover:gap-5 hover:shadow-lg"
                      style={{ background: accentColors[index % accentColors.length] }}>
                      Collaborer
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                  <div className="hidden md:block w-[1px] self-stretch" style={{ background: `${accentColors[index % accentColors.length]}25` }} />
                  <div className="md:w-3/5">
                    <h4 className="text-xs tracking-[0.2em] uppercase font-sans font-semibold text-gray-400 mb-6">Exemples concrets</h4>
                    <ul className="space-y-4">
                      {area.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-4 group/item">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" style={{ background: `${accentColors[index % accentColors.length]}18` }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: accentColors[index % accentColors.length] }} />
                          </div>
                          <span className="text-gray-700 font-sans leading-relaxed">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── APPROCHE GLOBALE ─── */}
        <div className="mt-24 relative rounded-3xl overflow-hidden bg-[#0D1F0D] p-10 md:p-16">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full opacity-20" style={{ background: '#E8572A' }} />
          <div className="relative">
            <p className="text-[#E8572A] text-xs tracking-[0.3em] uppercase font-sans mb-4">Vision stratégique</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12" style={{ letterSpacing: '-0.02em' }}>Mon approche globale</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '⟳', title: 'Intersectionnalité', text: "Chaque lutte est connectée. La justice climatique ne peut exister sans justice sociale, raciale et économique.", color: '#E8572A' },
                { icon: '◈', title: 'Action multi-niveaux', text: 'Agir simultanément au niveau local, national et international pour un impact maximal et durable.', color: '#7CB97E' },
                { icon: '◎', title: 'Pédagogie active', text: 'Former et outiller les nouvelles générations pour pérenniser les luttes et les victoires collectives.', color: '#64B5F6' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl mb-4" style={{ color: item.color }}>{item.icon}</div>
                  <div className="w-8 h-[2px] mb-4" style={{ background: item.color }} />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 font-sans leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Actions;