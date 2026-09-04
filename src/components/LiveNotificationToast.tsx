import React, { useState, useEffect } from 'react';
import { Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NOTIFICATIONS = [
  { name: "Mariana", neighborhood: "Centro", item: "1x Frango Cremoso", time: "há 3 minutos" },
  { name: "Lucas", neighborhood: "Federal", item: "1x Strogonoff de Frango", time: "há 7 minutos" },
  { name: "Camila", neighborhood: "São Lourenço Velho", item: "1x 4 Queijos com muçarela dourada", time: "há 11 minutos" },
  { name: "Rafael", neighborhood: "Carioca", item: "2x À Moda da Casa", time: "há 4 minutos" },
  { name: "Beatriz", neighborhood: "Vila Nova", item: "1x Bacon com Brócolis", time: "há 9 minutos" },
];

export const LiveNotificationToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Primeira aparição após 4 segundos
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 1500);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const current = NOTIFICATIONS[index];

  return (
    <aside aria-label="Notificações Recentes" className="fixed bottom-6 left-6 z-40 max-w-sm pointer-events-none hidden sm:block">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-xl shadow-stone-950/10 flex items-center gap-3 text-xs pointer-events-auto"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 shrink-0">
              <Flame className="w-5 h-5 text-amber-600 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-stone-900">
                <span>{current.name}</span>
                <span className="text-stone-400 font-normal">• {current.neighborhood}</span>
              </div>
              <div className="text-stone-600 mt-0.5">
                Pediu <strong className="text-stone-800">{current.item}</strong>
              </div>
              <div className="text-[10px] text-amber-600 font-semibold mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>{current.time}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
