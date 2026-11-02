import React, { useState } from 'react';
import { BatteryCharging, Zap, Layers, Check, ArrowRight } from 'lucide-react';

interface Platform20VProps {
  onFilter20V: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Platform20V: React.FC<Platform20VProps> = ({ onFilter20V, onSelectProduct }) => {
  const [selectedBattery, setSelectedBattery] = useState<'2ah' | '3ah' | '5ah'>('2ah');

  const batterySpecs = {
    '2ah': {
      model: 'FBLI20011',
      capacity: '2.0 Ah Lithium-Ion',
      price: '12 900 FCFA',
      productId: 'fbli20011',
      weight: '380g',
      idealFor: 'Perceuses, visseuses, outils multifonctions et travail en hauteur',
      chargingTime: '60 min (Chargeur standard)',
      badge: 'Le plus léger'
    },
    '3ah': {
      model: 'FBLI2030',
      capacity: '3.0 Ah Haute Capacité',
      price: '18 900 FCFA',
      productId: 'fbli2030',
      weight: '550g',
      idealFor: 'Meuleuses 115mm, scies circulaires et perforateurs SDS+',
      chargingTime: '80 min',
      badge: 'Équilibre parfait'
    },
    '5ah': {
      model: 'FBLI2003 (Pack Pro)',
      capacity: '5.0 Ah Ultra-Endurance',
      price: '34 000 FCFA',
      productId: 'cagli2211532',
      weight: '720g',
      idealFor: 'Usage continu sur chantier, coupe métal intensive et marteaux piqueurs',
      chargingTime: '120 min (Chargeur rapide)',
      badge: 'Chantier lourd'
    }
  };

  const activeSpec = batterySpecs[selectedBattery];

  return (
    <section id="plateforme-20v" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with unboxed metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              <span>Écosystème Unifié</span>
              <span aria-hidden="true">·</span>
              <span>Technologie P20S</span>
              <span aria-hidden="true">·</span>
              <span>Moteurs Brushless</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight [text-wrap:balance]">
              Plus de 580 outils professionnels alimentés par une seule batterie.
            </h2>
          </div>
          <button
            onClick={onFilter20V}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm flex items-center gap-2 whitespace-nowrap transition-colors shadow-xs cursor-pointer"
          >
            <span>Voir toute la gamme 20V</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </button>
        </div>

        {/* Feature Grid & Interactive Battery Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual of 20V range */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="relative rounded-xl overflow-hidden mb-6 border border-slate-200">
              <img
                src="/src/assets/images/cordless_power_tools_1793626802893.jpg"
                alt="Plateforme sans fil 20V INGCO Bénin chez Société Wissam"
                referrerPolicy="no-referrer"
                className="w-full h-[280px] sm:h-[340px] object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md border border-slate-200 text-xs font-mono font-bold text-slate-900 shadow-xs">
                P20S · POWER SHARE
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-amber-600 text-sm font-bold mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Brushless</span>
                </div>
                <p className="text-xs text-slate-600">Sans balais ni charbons, couple augmenté de 30% et zéro étincelle.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-amber-600 text-sm font-bold mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Interchangeable</span>
                </div>
                <p className="text-xs text-slate-600">1 batterie se clipse indifféremment sur votre perceuse, meuleuse ou souffleur.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-amber-600 text-sm font-bold mb-1">
                  <BatteryCharging className="w-4 h-4" />
                  <span>Lithium-Ion</span>
                </div>
                <p className="text-xs text-slate-600">Protection contre la surchauffe, auto-décharge quasi nulle en atelier.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Battery Selector Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                Simulateur de Batterie P20S
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-6">
                Choisissez la capacité adaptée à votre rythme de travail
              </h3>

              {/* Segmented control for battery selection */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 mb-6">
                {(['2ah', '3ah', '5ah'] as const).map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setSelectedBattery(cap)}
                    className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                      selectedBattery === cap
                        ? 'bg-[#FDB813] text-slate-950 shadow-sm'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {cap === '2ah' ? '2.0 Ah' : cap === '3ah' ? '3.0 Ah' : '5.0 Ah'}
                  </button>
                ))}
              </div>

              {/* Active battery specs card */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <div className="text-base font-bold text-slate-950">{activeSpec.capacity}</div>
                    <div className="text-xs font-mono text-slate-500">Réf. {activeSpec.model}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black font-display text-amber-600 tabular-nums">
                      {activeSpec.price}
                    </div>
                    <span className="text-xs text-emerald-600 font-semibold">En stock chez Wissam</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Usage idéal :</strong> {activeSpec.idealFor}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Temps de recharge :</strong> {activeSpec.chargingTime}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Poids net :</strong> {activeSpec.weight} pour un confort optimal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Garantie certifiée Société Wissam</span>
              <button
                onClick={() => onSelectProduct(activeSpec.productId)}
                className="px-4 py-2 bg-[#FDB813] hover:bg-[#e5a50a] text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Commander cette référence
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
