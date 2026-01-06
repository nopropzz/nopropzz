
import React from 'react';
import { ArrowRight, Check, Zap, Globe, HeartHandshake, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const packages = [
    {
      id: "spark",
      title: "AI Spark Kit",
      price: "€750–€1,200",
      tagline: "TEST IDEAS QUICKLY",
      icon: Zap,
      desc: "Perfect when you need visuals NOW—product mockups, campaign moodboards, ad tests, or story starters. We shape your brief into bold, on-brand assets without the travel.",
      features: [
        "1h Strategy call + Moodboard",
        "10–20 AI images + 5 clips",
        "5 Caption templates",
        "30% off future real shoot"
      ],
      cta: "Book Spark Kit",
      timeline: "3–5 Days"
    },
    {
      id: "drop",
      title: "Destination Drop",
      price: "€4,000–€8,000",
      tagline: "EPIC GLOBAL PRODUCTION",
      icon: Globe,
      desc: "Full production in Morocco, Cape Town, or Ericeira. ship products to us; lock in mood and destination; we handle the rest from casting to delivery.",
      features: [
        "50+ Real Photos + 15 Video Clips",
        "BTS Stories package (10 assets)",
        "noPROPZZ Blog feature",
        "Model casting & Logistics",
        "Max 2 brands per trip"
      ],
      cta: "Reserve My Drop",
      timeline: "Fixed Calendar"
    },
    {
      id: "partner",
      title: "Story Partner",
      price: "€2,500+/mo",
      tagline: "LONG-TERM COLLABORATION",
      icon: HeartHandshake,
      desc: "Your ongoing visual storyteller. Lock in a retainer for 4 Destination Drops a year + priority scouting. We build your long-term identity while you scale.",
      features: [
        "4 full Drops/year + 2 remote shoots",
        "100+ Real assets per month",
        "Priority Model & Location access",
        "1x Instagram takeover per quarter",
        "Exclusive: Only 3 spots total"
      ],
      cta: "Apply for Partnership",
      timeline: "6mo Minimum"
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-20">
      <header className="mb-20 md:mb-32">
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 md:mb-6 block opacity-30">OUR_OFFERS</span>
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8 md:mb-10 italic">PACKAGES</h1>
        <p className="text-lg md:text-2xl font-mono max-w-2xl opacity-70 leading-relaxed font-bold uppercase">
          High-ticket, results-obsessed production. We take your brand from Point A to Point B with human artistry and AI amplification.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-px bg-transparent lg:bg-black border-0 lg:border-4 lg:border-black mb-20 md:mb-32 lg:brutalist-shadow">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors border-4 lg:border-0 lg:border-r-4 border-black last:border-r-0 brutalist-shadow lg:shadow-none">
            <div className="mb-8 md:mb-10 flex justify-between items-start">
              <div className="p-4 md:p-5 bg-black text-white brutalist-shadow">
                {/* Fixed: Removed invalid 'md' prop from Lucide icon component */}
                <pkg.icon size={32} />
              </div>
              <span className="text-xs md:text-sm font-mono font-black uppercase tracking-widest">{pkg.timeline}</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter leading-none">{pkg.title}</h2>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 mb-8 md:mb-10">{pkg.tagline}</p>
            
            <p className="text-lg md:text-xl font-mono opacity-80 mb-10 md:mb-12 font-bold leading-relaxed flex-grow uppercase">{pkg.desc}</p>
            
            <div className="mb-12 md:mb-16">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8 border-b-2 border-black pb-2">What you get:</h4>
              <ul className="space-y-4 md:space-y-5">
                {pkg.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start space-x-3 md:space-x-4 text-xs md:text-sm font-black uppercase tracking-tight">
                    {/* Fixed: Removed invalid 'md' prop from Lucide icon component */}
                    <Check size={18} className="text-black mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 md:pt-10 border-t-4 border-black">
              <p className="text-3xl md:text-4xl font-black mb-8 md:mb-10 tracking-tighter">{pkg.price}</p>
              <Link to="/contact" className="w-full flex justify-between items-center bg-black text-white p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-widest hover:opacity-80 transition-all">
                <span>{pkg.cta}</span>
                {/* Fixed: Removed invalid 'md' prop from Lucide icon component */}
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-black text-white p-12 md:p-24 border-4 border-black brutalist-shadow relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 mb-8">
              {/* Fixed: Removed invalid 'md' prop from Lucide icon component */}
              <Ship size={48} className="text-white" />
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">Production Logistics</h3>
            </div>
            <p className="text-lg md:text-xl font-mono opacity-60 font-bold leading-relaxed uppercase">
              We handle it all. Ship your products to our hub; they are insured, stored, and returned. 
              We lock in the destinations, approved models, and handle all local permits.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <Link to="/contact" className="w-full text-center px-10 md:px-16 py-6 md:py-8 border-4 border-white text-xs md:text-base font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Book Onboarding Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
