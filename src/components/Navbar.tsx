import React, { useState } from 'react';
import { ShoppingBag, PhoneCall, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenProforma: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark with logo */}
          <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-[#FDB813] flex items-center justify-center font-black text-slate-950 text-xl tracking-tighter shadow-sm transition-transform group-hover:scale-105 border border-amber-400">
              W
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-slate-950 uppercase font-display leading-tight">
                Société Wissam
              </span>
              <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
                INGCO Bénin Officiel
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#catalogue" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
              Catalogue Outillage
            </a>
            <a href="#plateforme-20v" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
              Plateforme 20V
            </a>
            <a href="#sav-pieces" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
              SAV & Pièces
            </a>
            <a href="#showroom" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
              Showroom & Accès
            </a>
          </nav>

          {/* Zone 3: 1 primary action + cart indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              aria-label="Voir le panier et devis"
              className="relative p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <span className="hidden sm:inline">Panier / Devis</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#FDB813] text-slate-950 text-xs font-bold flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href={`https://wa.me/${COMPANY_CONTACTS.commercialPhoneRaw}?text=${encodeURIComponent("Bonjour Société Wissam INGCO Bénin, je souhaite des renseignements sur vos outillages et tarifs.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-[#FDB813] hover:bg-[#e5a50a] active:scale-95 rounded-lg transition-all shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+229 01 97 14 44 44</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#catalogue"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 rounded-lg"
          >
            Catalogue Outillage
          </a>
          <a
            href="#plateforme-20v"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 rounded-lg"
          >
            Plateforme 20V (+580 Outils)
          </a>
          <a
            href="#sav-pieces"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 rounded-lg"
          >
            Service Après-Vente & Pièces d'Origine
          </a>
          <a
            href="#showroom"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-slate-50 rounded-lg"
          >
            Showroom Abomey-Calavi & Contact
          </a>
          <div className="pt-2 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Distributeur Exclusif Certifié INGCO Bénin</span>
          </div>
        </div>
      )}
    </header>
  );
};
