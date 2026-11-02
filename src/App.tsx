/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Platform20V } from './components/Platform20V';
import { ProductCatalog } from './components/ProductCatalog';
import { ToolkitsShowcase } from './components/ToolkitsShowcase';
import { SavAndWarranty } from './components/SavAndWarranty';
import { StoreLocator } from './components/StoreLocator';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { ProformaModal } from './components/ProformaModal';
import { Product, CartItem, ProductCategory, CustomerOrderInfo } from './types';
import { PRODUCTS_DATA } from './data/products';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('wissam_ingco_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProformaOpen, setIsProformaOpen] = useState(false);
  const [proformaCustomer, setProformaCustomer] = useState<CustomerOrderInfo>({
    fullName: '',
    phone: '',
    city: 'Abomey-Calavi',
    deliveryType: 'retrait',
  });

  useEffect(() => {
    try {
      localStorage.setItem('wissam_ingco_cart', JSON.stringify(cart));
    } catch {
      // storage quota or incognito fallback
    }
  }, [cart]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSelectProductById = (productId: string) => {
    const prod = PRODUCTS_DATA.find((p) => p.id === productId);
    if (prod) {
      setSelectedProduct(prod);
    }
  };

  const handleOpenProformaFromCart = (customerInfo: CustomerOrderInfo) => {
    setProformaCustomer(customerInfo);
    setIsCartOpen(false);
    setIsProformaOpen(true);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogue');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSav = () => {
    const el = document.getElementById('sav-pieces');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FDB813] selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProforma={() => setIsProformaOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onExploreCatalog={scrollToCatalog}
          onOpenSav={scrollToSav}
        />

        {/* 20V P20S Platform Section (+580 tools) */}
        <Platform20V
          onFilter20V={() => {
            setActiveCategory('sans-fil-20v');
            scrollToCatalog();
          }}
          onSelectProduct={handleSelectProductById}
        />

        {/* Main Product Catalog */}
        <ProductCatalog
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectProduct={setSelectedProduct}
          onAddToCart={(p) => handleAddToCart(p, 1)}
        />

        {/* Flagship Mechanic & Electrician Toolkits */}
        <ToolkitsShowcase
          onSelectProduct={setSelectedProduct}
          onAddToCart={(p) => handleAddToCart(p, 1)}
        />

        {/* Workshop SAV & Spare Parts Guarantee */}
        <SavAndWarranty />

        {/* Store Locator & Showrooms */}
        <StoreLocator />

        {/* Social Proof & Customer Reviews */}
        <Testimonials />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide-overs */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenProforma={handleOpenProformaFromCart}
      />

      <ProformaModal
        isOpen={isProformaOpen}
        onClose={() => setIsProformaOpen(false)}
        cart={cart}
        customerInfo={proformaCustomer}
      />

    </div>
  );
}
