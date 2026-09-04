import React, { useState } from 'react';
import { MENU_ITEMS, BatataItem } from '../data/menu';
import { Sparkles, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuSectionProps {
  onSelectItemToCustomize: (item: BatataItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItemToCustomize }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'highlights' | 'creamy'>('all');

  const filteredItems = MENU_ITEMS.filter(item => {
    if (activeFilter === 'highlights') return item.highlight;
    if (activeFilter === 'creamy') return item.name.toLowerCase().includes('frango') || item.name.toLowerCase().includes('queijo');
    return true;
  });

  return (
    <section id="cardapio" className="py-8 sm:py-14 md:py-16 max-w-5xl mx-auto px-3.5 sm:px-6">
      {/* Título da Seção */}
      <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Cardápio Oficial
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-display">
          Escolha a sua batata de hoje
        </h2>
        <p className="mt-1.5 text-stone-600 text-xs sm:text-sm">
          Todas acompanham <strong>1 Coca-Cola lata 200ml geladinha de brinde</strong>!
        </p>

        {/* Filtros em Abas Estilo Anota AI */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todas ({MENU_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveFilter('highlights')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'highlights'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            ⭐ Destaques
          </button>
          <button
            onClick={() => setActiveFilter('creamy')}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'creamy'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🧀 Cremosas
          </button>
        </div>
      </div>

      {/* Lista Estilo Anota AI / iFood (Mobile & Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {filteredItems.map((item) => {
          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectItemToCustomize(item)}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-stone-200/90 hover:border-amber-400 hover:shadow-md active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between gap-3 group"
            >
              {/* Informações à Esquerda */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-stone-900 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Ingredientes Diretos e Limpos */}
                <p className="text-xs text-stone-500 mt-1 leading-snug line-clamp-2">
                  {item.description}
                </p>

                {/* Preço e Tag de Brinde */}
                <div className="flex items-center gap-2 mt-2.5">
                  <span className="font-extrabold text-sm sm:text-base text-stone-900">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                    + Coca Grátis
                  </span>
                </div>
              </div>

              {/* Foto Quadrada Compacta à Direita */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 shrink-0 border border-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 rounded-lg bg-stone-900/80 text-white flex items-center justify-center backdrop-blur-sm group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
