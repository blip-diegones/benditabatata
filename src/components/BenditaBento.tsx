import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, HeartHandshake, CheckCircle2, ShieldCheck, Utensils } from 'lucide-react';

export const BenditaBento: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden rounded-3xl my-8 mx-4 sm:mx-6 lg:mx-8">
      {/* Luz ambiente sutil */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Por que a Bendita Batata é diferente?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
            Esqueça tudo o que você achava que sabia sobre batata recheada.
          </h2>
          <p className="mt-3 text-lg text-stone-300 max-w-2xl leading-relaxed">
            A gente nasceu com um propósito simples: recheio farto de verdade, queijo de primeira qualidade e respeito pelo seu paladar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          
          {/* Card 1: Protagonismo do recheio (Grande, 3 colunas) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-3 rounded-2xl p-7 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative overflow-hidden group shadow-lg"
          >
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                Fartura Sem Economia
              </span>
              <h3 className="text-2xl font-bold mt-2 text-white">
                Onde o recheio é o protagonista
              </h3>
              <p className="mt-2 text-stone-300 text-sm leading-relaxed">
                Você não vai ficar "caçando" o recheio no meio do purê. Cada camada recebe doses generosas de frango suculento, carne artesanal, calabresa fatiada e Catupiry legítimo.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-stone-800 bg-amber-500 flex items-center justify-center font-bold text-xs text-stone-950">100%</div>
                <div className="w-9 h-9 rounded-full border-2 border-stone-800 bg-amber-400 flex items-center justify-center font-bold text-xs text-stone-950">🧀</div>
              </div>
              <div className="text-xs text-stone-300 font-medium">
                Padrão inegociável em todos os sabores.
              </div>
            </div>
          </motion.div>

          {/* Card 2: Queijo gratinado de verdade (3 colunas) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-3 rounded-2xl p-7 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative overflow-hidden group shadow-lg"
          >
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-red-400" />
                Gratinado Perfeito
              </span>
              <h3 className="text-2xl font-bold mt-2 text-white">
                Crostinha crocante que estala no forno
              </h3>
              <p className="mt-2 text-stone-300 text-sm leading-relaxed">
                Nossas batatas vão ao forno de alta temperatura para formar aquela camada douradinha de muçarela e parmesão que puxa fios intermináveis a cada colherada.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Queijo de verdade selecionado sem misturas</span>
            </div>
          </motion.div>

          {/* Card 3: Coca-Cola de brinde (2 colunas) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl p-6 bg-gradient-to-b from-amber-500/20 to-stone-800/80 border border-amber-500/30 flex flex-col justify-between relative shadow-lg"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Lançamento
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                Coca-Cola 200ml de Brinde 🎁
              </h3>
              <p className="mt-2 text-stone-300 text-xs leading-relaxed">
                Toda batata que sai da nossa cozinha acompanha uma latinha trincando de gelada por nossa conta.
              </p>
            </div>
            <div className="mt-4 inline-block px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">
              100% Grátis em cada batata
            </div>
          </motion.div>

          {/* Card 4: Entrega quentinha em São Lourenço (2 colunas) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl p-6 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative shadow-lg"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Delivery Rápido
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                Chega fumegando na mesa
              </h3>
              <p className="mt-2 text-stone-300 text-xs leading-relaxed">
                Embalagem térmica que preserva a temperatura e a crocância da batata palha até você abrir.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-stone-400 font-medium">
              <span>📍 Toda a cidade de São Lourenço - MG</span>
            </div>
          </motion.div>

          {/* Card 5: Marca fresca e acolhedora (2 colunas) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl p-6 bg-stone-800/80 border border-white/10 flex flex-col justify-between relative shadow-lg"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Artesanal & Local
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                Feita com amor de verdade
              </h3>
              <p className="mt-2 text-stone-300 text-xs leading-relaxed">
                Somos novos por aqui e colocamos nossa dedicação em cada detalhe para você virar fã de primeira.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-400 font-bold">
              <HeartHandshake className="w-4 h-4" />
              <span>O carinho de quem ama o que faz</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
