import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, HeartHandshake, CheckCircle2, Utensils } from 'lucide-react';

export const BenditaBento: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-stone-900 text-white relative overflow-hidden rounded-2xl sm:rounded-3xl my-4 sm:my-8 mx-3 sm:mx-6 lg:mx-8">
      {/* Luz ambiente sutil */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            Por que a Bendita Batata é diferente?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white">
            Esqueça tudo o que você achava sobre batata recheada.
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-stone-300 max-w-2xl leading-relaxed">
            Nascemos com um propósito simples: recheio farto de verdade, queijo de primeira e respeito pelo seu paladar.
          </p>
        </div>

        {/* Bento Grid Otimizado para Mobile */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-5">
          
          {/* Card 1: Protagonismo do recheio */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-3 rounded-2xl p-4 sm:p-6 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative overflow-hidden group shadow-md"
          >
            <div className="relative z-10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                Fartura Sem Economia
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-1.5 text-white">
                Onde o recheio é o protagonista
              </h3>
              <p className="mt-1.5 text-stone-300 text-xs sm:text-sm leading-relaxed">
                Você não vai ficar caçando o recheio no meio do purê. Doses generosas de frango suculento, carne artesanal, calabresa e Catupiry legítimo.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 rounded-full border border-stone-800 bg-amber-500 flex items-center justify-center font-bold text-[10px] text-stone-950">100%</div>
                <div className="w-7 h-7 rounded-full border border-stone-800 bg-amber-400 flex items-center justify-center font-bold text-[10px] text-stone-950">🧀</div>
              </div>
              <div className="text-[11px] sm:text-xs text-stone-300 font-medium">
                Padrão em todos os sabores.
              </div>
            </div>
          </motion.div>

          {/* Card 2: Queijo gratinado */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-3 rounded-2xl p-4 sm:p-6 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative overflow-hidden group shadow-md"
          >
            <div className="relative z-10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-red-400" />
                Gratinado Perfeito
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-1.5 text-white">
                Crostinha crocante que estala no forno
              </h3>
              <p className="mt-1.5 text-stone-300 text-xs sm:text-sm leading-relaxed">
                Forno em alta temperatura para criar aquela camada dourada de muçarela que puxa fios a cada colherada.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] sm:text-xs text-amber-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Queijo de verdade selecionado</span>
            </div>
          </motion.div>

          {/* Card 3: Coca-Cola de brinde */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-amber-500/20 to-stone-800/80 border border-amber-500/30 flex flex-col justify-between relative shadow-md"
          >
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                Lançamento
              </span>
              <h3 className="text-base sm:text-lg font-bold mt-1 text-white">
                Coca 200ml de Brinde 🎁
              </h3>
              <p className="mt-1 text-stone-300 text-xs leading-relaxed">
                Toda batata acompanha 1 latinha geladinha por nossa conta.
              </p>
            </div>
            <div className="mt-3 inline-block px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-bold w-fit">
              100% Grátis
            </div>
          </motion.div>

          {/* Card 4: Entrega quentinha */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl p-4 sm:p-5 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative shadow-md"
          >
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                Delivery Quentinho
              </span>
              <h3 className="text-base sm:text-lg font-bold mt-1 text-white">
                Chega fumegando
              </h3>
              <p className="mt-1 text-stone-300 text-xs leading-relaxed">
                Embalagem térmica que preserva o queijo derretido e a crocância até a sua mesa.
              </p>
            </div>
            <div className="mt-3 text-[11px] text-stone-400 font-medium">
              📍 Em toda São Lourenço - MG
            </div>
          </motion.div>

          {/* Card 5: Artesanal e local */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl p-4 sm:p-5 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative shadow-md"
          >
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                Artesanal
              </span>
              <h3 className="text-base sm:text-lg font-bold mt-1 text-white">
                Feita com amor
              </h3>
              <p className="mt-1 text-stone-300 text-xs leading-relaxed">
                Somos novos por aqui e colocamos carinho em cada detalhe para você virar fã.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-amber-400 font-bold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Cuidado artesanal</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
