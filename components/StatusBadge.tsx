
import React from 'react';

export const StatusBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 mb-10 shadow-lg">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
        Verificación Casi completa
      </span>
    </div>
  );
};
