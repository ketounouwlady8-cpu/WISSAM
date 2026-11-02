import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, FileText, ShoppingBag, MapPin, Truck } from 'lucide-react';
import { CartItem, CustomerOrderInfo } from '../types';
import { COMPANY_CONTACTS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenProforma: (customerInfo: CustomerOrderInfo) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenProforma,
}) => {
  const [customer, setCustomer] = useState<CustomerOrderInfo>({
    fullName: '',
    phone: '',
    city: 'Abomey-Calavi',
    deliveryType: 'retrait',
    notes: '',
  });

  if (!isOpen) return null;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSendOrderWhatsApp = () => {
    if (cart.length === 0) return;

    let itemsText = cart
      .map(
        (item, index) =>
          `${index + 1}. [${item.product.code}] ${item.product.name}\n   Qté : ${item.quantity} x ${item.product.price.toLocaleString('fr-FR')} FCFA = ${(item.quantity * item.product.price).toLocaleString('fr-FR')} FCFA`
      )
      .join('\n\n');

    const deliveryLabel =
      customer.deliveryType === 'retrait'
        ? "Retrait direct au Showroom Société Wissam (Abomey-Calavi)"
        : `Livraison à domicile / chantier à : ${customer.city || 'Bénin'}`;

    const message = `*BON DE COMMANDE / DEVIS OFFICIEL INGCO BÉNIN*\n_Société Wissam - Distributeur Exclusif_\n----------------------------------------\n*CLIENT :* ${customer.fullName || 'Client Particulier / Entreprise'}\n*CONTACT :* ${customer.phone || 'Non renseigné'}\n*OPTION :* ${deliveryLabel}\n${customer.notes ? `*NOTES :* ${customer.notes}\n` : ''}----------------------------------------\n*ARTICLES COMMANDÉS :*\n\n${itemsText}\n\n----------------------------------------\n*TOTAL ESTIMÉ : ${totalAmount.toLocaleString('fr-FR')} FCFA*\n----------------------------------------\nMerci de me confirmer la préparation de cette commande et la disponibilité du stock.`;

    window.open(`https://wa.me/${COMPANY_CONTACTS.commercialPhoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-lg bg-white border-l border-slate-200 h-full flex flex-col justify-between shadow-2xl z-10 text-slate-900">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#FDB813] text-slate-950 shadow-xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-950 font-display">
                Votre Devis / Panier
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {totalCount} {totalCount <= 1 ? 'article sélectionné' : 'articles sélectionnés'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-700 font-bold mb-1">Votre panier est vide</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                Sélectionnez vos outillages électroportatifs, coffrets ou accessoires dans le catalogue.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 rounded-lg cursor-pointer border border-slate-200"
              >
                Parcourir les produits
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Articles</span>
                  <button
                    onClick={onClearCart}
                    className="text-rose-600 hover:text-rose-700 flex items-center gap-1 normal-case tracking-normal text-xs font-semibold cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Vider le panier</span>
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex gap-3 items-center"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover bg-white border border-slate-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono text-amber-600 font-bold">
                        {item.product.code}
                      </div>
                      <div className="text-xs font-bold text-slate-950 truncate">
                        {item.product.name}
                      </div>
                      <div className="text-xs font-semibold text-slate-700 tabular-nums">
                        {item.product.price.toLocaleString('fr-FR')} FCFA
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-slate-300 rounded-md overflow-hidden bg-white shadow-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-slate-600 hover:text-slate-950 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold text-slate-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-slate-600 hover:text-slate-950 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer & Order details form */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Coordonnées pour le Bon de Commande
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nom / Société</label>
                  <input
                    type="text"
                    value={customer.fullName}
                    onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                    placeholder="Ex: Entreprise SOTRACO ou M. Koffi"
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Téléphone / WhatsApp</label>
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    placeholder="+229 97 XX XX XX"
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>

                {/* Delivery mode */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1.5">Mode de récupération</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCustomer({ ...customer, deliveryType: 'retrait' })}
                      className={`p-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer shadow-xs ${
                        customer.deliveryType === 'retrait'
                          ? 'bg-[#FDB813] text-slate-950 border-[#FDB813]'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Retrait Calavi</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCustomer({ ...customer, deliveryType: 'livraison' })}
                      className={`p-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer shadow-xs ${
                        customer.deliveryType === 'livraison'
                          ? 'bg-[#FDB813] text-slate-950 border-[#FDB813]'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Livraison Bénin</span>
                    </button>
                  </div>
                </div>

                {customer.deliveryType === 'livraison' && (
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Ville & Quartier de livraison</label>
                    <input
                      type="text"
                      value={customer.city}
                      onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                      placeholder="Ex: Cotonou Cadjehoun, Abomey-Calavi Kpota, Porto-Novo..."
                      className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Calculations & CTA */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-600 font-semibold">Total Devis (FCFA) :</span>
                <div className="text-2xl font-black font-display text-amber-600 tabular-nums">
                  {totalAmount.toLocaleString('fr-FR')} FCFA
                </div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Prix TTC / Tarif distributeur</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              <button
                type="button"
                onClick={handleSendOrderWhatsApp}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Transmettre la commande sur WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenProforma(customer)}
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Générer Facture Proforma Imprimable (PDF)</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-500 text-center font-medium">
              Société Wissam · Commercial : +229 01 97 14 44 44 · SAV : +229 01 97 30 44 44
            </p>
          </div>
        )}

      </div>

    </div>
  );
};
