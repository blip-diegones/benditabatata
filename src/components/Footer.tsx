import React from 'react';
import { MapPin, Phone, Heart, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-14 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-800">
          
          {/* Coluna 1: Marca & Lançamento */}
          <div>
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.jpg" 
                alt="Logo Bendita Batata" 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/60"
              />
              <div>
                <h3 className="text-xl font-extrabold text-white font-display">Bendita Batata</h3>
                <p className="text-xs text-amber-400 font-semibold">Onde o recheio é o protagonista</p>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-stone-400 leading-relaxed">
              Batatas recheadas artesanais com o verdadeiro queijo gratinado, farto recheio e entrega quentinha em São Lourenço - MG.
            </p>
          </div>

          {/* Coluna 2: Contato & Delivery */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Faça seu Pedido
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/5535998282043" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  WhatsApp: (35) 99828-2043
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-pink-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a 
                  href="https://instagram.com/benditabatatafood" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  @benditabatatafood
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Delivery em São Lourenço - MG</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Horários & Promoção */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Promoção de Inauguração
            </h4>
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs leading-relaxed text-stone-300 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>Forno aberto a partir das 18h</span>
              </div>
              <p>
                🎁 <strong>1 Coca-Cola 200ml GRÁTIS</strong> acompanhando cada batata que você pedir!
              </p>
              <p className="text-[11px] text-stone-400">
                Promoção especial para os primeiros pedidos na cidade.
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Bendita Batata. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>em São Lourenço - MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
