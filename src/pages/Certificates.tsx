import React, { useEffect, useRef, useState } from 'react';

// ─── REAL CERTIFICATES DATA ───────────────────────────────────────────────────
const realCertificates = [
  {
    id: 1,
    category: 'Biodiversité',
    icon: '🦅',
    title: 'Identifier et dénombrer les oiseaux d\'Afrique du Nord et du Sahel',
    subtitle: 'Comment et dans quel but ?',
    issuer: 'MOOC Conservation',
    year: '2024',
    color: '#1B5E20',
    credentialUrl: 'https://www.mooc-conservation.org/certificates/07d024ea1b4d4b57befe422168c917da',
  },
  {
    id: 2,
    category: 'Conservation',
    icon: '⚖️',
    title: 'Application des lois en matière de conservation',
    subtitle: 'Certificat de réussite',
    issuer: 'MOOC Conservation',
    year: '2024',
    color: '#2E7D32',
    credentialUrl: 'https://www.mooc-conservation.org/certificates/84e5e61f6ab14209913328f18a25eb27',
  },
  {
    id: 3,
    category: 'Droits Humains',
    icon: '🏛️',
    title: 'Démocratie, Citoyenneté et État de Droit',
    subtitle: 'Attestation de succès',
    issuer: 'Université de Senghor',
    year: '2024',
    color: '#1565C0',
    credentialUrl: 'https://drive.google.com/file/d/171-b0ctm0Pn8Fihm3DlkfDmKKvPsQZMz/view?usp=drivesdk',
  },
  {
    id: 4,
    category: 'Juridique',
    icon: '📋',
    title: 'Formation sur la rédaction des recours',
    subtitle: 'Attestation de participation',
    issuer: 'Formation spécialisée',
    year: '2024',
    color: '#E8572A',
    credentialUrl: 'https://drive.google.com/file/d/170LnvLYdXePejCa1PmFsUGEwicvsfSqi/view?usp=drivesdk',
  },
  {
    id: 5,
    category: 'Santé Reproductive',
    icon: '🩺',
    title: 'Colloque international sur les avancées scientifiques en santé sexuelle et reproductive',
    subtitle: 'CIAS-SSR 2025',
    issuer: 'Conférence internationale',
    year: '2025',
    color: '#6A1B9A',
    credentialUrl: 'https://drive.google.com/file/d/17I-iphzfbzWepwI4BFyFSsadKnIzgYng/view?usp=drivesdk',
  },
  {
    id: 6,
    category: 'Paix & Sécurité',
    icon: '🕊️',
    title: 'Introduction aux connaissances fondamentales des opérations de paix',
    subtitle: 'Certificat de succès – Programme en ligne',
    issuer: 'Formation internationale',
    year: '2024',
    color: '#00838F',
    credentialUrl: 'https://drive.google.com/file/d/17683rkZljRkbdadVwrL_D3OLlaVhs8T3/view?usp=drivesdk',
  },
  {
    id: 7,
    category: 'Santé Reproductive',
    icon: '🌐',
    title: 'Conférence internationale sur la planification familiale',
    subtitle: 'ICFP Bogota 2025',
    issuer: 'ICFP — Bogota, Colombie',
    year: '2025',
    color: '#AD1457',
    credentialUrl: 'https://drive.google.com/file/d/15cBtyAURS9p4BHaWmbJcMP2g7Zf41TvX/view?usp=drivesdk',
  },
  {
    id: 8,
    category: 'Leadership Jeunesse',
    icon: '🤝',
    title: 'AU-EU Youth Voice Lab — Power of the Collective',
    subtitle: 'Certificate of Attendance',
    issuer: 'Union Africaine – Union Européenne',
    year: '2024',
    color: '#F57F17',
    credentialUrl: 'https://drive.google.com/file/d/176nu5_JPyqZzqrJcBYejTNqHiu3FVFz_/view?usp=drivesdk',
  },
  {
    id: 9,
    category: 'Diplomatie',
    icon: '🗺️',
    title: 'Conférence d\'initiative au multilatéralisme',
    subtitle: 'Chef de la délégation de l\'Union Africaine',
    issuer: 'Conférence internationale',
    year: '2024',
    color: '#1B5E20',
    credentialUrl: 'https://drive.google.com/file/d/172skRGPQC553EysqrehxNotziciDoFqh/view?usp=drivesdk',
  },
];

const categories = ['Tous', ...Array.from(new Set(realCertificates.map(c => c.category)))];

