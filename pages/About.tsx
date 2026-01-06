import React from 'react';
import { MOCK_TALENT } from '../constants';
import { motion } from 'framer-motion';
import { Editable } from '../components/VisualEditor';

const About: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-32">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8]"
        >
          <Editable id="about_title" defaultText="WHO WE ARE?" />
        </motion.h1>
        <div className="space-y-8">
          <p className="text-xl md:text-2xl font-mono leading-relaxed opacity-70 border-l-4 border-black pl-8 italic font-bold uppercase">
            <Editable id="about_intro" defaultText="noPROPZZ is a Scandinavian creative agency, art studio, and global community built around real human stories." />
          </p>
          <p className="text-base md:text-lg font-mono opacity-60 leading-relaxed font-bold uppercase">
            <Editable id="about_leadership" defaultText="Founded by Estonian photographers Marleen Muhuste and Kätlin Klaus, we connect sustainable brands with artists who care deeply." />
          </p>
        </div>
      </div>

      {/* Founders Trio Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-40 relative">
        {MOCK_TALENT.map((founder, idx) => (
          <motion.div 
            key={founder.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            className={`brutalist-border aspect-[3/4] overflow-hidden bg-gray-100 relative group brutalist-shadow-hover transition-all duration-500 ${
              idx === 1 ? 'md:-translate-y-12' : idx === 2 ? 'md:translate-y-12' : ''
            }`}
          >
             <img src={founder.profile_image_url} alt={founder.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
             <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-black text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-black">{founder.name.toUpperCase()}</h3>
                <p className="text-[10px] md:text-xs font-mono uppercase mt-2 opacity-70">{founder.bio}</p>
             </div>
             <div className="absolute top-0 right-0 p-4 mix-blend-difference text-white font-black text-xs uppercase tracking-widest hidden lg:block">
                0{idx + 1}_{idx === 2 ? 'ORCHESTRATOR' : 'LEAD'}
             </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black mb-40">
        {[
          { id: "v1", title: "Real Stories", desc: "We produce real-world campaigns first—then thoughtfully expand them using AI tools to scale assets without losing soul." },
          { id: "v2", title: "Scale with Soul", desc: "The result: visuals brands trust, stories audiences feel, and a creative ecosystem where artists stay visible and valued." },
          { id: "v3", title: "No Filler", desc: "We don't produce for trends—we create work that lasts and signals quality in a world of fast automation." }
        ].map((v, i) => (
          <div key={i} className="p-12 md:p-16 border-b-4 md:border-b-0 md:border-r-4 last:border-r-0 border-black hover:bg-black hover:text-white transition-all group">
            <span className="text-xs font-bold opacity-30 mb-6 block font-mono uppercase">CORE_VALUES_0{i+1}</span>
            <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter leading-none">
              <Editable id={`about_v_title_${v.id}`} defaultText={v.title} />
            </h3>
            <p className="text-xs font-mono opacity-60 group-hover:opacity-80 leading-loose font-bold uppercase">
              <Editable id={`about_v_desc_${v.id}`} defaultText={v.desc} />
            </p>
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        <div className="space-y-12">
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">OUR STORY.</h2>
          <div className="space-y-8 font-mono text-base leading-relaxed opacity-70 font-bold uppercase">
            <p><Editable id="story_p1" defaultText="We seek out talented artists to create real value for your brand. We travel the world producing campaigns with real people—not just photos, but stories that resonate." /></p>
            <p><Editable id="story_p2" defaultText="As technology reshapes creativity, we saw speed threatening depth, automation threatening soul. noPROPZZ is our counterbalance: real shoots with real talent first, then smart tools to multiply the impact." /></p>
            <p><Editable id="story_p3" defaultText="We care deeply about nature, so we work only with sustainable brands that nourish body, nature, and creativity—ethical fashion, clean beauty, handmade goods." /></p>
          </div>
        </div>
        <div className="brutalist-border aspect-square overflow-hidden bg-black p-8 md:p-12 flex flex-col justify-center text-white brutalist-shadow relative group">
          <motion.h4 
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-6xl font-black italic mb-8 leading-tight tracking-tighter uppercase"
          >
            <Editable id="quote_large" defaultText='"WHEN NOPROPZZ SHOOTS YOU, IT SIGNALS QUALITY."' />
          </motion.h4>
          <p className="text-sm font-mono opacity-60 uppercase">— THE NOPROPZZ MANIFESTO</p>
          <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none group-hover:border-white/10 transition-all" />
        </div>
      </section>
    </div>
  );
};

export default About;