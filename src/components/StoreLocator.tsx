import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink, Building2, Warehouse } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/products';

export const StoreLocator: React.FC = () => {
  return (
    <section id="showroom" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
            <span>Points de Vente & Dépôts</span>
            <span aria-hidden="true">·</span>
            <span>Abomey-Calavi</span>
            <span aria-hidden="true">·</span>
            <span>Bénin</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight [text-wrap:balance]">
            Venez tester nos outils au Showroom d'Abomey-Calavi.
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Notre espace d'exposition agrandi accueille tous les artisans, entrepreneurs et bricoleurs. Venez prendre en main les machines, comparer les modèles 20V et repartir immédiatement avec vos outils garantis.
          </p>
        </div>

        {/* 3 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Direction Générale & Showroom */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-amber-600 mb-1">
                Direction Générale & Showroom
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-3">
                Société Wissam - INGCO
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Abomey-Calavi, juste à côté de la banque NSIA, en face de la polyclinique coopérative (avant la mairie en venant de Cotonou).
              </p>
              
              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>+229 01 97 14 44 44 / 97 14 44 44</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Lundi - Samedi : 08h00 - 17h30</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=wissam+ingco+abomey-calavi"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-600" />
              <span>Ouvrir dans Google Maps</span>
            </a>
          </div>

          {/* Card 2: Agence Kpota / Zopa */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-amber-600 mb-1">
                Point Relais Matériaux & Quincaillerie
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-3">
                Agence Carrefour Kpota
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Après le Carrefour Kpota, avant Diamond Bank en allant à Zopa (BP 815 Parakou / Abomey-Calavi - Bénin).
              </p>
              
              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>+229 01 97 97 10 15 / 01 21 36 37 57</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Lundi - Samedi : 08h00 - 17h30</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_CONTACTS.directorPhoneRaw}?text=${encodeURIComponent("Bonjour Société Wissam, je souhaite contacter l'agence Kpota.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
              <span>Contacter l'Agence Kpota</span>
            </a>
          </div>

          {/* Card 3: Grand Dépôt Logistique */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                <Warehouse className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase font-bold tracking-wider text-amber-600 mb-1">
                Vente Gros & Approvisionnement Chantiers
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-3">
                Dépôt Wissam - INGCO
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Grand Dépôt de stockage et d'expédition. Référence Plus Code Google Maps : <strong>F954+4J5</strong>, Abomey-Calavi.
              </p>
              
              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Grossistes & Quincailleries partenaires</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>{COMPANY_CONTACTS.email}</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_CONTACTS.commercialPhoneRaw}?text=${encodeURIComponent("Bonjour Société Wissam, je souhaite un devis grossiste / revente pour quincaillerie.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-[#FDB813] hover:bg-[#e5a50a] text-slate-950 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <span>Demander Tarif Grossiste</span>
            </a>
          </div>

        </div>

        {/* Detailed Map visual preview & guide */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2">
            <div className="text-sm font-bold text-slate-950 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Comment venir depuis Cotonou ?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              En venant de Cotonou par l'axe principal vers Abomey-Calavi : dépassez le Carrefour Kpota, continuez tout droit. Le showroom principal Société Wissam INGCO se situe sur votre droite, juste à côté de la banque NSIA et exactement en face de la Polyclinique Coopérative, un peu avant la Mairie de Calavi.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=SOCIETE+WISSAM+Abomey+Calavi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#FDB813]" />
            <span>Itinéraire GPS direct</span>
          </a>
        </div>

      </div>
    </section>
  );
};
