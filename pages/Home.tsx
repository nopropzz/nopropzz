
import React from 'react';
import Hero from '../components/Hero';
import { MOCK_PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, HeartHandshake, ShieldCheck, ShoppingBag, Plus } from 'lucide-react';
import { useCart } from '../components/CartContext';
import { Editable, EditableImage, useVisualEditor } from '../components/VisualEditor';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const { isEditing, getContent, updateContent } = useVisualEditor();

  // Unified Registry logic - using 'global_product_registry'
  const extraProductsStr = getContent('global_product_registry', '');
  const extraProductsIds = extraProductsStr ? extraProductsStr.split(',') : [];

  const addProductSlot = () => {
    const newId = `shop_dyn_${Date.now()}`;
    const newList = extraProductsIds.length > 0 ? `${extraProductsStr},${newId}` : newId;
    updateContent('global_product_registry', newList);
  };

  const removeProductSlot = (idToRemove: string) => {
    const newList = extraProductsIds.filter(id => id !== idToRemove).join(',');
    updateContent('global_product_registry', newList);
  };

  // Curated Best Prints for Home Display (Total 6)
  const homeMockProducts = [
    { id: 'p1', defaultName: 'GANGSTA', defaultPrice: 125, defaultType: 'Limited Print', defaultImage: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800' },
    { id: 'p2', defaultName: 'REAL SUGAR', defaultPrice: 85, defaultType: 'Gallery Edition', defaultImage: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800' },
    { id: 'p5', defaultName: 'ACT NORMAL', defaultPrice: 150, defaultType: 'Limited Print', defaultImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800' },
    { id: 'p3', defaultName: 'BRUTAL_DECK_01', defaultPrice: 240, defaultType: 'Partner Work', defaultImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800' }
  ];

  // Logic: Display all 4 mocks + up to 2 dynamic products to reach a limit of 6 on Home.
  const displayedDynamicIds = extraProductsIds.slice(0, Math.max(0, 6 - homeMockProducts.length));

  const handleLinkClick = (e: React.MouseEvent) => {
    if (isEditing) {
      if (!e.altKey) {
        e.preventDefault();
      }
    }
  };

  const marqueeText = "nopropzz / art studio / creative agency / artist community / conscious brands / ";
  const whiteMarqueeText = "/ nopropzz / ";

  return (
    <div>
      <Hero />

      {/* Hero-to-Mission White Marquee */}
      <div className="w-full bg-white py-4 overflow-hidden border-b-4 border-black select-none z-30 relative">
        <div className="flex whitespace-nowrap animate-marquee-fast">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-black text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mx-2">
              {whiteMarqueeText}
            </span>
          ))}
        </div>
      </div>
      
      {/* The Mission Statement */}
      <section className="bg-black text-white py-20 md:py-48 px-6 border-b-4 border-black relative">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 md:mb-12 leading-[0.85]"
            >
              <Editable id="mission_title_1" defaultText="CAMPAIGNS" /><br/>
              <Editable id="mission_title_2" defaultText="DRIVEN BY STORY" /><br/>
              <span className="italic text-zinc-500">
                <Editable id="mission_title_3" defaultText="AND DREAMLIKE LOCATIONS." />
              </span>
            </motion.h2>
            <div className="text-lg md:text-3xl font-mono font-bold leading-tight opacity-80 uppercase">
              <Editable 
                id="mission_desc" 
                defaultText="A Scandinavian-founded creative agency and art studio connecting artists and talent with conscious brands through story-driven artistic production." 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full lg:w-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 md:p-14 border-4 border-white brutalist-shadow bg-zinc-900 flex flex-col items-center lg:items-start text-center lg:text-left transition-all"
            >
               <ShieldCheck className="mb-6 md:mb-8 text-white" size={32} />
               <h4 className="text-xl md:text-2xl font-black uppercase mb-3 italic">
                 <Editable id="stat_1_title" defaultText="SUSTAINABLE" />
               </h4>
               <p className="text-[9px] md:text-[10px] font-mono opacity-50 uppercase tracking-[0.4em]">
                 <Editable id="stat_1_sub" defaultText="BRANDS ONLY" />
               </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 md:p-14 border-4 border-white brutalist-shadow bg-zinc-900 flex flex-col items-center lg:items-start text-center lg:text-left transition-all"
            >
               <Globe className="mb-6 md:mb-8 text-white" size={32} />
               <h4 className="text-xl md:text-2xl font-black uppercase mb-3 italic">
                 <Editable id="stat_2_title" defaultText="WORLDWIDE" />
               </h4>
               <p className="text-[9px] md:text-[10px] font-mono opacity-50 uppercase tracking-[0.4em]">
                 <Editable id="stat_2_sub" defaultText="PRODUCTION" />
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Offers Section */}
      <section className="pt-12 md:pt-24 pb-4 px-6 max-w-[1440px] mx-auto">
        <header className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-8 md:pb-16">
           <div className="mb-8 md:mb-0">
              <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.5em] opacity-30">THE_ENTRY_POINTS</span>
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-black mt-4 md:mt-6 tracking-tighter italic uppercase">
                <Editable id="offers_header" defaultText="CHOOSE_PATH" />
              </h2>
           </div>
           <Link 
             to={isEditing ? '#' : '/services'} 
             onClick={handleLinkClick}
             className="text-lg md:text-2xl font-black uppercase tracking-widest hover:opacity-50 transition-all flex items-center space-x-4 md:space-x-6 group"
           >
             <span>View All Packages</span>
             <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform duration-300" />
           </Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          {/* AI Spark Kit */}
          <div className="bg-white border-4 border-black p-8 md:p-14 brutalist-shadow-hover transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <Zap size={36} className="text-black md:w-12 md:h-12" />
               <span className="bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest italic">
                 <Editable id="offer_1_tag" defaultText="Rapid Production" />
               </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none">
              <Editable id="offer_1_title" defaultText="AI Spark Kit" />
            </h3>
            <div className="text-base font-mono font-bold opacity-70 mb-10 md:mb-12 leading-relaxed flex-grow uppercase">
              <Editable id="offer_1_desc" defaultText="Testing a new product? We create AI-powered visuals fast—product mockups, mood boards, story starters." />
            </div>
            <div className="pt-8 border-t-4 border-black flex justify-between items-center">
               <span className="text-2xl md:text-3xl font-black tracking-tighter italic">
                 €<Editable id="offer_1_price" defaultText="750–1.2K" />
               </span>
               <Link 
                 to={isEditing ? '#' : '/contact'} 
                 onClick={handleLinkClick}
                 className="bg-black text-white px-6 py-4 md:px-8 md:py-6 text-[10px] font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4"
               >
                 <span>Initiate</span>
                 <ArrowRight size={18} />
               </Link>
            </div>
          </div>

          {/* Destination Drop */}
          <div className="bg-black text-white p-8 md:p-14 brutalist-shadow transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <Globe size={36} className="md:w-12 md:h-12" />
               <span className="bg-white text-black px-3 py-1 text-[9px] font-black uppercase tracking-widest italic">
                 <Editable id="offer_2_tag" defaultText="Global Production" />
               </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 italic leading-none">
              <Editable id="offer_2_title" defaultText="Destination Drop" />
            </h3>
            <div className="text-base font-mono font-bold opacity-70 mb-10 md:mb-12 leading-relaxed flex-grow uppercase">
              <Editable id="offer_2_desc" defaultText="Full campaigns in breathtaking global locations—real models, authentic stories, epic scenery." />
            </div>
            <div className="pt-8 border-t-4 border-white flex justify-between items-center">
               <span className="text-2xl md:text-3xl font-black tracking-tighter italic">
                 €<Editable id="offer_2_price" defaultText="4K+" />
               </span>
               <Link 
                 to={isEditing ? '#' : '/contact'} 
                 onClick={handleLinkClick}
                 className="bg-white text-black px-6 py-4 md:px-8 md:py-6 text-[10px] font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4"
               >
                 <span>Reserve</span>
                 <ArrowRight size={18} />
               </Link>
            </div>
          </div>

          {/* Story Partner */}
          <div className="bg-zinc-100 border-4 border-black p-8 md:p-14 brutalist-shadow-hover transition-all flex flex-col">
            <div className="flex justify-between items-start mb-8 md:mb-10">
               <HeartHandshake size={36} className="text-black md:w-12 md:h-12" />
               <span className="bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest italic">
                 <Editable id="offer_3_tag" defaultText="Partnership" />
               </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none">
              <Editable id="offer_3_title" defaultText="Story Partner" />
            </h3>
            <div className="text-base font-mono font-bold opacity-70 mb-10 md:mb-12 leading-relaxed flex-grow uppercase">
              <Editable id="offer_3_desc" defaultText="Your ongoing visual storyteller. For brands building long‑term iconic visual identities worldwide." />
            </div>
            <div className="pt-8 border-t-4 border-black flex justify-between items-center">
               <span className="text-2xl md:text-3xl font-black tracking-tighter italic">
                 €<Editable id="offer_3_price" defaultText="2.5K+/mo" />
               </span>
               <Link 
                 to={isEditing ? '#' : '/contact'} 
                 onClick={handleLinkClick}
                 className="bg-black text-white px-6 py-4 md:px-8 md:py-6 text-[10px] font-black uppercase tracking-widest flex items-center space-x-3 md:space-x-4"
               >
                 <span>Apply</span>
                 <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="pt-2 md:pt-4 pb-12 md:pb-24 px-6 max-w-[1440px] mx-auto overflow-hidden">
        <div className="border-t-4 border-black pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-24 gap-6">
             <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none italic">
               <Editable id="port_preview_title" defaultText="Recent_Deployments" />
             </h3>
             <Link to="/portfolio" className="text-lg md:text-2xl font-black uppercase tracking-widest hover:opacity-50 transition-all flex items-center space-x-4 md:space-x-6 group" onClick={handleLinkClick}>
               <span>Full Archive</span>
               <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform duration-300" />
             </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-l-0 sm:border-l-4 border-t-0 sm:border-t-4 border-black">
            {MOCK_PROJECTS.slice(0, 3).map((project) => (
              <Link 
                to={isEditing ? '#' : `/portfolio/${project.slug}`} 
                onClick={handleLinkClick}
                key={project.id}
                className="group border-b-4 sm:border-r-4 sm:border-b-4 border-black p-8 md:p-14 hover:bg-zinc-50 transition-all"
              >
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden border-2 border-black mb-6 md:mb-10">
                  <img 
                    src={project.featured_image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">{project.title}</h4>
                <p className="text-[9px] md:text-xs font-mono opacity-50 mt-4 md:mt-6 uppercase font-bold tracking-[0.3em]">{project.category} // {project.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Marquee - Moving Bar on Top of Prints */}
      <div className="w-full bg-black py-4 md:py-6 overflow-hidden border-y-4 border-black select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-white text-[10px] md:text-base font-black uppercase tracking-[0.4em] mx-4">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Shop Preview Section - Curated 6 Best */}
      <section className="pt-12 md:pt-24 pb-20 md:pb-48 bg-zinc-50 px-6 border-t-4 border-black">
        <div className="max-w-[1440px] mx-auto">
          <header className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
             <div>
                <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.5em] opacity-30">LIMITED_EDITIONS</span>
                <h2 className="text-5xl sm:text-7xl md:text-9xl font-black mt-4 md:mt-6 tracking-tighter uppercase leading-none italic">
                  <Editable id="shop_preview_header" defaultText="THE_6_BEST_PRINTS" />
                </h2>
             </div>
             <Link to="/shop" className="text-lg md:text-2xl font-black uppercase tracking-widest hover:opacity-50 transition-all flex items-center space-x-4 md:space-x-6 group" onClick={handleLinkClick}>
               <span>BROWSE ALL</span>
               <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform duration-300" />
             </Link>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
            {/* Displaying Mock Favorites */}
            {homeMockProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative aspect-[4/5] bg-white border-4 border-black overflow-hidden brutalist-shadow transition-all group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2">
                  <Link 
                    to={isEditing ? '#' : `/shop/${product.id}`}
                    onClick={handleLinkClick}
                    className="block w-full h-full"
                  >
                    <EditableImage 
                      id={`shop_img_${product.id}`}
                      defaultSrc={product.defaultImage}
                      alt={product.defaultName}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                    <button 
                      onClick={() => addToCart({ 
                        id: product.id, 
                        name: getContent(`shop_name_${product.id}`, product.defaultName), 
                        price: parseInt(getContent(`shop_price_${product.id}`, product.defaultPrice.toString())), 
                        image: getContent(`shop_img_${product.id}`, product.defaultImage), 
                        quantity: 1, 
                        type: getContent(`shop_type_${product.id}`, product.defaultType) 
                      })}
                      className="bg-white p-3 md:p-4 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-500"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-start px-2">
                  <div className="flex-grow">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40">
                      <Editable id={`shop_type_${product.id}`} defaultText={product.defaultType} />
                    </span>
                    <Link 
                      to={isEditing ? '#' : `/shop/${product.id}`}
                      onClick={handleLinkClick}
                    >
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-1 italic group-hover:not-italic transition-all">
                        <Editable id={`shop_name_${product.id}`} defaultText={product.defaultName} />
                      </h3>
                    </Link>
                  </div>
                  <div className="text-3xl md:text-4xl font-black italic tracking-tighter">
                    €<Editable id={`shop_price_${product.id}`} defaultText={product.defaultPrice.toString()} />
                  </div>
                </div>
              </div>
            ))}

            {/* Displaying Limited Dynamic Favorites (to reach total 6) */}
            {displayedDynamicIds.map((id) => (
              <div key={id} className="group relative">
                {isEditing && (
                  <button 
                    onClick={() => removeProductSlot(id)}
                    className="absolute -top-4 -right-4 bg-red-600 text-white p-2 border-2 border-black z-30 hover:bg-black transition-all"
                  >
                    <Plus className="rotate-45" size={16} />
                  </button>
                )}
                <div className="relative aspect-[4/5] bg-white border-4 border-black overflow-hidden brutalist-shadow transition-all group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2">
                  <Link 
                    to={isEditing ? '#' : `/shop/${id}`}
                    onClick={handleLinkClick}
                    className="block w-full h-full"
                  >
                    <EditableImage 
                      id={`shop_img_${id}`}
                      defaultSrc="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
                      alt="New Print"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                    <button 
                      onClick={() => addToCart({ id: id, name: getContent(`shop_name_${id}`, 'New Entry'), price: parseInt(getContent(`shop_price_${id}`, '0')), image: getContent(`shop_img_${id}`, ''), quantity: 1, type: 'Print' })}
                      className="bg-white p-3 md:p-4 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-500"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-start px-2">
                  <div className="flex-grow">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40">
                      <Editable id={`shop_type_${id}`} defaultText="Artist Drop" />
                    </span>
                    <Link 
                      to={isEditing ? '#' : `/shop/${id}`}
                      onClick={handleLinkClick}
                    >
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-1 italic group-hover:not-italic transition-all">
                        <Editable id={`shop_name_${id}`} defaultText="New Entry" />
                      </h3>
                    </Link>
                  </div>
                  <div className="text-3xl md:text-4xl font-black italic tracking-tighter">
                    €<Editable id={`shop_price_${id}`} defaultText="0" />
                  </div>
                </div>
              </div>
            ))}

            {/* Build Mode: Add New Slot Button (Always visible in edit mode) */}
            {isEditing && (
              <button 
                onClick={addProductSlot}
                className="aspect-[4/5] border-4 border-black border-dashed flex flex-col items-center justify-center space-y-4 hover:bg-white hover:border-solid transition-all group"
              >
                <div className="p-6 bg-black text-white rounded-full group-hover:scale-110 transition-transform">
                  <Plus size={32} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">Add_New_Print</span>
                <p className="text-[8px] opacity-40 font-mono font-bold uppercase text-center px-4">(Will appear in Shop archive)</p>
              </button>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-marquee-fast {
          animation: marquee 6.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
