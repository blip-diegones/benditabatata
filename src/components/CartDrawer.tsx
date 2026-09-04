import React, { useState } from 'react';
import { BatataItem } from '../data/menu';
import { AddonOption } from '../data/addons';
import { NEIGHBORHOODS, NeighborhoodOption } from '../data/neighborhoods';
import { X, Plus, Minus, Trash2, ShoppingBag, Send, Gift, MapPin, Sparkles } from 'lucide-react';

export interface CartItem {
  id: string; // id único para diferenciar a mesma batata com adicionais diferentes
  item: BatataItem;
  quantity: number;
  addons: AddonOption[];
  removals: string[];
  notes: string;
  unitPrice: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<NeighborhoodOption>(NEIGHBORHOODS[1]); // Centro por padrão
  const [addressDetail, setAddressDetail] = useState('');
  const [reference, setReference] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'PIX' | 'Cartão' | 'Dinheiro'>('PIX');
  const [changeFor, setChangeFor] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');

  if (!isOpen) return null;

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const itemsSubtotal = cart.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0);
  const deliveryFee = selectedNeighborhood.fee;
  const orderTotal = itemsSubtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `*NOVO PEDIDO - BENDITA BATATA* 🥔🔥\n\n`;
    message += `*ITENS DO PEDIDO:*\n`;
    cart.forEach((c) => {
      message += `• *${c.quantity}x ${c.item.name}* (R$ ${(c.unitPrice * c.quantity).toFixed(2).replace('.', ',')})\n`;
      if (c.addons.length > 0) {
        message += `   ➕ Adicionais: ${c.addons.map(a => a.name).join(', ')}\n`;
      }
      if (c.removals.length > 0) {
        message += `   ⚡ Preferências: ${c.removals.join(', ')}\n`;
      }
      if (c.notes) {
        message += `   📝 Obs item: ${c.notes}\n`;
      }
    });

    message += `\n🎁 *BRINDE DE INAUGURAÇÃO:*\n`;
    message += `• ${totalItems}x Coca-Cola lata 200ml (GRÁTIS!)\n\n`;

    message += `*RESUMO DOS VALORES:*\n`;
    message += `• Subtotal itens: R$ ${itemsSubtotal.toFixed(2).replace('.', ',')}\n`;
    message += `• Entrega (${selectedNeighborhood.name}): R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    message += `• *TOTAL FINAL: R$ ${orderTotal.toFixed(2).replace('.', ',')}*\n\n`;

    message += `*DADOS DE ENTREGA (São Lourenço - MG):*\n`;
    message += `• *Nome:* ${customerName ? customerName : 'A informar'}\n`;
    message += `• *Bairro / Região:* ${selectedNeighborhood.name}\n`;
    if (selectedNeighborhood.category !== 'Retirada') {
      message += `• *Rua e Número:* ${addressDetail ? addressDetail : 'A combinar'}\n`;
      if (reference) {
        message += `• *Ponto de Referência:* ${reference}\n`;
      }
    } else {
      message += `• *Modo:* Retirada no balcão\n`;
    }
    
    message += `• *Forma de Pagamento:* ${paymentMethod}\n`;
    if (paymentMethod === 'Dinheiro' && changeFor) {
      message += `• *Troco para:* R$ ${changeFor}\n`;
    }
    if (generalNotes) {
      message += `• *Obs geral:* ${generalNotes}\n`;
    }

    message += `\n_Pedido gerado pelo site oficial da Bendita Batata!_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5535998282043?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header da Sacola */}
          <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50 shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-extrabold text-stone-900 font-display">Sua Sacola</h2>
              <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                {totalItems} {totalItems === 1 ? 'item' : 'itens'}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conteúdo com Scroll */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            
            {cart.length === 0 ? (
              <div className="py-16 text-center text-stone-500">
                <span className="text-5xl block mb-3">🥔</span>
                <p className="font-bold text-stone-800 text-base">Sua sacola ainda está vazia</p>
                <p className="text-sm text-stone-500 mt-1">Escolha uma de nossas deliciosas batatas recheadas para começar!</p>
              </div>
            ) : (
              <>
                {/* Banner Brinde */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-xs text-amber-950">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-red-700">Brinde ativado!</span>
                    <span>Você receberá <strong>{totalItems}x Coca-Cola lata 200ml</strong> de presente na sua entrega.</span>
                  </div>
                </div>

                {/* Lista de Itens */}
                <div className="divide-y divide-stone-100">
                  {cart.map((c) => (
                    <div key={c.id} className="py-3.5 flex gap-3 items-start">
                      <img 
                        src={c.item.image} 
                        alt={c.item.name} 
                        className="w-14 h-14 rounded-xl object-cover border border-stone-200 shrink-0 mt-0.5"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-stone-900 text-sm truncate">{c.item.name}</h4>
                        
                        {/* Detalhes de adicionais/preferências */}
                        {c.addons.length > 0 && (
                          <div className="text-[11px] text-amber-800 font-medium mt-0.5">
                            + {c.addons.map(a => a.name).join(', ')}
                          </div>
                        )}
                        {c.removals.length > 0 && (
                          <div className="text-[11px] text-stone-500 italic">
                            {c.removals.join(', ')}
                          </div>
                        )}

                        <div className="text-xs text-amber-600 font-semibold mt-1">
                          R$ {c.unitPrice.toFixed(2).replace('.', ',')} cada
                        </div>
                        
                        {/* Controles de Quantidade */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(c.id, -1)}
                            className="w-6 h-6 rounded-md bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 font-bold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-stone-800 w-5 text-center">{c.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(c.id, 1)}
                            className="w-6 h-6 rounded-md bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 font-bold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-stone-900 text-sm">
                          R$ {(c.unitPrice * c.quantity).toFixed(2).replace('.', ',')}
                        </div>
                        <button
                          onClick={() => onRemoveItem(c.id)}
                          className="text-stone-400 hover:text-red-500 p-1 mt-1 transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Formulário de Entrega & Bairro */}
                <div className="pt-4 border-t border-stone-200/80 space-y-3.5">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    Local de Entrega em São Lourenço - MG
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Seu Nome</label>
                    <input
                      type="text"
                      placeholder="Como podemos te chamar?"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Seletor de Bairros de São Lourenço com Taxa */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-semibold text-stone-700">Selecione seu Bairro</label>
                      <span className="text-[11px] text-amber-700 font-bold">
                        Taxa: R$ {deliveryFee.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <select
                      value={selectedNeighborhood.name}
                      onChange={(e) => {
                        const found = NEIGHBORHOODS.find(n => n.name === e.target.value);
                        if (found) setSelectedNeighborhood(found);
                      }}
                      className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800"
                    >
                      <option value="Retirar no Balcão (Grátis)">
                        Retirar no Balcão — Grátis
                      </option>
                      
                      <optgroup label="📍 Bairros de São Lourenço - MG">
                        {NEIGHBORHOODS.filter(n => n.category === 'São Lourenço (Urbano/Central)').map((n) => (
                          <option key={n.name} value={n.name}>
                            {n.name} — R$ {n.fee.toFixed(2).replace('.', ',')}
                          </option>
                        ))}
                      </optgroup>

                      <optgroup label="🚗 Cidades Vizinhas & Regiões Afastadas">
                        {NEIGHBORHOODS.filter(n => n.category === 'Regiões Afastadas / Cidades Vizinhas').map((n) => (
                          <option key={n.name} value={n.name}>
                            {n.name} — R$ {n.fee.toFixed(2).replace('.', ',')}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {selectedNeighborhood.category !== 'Retirada' && (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">Rua e Número</label>
                        <input
                          type="text"
                          placeholder="Ex: Rua Cel. José Justino, 120"
                          value={addressDetail}
                          onChange={(e) => setAddressDetail(e.target.value)}
                          className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">Ponto de Referência / Complemento</label>
                        <input
                          type="text"
                          placeholder="Ex: Apto 201 / Próximo à padaria"
                          value={reference}
                          onChange={(e) => setReference(e.target.value)}
                          className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </>
                  )}

                  {/* Forma de Pagamento */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Forma de Pagamento</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['PIX', 'Cartão', 'Dinheiro'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setPaymentMethod(method)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all ${
                            paymentMethod === method
                              ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                              : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {paymentMethod === 'Dinheiro' && (
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Precisa de troco para quanto?</label>
                      <input
                        type="text"
                        placeholder="Ex: R$ 50,00 ou Não preciso"
                        value={changeFor}
                        onChange={(e) => setChangeFor(e.target.value)}
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Observações gerais do pedido</label>
                    <input
                      type="text"
                      placeholder="Ex: Tocar o interfone ao chegar"
                      value={generalNotes}
                      onChange={(e) => setGeneralNotes(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                </div>
              </>
            )}

          </div>

          {/* Footer & Botão de Checkout WhatsApp */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-2.5 shrink-0">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-stone-600">Subtotal dos itens</span>
                <span className="font-semibold text-stone-900">
                  R$ {itemsSubtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-stone-600">Taxa de Entrega ({selectedNeighborhood.name})</span>
                <span className="font-semibold text-stone-900">
                  {deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-stone-600">Brinde de Inauguração</span>
                <span className="font-bold text-emerald-600">GRÁTIS ({totalItems}x Coca)</span>
              </div>
              <div className="flex justify-between items-center text-base pt-2 border-t border-stone-200">
                <span className="font-extrabold text-stone-900">Total a Pagar</span>
                <span className="text-xl font-extrabold text-amber-600">
                  R$ {orderTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                id="checkout-whatsapp-button"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Pedido pelo WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-stone-500 font-medium">
                Direto para a cozinha da Bendita Batata: <strong>(35) 99828-2043</strong>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
