import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Eye, MessageCircle, Filter, Check } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS_DATA, CATEGORIES, COMPANY_CONTACTS } from '../data/products';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  activeCategory: ProductCategory;
  onCategoryChange: (cat: ProductCategory) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
  activeCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVoltage, setFilterVoltage] = useState<'all' | '20v' | '220v' | 'manual'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Search query (name or code)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      // Voltage/type filter
      let matchesVoltage = true;
      if (filterVoltage === '20v') {
        matchesVoltage = item.voltage === '20V' || item.category === 'sans-fil-20v';
      } else if (filterVoltage === '220v') {
        matchesVoltage = item.voltage?.includes('220') || item.category === 'electroportatif';
      } else if (filterVoltage === 'manual') {
        matchesVoltage = item.category === 'coffrets-main' || item.category === 'epi-securite';
      }

      return matchesCategory && matchesSearch && matchesVoltage;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      // Default: featured (promos first, then alphabetical)
      if (a.isPromo && !b.isPromo) return -1;
      if (!a.isPromo && b.isPromo) return 1;
      return 0;
    });
  }, [activeCategory, searchQuery, filterVoltage, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimationId(product.id);
    setTimeout(() => setAddedAnimationId(null), 1200);
  };

  const handleWhatsAppOrder = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Bonjour Société Wissam INGCO Bénin, je souhaite commander l'article suivant :\n\n- Référence : ${product.code}\n- Désignation : ${product.name}\n- Prix : ${product.price.toLocaleString('fr-FR')} FCFA\n\nMerci de me confirmer la disponibilité et les modalités de livraison à Calavi / Cotonou.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.commercialPhoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="catalogue" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              <span>Tarifs Officiels en FCFA</span>
              <span aria-hidden="true">·</span>
              <span>Garantie Wissam</span>
              <span aria-hidden="true">·</span>
              <span>Disponibilité Immédiate</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              Catalogue Outillage & Matériel Professionnel
            </h2>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Affichage de <span className="font-mono text-slate-900 font-bold tabular-nums">{filteredProducts.length}</span> articles certifiés
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
          
          {/* Top row: search + sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher par mot-clé ou code article (ex: ID8508, CAGLI2211532, HKTHP11151)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors shadow-xs"
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

            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-amber-500 shadow-xs cursor-pointer font-medium"
              >
                <option value="featured">Tri : En vedette & Promos</option>
                <option value="price-asc">Prix : Moins cher au plus cher</option>
                <option value="price-desc">Prix : Plus cher au moins cher</option>
              </select>
            </div>
          </div>

          {/* Category Tabs (Segmented functional controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id as ProductCategory)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FDB813] text-slate-950 shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border border-slate-200 bg-slate-50">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">Aucun outil ne correspond à cette recherche</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Essayez de réinitialiser vos filtres ou contactez directement l'équipe commerciale au <strong>+229 01 97 14 44 44</strong> pour vérifier le stock magasin.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
                setFilterVoltage('all');
              }}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedAnimationId === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group relative rounded-2xl bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                >
                  {/* Top card media area (65-75% visual) */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={`${product.name} INGCO - Société Wissam Bénin`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40" />

                    {/* Ref Tag & Promo Indicator */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono font-bold text-slate-800 shadow-xs">
                        {product.code}
                      </span>
                      {product.tag && (
                        <span className="px-2 py-0.5 rounded bg-[#FDB813] text-slate-950 text-[11px] font-bold shadow-xs">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on hover */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-semibold text-slate-800 rounded-md flex items-center gap-1.5 shadow-md">
                        <Eye className="w-3.5 h-3.5 text-amber-600" />
                        <span>Fiche détaillée</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Quiet unboxed category kicker */}
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                        {product.voltage || product.power || 'INGCO Professional'}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-base font-bold text-slate-950 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug mb-2">
                        {product.name}
                      </h3>

                      {/* 1-line description snippet */}
                      <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price baseline & Actions */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <span className="text-xs text-slate-500 mr-1.5 font-medium">Prix :</span>
                          <span className="text-lg font-black font-display text-amber-600 tabular-nums">
                            {product.price.toLocaleString('fr-FR')} FCFA
                          </span>
                        </div>
                        {product.originalPrice && (
                          <span className="text-xs line-through text-slate-400 tabular-nums">
                            {product.originalPrice.toLocaleString('fr-FR')} F
                          </span>
                        )}
                      </div>

                      {/* Dual Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={(e) => handleQuickAdd(product, e)}
                          className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Ajouté !</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
                              <span>Au Devis</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={(e) => handleWhatsAppOrder(product, e)}
                          className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </button>
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
