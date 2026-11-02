import React from 'react';
import { X, Printer, Download, CheckCircle2 } from 'lucide-react';
import { CartItem, CustomerOrderInfo } from '../types';
import { COMPANY_CONTACTS } from '../data/products';

interface ProformaModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  customerInfo: CustomerOrderInfo;
}

export const ProformaModal: React.FC<ProformaModalProps> = ({
  isOpen,
  onClose,
  cart,
  customerInfo,
}) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const proformaDate = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const proformaNumber = `PRO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white">
      
      {/* Container */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative w-full max-w-3xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none print:w-full print:max-w-none"
      >
        
        {/* Screen Controls Header (hidden in print) */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-white text-sm font-semibold">
            <span>Aperçu Facture Proforma Officielle</span>
            <span className="text-[#FDB813] font-mono">({proformaNumber})</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#FDB813] text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 hover:bg-[#e5a50a] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / Sauvegarder PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Sheet */}
        <div className="p-8 sm:p-12 space-y-8 bg-white font-sans text-slate-800 print:p-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-slate-200 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-black text-slate-950 tracking-tight font-display">
                  SOCIÉTÉ WISSAM
                </span>
                <span className="px-2 py-0.5 bg-amber-400 text-slate-950 font-black text-xs rounded">
                  INGCO BÉNIN
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-600">
                Distributeur Exclusif Outillage Professionnel INGCO au Bénin
              </p>
              <div className="text-[11px] text-slate-500 mt-2 space-y-0.5">
                <p>📍 Siège : Abomey-Calavi, à côté de NSIA Banque, face Polyclinique Coopérative</p>
                <p>📞 Commercial : +229 01 97 14 44 44 | SAV : +229 01 97 30 44 44</p>
                <p>✉️ Email : {COMPANY_CONTACTS.email}</p>
              </div>
            </div>

            <div className="sm:text-right border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block">
                FACTURE PROFORMA
              </span>
              <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">
                {proformaNumber}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Date : {proformaDate}
              </div>
              <div className="text-xs text-emerald-700 font-medium mt-1">
                Validité : 15 jours ouvrés
              </div>
            </div>
          </div>

          {/* Client & Delivery Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                Destinataire / Client
              </span>
              <div className="text-sm font-bold text-slate-900">
                {customerInfo.fullName || 'Client Professionnel / Particulier'}
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Contact : {customerInfo.phone || 'Non précisé'}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                Modalité d'acheminement
              </span>
              <div className="text-sm font-semibold text-slate-800">
                {customerInfo.deliveryType === 'retrait'
                  ? 'Retrait direct Showroom Abomey-Calavi'
                  : `Livraison à : ${customerInfo.city || 'Bénin'}`}
              </div>
              {customerInfo.notes && (
                <div className="text-xs text-slate-500 mt-0.5 italic">
                  Note : {customerInfo.notes}
                </div>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 text-slate-900">
                  <th className="py-2.5 font-bold uppercase tracking-wider">Réf.</th>
                  <th className="py-2.5 font-bold uppercase tracking-wider">Désignation Matériel</th>
                  <th className="py-2.5 font-bold uppercase tracking-wider text-center">Qté</th>
                  <th className="py-2.5 font-bold uppercase tracking-wider text-right">P.U. (FCFA)</th>
                  <th className="py-2.5 font-bold uppercase tracking-wider text-right">Total (FCFA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cart.map((item) => (
                  <tr key={item.product.id}>
                    <td className="py-3 font-mono font-bold text-slate-700">{item.product.code}</td>
                    <td className="py-3 font-semibold text-slate-900">
                      <div>{item.product.name}</div>
                      <div className="text-[10px] text-slate-500 font-normal">Garantie fabricant d'origine incluse</div>
                    </td>
                    <td className="py-3 font-mono text-center font-bold">{item.quantity}</td>
                    <td className="py-3 font-mono text-right tabular-nums">
                      {item.product.price.toLocaleString('fr-FR')}
                    </td>
                    <td className="py-3 font-mono font-bold text-right tabular-nums text-slate-950">
                      {(item.product.price * item.quantity).toLocaleString('fr-FR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total & Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-start pt-4 border-t-2 border-slate-900 gap-4">
            <div className="text-xs text-slate-500 space-y-1">
              <p>• Matériel neuf garanti sous scellé constructeur INGCO.</p>
              <p>• Service après-vente et pièces détachées disponibles à la direction de Calavi.</p>
              <p>• Modalités de règlement : Espèces, Mobile Money (Moov/MTN) ou Virement bancaire.</p>
            </div>

            <div className="w-full sm:w-64 bg-amber-50 p-4 rounded-xl border border-amber-200 text-right">
              <span className="text-xs uppercase font-bold text-slate-600 block">
                Total Net à Payer :
              </span>
              <div className="text-2xl font-black font-mono text-slate-950 mt-1 tabular-nums">
                {totalAmount.toLocaleString('fr-FR')} FCFA
              </div>
            </div>
          </div>

          {/* Stamp / Signature Area */}
          <div className="pt-10 flex justify-between items-end text-xs text-slate-600">
            <div>
              <div className="font-bold text-slate-900 mb-8">Pour le Client (Bon pour accord) :</div>
              <div className="border-b border-dashed border-slate-300 w-48"></div>
            </div>

            <div className="text-right">
              <div className="font-bold text-slate-900 mb-1">Pour la Société Wissam :</div>
              <div className="text-[11px] text-slate-500 italic mb-6">Direction Commerciale & Logistique</div>
              <div className="border-b border-dashed border-slate-300 w-48 ml-auto"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
