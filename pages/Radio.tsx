
import React from 'react';
import { Play, SkipForward, SkipBack, Volume2 } from 'lucide-react';

const Radio: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4 block">NP/RADIO_001</span>
        <h1 className="text-8xl md:text-[15rem] font-black tracking-tighter italic">ON AIR</h1>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Album Art */}
        <div className="brutalist-border aspect-square bg-zinc-900 flex items-center justify-center brutalist-shadow">
          <div className="w-32 h-32 border-4 border-white rounded-full animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-white rounded-full" />
          </div>
        </div>

        {/* Info & Controls */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-4xl font-black">NORDIC ECHOES MIX</h2>
            <p className="text-sm font-mono opacity-60 mt-2 uppercase">Curated by NoPropzz Sound Lab — 44:02 Left</p>
          </div>

          <div className="space-y-4">
            <div className="h-1 bg-gray-200 relative">
              <div className="absolute left-0 top-0 h-full w-[40%] bg-black" />
            </div>
            <div className="flex justify-between text-[10px] font-bold font-mono">
              <span>12:45</span>
              <span>56:47</span>
            </div>
          </div>

          <div className="flex items-center space-x-12">
            <SkipBack className="cursor-pointer hover:opacity-50" size={32} />
            <div className="p-8 bg-black text-white rounded-full cursor-pointer hover:scale-110 transition-transform">
              <Play fill="white" size={40} />
            </div>
            <SkipForward className="cursor-pointer hover:opacity-50" size={32} />
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-4 w-full border-t-2 border-black pt-12">
        {[1,2,3,4].map(i => (
          <div key={i} className="flex items-center space-x-4 p-4 hover:bg-gray-100 transition-all cursor-pointer">
            <span className="text-xs font-black opacity-20">0{i}</span>
            <div>
              <p className="text-xs font-bold uppercase">Concrete Pulse</p>
              <p className="text-[10px] opacity-50">SubBass Collective</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
