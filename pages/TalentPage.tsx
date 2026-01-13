
import React from 'react';
import { MOCK_TALENT } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Editable, EditableImage, useVisualEditor } from '../components/VisualEditor';

const TalentCard: React.FC<{ person: typeof MOCK_TALENT[0], idx: number }> = ({ person, idx }) => {
  const { isEditing } = useVisualEditor();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative">
        {/* Link is disabled in edit mode to allow clicking the Change Image button */}
        <Link 
          to={isEditing ? '#' : `/talent/${person.slug}`}
          onClick={(e) => isEditing && e.preventDefault()}
        >
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden brutalist-border brutalist-shadow mb-8 transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
            <EditableImage 
              id={`talent_img_${person.id}`}
              defaultSrc={person.profile_image_url} 
              alt={person.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {!isEditing && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] border-2 border-white px-6 py-2">
                  Read_Story
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
      
      <div className="flex justify-between items-end px-1">
        <div>
          <h3 className="text-4xl font-black tracking-tight uppercase italic group-hover:not-italic transition-all">
            <Editable id={`talent_name_${person.id}`} defaultText={person.name} />
          </h3>
          <p className="text-xs font-mono uppercase opacity-50 mt-2 font-bold max-w-[200px]">
            <Editable id={`talent_bio_short_${person.id}`} defaultText={person.bio.slice(0, 60)} />
          </p>
        </div>
        {person.featured && (
          <span className="text-[10px] font-black uppercase tracking-widest border border-black px-2 py-1 mb-1">Core</span>
        )}
      </div>
    </motion.div>
  );
};

const TalentPage: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-16">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.5em] opacity-30 block mb-4">COLLECTIVE_ROSTER_V1.4</span>
          <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none italic uppercase">
            <Editable id="talent_page_title" defaultText="THE_TALENT" />
          </h1>
        </div>
        <div className="text-left md:text-right space-y-2 mt-8 md:mt-0 opacity-40">
          <p className="text-xs font-black uppercase tracking-widest">NP / VISUAL_DIVISION</p>
          <p className="text-xs font-bold font-mono">ACTIVE_CREATIVES: {MOCK_TALENT.length}</p>
        </div>
      </div>

      {/* Unified Roster Section */}
      <section className="mb-16">
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic">
            <Editable id="talent_roster_title" defaultText="ROSTER" />
          </h2>
          <div className="h-1 bg-black flex-grow opacity-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {MOCK_TALENT.map((person, idx) => (
            <TalentCard key={person.id} person={person} idx={idx} />
          ))}
          
          {/* Join Collective CTA */}
          <Link to="/contact" className="brutalist-border aspect-[3/4] flex flex-col items-center justify-center p-12 text-center bg-gray-50 border-dashed border-4 border-black/20 hover:border-black/100 transition-all group">
            <h4 className="text-3xl font-black mb-4 uppercase italic">Collaborate</h4>
            <p className="text-xs font-mono opacity-50 mb-10 font-bold uppercase leading-relaxed text-center">We are looking for individuals with raw visual soul and nordic aesthetics.</p>
            <div className="px-10 py-5 border-4 border-black text-[10px] font-black uppercase tracking-widest bg-black text-white hover:bg-white hover:text-black transition-all brutalist-shadow">
              Apply_to_Collective
            </div>
          </Link>
        </div>
      </section>

      {/* Manifesto Section - Positioned at the bottom, below the roster with only top border */}
      <div className="mt-20 border-t-4 border-black py-12 flex justify-center w-full bg-zinc-50/50">
        <p className="text-xl md:text-4xl font-mono font-bold uppercase max-w-3xl mx-auto text-center leading-tight px-6">
          <Editable 
            id="talent_mission_footer" 
            defaultText="ARTISTS WHO SEE BEYOND THE FRAME. TRUSTED COLLABORATORS. PROVEN CHEMISTRY. ALIGNED WITH NOPROPZZ VALUES." 
          />
        </p>
      </div>
    </div>
  );
};

export default TalentPage;
