import React from 'react';
import { MOCK_TALENT } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Fixed TalentCard type definition to correctly handle props in a React context
const TalentCard: React.FC<{ person: typeof MOCK_TALENT[0], idx: number }> = ({ person, idx }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    className="group cursor-pointer"
  >
    <Link to={`/talent/${person.slug}`}>
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden brutalist-border brutalist-shadow mb-8 transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
        <img 
          src={person.profile_image_url} 
          alt={person.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] border-2 border-white px-6 py-2">
            Read_Story
          </span>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-4xl font-black tracking-tight uppercase italic group-hover:not-italic transition-all">{person.name}</h3>
          <p className="text-xs font-mono uppercase opacity-50 mt-2 font-bold">{person.bio.slice(0, 60)}...</p>
        </div>
        {person.featured && (
          <span className="text-[10px] font-black uppercase tracking-widest border border-black px-2 py-1 mb-1">Featured</span>
        )}
      </div>
    </Link>
  </motion.div>
);

const TalentPage: React.FC = () => {
  const artists = MOCK_TALENT.filter(t => t.role === 'Artist');
  const models = MOCK_TALENT.filter(t => t.role === 'Model');

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-16">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.5em] opacity-30 block mb-4">SYSTEM_ROSTER_V1.4</span>
          <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none italic uppercase">THE_TALENT</h1>
        </div>
        <div className="text-left md:text-right space-y-2 mt-8 md:mt-0 opacity-40">
          <p className="text-xs font-black uppercase tracking-widest">NP / TALENT_DIVISION</p>
          <p className="text-xs font-bold font-mono">TOTAL_ACTIVE: {MOCK_TALENT.length}</p>
        </div>
      </div>

      {/* Artists Section */}
      <section className="mb-40">
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic">ARTISTS</h2>
          <div className="h-1 bg-black flex-grow opacity-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {artists.map((person, idx) => (
            <TalentCard key={person.id} person={person} idx={idx} />
          ))}
          
          {/* Join as Artist */}
          <Link to="/contact" className="brutalist-border aspect-[3/4] flex flex-col items-center justify-center p-12 text-center bg-gray-50 border-dashed border-4 border-black/20 hover:border-black/100 transition-all group">
            <h4 className="text-3xl font-black mb-4 uppercase italic">Collaborate</h4>
            <p className="text-xs font-mono opacity-50 mb-10 font-bold uppercase leading-relaxed">We are looking for Nordic aesthetics and raw visual soul.</p>
            <div className="px-10 py-5 border-4 border-black text-[10px] font-black uppercase tracking-widest bg-black text-white hover:bg-white hover:text-black transition-all brutalist-shadow">
              Apply_to_Collective
            </div>
          </Link>
        </div>
      </section>

      {/* Models Section */}
      <section>
        <div className="flex items-center gap-8 mb-12">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">MODELS</h2>
          <div className="h-1 bg-black flex-grow opacity-10" />
        </div>
        
        <div className="max-w-3xl mb-16 border-l-4 border-black pl-8">
          <p className="text-xl md:text-2xl font-mono font-bold leading-relaxed opacity-70 uppercase italic">
            A curated selection of models is sourced and shared for your review. 
            You choose the faces that best match your brand and campaign, 
            or give a vibe and let casting be handled for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {models.map((person, idx) => (
            <TalentCard key={person.id} person={person} idx={idx} />
          ))}

          {/* Join as Model */}
          <Link to="/contact" className="brutalist-border aspect-[3/4] flex flex-col items-center justify-center p-12 text-center bg-zinc-900 text-white brutalist-shadow transition-all hover:bg-black group">
            <h4 className="text-3xl font-black mb-4 uppercase">Join_Roster</h4>
            <p className="text-xs font-mono opacity-50 mb-10 font-bold uppercase leading-relaxed">Accepting submissions for Q3 global production drops.</p>
            <div className="px-10 py-5 border-4 border-white text-[10px] font-black uppercase tracking-widest bg-white text-black hover:bg-black hover:text-white transition-all">
              Submit_Portfolio
            </div>
          </Link>
        </div>
      </section>

      {/* Footer CTA - Now with symmetrical horizontal lines and perfect centering */}
      <div className="mt-40 mb-12 border-y-4 border-black py-24 flex justify-center w-full">
        <p className="text-xl md:text-4xl font-mono font-bold uppercase max-w-4xl mx-auto text-center leading-tight px-6">
          Every talent in our roster is selected for their alignment with the noPROPZZ vision of raw authenticity
        </p>
      </div>
    </div>
  );
};

export default TalentPage;