
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Editable, EditableMedia, useVisualEditor } from './VisualEditor';

const Hero: React.FC = () => {
  const { isEditing } = useVisualEditor();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6 py-20">
      
      {/* Dynamic Background Media */}
      <div className="absolute inset-0 z-0 opacity-70">
        <EditableMedia 
          id="hero_background_media" 
          defaultSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full"
        />
        {/* Gritty Texture Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, opacity: 0.05 }} />
      </div>

      {/* Animated Radar */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] border-[1px] border-white/10 rounded-full flex items-center justify-center pointer-events-none z-10"
      >
        <div className="w-[180px] sm:w-[450px] h-[180px] sm:h-[450px] border-[1px] border-white/5 rounded-full" />
        <div className="absolute w-full h-[0.5px] bg-white/5" />
        <div className="absolute h-full w-[0.5px] bg-white/5" />
      </motion.div>

      {/* Content Container */}
      <div className={`relative z-20 text-center flex flex-col items-center w-full max-w-7xl ${isEditing ? 'pointer-events-none' : ''}`}>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[9px] md:text-xs uppercase tracking-[0.4em] font-black text-white/80 mb-6 md:mb-12 max-w-[240px] md:max-w-none leading-relaxed"
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
          className="text-5xl sm:text-8xl lg:text-[14vw] font-black leading-[0.85] tracking-tighter mb-10 md:mb-20 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-2"
        >
          <Editable id="hero_title" defaultText="noPROPZZ" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto pointer-events-auto px-4"
        >
          <Link 
            to={isEditing ? '#' : "/portfolio"}
            onClick={(e) => isEditing && e.preventDefault()}
            className="w-full sm:w-72 px-8 py-5 md:py-10 bg-white text-black text-xs md:text-lg font-black uppercase tracking-widest border-4 border-white transition-all brutalist-shadow hover:bg-transparent hover:text-white active:translate-y-1 text-center"
          >
            <Editable id="hero_btn_1" defaultText="View Work" />
          </Link>
          <Link 
            to={isEditing ? '#' : "/services"}
            onClick={(e) => isEditing && e.preventDefault()}
            className="w-full sm:w-72 px-8 py-5 md:py-10 bg-transparent text-white text-xs md:text-lg font-black uppercase tracking-widest border-4 border-white transition-all hover:bg-white hover:text-black active:translate-y-1 text-center"
          >
            <Editable id="hero_btn_2" defaultText="Our Offers" />
          </Link>
        </motion.div>
      </div>

      {/* Hero Footer Meta */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 w-full px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-0 z-20 pointer-events-none">
        <div className="text-[9px] md:text-xs font-mono uppercase tracking-[0.3em] space-y-1 md:space-y-2 font-bold text-center md:text-left text-white/40 pointer-events-auto">
          <p>LOCATION: <Editable id="hero_loc" defaultText="38.9681° N, 9.4073° W" /></p>
          <p>SECTOR: <Editable id="hero_sector" defaultText="VISUAL STORYTELLING" /></p>
        </div>
        <div className="text-[9px] md:text-xs font-mono uppercase tracking-[0.3em] text-center md:text-right font-bold text-white/40 pointer-events-auto">
          <p>STATUS: <Editable id="hero_status" defaultText="AVAILABLE WORLDWIDE" /></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
