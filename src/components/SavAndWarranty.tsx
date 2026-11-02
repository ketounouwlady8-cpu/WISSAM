import React from 'react';
import { Wrench, ShieldCheck, Cpu, Clock, PhoneCall } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/products';

export const SavAndWarranty: React.FC = () => {
  return (
    <section id="sav-pieces" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
            <span>Maintenance & Durabilité</span>
            <span aria-hidden="true">·</span>
            <span>Pièces Certifiées</span>
            <span aria-hidden="true">·</span>
            <span>Atelier Abomey-Calavi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight leading-tight [text-wrap:balance]">
            Un atelier SAV dédié et un stock permanent de pièces d'origine pour vos machines.
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Contrairement aux importateurs occasionnels, la <strong>Société Wissam</strong> assure le cycle de vie complet de vos équipements INGCO. Nos techniciens qualifiés disposent de toutes les pièces constructeur pour réparer et entretenir vos outils sans délai.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual of Heavy Workshop & Tools */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
            <img
              src="/images/welding_heavy.jpg"
              alt="Atelier de maintenance et pièces détachées Société Wissam INGCO Bénin"
              referrerPolicy="no-referrer"
              className="w-full h-[360px] sm:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-amber-600">
                    Ligne Directe SAV
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {COMPANY_CONTACTS.savPhone}
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_CONTACTS.savPhoneRaw}?text=${encodeURIComponent("Bonjour Service SAV Wissam INGCO, j'ai besoin d'une réparation / pièce détachée pour mon appareil.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#FDB813] hover:bg-[#e5a50a] text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Joindre le SAV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">
                Pièces d'Origine Constructeur
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Charbons auto-rupteurs, induits bobinés cuivre, pignons hélicoïdaux, batteries et chargeurs d'origine disponibles sur étagère.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">
                Diagnostic & Réparation Express
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prise en charge directe à l'atelier d'Abomey-Calavi sous 24 à 48 heures pour éviter toute immobilisation de vos chantiers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">
                Garantie Officielle Wissam
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tous nos outils électroportatifs et stations de soudure bénéficient de la garantie constructeur contre les vices de fabrication.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-1.5">
                Conseils & Réglages Métier
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nos techniciens vous accompagnent pour le bon calibrage de vos lasers rotatifs, postes de soudage et compresseurs haute pression.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