const Certificates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = activeFilter === 'Tous'
    ? realCertificates
    : realCertificates.filter(c => c.category === activeFilter);

  useEffect(() => {
    setVisibleItems(new Set());
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.1 }
      );
      itemRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ─── HEADER ─── */}
      <div className="relative pt-28 pb-20 overflow-hidden bg-[#0D1F0D]">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        {/* Decorative circles */}
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 translate-x-1/4 translate-y-1/4"
          style={{ background: '#E8572A' }} />
        <div className="absolute top-0 right-1/3 w-32 h-32 rounded-full opacity-5"
          style={{ background: '#7CB97E' }} />

        <div className="relative container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex items-start gap-6">
            <div className="mt-2">
              <div className="w-1 h-20 bg-[#E8572A]" />
            </div>
            <div>
              <p className="text-[#E8572A] text-sm tracking-[0.25em] uppercase font-sans mb-3">
                Expertise & Formation
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-4"
                style={{ letterSpacing: '-0.02em' }}>
                Certifications<br />
                <span className="text-[#7CB97E]">& Compétences</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl font-sans mt-6 leading-relaxed">
                {realCertificates.length} certifications qui renforcent l'action militante par l'expertise — de la conservation à la diplomatie internationale.
              </p>
              {/* Stats row */}
              <div className="flex gap-10 mt-10">
                {[
                  { n: '9', label: 'Certifications' },
                  { n: '6', label: 'Domaines' },
                  { n: '2', label: 'Continents' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold text-white">{s.n}</div>
                    <div className="text-gray-400 font-sans text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 md:px-12 max-w-6xl py-16">

        {/* ─── FILTER BAR ─── */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-sans font-semibold transition-all duration-300"
              style={activeFilter === cat
                ? { background: '#0D1F0D', color: 'white', boxShadow: '0 4px 12px rgba(13,31,13,0.3)' }
                : { background: 'white', color: '#374151', border: '1px solid #E5E7EB' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─── CERTS GRID ─── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                opacity: visibleItems.has(index) ? 1 : 0,
                transform: visibleItems.has(index) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                transitionDelay: `${(index % 6) * 80}ms`,
              }}
            >
              {/* Color accent top bar */}
              <div className="h-1 w-full" style={{ background: cert.color }} />

              {/* Year badge */}
              <div className="absolute top-5 right-5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-sans font-bold"
                  style={{ background: `${cert.color}15`, color: cert.color }}
                >
                  {cert.year}
                </span>
              </div>

              <div className="p-7 pt-6">
                {/* Icon + category */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${cert.color}15` }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-sans font-semibold"
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug group-hover:text-gray-700 transition-colors">
                  {cert.title}
                </h3>

                {cert.subtitle && (
                  <p className="text-sm text-gray-400 font-sans mb-4 italic">{cert.subtitle}</p>
                )}

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-100 my-4" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 font-sans uppercase tracking-wider">Délivré par</div>
                    <div className="text-sm font-semibold text-gray-700 font-sans mt-0.5">{cert.issuer}</div>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-bold text-white transition-all duration-300 hover:shadow-md hover:scale-105"
                    style={{ background: cert.color }}
                  >
                    Voir
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── COMPETENCES TRANSVERSALES ─── */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0D1F0D] p-10 md:p-16">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-tr-full opacity-10"
            style={{ background: '#E8572A' }} />

          <div className="relative">
            <p className="text-[#E8572A] text-xs tracking-[0.3em] uppercase font-sans mb-4">Savoir-faire</p>
            <h2 className="text-4xl font-bold text-white mb-12" style={{ letterSpacing: '-0.02em' }}>
              Compétences transversales
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎤',
                  title: 'Animation & Formation',
                  items: ['Animation de réunions et assemblées', 'Conception de formations militantes', 'Facilitation de groupes de travail'],
                  color: '#7CB97E'
                },
                {
                  icon: '📡',
                  title: 'Communication',
                  items: ['Stratégie de communication engageante', 'Relations presse et médias', 'Plaidoyer institutionnel'],
                  color: '#64B5F6'
                },
                {
                  icon: '🗂️',
                  title: 'Organisation',
                  items: ['Gestion de projets militants', 'Coordination d\'équipes', 'Évaluation d\'impact'],
                  color: '#FFB74D'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="w-8 h-[2px] mb-4" style={{ background: item.color }} />
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <ul className="space-y-2.5">
                    {item.items.map((li, j) => (
                      <li key={j} className="text-gray-400 font-sans text-sm flex items-start gap-2">
                        <span style={{ color: item.color }} className="flex-shrink-0">›</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Certificates;