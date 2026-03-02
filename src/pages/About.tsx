import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteData';

const portraitImage = '/laurent1.jpg';
const actionImage = '/me.jpeg';

const stats = [
  { value: '5+', label: "Années d'engagement" },
  { value: '35+', label: 'Campagnes menées' },
  { value: '100+', label: 'Personnes formées' },
  { value: '3+', label: "Pays d'intervention" },
];

const values = [
  { icon: '⚖️', title: 'Justice avant tout', desc: 'Climatique, sociale, économique — les trois sont indissociables.', color: '#E8572A' },
  { icon: '✊', title: 'Non-violence', desc: 'Désobéissance civile constructive comme levier de changement.', color: '#1B5E20' },
  { icon: '🌐', title: 'Solidarité internationale', desc: "Intersectionnalité et luttes croisées à l'échelle mondiale.", color: '#1565C0' },
  { icon: '🔍', title: 'Transparence', desc: 'Redevabilité totale dans chaque geste militant.', color: '#6A1B9A' },
];

const journey = [
  {
    label: 'Le déclic',
    text: "Tout a commencé par une prise de conscience simple mais brutale : les plus touchés par la crise climatique sont ceux qui y ont le moins contribué.",
  },
  {
    label: 'La formation',
    text: "Juriste et Défenseur des Droits Humains (DDH), j'ai rapidement compris que les textes de loi ne suffisaient pas. La véritable bataille se joue sur le terrain, aux côtés des communautés affectées.",
  },
  {
    label: "L'action",
    text: "Membre du MJPEA, point focal CIWA d'Amnesty International Bénin, alumni YES Bootcamp, boursier junior au CIAS-SSR 2025 — chaque engagement renforce le suivant.",
  },
  {
    label: 'La conviction',
    text: "L'écologie sans justice sociale n'est que du jardinage. Chaque action, chaque campagne, chaque parole est guidée par la recherche d'équité et de solidarité concrète.",
  },
];

