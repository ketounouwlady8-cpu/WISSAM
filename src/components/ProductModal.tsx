import React, { useState, useEffect } from 'react';
import { X, Check, Shield, Wrench, ShoppingBag, MessageCircle, MapPin } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_CONTACTS } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setJustAdded(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleDirectWhatsApp = () => {
    const total = product.price * quantity;
    const msg = `Bonjour Société Wissam INGCO Bénin,\n\nJe souhaite commander immédiatement :\n- Réf : ${product.code}\n- Produit : ${product.name}\n- Quantité : ${quantity}\n- Montant total : ${total.toLocaleString('fr-FR')} FCFA\n\nMerci de me préciser la disponibilité au showroom d'Abomey-Calavi et les délais de livraison.`;
    window.open(`https://wa.me/${COMPANY_CONTACTS.commercialPhoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      
      {/* Modal Dialog */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/90 hover:bg-slate-100 text-slate-600 hover:text-slate-950 transition-colors border border-slate-200 shadow-xs cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image & Highlights */}
        <div className="md:w-1/2 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 mb-6 bg-white shadow-xs">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 backdrop-blur-md border border-slate-200 font-mono text-xs font-bold text-slate-800 shadow-xs">
              Réf : {product.code}
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Garantie constructeur INGCO {product.warrantyMonths ? `(${product.warrantyMonths} mois)` : 'certifiée'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>Pièces détachées d'origine disponibles au SAV Wissam Calavi</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Retrait immédiat en boutique ou livraison express Bénin</span>
            </div>
          </div>
        </div>

        {/* Right Side: Details & Contiguous Purchase Module */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between bg-white">
          <div>
            {/* Category / Power */}
            <div className="text-xs uppercase tracking-wider text-amber-600 font-bold mb-1">
              {product.power || product.voltage || 'Gamme Professionnelle'}
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display mb-3 leading-snug">
              {product.name}
            </h2>

            {/* Price block */}
            <div className="flex items-baseline gap-3 mb-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80">
              <span className="text-2xl font-black font-display text-amber-700 tabular-nums">
                {product.price.toLocaleString('fr-FR')} FCFA
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-slate-400 tabular-nums">
                  {product.originalPrice.toLocaleString('fr-FR')} FCFA
                </span>
              )}
              <span className="ml-auto text-xs font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                En stock
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Spécifications & Inclus
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contiguous Purchase Block */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            
            {/* Quantity selector */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Quantité souhaitée :</span>
              <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-sm font-bold font-mono text-slate-900 tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleAdd}
                className={`py-3 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                  justAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#FDB813] hover:bg-[#e5a50a] text-slate-950'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Ajouté au devis !</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Ajouter au devis</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Commander sur WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
