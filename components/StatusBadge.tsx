
import React from 'react';

export const StatusBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8">
      <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
        Verificación Completada
      </span>
    </div>
  );
};
