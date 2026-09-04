import React from 'react';
import { ArrowDown, Flame, Sparkles, Gift, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onScrollToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMenu }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Luzes de fundo suaves */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-200/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Texto de Vendas & Personalidade */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Tag de Descoberta Local */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>Descoberta gastronômica fresquinha em São Lourenço</span>
            </motion.div>

            {/* Manchete Principal */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] font-display"
            >
              A Bendita Batata chegou. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                E ela veio bem recheada.
              </span>
            </motion.h1>

            {/* Descrição Apetitosa sem Clichês */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg sm:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Aqui não tem batata com 90% de purê e uma colherinha tímida de recheio. 
              Na <strong>Bendita Batata</strong> o recheio é o verdadeiro protagonista: 
              muito queijo gratinado dourado, textura cremosa e fartura do primeiro ao último pedaço.
            </motion.p>

            {/* Destaque do Brinde Inauguração */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-3 p-3 sm:px-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 text-sm font-medium shadow-sm"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                <Gift className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-amber-900 block">Presente de Inauguração:</span>
                <span className="text-amber-800 text-xs sm:text-sm">Todas as batatas acompanham 1 Coca-Cola lata 200ml de brinde!</span>
              </div>
            </motion.div>

            {/* CTAs Diretos de Conversão */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 justify-center lg:justify-start"
            >
              <button
                onClick={onScrollToMenu}
                id="hero-order-button"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-stone-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all"
              >
                <span>Escolher meu sabor agora</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <a
                href="https://wa.me/5535998282043?text=Ol%C3%A1!%20Vi%20a%20Bendita%20Batata%20e%20quero%20fazer%20um%20pedido!"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300/80 text-stone-800 font-semibold text-base transition-all"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </motion.div>

            {/* Mini selos rápidos */}
            <div className="mt-8 pt-6 border-t border-stone-200/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Feita na hora</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Gratinada no forno</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>100% Catupiry</span>
              </div>
            </div>

          </div>

          {/* Imagem Destaque (Foto real da batata quentinha e gratinada) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group">
              <img 
                src="/images/frango-cremoso.jpg" 
                alt="Batata Recheada Bendita Batata"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Badge flutuante na foto */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-stone-950/85 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold tracking-wide uppercase">
                    <Flame className="w-3.5 h-3.5" />
                    Batata Frango Cremoso
                  </div>
                  <div className="text-sm text-stone-200 font-medium mt-0.5">
                    Catupiry + Frango + Muçarela Gratinada + Palha
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-stone-400">Apenas</div>
                  <div className="text-lg font-extrabold text-amber-400">R$ 29,90</div>
                </div>
              </div>
            </div>

            {/* Elemento Decorativo Flutuante */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-2 animate-bounce duration-1000">
              <span className="text-2xl">🥔✨</span>
              <div className="text-left">
                <div className="text-xs font-bold text-stone-900 leading-none">Feita na Cerâmica</div>
                <div className="text-[10px] text-amber-600 font-semibold">Crocante & Macia</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
