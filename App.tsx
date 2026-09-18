
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 flex flex-col items-center py-10 px-4 md:px-6 overflow-x-hidden">
      {/* Ambient Volumetric Cyan Glows (Very subtle, soft depth) */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-cyan-500/[0.12] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-[450px] h-[600px] bg-cyan-600/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 -right-48 w-[500px] h-[650px] bg-cyan-500/[0.05] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-400/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center text-2xl md:text-3xl font-black tracking-tighter mb-8 md:mb-10">
          <span className="text-white">ICONIC</span>
          <span className="text-cyan-400">GROUP</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Paso Final:
        </h1>

        {/* Subtitle / Proposition */}
        <p className="text-zinc-300 text-base md:text-xl max-w-2xl font-medium mb-10 px-4 leading-relaxed">
          Agenda tu sesión de crecimiento para agregar entre <span className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">150,000 y 470,000MXN</span> extras en tu clínica
        </p>

        {/* Calendar */}
        <div className="w-full min-h-[970px] relative mb-12">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/E8hqAbTGfkVOZzrEE1zF" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', backgroundColor: 'transparent' }}
            scrolling="no" 
            id="E8hqAbTGfkVOZzrEE1zF_1778809088367"
            className="w-full h-[970px]"
            title="Booking Calendar"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default App;