const About: React.FC = () => {
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

  const anim = (i: number, delay = 0): React.CSSProperties => ({
    opacity: visibleItems.has(i) ? 1 : 0,
    transform: visibleItems.has(i) ? 'translateY(0)' : 'translateY(36px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ─── HERO PRESENTATION — portrait + texte ─── */}
      <section className="relative bg-[#0D1F0D] overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent 40%, #E8572A 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row items-end gap-0 md:gap-16 pt-28">

            {/* Text side */}
            <div className="w-full md:w-1/2 pb-12 md:pb-16">
              <p className="text-[#E8572A] text-sm tracking-[0.25em] uppercase font-sans mb-4">
                Juriste · DDH · Militant
              </p>
              <h2 className="text-xl text-[#7CB97E] font-sans font-normal mb-2">Je suis</h2>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Laurent<br />
                <span className="text-[#7CB97E]">NASSARA</span>
              </h1>
              <p className="text-gray-300 font-sans text-lg leading-relaxed mb-8 max-w-md">
                J'utilise le droit, le numérique et l'action citoyenne pour transformer les injustices sociales et climatiques en solutions durables.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white">{s.value}</div>
                    <div className="text-gray-400 font-sans text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/contact"
                  className="px-7 py-3.5 bg-[#E8572A] text-white font-sans font-bold rounded-full hover:bg-[#D44D22] transition-all duration-300 text-sm shadow-lg hover:-translate-y-0.5"
                >
                  Collaborer ensemble
                </a>
                <a
                  href="/campaigns"
                  className="px-7 py-3.5 bg-transparent border border-white/30 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  Voir mes actions →
                </a>
              </div>
            </div>

            {/* Portrait photo — déborde vers le haut */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
              <div
                className="relative overflow-hidden shadow-2xl w-64 md:w-full max-w-xs"
                style={{ borderRadius: '32px 32px 0 0' }}
              >
                <img
                  src={portraitImage}
                  alt="Laurent NASSARA"
                  className="w-full h-[380px] md:h-[420px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0D1F0D] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 max-w-6xl py-20">

        {/* ─── PARCOURS + 2ème IMAGE ─── */}
        <section
          ref={(el) => { itemRefs.current[0] = el; }}
          data-index={0}
          className="mb-24 grid md:grid-cols-2 gap-12 items-center"
          style={anim(0)}
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-[#E8572A]" />
              <p className="text-[#E8572A] text-xs tracking-[0.3em] uppercase font-sans">Mon parcours</p>
            </div>
            <div className="space-y-4">
              {journey.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300"
                  style={{ borderLeft: '3px solid #E8572A' }}
                >
                  <div
                    className="text-xs font-sans font-bold tracking-widest uppercase mb-2 px-3 py-1 rounded-full inline-block"
                    style={{ background: '#E8572A15', color: '#E8572A' }}
                  >
                    {item.label}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second photo — action */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 pointer-events-none"
              style={{ borderColor: '#E8572A30', zIndex: 0 }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ zIndex: 1 }}>
              <img
                src={actionImage}
                alt="Laurent NASSARA en action"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-sans text-sm font-semibold">
                  Laurent NASSARA — Collecte de jacinthes d'eau, Ganvié 2025
                </p>
                <p className="text-gray-300 font-sans text-xs mt-1">Membre & Chargé de projet, MJPEA</p>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white font-sans shadow-xl"
              style={{ background: '#1B5E20', zIndex: 2 }}
            >
              <div className="text-2xl font-extrabold">DDH</div>
              <div className="text-xs opacity-80 text-center leading-tight mt-0.5">Défenseur<br />des droits</div>
            </div>
          </div>
        </section>

        {/* ─── VALEURS ─── */}
        <section
          ref={(el) => { itemRefs.current[1] = el; }}
          data-index={1}
          className="mb-24"
          style={anim(1)}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[2px] bg-[#1B5E20]" />
            <p className="text-[#1B5E20] text-xs tracking-[0.3em] uppercase font-sans">Mes valeurs</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ borderTop: `3px solid ${v.color}` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: `${v.color}15` }}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{v.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ENGAGEMENTS RÉCENTS ─── */}
        <section
          ref={(el) => { itemRefs.current[2] = el; }}
          data-index={2}
          className="mb-24"
          style={anim(2)}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[#1565C0]" />
              <p className="text-[#1565C0] text-xs tracking-[0.3em] uppercase font-sans">Engagements récents</p>
            </div>
            <a href="https://laurentnassara.wordpress.com/" target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm text-[#1B5E20] font-semibold hover:text-[#E8572A] transition-colors">
              Voir le blog →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { year: 'Nov. 2025', org: 'CIAS-SSR 2025 · Cotonou', title: 'Boursier junior au Colloque international sur la Santé Sexuelle et Reproductive', color: '#AD1457', icon: '🩺' },
              { year: 'Oct. 2025', org: 'Amnesty International Bénin', title: 'Formation des points focaux CIWA sur le web activisme à Bohicon', color: '#E8572A', icon: '✊' },
              { year: 'Sept. 2025', org: 'MJPEA · Ganvié', title: "3 jours de collecte de jacinthes d'eau pour l'entrepreneuriat féminin", color: '#1B5E20', icon: '🌊' },
            ].map((item, i) => (
              <div key={i} className="p-7 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style={{ borderTop: `3px solid ${item.color}` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: `${item.color}15` }}>{item.icon}</div>
                  <span className="text-xs font-sans font-bold px-3 py-1 rounded-full" style={{ background: `${item.color}15`, color: item.color }}>{item.year}</span>
                </div>
                <p className="text-xs text-gray-400 font-sans uppercase tracking-wider mb-2">{item.org}</p>
                <h4 className="font-bold text-gray-900 text-sm leading-snug">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* ─── QUOTE ─── */}
        <section
          ref={(el) => { itemRefs.current[3] = el; }}
          data-index={3}
          className="relative rounded-3xl overflow-hidden bg-[#0D1F0D] p-12 md:p-16 mb-16"
          style={anim(3)}
        >
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute top-0 left-0 w-40 h-40 rounded-br-full opacity-10 pointer-events-none" style={{ background: '#E8572A' }} />
          <div className="relative max-w-3xl">
            <div className="text-[#E8572A] text-7xl font-serif leading-none mb-4 opacity-60">"</div>
            <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8" style={{ letterSpacing: '-0.01em' }}>
              {siteConfig.personal.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#7CB97E]" />
              <span className="text-[#7CB97E] font-sans text-sm tracking-wider">— Robert Swan</span>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          ref={(el) => { itemRefs.current[4] = el; }}
          data-index={4}
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-3xl border border-gray-200 bg-white"
          style={anim(4)}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie de collaborer ?</h3>
            <p className="text-gray-500 font-sans">Rejoignons nos forces pour un impact plus grand.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0 flex-wrap">
            <Link to="/campaigns" className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-sans font-semibold text-sm hover:border-[#1B5E20] hover:text-[#1B5E20] transition-all duration-300">
              Voir les campagnes
            </Link>
            <Link to="/contact" className="px-6 py-3 rounded-full bg-[#0D1F0D] text-white font-sans font-semibold text-sm hover:bg-[#1B5E20] transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
              Me contacter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;