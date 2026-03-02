import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';

const messageTypes = [
  { value: 'collaboration', label: '🤝 Proposition de collaboration' },
  { value: 'invitation', label: "📅 Invitation à un événement" },
  { value: 'media', label: '🎙️ Demande média / interview' },
  { value: 'support', label: '💪 Offre de soutien' },
  { value: 'question', label: '💬 Question générale' },
  { value: 'other', label: '✉️ Autre' },
];

const urgencyLevels = [
  { value: 'low', label: 'Faible', color: '#1B5E20', bg: '#E8F5E9' },
  { value: 'normal', label: 'Normal', color: '#F57F17', bg: '#FFF8E1' },
  { value: 'high', label: 'Urgent', color: '#E65100', bg: '#FBE9E7' },
  { value: 'emergency', label: '🚨 Urgence militante', color: '#B71C1C', bg: '#FFEBEE' },
];

interface FormData {
  name: string;
  email: string;
  organization: string;
  messageType: string;
  message: string;
  urgency: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    messageType: 'collaboration',
    message: '',
    urgency: 'normal',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedType = messageTypes.find((t) => t.value === formData.messageType);
    const selectedUrgency = urgencyLevels.find((u) => u.value === formData.urgency);

    const subject = encodeURIComponent(
      `[${selectedType?.label ?? formData.messageType}] ${formData.name}${formData.organization ? ` – ${formData.organization}` : ''}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nJe me permets de vous contacter via votre portfolio.\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `NOM         : ${formData.name}\n` +
      `EMAIL       : ${formData.email}\n` +
      (formData.organization ? `ORGANISATION: ${formData.organization}\n` : '') +
      `TYPE        : ${selectedType?.label ?? formData.messageType}\n` +
      `URGENCE     : ${selectedUrgency?.label ?? formData.urgency}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `MESSAGE :\n${formData.message}\n\n` +
      `---\nEnvoyé depuis le portfolio de ${siteConfig.personal.name}`
    );

