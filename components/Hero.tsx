import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './VisualEditor';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white px-6 py-20">
      {/* Animated Sun / Radar - Optimized for mobile fit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] sm:w-[500px] md:w-[600px] h-[280px] sm:h-[500px] md:h-[600px] border-[1px] border-black/5 rounded-full flex items-center justify-center pointer-events-none"
      >
        <div className="w-[180px] sm:w-[350px] md:w-[400px] h-[180px] sm:h-[350px] md:h-[400px] border-[1px] border-black/5 rounded-full" />
        <div className="absolute w-full h-[0.5px] bg-black/5" />
        <div className="absolute h-full w-[0.5px] bg-black/5" />
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[9px] md:text-xs uppercase tracking-[0.3em] font-black opacity-40 mb-6 md:mb-10 max-w-[280px] md:max-w-none leading-relaxed"
        >
          <Editable 
            id="hero_tagline" 
            defaultText="Art Studio / Scandinavian Creative Agency / Artist Community" 
          />
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl sm:text-8xl md:text-[11vw] font-black leading-[0.85] tracking-tighter mb-10 md:mb-16"
        >
          <Editable id="hero_title" defaultText="noPROPZZ" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-64 px-8 py-5 md:py-8 bg-black text-white text-[11px] md:text-base font-black uppercase tracking-widest border-4 border-black transition-all brutalist-shadow active:translate-y-1">
            <Editable id="hero_btn_1" defaultText="View Work" />
          </button>
          <button className="w-full sm:w-64 px-8 py-5 md:py-8 bg-white text-black text-[11px] md:text-base font-black uppercase tracking-widest border-4 border-black transition-all hover:bg-black hover:text-white active:translate-y-1">
            <Editable id="hero_btn_2" defaultText="Our Offers" />
          </button>
        </motion.div>
      </div>

      {/* Hero Footer Meta - Improved scaling for mobile devices */}
      <div className="absolute bottom-8 left-0 w-full px-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
        <div className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] space-y-1.5 font-bold text-center md:text-left opacity-30">
          <p>LOCATION: <Editable id="hero_loc" defaultText="38.9681° N, 9.4073° W" /></p>
          <p>SECTOR: <Editable id="hero_sector" defaultText="VISUAL STORYTELLING" /></p>
        </div>
        <div className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-center md:text-right font-bold opacity-30">
          <p>STATUS: <Editable id="hero_status" defaultText="AVAILABLE WORLDWIDE" /></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;