import React from 'react';
import { ShoppingBag, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  totalItems: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ totalItems, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo & Cidade */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/images/logo.jpg" 
            alt="Bendita Batata Logo" 
            className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-amber-400/50 group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-stone-900 font-display">
                Bendita Batata
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                NOVA
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-stone-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>São Lourenço - MG</span>
            </div>
          </div>
        </a>

        {/* Status & CTA Carrinho */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Forno quente & Delivery ativo
          </div>

          <button
            onClick={onOpenCart}
            id="cart-button"
            className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-stone-900 text-white hover:bg-amber-600 active:scale-95 transition-all shadow-sm group"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-semibold hidden xs:inline">Minha Sacola</span>
            {totalItems > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold bg-amber-500 text-stone-950 rounded-full animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
