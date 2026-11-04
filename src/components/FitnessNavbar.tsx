import React, { useState } from 'react';
import { Flame, Menu, X, Dumbbell } from 'lucide-react';

interface FitnessNavbarProps {
  onOpenCalculator: () => void;
  compareCount: number;
  onOpenCompare: () => void;
}

export const FitnessNavbar: React.FC<FitnessNavbarProps> = ({
  onOpenCalculator,
  compareCount,
  onOpenCompare,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white text-xl tracking-tighter shadow-sm transition-transform group-hover:scale-105 font-display">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-slate-950 uppercase font-display leading-tight">
                APEX ATHLETIC CLUB
              </span>
              <span className="text-[11px] font-bold text-emerald-600 tracking-wider uppercase">
                Performance, Salles & Coaching Bénin
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#salles-de-gym" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
              Salles de Gym
            </a>
            <a href="#coach-personnel" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
              Coachs Certifiés
            </a>
            <a href="#programmes-timer" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
              Séances & Timer
            </a>
            <a href="#nutrition-locale" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
              Nutrition Béninoise
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {compareCount > 0 && (
              <button
                onClick={onOpenCompare}
                className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-xs"
              >
                <Dumbbell className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">Comparer</span>
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">
                  {compareCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenCalculator}
              className="px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-lg transition-all shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Flame className="w-4 h-4" />
              <span>Calculer mes Calories & IMC</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#salles-de-gym"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 rounded-lg"
          >
            Salles de Gym au Bénin
          </a>
          <a
            href="#coach-personnel"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 rounded-lg"
          >
            Coachs Sportifs Personnels
          </a>
          <a
            href="#programmes-timer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 rounded-lg"
          >
            Générateur de Séances & Timer
          </a>
          <a
            href="#nutrition-locale"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 rounded-lg"
          >
            Nutrition & Repas Béninois
          </a>
        </div>
      )}
    </header>
  );
};
