import React from 'react';
import { Package, Check } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { Product } from '../types';

interface ToolkitsShowcaseProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ToolkitsShowcase: React.FC<ToolkitsShowcaseProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const flagshipToolkit = PRODUCTS_DATA.find((p) => p.code === 'HKTHP11151');

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              <span>Prêt pour le Chantier</span>
              <span aria-hidden="true">·</span>
              <span>Acier Chrome Vanadium</span>
              <span aria-hidden="true">·</span>
              <span>Mallettes Résistantes</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight [text-wrap:balance]">
              Coffrets d'outillage complets pour artisans et ateliers mécaniques.
            </h2>
          </div>
          <div className="text-sm text-slate-600 max-w-sm">
            Tout le nécessaire rangé au millimètre pour les interventions chez le client et sur chantier.
          </div>
        </div>

        {/* Big Spotlight Card */}
        {flagshipToolkit && (
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8 shadow-sm">
            
            {/* Visual */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] bg-slate-100">
              <img
                src="/src/assets/images/toolkits_cases_mechanic_1793626803568.jpg"
                alt="Coffret perceuse 115 pièces HKTHP11151 INGCO Société Wissam Bénin"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-md border border-slate-200 text-xs font-mono font-bold text-slate-900 shadow-xs">
                RÉF. {flagshipToolkit.code}
              </div>
            </div>

            {/* Description & Action */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-600 tracking-wider block mb-1">
                  Le N°1 Des Ventes au Bénin
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display mb-3">
                  {flagshipToolkit.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {flagshipToolkit.description} Une perceuse robuste accompagnée de marteau, clés, pinces, mèches à béton/métal et boîte de rangement thermoformée.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  {flagshipToolkit.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Prix Promo Spécial :</span>
                  <span className="text-2xl font-black font-display text-amber-600 tabular-nums">
                    {flagshipToolkit.price.toLocaleString('fr-FR')} FCFA
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(flagshipToolkit)}
                    className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Détails
                  </button>
                  <button
                    onClick={() => onAddToCart(flagshipToolkit)}
                    className="px-4 py-2.5 bg-[#FDB813] hover:bg-[#e5a50a] text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Package className="w-4 h-4" />
                    <span>Commander</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
