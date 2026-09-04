import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenditaBento } from './components/BenditaBento';
import { MenuSection } from './components/MenuSection';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { BatataItem } from './data/menu';
import { ShoppingBag, ArrowUp } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: BatataItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.item.id === item.id);
      if (existing) {
        return prev.map(c => 
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(c => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart(prev => prev.filter(c => c.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-300 selection:text-amber-950">
      
      {/* Barra de Notificação Topo */}
      <div className="bg-amber-500 text-stone-950 text-xs font-bold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span>🎉 NOVIDADE EM SÃO LOURENÇO:</span>
        <span className="font-medium underline decoration-stone-900/30">
          Todas as batatas acompanham 1 Coca-Cola lata 200ml de brinde!
        </span>
      </div>

      {/* Header */}
      <Header 
        totalItems={totalItems} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Hero com Personalidade de Lançamento */}
      <main className="flex-1">
        <Hero onScrollToMenu={scrollToMenu} />

        {/* Bento Grid Gastronômico da Bendita Batata */}
        <BenditaBento />

        {/* Cardápio de Vendas com Fotos Reais e Ingredientes */}
        <MenuSection onAddToCart={handleAddToCart} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Carrinho Lateral / Modal de Checkout WhatsApp */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Botão Flutuante de Sacola no Mobile */}
      {totalItems > 0 && !isCartOpen && (
        <aside aria-label="Sacola Flutuante" className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-stone-900 text-white shadow-2xl hover:bg-amber-600 active:scale-95 transition-all animate-bounce"
          >
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold">Ver Sacola</span>
            <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 text-xs font-extrabold flex items-center justify-center">
              {totalItems}
            </span>
          </button>
        </aside>
      )}

    </div>
  );
}
