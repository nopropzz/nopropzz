
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="mb-20">
        <h1 className="text-9xl font-black tracking-tighter">EVENTS</h1>
        <p className="text-xl font-mono mt-4 max-w-2xl">Exhibitions, live performances, and pop-ups curated by our studio.</p>
      </div>

      <div className="space-y-24">
        {MOCK_EVENTS.map((event) => (
          <div key={event.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 group cursor-pointer">
            <div className="lg:col-span-2 flex flex-col justify-between border-l-4 border-black pl-8 py-4">
              <div>
                <span className="text-5xl font-black block leading-none">
                  {new Date(event.start_date).getDate()}
                </span>
                <span className="text-xs uppercase font-bold tracking-widest">
                  {new Date(event.start_date).toLocaleString('default', { month: 'short' })}
                </span>
              </div>
              <div className="mt-8 space-y-2">
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase opacity-50">
                  <Calendar size={12} />
                  <span>2026</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase opacity-50">
                  <MapPin size={12} />
                  <span>{event.location.split(',')[0]}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                {event.event_type}
              </span>
              <h2 className="text-6xl font-black group-hover:italic transition-all">{event.name}</h2>
              <p className="text-lg opacity-70 font-mono leading-relaxed">{event.description}</p>
              <button className="flex items-center space-x-4 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-2">
                <span>View Full Details</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="lg:col-span-4 brutalist-border h-[400px] overflow-hidden grayscale group-hover:grayscale-0 transition-all">
              <img src={event.featured_image_url} alt={event.name} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-20 bg-black text-white text-center brutalist-shadow">
        <h3 className="text-5xl font-black mb-6 italic">HAVE A SPACE?</h3>
        <p className="max-w-md mx-auto text-sm opacity-60 mb-10">We are always looking for unique raw locations to host our next pop-up or exhibition.</p>
        <button className="px-10 py-4 border-2 border-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
          Propose Location
        </button>
      </div>
    </div>
  );
};

export default Events;
