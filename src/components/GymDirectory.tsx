import React, { useState, useMemo } from 'react';
import { Search, MapPin, Star, MessageCircle, Navigation, Check, CheckSquare, Square, Filter } from 'lucide-react';
import { Gym } from '../types/fitness';
import { GYMS_DATA } from '../data/fitnessData';

interface GymDirectoryProps {
  selectedForCompare: string[];
  onToggleCompare: (gymId: string) => void;
  onOpenCompare: () => void;
}

export const GymDirectory: React.FC<GymDirectoryProps> = ({
  selectedForCompare,
  onToggleCompare,
  onOpenCompare,
}) => {
  const [cityFilter, setCityFilter] = useState<string>('all');
  const [equipmentFilter, setEquipmentFilter] = useState<string>('all');
  const [budgetFilter, setBudgetFilter] = useState<'all' | 'eco' | 'mid' | 'premium'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGyms = useMemo(() => {
    return GYMS_DATA.filter((gym) => {
      // City
      if (cityFilter !== 'all' && gym.city !== cityFilter) return false;

      // Equipment
      if (equipmentFilter !== 'all' && !gym.equipment.includes(equipmentFilter as any)) return false;

      // Budget (Monthly)
      if (budgetFilter === 'eco' && gym.pricePerMonth >= 15000) return false;
      if (budgetFilter === 'mid' && (gym.pricePerMonth < 15000 || gym.pricePerMonth > 25000)) return false;
      if (budgetFilter === 'premium' && gym.pricePerMonth <= 25000) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = gym.name.toLowerCase().includes(q);
        const matchesDistrict = gym.district.toLowerCase().includes(q);
        const matchesAddress = gym.address.toLowerCase().includes(q);
        const matchesDesc = gym.description.toLowerCase().includes(q);
        if (!matchesName && !matchesDistrict && !matchesAddress && !matchesDesc) return false;
      }

      return true;
    });
  }, [cityFilter, equipmentFilter, budgetFilter, searchQuery]);

  const handleWhatsAppContact = (gym: Gym) => {
    const text = `Bonjour ${gym.name},\n\nJe vous contacte via Bénin Fitness Club. Je souhaite des renseignements sur vos tarifs d'inscription et horaires pour votre salle située à ${gym.district} (${gym.city}).\n\nMerci !`;
    window.open(`https://wa.me/${gym.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="salles-de-gym" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-700 mb-2">
              <span>Annuaire Officiel & Vérifié</span>
              <span aria-hidden="true">·</span>
              <span>Cotonou · Calavi · Porto-Novo · Parakou</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              Salles de Sport & Centres de Fitness au Bénin
            </h2>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            <span className="font-mono text-slate-900 font-bold tabular-nums">{filteredGyms.length}</span> salles disponibles
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par nom de salle, quartier (ex: Haie Vive, Kpota, Cadjehoun, Zogbadjè)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Effacer
              </button>
            )}
          </div>

          {/* City & Discipline Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            
            {/* City Segmented buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {[
                { id: 'all', label: 'Toutes les villes' },
                { id: 'Cotonou', label: 'Cotonou' },
                { id: 'Abomey-Calavi', label: 'Abomey-Calavi' },
                { id: 'Porto-Novo', label: 'Porto-Novo' },
                { id: 'Parakou', label: 'Parakou' },
              ].map((city) => (
                <button
                  key={city.id}
                  onClick={() => setCityFilter(city.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    cityFilter === city.id
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {city.label}
                </button>
              ))}
            </div>

            {/* Discipline Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={equipmentFilter}
                onChange={(e) => setEquipmentFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-500 shadow-xs cursor-pointer"
              >
                <option value="all">Toutes disciplines</option>
                <option value="musculation">Musculation & Fonte</option>
                <option value="cardio">Cardio & Tapis</option>
                <option value="crossfit">Crossfit & Fonctionnel</option>
                <option value="boxe">Boxe & Arts martiaux</option>
                <option value="cours_collectifs">Cours collectifs & Zumba</option>
              </select>

              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value as any)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-500 shadow-xs cursor-pointer"
              >
                <option value="all">Tous budgets</option>
                <option value="eco">Éco (&lt; 15 000 F / mois)</option>
                <option value="mid">Standard (15k - 25k F)</option>
                <option value="premium">Premium (&gt; 25k F / mois)</option>
              </select>
            </div>

          </div>

          {/* Active compare tray notice */}
          {selectedForCompare.length > 0 && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-900 font-medium">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>
                  <strong>{selectedForCompare.length}</strong> salle{selectedForCompare.length > 1 ? 's' : ''} sélectionnée{selectedForCompare.length > 1 ? 's' : ''} pour comparaison
                </span>
              </div>
              <button
                onClick={onOpenCompare}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs cursor-pointer transition-colors"
              >
                Ouvrir le comparatif côte à côte
              </button>
            </div>
          )}

        </div>

        {/* Gyms Grid */}
        {filteredGyms.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border border-slate-200 bg-slate-50">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">Aucune salle ne correspond à vos critères</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Essayez d'élargir votre recherche ou de sélectionner « Toutes les villes ».
            </p>
            <button
              onClick={() => {
                setCityFilter('all');
                setEquipmentFilter('all');
                setBudgetFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredGyms.map((gym) => {
              const isCompared = selectedForCompare.includes(gym.id);

              return (
                <div
                  key={gym.id}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-xs"
                >
                  {/* Gym Image */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={gym.image}
                      alt={gym.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-xs flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{gym.district}, {gym.city}</span>
                    </div>

                    {/* Compare Checkbox */}
                    <button
                      onClick={() => onToggleCompare(gym.id)}
                      className={`absolute top-3 right-3 p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer backdrop-blur-md ${
                        isCompared
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-white/90 text-slate-800 border border-slate-200 hover:bg-white'
                      }`}
                    >
                      {isCompared ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                      <span className="text-[11px]">{isCompared ? 'Comparé' : 'Comparer'}</span>
                    </button>

                    {/* Rating at bottom-left of image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-bold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{gym.rating}</span>
                      <span className="text-slate-300 font-normal">({gym.reviewsCount} avis)</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 mb-1.5 leading-snug">
                        {gym.name}
                      </h3>
                      
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {gym.description}
                      </p>

                      {/* Amenities checklist */}
                      <div className="space-y-1.5 mb-5 text-xs text-slate-700">
                        {gym.amenities.slice(0, 3).map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-4 border-t border-slate-100">
                      
                      <div className="flex items-baseline justify-between mb-4">
                        <div>
                          <span className="text-xs text-slate-500 font-medium block">Séance :</span>
                          <span className="text-base font-bold text-slate-900 font-mono tabular-nums">
                            {gym.pricePerSession.toLocaleString('fr-FR')} F
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 font-medium block">Abonnement Mensuel :</span>
                          <span className="text-xl font-black text-emerald-700 font-display tabular-nums">
                            {gym.pricePerMonth.toLocaleString('fr-FR')} FCFA
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleWhatsAppContact(gym)}
                          className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp Salle</span>
                        </button>

                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.name + ' ' + gym.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200 cursor-pointer"
                        >
                          <Navigation className="w-4 h-4 text-emerald-600" />
                          <span>Itinéraire GPS</span>
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
