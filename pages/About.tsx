import React from 'react';
import { motion } from 'framer-motion';
import { Editable, EditableImage } from '../components/VisualEditor';

const About: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 overflow-x-hidden">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
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
            <Editable id="about_leadership" defaultText="Founded by Estonian photographers Marleen Muhuste and Kätlin Klaus. We connect sustainable brands with artists who care deeply." />
          </p>
        </div>
      </div>

      {/* Founder Story Cover - CLICK IN BUILD MODE TO UPLOAD YOUR PHOTO */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full mb-32 border-4 border-black brutalist-shadow aspect-[21/9] overflow-hidden bg-zinc-100"
      >
        <EditableImage 
          id="about_cover_landscape"
          defaultSrc="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=2000" 
          alt="noPROPZZ Founders - Marleen & Kätlin" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </motion.div>

      {/* Main Narrative Section: STORY & VALUES */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
        <div className="lg:col-span-8 space-y-24">
          
          {/* OUR STORY */}
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic">
              OUR STORY
            </h2>
            <div className="space-y-10 font-mono text-lg leading-relaxed opacity-70 font-bold uppercase">
              <p>
                <Editable 
                  id="story_p1_new" 
                  defaultText="We seek out talented artists to create real value for your brand. We travel the world producing campaigns —not just photos, but stories that resonate. From those authentic shoots, we generate more: scalable assets, AI-enhanced variations, and content that amplifies your message without losing soul." 
                />
              </p>
              <p>
                <Editable 
                  id="story_p2_new" 
                  defaultText="In tough times when artists battle fast-changing tools and markets, we create the community we dreamed of: selling prints by real hands, sharing honest artist journeys, and lighting the path for emerging creators to build without fear. We connect brands with artists who care deeply about what they make. We don’t produce for trends—we create work that lasts." 
                />
              </p>
              <p>
                <Editable 
                  id="story_p3_new" 
                  defaultText="As technology reshapes creativity, we saw speed threatening depth, automation threatening soul. noPROPZZ is our counterbalance: real shoots with real talent first, then smart tools to multiply the impact. Brands get human stories that scale; artists stay visible, valued, and fairly supported." 
                />
              </p>
            </div>
          </div>

          {/* OUR VALUES */}
          <div className="space-y-12 border-t-4 border-black pt-24">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic">
              OUR VALUES
            </h2>
            <div className="space-y-10 font-mono text-lg leading-relaxed opacity-70 font-bold uppercase">
              <p>
                <Editable 
                  id="values_commitment_final" 
                  defaultText="We commit exclusively to sustainable brands—ethical fashion, clean beauty, handmade goods that deliver positive change for people and planet." 
                />
              </p>
              <p>
                <Editable 
                  id="values_signal_final" 
                  defaultText="When noPROPZZ shoots your campaign, it serves as a powerful quality signal: we've thoroughly researched your practices, verified your trustworthiness, and chosen to celebrate your commitment. Our work becomes your enduring trademark of authenticity in a crowded market." 
                />
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Quote Block */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
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
        </div>
      </section>
    </div>
  );
};

export default About;