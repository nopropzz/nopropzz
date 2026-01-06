
import React from 'react';

const Locations: React.FC = () => {
  const locs = [
    { name: 'The Void Warehouse', size: '1200 sqm', type: 'Industrial', city: 'Oslo' },
    { name: 'Brutalist Loft 4', size: '450 sqm', type: 'Residential', city: 'Stockholm' },
    { name: 'Concrete Basement', size: '300 sqm', type: 'Club/Event', city: 'Berlin' },
    { name: 'Steel Rooftop', size: '200 sqm', type: 'Outdoor', city: 'Copenhagen' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-12">
        <h1 className="text-9xl font-black leading-none tracking-tighter">SPACES</h1>
        <p className="mt-8 md:mt-0 max-w-sm text-sm font-mono opacity-60">Hand-picked raw locations for your next production or event.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black">
        {locs.map((loc, i) => (
          <div key={i} className="group relative aspect-video bg-white overflow-hidden cursor-pointer">
            <img 
              src={`https://picsum.photos/seed/loc${i}/1200/800`} 
              alt={loc.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12 text-white">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest mb-2 block">{loc.type} — {loc.city}</span>
                  <h3 className="text-5xl font-black">{loc.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-bold">{loc.size}</p>
                  <p className="text-[10px] opacity-60 underline mt-2">Check Availability</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 border-2 border-black text-center font-mono text-xs uppercase italic opacity-50">
        Looking for something specific? Our scouting team operates across the Nordics and Northern Europe.
      </div>
    </div>
  );
};

export default Locations;
