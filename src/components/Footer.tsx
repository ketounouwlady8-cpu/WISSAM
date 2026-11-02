import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ExternalLink } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FDB813] flex items-center justify-center font-black text-slate-950 text-lg shadow-xs border border-amber-400">
                W
              </div>
              <div>
                <span className="text-base font-black text-slate-950 uppercase font-display block leading-tight">
                  Société Wissam
                </span>
                <span className="text-[11px] font-bold text-amber-600 tracking-wider uppercase block">
                  Distributeur Exclusif INGCO Bénin
                </span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-xs">
              La référence officielle au Bénin pour l'outillage professionnel, le bricolage de précision, la quincaillerie et les pièces de rechange certifiées.
            </p>

            <div className="text-[11px] text-slate-500 font-medium">
              « N°1 Des pros et de petits budgets ✨ »
            </div>
          </div>

          {/* Col 2: Contacts Commerciaux & SAV */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contacts & Lignes Directes
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-900 font-bold block">Commercial & Ventes :</span>
                  <a href={`tel:${COMPANY_CONTACTS.commercialPhoneRaw}`} className="hover:text-amber-600 transition-colors">
                    +229 01 97 14 44 44 / 97 14 44 44
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-900 font-bold block">Atelier SAV & Pièces :</span>
                  <a href={`tel:${COMPANY_CONTACTS.savPhoneRaw}`} className="hover:text-amber-600 transition-colors">
                    +229 01 97 30 44 44 / 97 30 44 44
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-900 font-bold block">Direction & Quincaillerie :</span>
                  <span>+229 01 97 97 10 15 / 01 67 80 06 00</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <a href={`mailto:${COMPANY_CONTACTS.email}`} className="hover:text-amber-600 transition-colors">
                  {COMPANY_CONTACTS.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Adresses & Localisation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Showrooms & Dépôts
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Showroom Principal :</strong>
                  <p className="mt-0.5">Abomey-Calavi, à côté de NSIA Banque, face Polyclinique Coopérative.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Agence Kpota :</strong>
                  <p className="mt-0.5">Après le carrefour Kpota, avant Diamond Bank vers Zopa.</p>
                </div>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Lundi - Samedi : 08h00 - 17h30</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Réseaux Sociaux & Commande */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Communauté & Réseaux
            </h4>
            <p className="leading-relaxed text-slate-600">
              Retrouvez nos démonstrations vidéo, nouveaux arrivages et tutoriels d'outils sur nos pages officielles :
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="https://www.facebook.com/ingcobenin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-xs"
              >
                <span className="font-medium">Facebook INGCO BÉNIN (+90k)</span>
                <ExternalLink className="w-3 h-3 text-amber-600" />
              </a>

              <a
                href="https://www.tiktok.com/@ingco.benin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-xs"
              >
                <span className="font-medium">TikTok @ingco.benin</span>
                <ExternalLink className="w-3 h-3 text-amber-600" />
              </a>

              <a
                href="https://www.instagram.com/ingco.benin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-xs"
              >
                <span className="font-medium">Instagram INGCO Bénin</span>
                <ExternalLink className="w-3 h-3 text-amber-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Société Wissam. Tous droits réservés. Distributeur Exclusif INGCO au Bénin.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-medium">Abomey-Calavi · Cotonou · Parakou</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
              title="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5 text-amber-600" />
              <span>Haut de page</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
