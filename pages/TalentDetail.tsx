import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_TALENT } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft, Instagram, Globe, Mail, Briefcase } from 'lucide-react';

const TalentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const person = MOCK_TALENT.find(t => t.slug === slug);

  if (!person) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-black uppercase">Talent_Not_Found</h2>
        <Link to="/talent" className="mt-8 underline font-black uppercase tracking-widest">Return to Roster</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-20">
      <Link to="/talent" className="inline-flex items-center space-x-4 text-sm font-black uppercase tracking-widest mb-12 md:mb-16 hover:opacity-50 transition-all border-b-2 border-black pb-2">
        <ArrowLeft size={18} />
        <span>Back to Roster</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left: Hero Image */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-4 border-black brutalist-shadow bg-zinc-100 aspect-[3/4] overflow-hidden sticky top-32"
          >
            <img 
              src={person.profile_image_url} 
              alt={person.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>

        {/* Right: Story & Details */}
        <div className="lg:col-span-6 space-y-16">
          <header>
            <span className="text-xs font-black uppercase tracking-[0.4em] opacity-30 block mb-6">
              {person.role === 'Artist' ? 'NP_CREATIVE_STRIKE_TEAM' : 'NP_EDITORIAL_ROSTER'}
            </span>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 italic">
              {person.name.split(' ').join('\n')}
            </h1>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest">
                {person.role.toUpperCase()}
              </span>
              {person.featured && (
                <span className="border-2 border-black px-4 py-2 text-[10px] font-black uppercase tracking-widest">
                  CORE_TALENT
                </span>
              )}
            </div>
          </header>

          <section className="space-y-10">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 border-b-2 border-black pb-4">THE_MANIFESTO</h3>
            <p className="text-2xl font-mono font-bold leading-relaxed uppercase italic">
              {person.bio}
            </p>
            <p className="text-lg font-mono opacity-70 leading-relaxed font-bold uppercase">
              As a vital part of the noPROPZZ collective, {person.name.split(' ')[0]} brings a raw, Nordic perspective to every production. 
              Whether leading a high-impact campaign or providing visual depth to studio drops, the focus remains on authenticity and structural soul.
            </p>
          </section>

          {/* Technical Specs / Skills */}
          <section className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 border-b-2 border-black pb-4">PROFESSIONAL_STATS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
              <div className="space-y-2">
                <p className="text-[10px] font-black opacity-30 uppercase">Focus_Area</p>
                <p className="text-sm font-bold uppercase">{person.role === 'Artist' ? 'Visual Arts / Photography' : 'Editorial / Commercial'}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black opacity-30 uppercase">Location_Base</p>
                <p className="text-sm font-bold uppercase">Nordics / Worldwide</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black opacity-30 uppercase">Experience</p>
                <p className="text-sm font-bold uppercase">High-Fidelity Projects Only</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black opacity-30 uppercase">NP_ID_STATUS</p>
                <p className="text-sm font-bold uppercase">VERIFIED_ACTIVE</p>
              </div>
            </div>
          </section>

          {/* Social / Contact */}
          <section className="pt-12 border-t-4 border-black">
            <div className="flex flex-wrap gap-12">
              <button className="flex items-center gap-3 group">
                <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest underline decoration-2 underline-offset-4">IG_PROFILE</span>
              </button>
              <button className="flex items-center gap-3 group">
                <Globe size={24} className="group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest underline decoration-2 underline-offset-4">PORTFOLIO</span>
              </button>
              <Link to="/contact" className="flex items-center gap-3 group">
                <Mail size={24} className="group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest underline decoration-2 underline-offset-4">BOOK_TALENT</span>
              </Link>
            </div>
          </section>

          {/* Recent Works Preview */}
          <section className="pt-20">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-8 flex items-center gap-4">
              <Briefcase size={14} />
              <span>RECENT_DEPLOYMENTS_CONTRIBUTION</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-[4/3] bg-zinc-100 border-2 border-black overflow-hidden group brutalist-shadow-hover transition-all cursor-crosshair">
                  <img 
                    src={`https://picsum.photos/seed/talent${person.id}${i}/800/600`} 
                    alt="Work sample" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TalentDetail;