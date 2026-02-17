
import React from 'react';
import { StatusBadge } from './components/StatusBadge';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 flex flex-col items-center py-12 px-4 md:px-6 overflow-x-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none blur-[120px]" />

      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        {/* Top Status */}
        <StatusBadge />

        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 px-4">
          Agendamiento <span className="text-cyan-400">Iconic Group</span>
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mb-8 px-4">
          Tu clínica ha pasado los filtros iniciales. El siguiente paso es agendar tu sesión de implementación estratégica a continuación.
        </p>

        {/* Calendar Card */}
        <div className="w-full bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl card-glow relative mb-10">
          <div className="p-4 md:p-8 border-b border-zinc-800 bg-zinc-900/20">
             <h2 className="text-xl md:text-2xl font-bold text-white">
                Reserva tu Sesión Estratégica
             </h2>
             <p className="text-zinc-500 text-xs md:text-sm mt-1">
                Selecciona el horario que mejor te convenga para comenzar.
             </p>
          </div>

          <div className="relative w-full min-h-[600px] md:min-h-[800px] bg-white/5">
            <iframe 
              src="https://link.markgrowth.pro/widget/booking/4yLc6nWJE0ytLrijalNv" 
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no" 
              id="4yLc6nWJE0ytLrijalNv_1771307378612"
              className="w-full h-[600px] md:h-[800px]"
              title="Booking Calendar"
            ></iframe>
          </div>
        </div>
      </main>

      {/* Footer Status */}
      <footer className="relative z-10 py-6">
        <div className="flex items-center gap-3 text-[9px] md:text-xs font-medium text-zinc-600 tracking-[0.3em] uppercase">
          <span>Session Status: Authenticated</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span>Priority Pipeline Active</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
