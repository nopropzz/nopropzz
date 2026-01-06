import React from 'react';
import Hero from '../components/Hero';
import { MOCK_PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, HeartHandshake, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* The Mission Statement - Refined with Estonian Founders Context */}
      <section className="bg-black text-white py-20 md:py-40 px-6 border-y-4 border-black relative">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 md:mb-10 leading-[0.85]"
            >
              REAL HUMAN STORIES FIRST.<br/>
              <span className="italic text-zinc-500">AI SCALE SECOND.</span>
            </motion.h2>
            <p className="text-lg md:text-2xl font-mono font-bold leading-relaxed opacity-80 uppercase">
              noPROPZZ is a Scandinavian creative agency lead by Marleen & Kätlin. 
              We produce high-ticket campaigns for sustainable brands, building repeatable 
              visual systems orchestrated by Jürgen and the Flowen AI group.
            </p>
          </div>
          
          {/* Mission Cards - Strictly Monochrome icons & Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full lg:w-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 md:p-10 border-4 border-white brutalist-shadow bg-zinc-900 flex flex-col items-center lg:items-start text-center lg:text-left transition-all"
            >
               <ShieldCheck className="mb-6 text-white" size={32} />
               <h4 className="text-xl font-black uppercase mb-2">Authenticated</h4>
               <p className="text-xs font-mono opacity-60 uppercase tracking-widest">Verified ethical production.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 md:p-10 border-4 border-white brutalist-shadow bg-zinc-900 flex flex-col items-center lg:items-start text-center lg:text-left transition-all"
            >
               <Globe className="mb-6 text-white" size={32} />
               <h4 className="text-xl font-black uppercase mb-2">Global Scale</h4>
               <p className="text-xs font-mono opacity-60 uppercase tracking-widest">Ericeira to Cape Town.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Offers Section - Responsive Grid and Sizing */}
      <section className="py-20 md:py-40 px-6 max-w-[1440px] mx-auto">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-10 md:pb-12">
           <div className="mb-8 md:mb-0">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-30">01_THE_OFFERS</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mt-4 md:mt-6 tracking-tighter italic uppercase">CHOOSE_PATH</h2>
           </div>
           <Link to="/services" className="text-lg md:text-xl font-black uppercase tracking-widest underline decoration-4 underline-offset-8 hover:opacity-50 transition-all">
             All Packages
           </Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">
          {/* AI Spark Kit */}
          <div className="bg-white border-4 border-black p-8 md:p-12 brutalist-shadow-hover transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <Zap size={40} className="text-black" />
               <span className="bg-black text-white px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest">Start Here</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">AI Spark Kit</h3>
            <p className="text-lg md:text-xl font-mono font-bold opacity-70 mb-10 leading-relaxed flex-grow uppercase">
              Testing a new product or idea? Get 20+ high-impact AI visuals and caption templates in 3 days. Perfect for e-commerce testing and rapid social deployment.
            </p>
            <div className="pt-8 md:pt-10 border-t-4 border-black flex justify-between items-center">
               <span className="text-2xl md:text-4xl font-black tracking-tighter">€750–€1.2K</span>
               <Link to="/contact" className="bg-black text-white px-6 md:px-10 py-4 md:py-5 text-xs font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4">
                 <span>Initiate</span>
                 <ArrowRight size={18} />
               </Link>
            </div>
          </div>

          {/* Destination Drop */}
          <div className="bg-black text-white p-8 md:p-12 brutalist-shadow transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <Globe size={40} />
               <span className="bg-white text-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest">High-Ticket</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">Destination Drop</h3>
            <p className="text-lg md:text-xl font-mono font-bold opacity-70 mb-10 leading-relaxed flex-grow uppercase">
              Full global production. Ship us your products; we deliver a premium campaign with 50+ photos, 15+ videos, and BTS content from world-class destinations.
            </p>
            <div className="pt-8 md:pt-10 border-t-4 border-white flex justify-between items-center">
               <span className="text-2xl md:text-4xl font-black tracking-tighter">€4K–€8K</span>
               <Link to="/contact" className="bg-white text-black px-6 md:px-10 py-4 md:py-5 text-xs font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4">
                 <span>Reserve</span>
                 <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </div>

        {/* Portfolio Preview - Responsive Layout */}
        <div className="border-t-4 border-black pt-16 md:pt-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-20 gap-6">
             <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">Recent_Deployments</h3>
             <Link to="/portfolio" className="text-xs md:text-sm font-black uppercase tracking-widest flex items-center space-x-2 group">
               <span>Archive</span>
               <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-l-4 border-t-4 border-black">
            {MOCK_PROJECTS.slice(0, 3).map((project) => (
              <Link 
                to={`/portfolio/${project.slug}`} 
                key={project.id}
                className="group border-r-4 border-b-4 border-black p-8 md:p-12 hover:bg-zinc-50 transition-all"
              >
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden border-2 border-black mb-6 md:mb-8">
                  <img 
                    src={project.featured_image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-none">{project.title}</h4>
                <p className="text-[10px] md:text-xs font-mono opacity-50 mt-3 md:mt-4 uppercase font-bold tracking-[0.2em]">{project.category} // {project.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scalable Partner CTA - Mobile Optimization */}
      <section className="py-24 md:py-40 bg-zinc-50 border-y-4 border-black">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <HeartHandshake className="mx-auto mb-8 md:mb-10 opacity-20" size={60} />
            <h2 className="text-5xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter leading-none uppercase">THE STORY PARTNER.</h2>
            <p className="text-lg md:text-2xl font-mono mb-12 md:mb-16 opacity-70 font-bold leading-relaxed uppercase">
              For brands building long-term visual identities. 4 drops per year, 
              priority scouting, and 100+ real assets per month. 
              Only 3 spots total for the current cycle.
            </p>
            <Link to="/services" className="inline-block px-10 md:px-20 py-6 md:py-10 bg-black text-white text-base md:text-xl font-black uppercase tracking-widest hover:bg-transparent hover:text-black border-4 border-black transition-all brutalist-shadow">
              Apply for Partnership
            </Link>
         </div>
      </section>

      {/* Marquee - Responsive sizing to prevent height explosion */}
      <div className="py-12 md:py-24 border-b-4 border-black overflow-hidden flex whitespace-nowrap bg-black text-white">
        <div className="animate-marquee flex items-center">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-6xl sm:text-8xl md:text-[10rem] font-black px-6 md:px-12 tracking-tighter uppercase italic">noPROPZZ / REAL ART / AI SCALE / NO FILLER / </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;