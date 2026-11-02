import React from 'react';
import { Shield, Wrench, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenSav: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenSav }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/5 via-white to-slate-50 pt-10 pb-16 lg:py-20 border-b border-slate-200">
      
      {/* Subtle warm radial ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FDB813]/15 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Brand Statement & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-600 mb-4">
              <span>Distributeur Exclusif Officiel</span>
              <span aria-hidden="true">·</span>
              <span>Bénin</span>
              <span aria-hidden="true">·</span>
              <span>Abomey-Calavi</span>
            </div>

            {/* Display headline without orphans */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
              L'outillage professionnel <span className="text-amber-500 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">n°1 des pros</span> et des petits budgets au Bénin.
            </h1>

            {/* Clean editorial description */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              La <strong>Société Wissam</strong> équipe les artisans, mécaniciens et entreprises BTP du Bénin avec la gamme complète <strong>INGCO</strong> : électroportatif de pointe, plateforme sans fil 20V P20S, coffrets haute durabilité, pièces de rechange certifiées et SAV réactif.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 bg-[#FDB813] hover:bg-[#e5a50a] active:scale-95 text-slate-950 font-bold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Consulter le Catalogue & Prix</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSav}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold rounded-lg transition-colors flex items-center gap-2 text-sm sm:text-base cursor-pointer shadow-xs"
              >
                <Wrench className="w-4 h-4 text-amber-600" />
                <span>SAV & Pièces d'Origine</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Stock permanent à Abomey-Calavi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-600" />
                <span>Garantie constructeur & SAV local</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Face Polyclinique Coopérative (NSIA)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
              <img
                src="/src/assets/images/hero_showroom_tools_1793626802422.jpg"
                alt="Showroom officiel Société Wissam - INGCO Bénin à Abomey-Calavi"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Verified Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-amber-600">
                    Showroom Abomey-Calavi
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Plus grand espace outillage du Bénin
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Ouvert aujourd'hui</div>
                  <div className="text-xs font-mono font-bold text-emerald-600">Jusqu'à 17h30</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width KPI strip below the hero split */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-amber-600 tabular-nums">
              +580
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Outils pour 1 Batterie</div>
            <div className="text-xs text-slate-500 mt-0.5">Écosystème unifié 20V P20S</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-slate-950 tabular-nums">
              100%
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Pièces de Rechange</div>
            <div className="text-xs text-slate-500 mt-0.5">Charbons, induits & accessoires</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-amber-600 tabular-nums">
              4.3 / 5
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Avis Google Maps</div>
            <div className="text-xs text-slate-500 mt-0.5">+460 avis clients cumulés</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-slate-950 tabular-nums">
              Gros & Détail
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Réseau National</div>
            <div className="text-xs text-slate-500 mt-0.5">Livraison partout au Bénin</div>
          </div>

        </div>

      </div>

    </section>
  );
};
