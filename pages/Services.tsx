import React from 'react';
import { ArrowRight, Check, Zap, Globe, HeartHandshake, Ship, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const packages = [
    {
      id: "spark",
      title: "AI Spark Kit",
      price: "€750–€1,200",
      tagline: "TEST IDEAS QUICKLY",
      icon: Zap,
      desc: "Testing a new product or idea? Send your product or just an image. We create AI-powered visuals fast—product mockups, mood boards, ad tests, story starters.",
      samples: [
        { url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600", label: "AI_ENV_GEN" },
        { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", label: "MOOD_BOARD" }
      ],
      features: [
        "Strategy call + mood board",
        "15 AI-images",
        "5 video clips",
        "1 revision round",
        "20% off future real shoots"
      ],
      cta: "Book Spark Kit",
      timeline: "2–5 Days"
    },
    {
      id: "drop",
      title: "Destination Drop",
      price: "€4,000+",
      tagline: "EPIC GLOBAL PRODUCTION",
      icon: Globe,
      desc: "Ready to take your brand to the next level? We produce full campaigns in breathtaking global locations—real models, authentic stories, epic scenery.",
      samples: [
        { url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600", label: "CAMPAIGN_STILL" },
        { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=crop&q=80&w=600", label: "LOCATION_RAW" }
      ],
      features: [
        "100+ real photos + 15 video clips",
        "1 cinematic campaign video (30-60s edit)",
        "BTS Stories package",
        "noPROPZZ Blog feature",
        "Model casting + logistics",
        "Full rights licensing"
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
      desc: "Your ongoing visual storyteller. For brands building iconic visual identities while we take your products to beautiful destinations worldwide.",
      samples: [
        { url: "https://images.unsplash.com/photo-1492691523567-61707d2e5ef4?auto=format&fit=crop&q=80&w=600", label: "NARRATIVE_SET" },
        { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600", label: "BRAND_HERO" }
      ],
      features: [
        "Monthly strategy calls + mood board",
        "4 destination Drops per year",
        "70 real photos per month",
        "10 video clips per month",
        "Location + model scouting every drop"
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
        <p className="text-lg md:text-2xl font-mono max-w-3xl opacity-70 leading-relaxed font-bold uppercase whitespace-pre-line">
          Worldwide campaigns from epic locations. We manage locations, talent, production—everything.
          {"\n"}Ship your goods. We deliver the magic. AI scaling available.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-px bg-transparent lg:bg-black border-0 lg:border-4 lg:border-black mb-20 md:mb-32 lg:brutalist-shadow">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors border-4 lg:border-0 lg:border-r-4 border-black last:border-r-0 brutalist-shadow lg:shadow-none">
            <div className="mb-8 md:mb-10 flex justify-between items-start">
              <div className="p-4 md:p-5 bg-black text-white brutalist-shadow">
                <pkg.icon size={32} />
              </div>
              <span className="text-xs md:text-sm font-mono font-black uppercase tracking-widest">{pkg.timeline}</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter leading-none">{pkg.title}</h2>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 mb-8 md:mb-10">{pkg.tagline}</p>
            
            <p className="text-lg md:text-xl font-mono opacity-80 mb-10 md:mb-12 font-bold leading-relaxed uppercase">{pkg.desc}</p>
            
            {/* Visual Samples Grid */}
            <div className="mb-12">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 border-b-2 border-black pb-2 flex items-center gap-2">
                <ImageIcon size={14} />
                <span>Output_Examples</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {pkg.samples.map((sample, sIdx) => (
                  <div key={sIdx} className="group relative aspect-[4/5] bg-zinc-100 border-2 border-black overflow-hidden brutalist-shadow-hover transition-all">
                    <img 
                      src={sample.url} 
                      alt={sample.label} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[8px] font-mono font-black tracking-widest text-center">{sample.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 md:mb-16 flex-grow">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8 border-b-2 border-black pb-2">What you get:</h4>
              <ul className="space-y-4 md:space-y-5">
                {pkg.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start space-x-3 md:space-x-4 text-xs md:text-sm font-black uppercase tracking-tight">
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
              <Ship size={48} className="text-white" />
              <h3 className="text-3xl font-black tracking-tighter uppercase leading-none italic">production logistics</h3>
            </div>
            <p className="text-lg md:text-xl font-mono opacity-60 font-bold leading-relaxed uppercase whitespace-pre-line">
              We handle it all.
              {"\n"}Ship your products to us—they're fully insured, safely stored, and returned post-shoot. We lock in destinations, cast models for your approval, and manage all local permits and logistics.
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