import React from 'react';
import { Flame, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

export const FitnessFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white text-base shadow-xs font-display">
                A
              </div>
              <div>
                <span className="text-base font-black text-white uppercase font-display block leading-tight">
                  APEX ATHLETIC CLUB
                </span>
                <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase block">
                  Performance, Salles & Coaching Bénin
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              La plateforme communautaire de référence au Bénin pour localiser une salle de gym adaptée, s'entraîner avec un chronomètre interactif et adapter sa nutrition aux vrais repas du pays.
            </p>
          </div>

          {/* Salles par ville */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Salles de Sport par Ville
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#salles-de-gym" className="hover:text-emerald-400 transition-colors">Salles à Cotonou (Haie Vive, Cadjehoun, Akpakpa)</a></li>
              <li><a href="#salles-de-gym" className="hover:text-emerald-400 transition-colors">Salles à Abomey-Calavi (Kpota, Zogbadjè)</a></li>
              <li><a href="#salles-de-gym" className="hover:text-emerald-400 transition-colors">Salles de musculation à Porto-Novo</a></li>
              <li><a href="#salles-de-gym" className="hover:text-emerald-400 transition-colors">Centres de fitness à Parakou</a></li>
            </ul>
          </div>

          {/* Outils & Coaching */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Outils Gratuits
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#programmes-timer" className="hover:text-emerald-400 transition-colors">Calculateur de calories & IMC Bénin</a></li>
              <li><a href="#programmes-timer" className="hover:text-emerald-400 transition-colors">Timer d'entraînement avec bips vocaux</a></li>
              <li><a href="#nutrition-locale" className="hover:text-emerald-400 transition-colors">Guide calorique des aliments locaux</a></li>
              <li><a href="#coach-personnel" className="hover:text-emerald-400 transition-colors">Réservation de coachs privés certifiés</a></li>
            </ul>
          </div>

          {/* Partenariat gérant de salle */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Gérants de Salle de Gym ?
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Vous possédez une salle au Bénin et souhaitez être référencé gratuitement sur la plateforme ?
            </p>
            <a
              href="https://wa.me/2290197144444?text=Bonjour,%20je%20suis%20g%C3%A9rant%20d%27une%20salle%20de%20sport%20au%20B%C3%A9nin%20et%20je%20souhaite%20r%C3%A9f%C3%A9rencer%20mon%20%C3%A9tablissement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
            >
              Ajouter ma salle sur le guide
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} APEX ATHLETIC CLUB. Tous droits réservés. Cotonou · Calavi · Bénin.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Haut de page</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
