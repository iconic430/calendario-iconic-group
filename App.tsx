
import React from 'react';
import { StatusBadge } from './components/StatusBadge';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 flex flex-col items-center py-12 px-4 md:px-6 overflow-x-hidden">
      {/* Brand Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center py-8 px-8 md:px-16 z-50">
        <div className="flex items-center text-2xl font-black tracking-tighter">
          <span className="text-white">ICONIC</span>
          <span className="text-cyan-400">GROUP</span>
        </div>
        <button className="hidden md:block bg-cyan-500 text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
          Quiero ver si mi clínica califica
        </button>
      </header>

      {/* Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none blur-[140px]" />

      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center mt-12 md:mt-24">
        {/* Top Status */}
        <StatusBadge />

        {/* Hero Section */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 px-4 leading-[1.1]">
          Paso Final: <br />
          <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">Asegura tu Sesión</span>
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-lg max-w-2xl leading-relaxed mb-20 px-4">
          Felicidades, tu clínica ha pasado los filtros iniciales. Sin embargo, <span className="text-white font-bold uppercase underline decoration-cyan-500/50 underline-offset-4">tu lugar AÚN NO está asegurado</span>. Selecciona un horario debajo para completar tu evaluación antes de que tu solicitud expire en 24 horas.
        </p>

        {/* Calendar Card */}
        <div className="w-full bg-zinc-900/30 backdrop-blur-2xl border border-zinc-800/50 rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] card-glow relative mb-32">
          <div className="p-6 md:p-10 border-b border-zinc-800/80 bg-zinc-900/40">
             <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Reserva tu Sesión Estratégica
             </h2>
             <p className="text-zinc-500 text-sm md:text-base mt-2">
                Selecciona el horario que mejor te convenga para comenzar.
             </p>
          </div>

          <div className="relative w-full min-h-[970px] md:min-h-[970px] bg-white/5">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/E8hqAbTGfkVOZzrEE1zF" 
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no" 
              id="E8hqAbTGfkVOZzrEE1zF_1778809088367"
              className="w-full h-[970px] md:h-[970px]"
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
