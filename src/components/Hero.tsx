import React from 'react';
import { ArrowDown, Flame, Sparkles, Gift, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onScrollToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMenu }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 md:pt-14 md:pb-20">
      {/* Luzes de fundo suaves */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[350px] bg-amber-200/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Texto de Vendas & Personalidade */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Tag de Descoberta Local */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold mb-4 sm:mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Descoberta artesanal em São Lourenço</span>
            </motion.div>

            {/* Manchete Principal Otimizada para Mobile */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15] font-display"
            >
              A Bendita Batata chegou. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                E ela veio bem recheada.
              </span>
            </motion.h1>

            {/* Descrição Apetitosa */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Aqui não tem batata com 90% de purê e colherinha tímida. 
              Na <strong>Bendita Batata</strong> o recheio é o verdadeiro protagonista: 
              muito queijo gratinado dourado, textura cremosa e fartura do início ao fim.
            </motion.p>

            {/* Destaque do Brinde Inauguração */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 sm:mt-6 inline-flex items-center gap-2.5 p-2.5 sm:p-3 sm:px-4 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs sm:text-sm font-medium shadow-sm text-left"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <span className="font-bold text-amber-900 block text-xs sm:text-sm">Presente de Inauguração:</span>
                <span className="text-amber-800 text-[11px] sm:text-xs">Toda batata acompanha 1 Coca-Cola lata 200ml grátis!</span>
              </div>
            </motion.div>

            {/* CTAs Diretos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 justify-center lg:justify-start"
            >
              <button
                onClick={onScrollToMenu}
                id="hero-order-button"
                className="flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-stone-950 font-bold text-sm sm:text-base shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Ver o Cardápio</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <a
                href="https://wa.me/5535998282043?text=Ol%C3%A1!%20Vi%20a%20Bendita%20Batata%20e%20quero%20fazer%20um%20pedido!"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 font-semibold text-sm sm:text-base transition-all"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </motion.div>

            {/* Mini selos rápidos */}
            <div className="mt-6 pt-4 sm:pt-6 border-t border-stone-200/60 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Feita na hora</span>
              </div>
              <div className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span>Gratinada no forno</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>100% Catupiry</span>
              </div>
            </div>

          </div>

          {/* Imagem Destaque Otimizada */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-stone-100 group">
              <img 
                src="/images/frango-cremoso.jpg" 
                alt="Batata Recheada Bendita Batata"
                className="w-full h-[260px] sm:h-[360px] lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Badge flutuante na foto mais compacto */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-stone-950/85 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-amber-400 font-bold tracking-wide uppercase">
                    <Flame className="w-3 h-3" />
                    Frango Cremoso
                  </div>
                  <div className="text-xs sm:text-sm text-stone-200 font-medium mt-0.5">
                    Catupiry + Frango + Muçarela + Palha
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] sm:text-xs text-stone-400">Apenas</div>
                  <div className="text-base sm:text-lg font-extrabold text-amber-400">R$ 29,90</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
