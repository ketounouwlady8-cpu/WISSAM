import React from 'react';
import { Star, ShieldCheck, MapPin } from 'lucide-react';
import { REVIEWS, COMPANY_CONTACTS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with real ratings metrics */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              <span>Preuve Sociale & Avis Clients</span>
              <span aria-hidden="true">·</span>
              <span>Google Maps Bénin</span>
              <span aria-hidden="true">·</span>
              <span>Professionnels du BTP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight [text-wrap:balance]">
              Reconnu par les artisans, mécaniciens et entreprises du Bénin.
            </h2>
          </div>

          {/* Aggregated Google rating badge */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center gap-4 shrink-0 shadow-xs">
            <div className="text-3xl font-black font-display text-amber-600 tabular-nums">
              {COMPANY_CONTACTS.googleRating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xs text-slate-700 mt-0.5">
                Basé sur <strong>+{COMPANY_CONTACTS.wissamReviewsCount + COMPANY_CONTACTS.googleReviewsCount} avis</strong> Google Maps
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-950">{rev.name}</div>
                  <div className="text-[11px] text-slate-500">{rev.role}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-600">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>{rev.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Google quote callout */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="italic font-medium">
              « INGCO is really among the biggest suppliers with genuine devices in Benin » — Extrait avis Google Maps vérifié.
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-slate-500">Direction Abomey-Calavi</span>
        </div>

      </div>
    </section>
  );
};
