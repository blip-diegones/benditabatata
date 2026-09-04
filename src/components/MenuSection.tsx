import React, { useState } from 'react';
import { MENU_ITEMS, BatataItem } from '../data/menu';
import { Plus, Check, Sparkles, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuSectionProps {
  onAddToCart: (item: BatataItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'highlights' | 'creamy'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const filteredItems = MENU_ITEMS.filter(item => {
    if (activeFilter === 'highlights') return item.highlight;
    if (activeFilter === 'creamy') return item.name.toLowerCase().includes('frango') || item.name.toLowerCase().includes('queijo');
    return true;
  });

  const handleAdd = (item: BatataItem) => {
    onAddToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="cardapio" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Título da Seção */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Cardápio Oficial
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
          Escolha a sua batata de hoje
        </h2>
        <p className="mt-3 text-stone-600 text-base leading-relaxed">
          Feitas com batata selecionada, recheio farto e gratinadas na cerâmica. 
          Todas acompanham <strong>1 Coca-Cola lata 200ml geladinha de brinde</strong>!
        </p>

        {/* Filtros */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todos os Sabores ({MENU_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveFilter('highlights')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'highlights'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            ⭐ Mais Pedidos
          </button>
          <button
            onClick={() => setActiveFilter('creamy')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === 'creamy'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🧀 Clássicos & Cremosos
          </button>
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => {
          const isAdded = addedItemIds[item.id];

          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Imagem do Produto */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Tag de destaque */}
                {item.tag && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-stone-950/85 backdrop-blur-sm text-amber-300 text-xs font-bold shadow-sm">
                    {item.tag}
                  </div>
                )}

                {/* Tag do Brinde */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/90 backdrop-blur-sm text-white text-[11px] font-bold shadow-sm">
                  <Gift className="w-3 h-3" />
                  <span>+ Coca 200ml Grátis</span>
                </div>
              </div>

              {/* Informações */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-extrabold text-amber-600 shrink-0">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <p className="mt-2 text-stone-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Ingredientes como tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ação de Adicionar */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-xs text-stone-500 font-medium">
                    Serve 1 pessoa super bem
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    id={`add-to-cart-${item.id}`}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isAdded
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                        : 'bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-white active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Adicionar</span>
                      </>
                    )}
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
