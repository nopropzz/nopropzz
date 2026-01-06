
import React from 'react';
import { MOCK_TALENT } from '../constants';
import { Link } from 'react-router-dom';

interface TalentPageProps {
  role: 'Model' | 'Artist';
}

const TalentPage: React.FC<TalentPageProps> = ({ role }) => {
  const filteredTalent = MOCK_TALENT.filter(t => t.role === role);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="mb-20 flex justify-between items-end">
        <h1 className="text-9xl font-black tracking-tighter">{role}S</h1>
        <div className="text-right space-y-2 opacity-50">
          <p className="text-xs font-bold uppercase tracking-widest">NP / TALENT DIV</p>
          <p className="text-xs font-bold font-mono">ACTIVE ROSTER: {filteredTalent.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredTalent.map((person) => (
          <div key={person.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden brutalist-border brutalist-shadow mb-8">
              <img 
                src={person.profile_image_url} 
                alt={person.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] border-2 border-white px-6 py-2">
                  View Profile
                </span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-4xl font-black tracking-tight">{person.name}</h3>
                <p className="text-xs font-mono uppercase opacity-50 mt-1">{person.bio.slice(0, 40)}...</p>
              </div>
              {person.featured && (
                <span className="text-[10px] font-black uppercase tracking-widest border border-black px-2 py-1">Featured</span>
              )}
            </div>
          </div>
        ))}

        {/* Join Roster Card */}
        <div className="brutalist-border aspect-[3/4] flex flex-col items-center justify-center p-12 text-center bg-gray-50 border-dashed">
          <h4 className="text-2xl font-black mb-4">JOIN THE<br/>ROSTER</h4>
          <p className="text-xs font-mono opacity-50 mb-8">We are looking for unique aesthetics and raw potential.</p>
          <button className="px-6 py-3 border-2 border-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalentPage;