    window.location.href = `mailto:${siteConfig.personal.email}?subject=${subject}&body=${body}`;
  };

  const selectedUrgency = urgencyLevels.find((u) => u.value === formData.urgency);

  return (
    <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ─── HEADER — image background, compact ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl pt-32 pb-20">
          <div className="flex items-start gap-5">
            <div className="w-1 h-16 bg-[#E8572A] flex-shrink-0 mt-2" />
            <div>
              <p className="text-[#E8572A] text-sm tracking-[0.25em] uppercase font-sans mb-3">Ensemble, plus fort</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-none mb-4" style={{ letterSpacing: '-0.02em' }}>
                Contact &<br /><span className="text-[#7CB97E]">Collaborations</span>
              </h1>
              <p className="text-gray-300 font-sans text-lg mt-5 max-w-xl leading-relaxed">
                Prêt·e à agir ensemble ? Parlons de votre projet, événement ou campagne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 max-w-6xl py-20">
        <div className="grid md:grid-cols-5 gap-10">

          {/* ─── FORM (3 cols) ─── */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-[#E8572A] via-[#7CB97E] to-[#1565C0]" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-[#E8572A]" />
                  <h2 className="text-2xl font-bold text-gray-900">Écrivez-moi</h2>
                </div>

                {/* Info note */}
                <div className="flex items-start gap-3 p-4 rounded-xl mb-8 font-sans text-sm" style={{ background: '#E8F5E9', border: '1px solid #A5D6A7' }}>
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1B5E20]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[#1B5E20]">
                    En cliquant sur "Envoyer", votre messagerie s'ouvrira avec le message pré-rempli, prêt à envoyer.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-2">Nom complet *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-2">Organisation / Collectif</label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Nom de votre organisation (optionnel)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition" />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-3">Type de message</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {messageTypes.map((type) => (
                        <button key={type.value} type="button" onClick={() => setFormData((prev) => ({ ...prev, messageType: type.value }))}
                          className="px-3 py-2.5 rounded-xl border text-xs font-sans font-medium text-left transition-all duration-200"
                          style={formData.messageType === type.value
                            ? { background: '#0D1F0D', color: 'white', borderColor: '#0D1F0D' }
                            : { background: 'white', color: '#4B5563', borderColor: '#E5E7EB' }}>
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-3">Niveau d'urgence</label>
                    <div className="flex gap-2 flex-wrap">
                      {urgencyLevels.map((level) => (
                        <button key={level.value} type="button" onClick={() => setFormData((prev) => ({ ...prev, urgency: level.value }))}
                          className="px-4 py-2 rounded-full border text-xs font-sans font-semibold transition-all duration-200"
                          style={formData.urgency === level.value
                            ? { background: level.color, color: 'white', borderColor: level.color }
                            : { background: level.bg, color: level.color, borderColor: `${level.color}40` }}>
                          {level.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-gray-500 mb-2">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={6}
                      placeholder="Décrivez votre projet, événement ou demande..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition resize-none" />
                  </div>

                  {/* Live subject preview */}
                  {formData.name && formData.messageType && (
                    <div className="p-4 rounded-xl font-sans text-xs" style={{ background: '#F8F9FA', border: '1px dashed #D1D5DB' }}>
                      <span className="text-gray-400 uppercase tracking-wider">Objet du mail → </span>
                      <span className="text-gray-700 font-medium">
                        {messageTypes.find(t => t.value === formData.messageType)?.label}{' '}— {formData.name}
                        {formData.organization && ` – ${formData.organization}`}
                      </span>
                    </div>
                  )}

                  <button type="submit" disabled={!formData.name || !formData.email || !formData.message}
                    className="w-full py-4 rounded-2xl text-white font-sans font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 hover:gap-5 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: formData.name && formData.email && formData.message ? '#0D1F0D' : '#9CA3AF' }}>
                    Ouvrir ma messagerie pour envoyer
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ─── SIDEBAR (2 cols) ─── */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Informations</h3>
              <div className="space-y-5">
                <a href={`mailto:${siteConfig.personal.email}`} className="group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#E8572A]" style={{ background: '#F3F4F6' }}>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-sans uppercase tracking-wider">Email direct</div>
                    <span className="text-[#1B5E20] font-sans text-sm font-medium group-hover:underline">{siteConfig.personal.email}</span>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-sans uppercase tracking-wider">Localisation</div>
                    <span className="text-gray-700 font-sans text-sm">Bénin & interventions internationales</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-sans uppercase tracking-wider">Délai de réponse</div>
                    <span className="text-gray-700 font-sans text-sm">48h urgences · 3–5 jours autres</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative" style={{ background: '#0D1F0D' }}>
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10" style={{ background: '#E8572A' }} />
              <div className="relative p-8">
                <p className="text-[#E8572A] text-xs tracking-[0.3em] uppercase font-sans mb-2">Pourquoi collaborer ?</p>
                <h3 className="text-xl font-bold text-white mb-6">Ce que j'apporte</h3>
                <ul className="space-y-4">
                  {[
                    'Expertise en justice climatique et droits humains',
                    'Réseau militant national et international',
                    'Approche intersectionnelle et inclusive',
                    'Compétences en communication et plaidoyer',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#7CB97E20', border: '1px solid #7CB97E50' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7CB97E]" />
                      </div>
                      <span className="text-gray-300 font-sans text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedUrgency && (
              <div className="rounded-2xl p-5 font-sans text-sm flex items-center gap-3 transition-all duration-300"
                style={{ background: selectedUrgency.bg, border: `1px solid ${selectedUrgency.color}40` }}>
                <div className="w-3 h-3 rounded-full flex-shrink-0 animate-pulse" style={{ background: selectedUrgency.color }} />
                <span style={{ color: selectedUrgency.color }} className="font-semibold">
                  Urgence sélectionnée : {selectedUrgency.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;