import React, { useState } from 'react';
import { MENU_ITEMS, BatataItem } from '../data/menu';
import { Plus, Sparkles, Gift } from 'lucide-react';
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
    <section id="cardapio" className="py-10 sm:py-16 md:py-20 max-w-6xl mx-auto px-3.5 sm:px-6">
      {/* Título da Seção */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Cardápio Oficial
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
          Escolha a sua batata de hoje
        </h2>
        <p className="mt-2 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
          Feitas com batata selecionada, recheio farto e gratinadas no forno. 
          Todas acompanham <strong>1 Coca-Cola lata 200ml geladinha de brinde</strong>!
        </p>

        {/* Filtros Compactos */}
        <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todos ({MENU_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveFilter('highlights')}
            className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'highlights'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            ⭐ Mais Pedidos
          </button>
          <button
            onClick={() => setActiveFilter('creamy')}
            className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'creamy'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🧀 Cremosos
          </button>
        </div>
      </div>

      {/* Grid de Produtos Otimizado para Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => {
          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectItemToCustomize(item)}
            >
              {/* Imagem do Produto Compacta */}
              <div className="relative h-44 sm:h-52 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Tag de destaque */}
                {item.tag && (
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-stone-950/85 backdrop-blur-sm text-amber-300 text-[11px] font-bold shadow-sm">
                    {item.tag}
                  </div>
                )}

                {/* Tag do Brinde */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/95 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-bold shadow-sm">
                  <Gift className="w-3 h-3" />
                  <span>+ Coca 200ml Grátis</span>
                </div>
              </div>

              {/* Informações Compactas */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-base sm:text-lg font-extrabold text-amber-600 shrink-0">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <p className="mt-1.5 text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Ingredientes como tags compactas */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {item.ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ação Apenas com o Botão 'Pedir' */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItemToCustomize(item);
                    }}
                    id={`add-to-cart-${item.id}`}
                    className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-white active:scale-95 transition-all shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Pedir</span>
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
