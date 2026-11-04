import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Dumbbell, Timer } from 'lucide-react';

interface FitnessHeroProps {
  onExploreGyms: () => void;
  onExploreWorkout: () => void;
}

export const FitnessHero: React.FC<FitnessHeroProps> = ({
  onExploreGyms,
  onExploreWorkout,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-500/5 via-white to-slate-50 pt-10 pb-16 lg:py-20 border-b border-slate-200">
      
      {/* Subtle emerald radial ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/15 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-700 mb-4">
              <span>Plateforme Sport & Bien-Être</span>
              <span aria-hidden="true">·</span>
              <span>Bénin</span>
              <span aria-hidden="true">·</span>
              <span>Cotonou · Calavi · Parakou</span>
            </div>

            {/* Display headline without orphans */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-display tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
              Trouvez votre salle de sport et <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">sculptez votre corps</span> au Bénin.
            </h1>

            {/* Clean editorial description */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Le guide complet pour comparer les salles de gym à Cotonou, Abomey-Calavi et partout au Bénin. Profitez d'un <strong>générateur de séances avec chronomètre interactif</strong>, de coachs certifiés et d'un <strong>guide nutritionnel basé sur les vrais repas béninois</strong>.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreGyms}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Dumbbell className="w-5 h-5" />
                <span>Trouver une Salle de Gym</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onExploreWorkout}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold rounded-xl transition-colors flex items-center gap-2 text-sm sm:text-base cursor-pointer shadow-xs"
              >
                <Timer className="w-5 h-5 text-emerald-600" />
                <span>Séance Guidée & Timer</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tarifs transparents en FCFA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Contact WhatsApp direct des gérants</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Cotonou, Calavi, Porto-Novo, Parakou</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
              <img
                src="/images/hero_fitness.jpg"
                alt="Sportifs s'entraînant dans une salle moderne à Cotonou Bénin"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              {/* Verified Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                    Communauté Fitness Bénin
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Plus de 45 salles répertoriées
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Tarif moyen</div>
                  <div className="text-xs font-mono font-bold text-slate-950">1 500 F / séance</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width KPI strip below the hero split */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-emerald-600 tabular-nums">
              +45
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Salles de Sport</div>
            <div className="text-xs text-slate-500 mt-0.5">Vérifiées à Cotonou & Calavi</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-slate-950 tabular-nums">
              100%
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Tarifs en FCFA</div>
            <div className="text-xs text-slate-500 mt-0.5">Séance, mois & réductions étudiant</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-emerald-600 tabular-nums">
              Chrono
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Timer d'Entraînement</div>
            <div className="text-xs text-slate-500 mt-0.5">Effort et repos intégrés</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-3xl font-black font-display text-slate-950 tabular-nums">
              Local
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">Nutrition Béninoise</div>
            <div className="text-xs text-slate-500 mt-0.5">Repas sains et accessibles</div>
          </div>

        </div>

      </div>

    </section>
  );
};
