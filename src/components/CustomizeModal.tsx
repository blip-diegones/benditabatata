import React, { useState } from 'react';
import { BatataItem } from '../data/menu';
import { ADDON_OPTIONS, AddonOption } from '../data/addons';
import { X, Plus, Minus, Gift, Sparkles, Check } from 'lucide-react';

export interface SelectedCustomization {
  addons: AddonOption[];
  removals: string[];
  notes: string;
  quantity: number;
  totalPrice: number;
}

interface CustomizeModalProps {
  item: BatataItem | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (item: BatataItem, custom: SelectedCustomization) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  item,
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen || !item) return null;

  const [selectedAddons, setSelectedAddons] = useState<AddonOption[]>([]);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const toggleAddon = (addon: AddonOption) => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
  const unitPrice = item.price + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    onConfirm(item, {
      addons: selectedAddons,
      removals: [],
      notes,
      quantity,
      totalPrice
    });
    // Reset
    setSelectedAddons([]);
    setNotes('');
    setQuantity(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200/80 my-4 flex flex-col max-h-[92vh]">
        
        {/* Cabeçalho com Foto Otimizada para Mobile */}
        <div className="relative h-40 sm:h-52 bg-stone-100 shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-950/60 text-white hover:bg-stone-950 flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold shadow-sm flex items-center gap-1.5">
            <Gift className="w-3 h-3" />
            <span>+ Coca 200ml Grátis!</span>
          </div>
        </div>

        {/* Corpo com Scroll */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-2xl font-extrabold text-stone-900 font-display">
                {item.name}
              </h3>
              <span className="text-xl font-extrabold text-amber-600">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="mt-1.5 text-stone-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Seção 1: Turbinar com Adicionais */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Turbine sua batata (Opcional)
              </span>
              <span className="text-[11px] text-stone-400 font-medium">Escolha quantos quiser</span>
            </div>

            <div className="space-y-2">
              {ADDON_OPTIONS.map((addon) => {
                const isSelected = selectedAddons.some(a => a.id === addon.id);
                return (
                  <button
                    type="button"
                    key={addon.id}
                    onClick={() => toggleAddon(addon)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/70 text-amber-950 font-semibold'
                        : 'border-stone-200 bg-stone-50/50 hover:bg-stone-100/70 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                        isSelected ? 'bg-amber-500 border-amber-500 text-stone-950' : 'border-stone-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span className="text-amber-700 font-bold">
                      + R$ {addon.price.toFixed(2).replace('.', ',')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Observação / Preferência Digitada */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              Alguma preferência ou observação? (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ex: Sem batata palha / queijo bem tostadinho"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Rodapé Fixo do Modal com Preço e Ação */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3 shrink-0">
          {/* Seletor de Quantidade */}
          <div className="flex items-center gap-2 bg-white border border-stone-200 p-1.5 rounded-xl">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 font-bold transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-7 text-center font-bold text-stone-900 text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 font-bold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Botão de Confirmação */}
          <button
            onClick={handleConfirm}
            className="flex-1 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold text-sm sm:text-base flex items-center justify-between shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all"
          >
            <span>Adicionar à Sacola</span>
            <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
