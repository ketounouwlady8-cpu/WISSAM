import React from 'react';
import { X, Check, MessageCircle, Star } from 'lucide-react';
import { Gym } from '../types/fitness';
import { GYMS_DATA } from '../data/fitnessData';

interface GymCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: string[];
  onRemoveGym: (id: string) => void;
  onClearAll: () => void;
}

export const GymCompareModal: React.FC<GymCompareModalProps> = ({
  isOpen,
  onClose,
  selectedIds,
  onRemoveGym,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const comparedGyms = GYMS_DATA.filter((g) => selectedIds.includes(g.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      
      {/* Container */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-lg font-bold text-slate-950 font-display">
              Comparatif des Salles de Gym Sélectionnées
            </h3>
            <p className="text-xs text-slate-500">
              {comparedGyms.length} salle{comparedGyms.length > 1 ? 's' : ''} en comparaison
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
            >
              Vider la sélection
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-6 overflow-x-auto flex-1">
          {comparedGyms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-sm mb-4">Aucune salle sélectionnée pour le moment.</p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold"
              >
                Retourner à l'annuaire
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comparedGyms.map((gym) => (
                <div
                  key={gym.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    {/* Image & Remove button */}
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-slate-100">
                      <img src={gym.image} alt={gym.name} className="w-full h-full object-cover" />
                      <button
                        onClick={() => onRemoveGym(gym.id)}
                        className="absolute top-2 right-2 p-1 bg-white/90 hover:bg-white text-rose-600 rounded-md shadow-xs cursor-pointer"
                        title="Retirer du comparatif"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                      {gym.district}, {gym.city}
                    </div>

                    <h4 className="text-base font-bold text-slate-950 mb-2">
                      {gym.name}
                    </h4>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-800 mb-4">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{gym.rating} / 5</span>
                      <span className="text-slate-400 font-normal">({gym.reviewsCount} avis)</span>
                    </div>

                    {/* Criteria checklist */}
                    <div className="space-y-3 text-xs border-t border-b border-slate-100 py-4 mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tarif par séance :</span>
                        <strong className="text-slate-900 font-mono">{gym.pricePerSession.toLocaleString('fr-FR')} FCFA</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tarif mensuel :</span>
                        <strong className="text-emerald-700 font-mono text-sm">{gym.pricePerMonth.toLocaleString('fr-FR')} FCFA</strong>
                      </div>
                      {gym.priceStudent && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Tarif étudiant :</span>
                          <strong className="text-slate-800 font-mono">{gym.priceStudent.toLocaleString('fr-FR')} FCFA</strong>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Climatisation :</span>
                        {gym.isAirConditioned ? (
                          <span className="text-emerald-700 font-bold flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Oui</span>
                        ) : (
                          <span className="text-slate-400">Ventilation</span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Parking sécurisé :</span>
                        {gym.hasParking ? (
                          <span className="text-emerald-700 font-bold flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Oui</span>
                        ) : (
                          <span className="text-slate-400">Non</span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Ouvert Dimanche :</span>
                        {gym.isOpenSunday ? (
                          <span className="text-emerald-700 font-bold flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Oui</span>
                        ) : (
                          <span className="text-slate-400">Non</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent("Bonjour " + gym.name + ", je vous contacte depuis le comparateur Bénin Fitness Club pour une inscription.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contacter sur WhatsApp</span>
                  </a>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
