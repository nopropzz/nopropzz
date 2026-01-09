import React from 'react';
import Hero from '../components/Hero';
import { MOCK_PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, HeartHandshake, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useCart } from '../components/CartContext';
import { Editable, EditableImage } from '../components/VisualEditor';

// Mock small set of products for home page preview
const HOME_PRODUCTS = [
  {
    id: 'p1',
    name: 'Nordic Shadow #04',
    price: 125,
    type: 'Limited Print',
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800',
    description: 'High-contrast monochrome print on 300gsm raw archival paper.'
  },
  {
    id: 'p2',
    name: 'Ericeira Horizon',
    price: 85,
    type: 'Gallery Edition',
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'Captured during the Vita Earth campaign drop.'
  },
  {
    id: 'p5',
    name: 'Atlas Dust #09',
    price: 150,
    type: 'Limited Print',
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    description: 'Produced during the Morocco campaign drop.'
  }
];

const Home: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Hero />
      
      {/* The Mission Statement */}
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
              A Scandinavian creative agency creating campaigns for conscious brands. 
              Our online studio shop features prints and limited works by our artist community. 
              We lead with real human creativity, using AI thoughtfully to scale it globally 
              when needed, and build connections that last.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full lg:w-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 md:p-10 border-4 border-white brutalist-shadow bg-zinc-900 flex flex-col items-center lg:items-start text-center lg:text-left transition-all"
            >
               <ShieldCheck className="mb-6 text-white" size={32} />
               <h4 className="text-xl font-black uppercase mb-2">SUSTAINABLE</h4>
               <p className="text-xs font-mono opacity-60 uppercase tracking-widest">brands only</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 md:p-10 border-4 border-white brutalist-shadow bg-zinc-900 flex flex-col items-center lg:items-start text-center lg:text-left transition-all"
            >
               <Globe className="mb-6 text-white" size={32} />
               <h4 className="text-xl font-black uppercase mb-2">WORLDWIDE</h4>
               <p className="text-xs font-mono opacity-60 uppercase tracking-widest">production</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Offers Section - Restored to 3-column layout */}
      <section className="py-20 md:py-40 px-6 max-w-[1440px] mx-auto">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-10 md:pb-12">
           <div className="mb-8 md:mb-0">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-30">THE_ENTRY_POINTS</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mt-4 md:mt-6 tracking-tighter italic uppercase">CHOOSE_PATH</h2>
           </div>
           <Link to="/services" className="text-lg md:text-xl font-black uppercase tracking-widest underline decoration-4 underline-offset-8 hover:opacity-50 transition-all">
             View All Packages
           </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* AI Spark Kit */}
          <div className="bg-white border-4 border-black p-8 md:p-12 brutalist-shadow-hover transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <Zap size={40} className="text-black" />
               <span className="bg-black text-white px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest">Rapid Production</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter mb-4">AI Spark Kit</h3>
            <p className="text-base font-mono font-bold opacity-70 mb-10 leading-relaxed flex-grow uppercase">
              Testing a new product or idea? Send your product or just an image. We create AI-powered visuals fast—product mockups, mood boards, ad tests, story starters.
            </p>
            <div className="pt-8 md:pt-10 border-t-4 border-black flex justify-between items-center">
               <span className="text-2xl md:text-3xl font-black tracking-tighter">€750–€1.2K</span>
               <Link to="/contact" className="bg-black text-white px-6 md:px-8 py-5 md:py-6 text-xs font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4">
                 <span>Initiate</span>
                 <ArrowRight size={20} />
               </Link>
            </div>
          </div>

          {/* Destination Drop */}
          <div className="bg-black text-white p-8 md:p-12 brutalist-shadow transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <Globe size={40} />
               <span className="bg-white text-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest">Global Production</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter mb-4 italic">Destination Drop</h3>
            <p className="text-base font-mono font-bold opacity-70 mb-10 leading-relaxed flex-grow uppercase">
              Ready to take your brand to the next level? We produce full campaigns in breathtaking global locations—real models, authentic stories, epic scenery.
            </p>
            <div className="pt-8 md:pt-10 border-t-4 border-white flex justify-between items-center">
               <span className="text-2xl md:text-3xl font-black tracking-tighter">€4K+</span>
               <Link to="/contact" className="bg-white text-black px-6 md:px-8 py-5 md:py-6 text-xs font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4">
                 <span>Reserve</span>
                 <ArrowRight size={20} />
               </Link>
            </div>
          </div>

          {/* Story Partner */}
          <div className="bg-zinc-100 border-4 border-black p-8 md:p-12 brutalist-shadow-hover transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <HeartHandshake size={40} className="text-black" />
               <span className="bg-black text-white px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest">Partnership</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter mb-4">Story Partner</h3>
            <p className="text-base font-mono font-bold opacity-70 mb-10 leading-relaxed flex-grow uppercase">
              Your ongoing visual storyteller. For brands building long‑term iconic visual identities while we take your products to beautiful destinations worldwide.
            </p>
            <div className="pt-8 md:pt-10 border-t-4 border-black flex justify-between items-center">
               <span className="text-2xl md:text-3xl font-black tracking-tighter">€2.5K+/mo</span>
               <Link to="/contact" className="bg-black text-white px-6 md:px-8 py-5 md:py-6 text-xs font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4">
                 <span>Apply</span>
                 <ArrowRight size={20} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview (Recent Deployments) */}
      <section className="py-20 md:py-40 px-6 max-w-[1440px] mx-auto">
        <div className="border-t-4 border-black pt-16 md:pt-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-20 gap-6">
             <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">Recent_Deployments</h3>
             <Link to="/portfolio" className="text-xs md:text-sm font-black uppercase tracking-widest flex items-center space-x-2 group">
               <span>Full Archive</span>
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

      {/* Marquee Divider - Replaces Detailed Story Partner and scaled down */}
      <div className="py-8 md:py-16 border-y-4 border-black overflow-hidden flex whitespace-nowrap bg-black text-white">
        <div className="animate-marquee flex items-center">
          {[1,2,3,4,5,6,7,8].map(i => (
            <span key={i} className="text-4xl sm:text-5xl md:text-7xl font-black px-8 md:px-12 tracking-tighter uppercase italic">noPROPZZ / REAL SHOOTS / AI SCALE / SUSTAINABLE ONLY / </span>
          ))}
        </div>
      </div>

      {/* Shop Preview Section (The Prints) */}
      <section className="py-20 md:py-40 bg-zinc-50 px-6">
        <div className="max-w-[1440px] mx-auto">
          <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
             <div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-30">LIMITED_EDITIONS</span>
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mt-4 md:mt-6 tracking-tighter uppercase">THE_PRINTS</h2>
             </div>
             <Link to="/shop" className="text-lg md:text-xl font-black uppercase tracking-widest underline decoration-4 underline-offset-8 hover:opacity-50 transition-all">
               BROWSE ALL
             </Link>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {HOME_PRODUCTS.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[4/5] bg-white border-4 border-black overflow-hidden brutalist-shadow transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
                  <EditableImage 
                    id={`shop_img_${product.id}`}
                    defaultSrc={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                    <button 
                      onClick={() => addToCart({ ...product, quantity: 1, price: product.price, name: product.name, image: product.image, type: product.type })}
                      className="bg-white p-3 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start px-2">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                      <Editable id={`shop_type_${product.id}`} defaultText={product.type} />
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mt-1">
                      <Editable id={`shop_name_${product.id}`} defaultText={product.name} />
                    </h3>
                  </div>
                  <p className="text-3xl font-black italic tracking-tighter">
                    €<Editable id={`shop_price_${product.id}`} defaultText={product.price.toString()} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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