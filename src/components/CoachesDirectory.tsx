import React from 'react';
import { MessageCircle, Award, Check, MapPin, Calendar } from 'lucide-react';
import { COACHES_DATA } from '../data/fitnessData';
import { Coach } from '../types/fitness';

export const CoachesDirectory: React.FC = () => {
  const handleBookCoach = (coach: Coach) => {
    const text = `Bonjour ${coach.name},\n\nJe vous contacte via Bénin Fitness Club pour réserver des séances de coaching privé en ${coach.specialty} (${coach.city}).\n\nMerci de me communiquer vos disponibilités !`;
    window.open(`https://wa.me/${coach.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="coach-personnel" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <span>Encadrement Privé & Sur-Mesure</span>
            <span aria-hidden="true">·</span>
            <span>Certifications Reconnues</span>
            <span aria-hidden="true">·</span>
            <span>Cotonou & Calavi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight [text-wrap:balance]">
            Réservez un coach personnel certifié pour booster vos résultats.
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Pour apprendre les bons mouvements, surmonter un palier de stagnation ou préparer un événement sportif, nos coachs partenaires se déplacent à votre salle de gym habituelle, à domicile ou sur la plage de Fidjrossè.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACHES_DATA.map((coach) => (
            <div
              key={coach.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={coach.avatar}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-xs font-mono text-emerald-400 font-bold">{coach.experienceYears} ans d'expérience</div>
                    <div className="text-sm font-bold">{coach.name}</div>
                    {coach.nickname && (
                      <div className="text-[11px] text-slate-300">« {coach.nickname} »</div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{coach.city}</span>
                  </div>

                  <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-3">
                    {coach.specialty}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {coach.bio}
                  </p>

                  {/* Qualifications */}
                  <div className="space-y-1.5 mb-4 text-[11px] text-slate-700">
                    {coach.qualifications.map((q, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & Booking */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <div className="flex items-baseline justify-between mb-3 pt-3">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Séance individuelle :</span>
                    <strong className="text-sm font-mono text-slate-900">{coach.pricePerSession.toLocaleString('fr-FR')} F</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block">Suivi mensuel :</span>
                    <strong className="text-sm font-mono text-emerald-700 font-bold">{coach.priceMonthly.toLocaleString('fr-FR')} FCFA</strong>
                  </div>
                </div>

                <button
                  onClick={() => handleBookCoach(coach)}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Réserver sur WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
