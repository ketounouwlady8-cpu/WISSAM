import React, { useState } from 'react';
import { Apple, Utensils, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { BENIN_FOODS } from '../data/fitnessData';
import { LocalFoodItem } from '../types/fitness';

export const BeninNutrition: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [plate, setPlate] = useState<{ food: LocalFoodItem; qty: number }[]>([
    { food: BENIN_FOODS[0], qty: 1 }, // Tilapia braisé
    { food: BENIN_FOODS[3], qty: 1 }, // Igname bouillie
    { food: BENIN_FOODS[8], qty: 1 }, // Avocat
  ]);

  const categories = ['all', 'Protéine', 'Féculent', 'Plat complet', 'Collation / Fruit'];

  const filteredFoods = selectedCategory === 'all'
    ? BENIN_FOODS
    : BENIN_FOODS.filter((f) => f.category === selectedCategory);

  const addFoodToPlate = (food: LocalFoodItem) => {
    setPlate((prev) => {
      const existing = prev.find((item) => item.food.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.food.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { food, qty: 1 }];
    });
  };

  const removeFoodFromPlate = (id: string) => {
    setPlate((prev) => prev.filter((item) => item.food.id !== id));
  };

  const totalPlateCalories = plate.reduce((acc, item) => acc + item.food.calories * item.qty, 0);
  const totalPlateProtein = plate.reduce((acc, item) => acc + item.food.protein * item.qty, 0);
  const totalPlateCarbs = plate.reduce((acc, item) => acc + item.food.carbs * item.qty, 0);
  const totalPlateFat = plate.reduce((acc, item) => acc + item.food.fat * item.qty, 0);

  return (
    <section id="nutrition-locale" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <span>Alimentation & Produits Locaux</span>
            <span aria-hidden="true">·</span>
            <span>Bénin</span>
            <span aria-hidden="true">·</span>
            <span>Équilibre Sans Privation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight [text-wrap:balance]">
            La nutrition sportive adaptée aux vrais repas du Bénin.
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Pas besoin de régimes importés hors de prix. Découvrez la valeur nutritionnelle des plats béninois (poisson braisé, igname, poulet bicyclette, akassa, avocat) et composez votre assiette idéale.
          </p>
        </div>

        {/* 2-Column Split: Foods Catalog on Left, Interactive Plate on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Local Foods Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'Tous les aliments' : cat}
                </button>
              ))}
            </div>

            {/* Food cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredFoods.map((food) => (
                <div
                  key={food.id}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        {food.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-900 tabular-nums">
                        {food.calories} kcal
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-950 mb-1">
                      {food.name}
                    </h4>

                    <div className="text-[11px] text-slate-500 mb-2">
                      Portion : {food.portion}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {food.fitnessTip}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-700">
                      <span><strong>{food.protein}g</strong> prot</span>
                      <span>·</span>
                      <span><strong>{food.carbs}g</strong> gluc</span>
                    </div>

                    <button
                      onClick={() => addFoodToPlate(food)}
                      className="px-2.5 py-1 rounded-md bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Plate Builder + High-Res Photo */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Plate Header */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src="/images/nutrition_fitness.jpg"
                  alt="Assiette saine poisson braisé patate douce avocat Bénin"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold uppercase text-emerald-400">Assiette Idéale</div>
                  <div className="text-sm font-bold">Tilapia, Patate douce, Avocat & Légumes</div>
                </div>
              </div>

              {/* Calculator Box */}
              <div className="p-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2 text-slate-950 font-bold text-sm">
                    <Utensils className="w-4 h-4 text-emerald-600" />
                    <span>Mon Repas Composé</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {plate.length} ingrédient{plate.length > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Items on plate */}
                <div className="space-y-2 mb-6 max-h-48 overflow-y-auto pr-1">
                  {plate.length === 0 ? (
                    <p className="text-xs text-slate-500 text-center py-4">
                      Votre assiette est vide. Cliquez sur « Ajouter » sur les aliments de gauche.
                    </p>
                  ) : (
                    plate.map((item) => (
                      <div
                        key={item.food.id}
                        className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="font-bold text-slate-900 truncate">{item.food.name}</div>
                          <div className="text-[11px] text-slate-500 font-mono">
                            {item.qty > 1 ? `${item.qty} portions · ` : ''}{item.food.calories * item.qty} kcal · {item.food.protein * item.qty}g protéines
                          </div>
                        </div>

                        <button
                          onClick={() => removeFoodFromPlate(item.food.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                          title="Supprimer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Totals Bar */}
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-slate-600 font-semibold">Total Calorie du Repas :</span>
                    <span className="text-2xl font-black font-display text-emerald-800 tabular-nums font-mono">
                      {totalPlateCalories} <span className="text-sm">kcal</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white p-2 rounded-lg border border-emerald-100 shadow-2xs">
                      <span className="text-[10px] text-slate-500 font-bold block">Protéines</span>
                      <strong className="text-slate-900 font-mono text-sm">{totalPlateProtein}g</strong>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-emerald-100 shadow-2xs">
                      <span className="text-[10px] text-slate-500 font-bold block">Glucides</span>
                      <strong className="text-slate-900 font-mono text-sm">{totalPlateCarbs}g</strong>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-emerald-100 shadow-2xs">
                      <span className="text-[10px] text-slate-500 font-bold block">Lipides</span>
                      <strong className="text-slate-900 font-mono text-sm">{totalPlateFat}g</strong>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick Tips Callout */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>3 Règles d'Or pour Manger Sain au Bénin :</span>
              </div>
              <p>• <strong>Réduire l'huile rouge ou de palme</strong> dans les sauces et privilégier les cuissons braisées ou vapeur.</p>
              <p>• <strong>Doubler la part de poisson ou poulet local</strong> pour atteindre votre quota de protéines sans poudres chimiques.</p>
              <p>• <strong>Consommer l'ananas d'Allada ou la papaye</strong> en dessert pour faciliter la digestion des protéines.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
