import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { Editable, EditableImage } from '../components/VisualEditor';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingBag, Eye, Star } from 'lucide-react';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const { addToCart } = useCart();
  const categories = ['All', 'Prints', 'Paintings'];

  const filtered = filter === 'All' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-[0.4em] mb-4 block opacity-30">ART_STUDIO</span>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">The_Shop</h1>
          <p className="mt-12 text-xl md:text-2xl font-mono leading-relaxed opacity-70 border-l-4 border-black pl-8 italic font-bold uppercase">
            <Editable id="shop_intro" defaultText="Prints by noPROPZZ founders' world travels. Limited paintings by our artist collaborators." />
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-12 md:mt-0">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 border-2 border-black text-xs font-black uppercase tracking-[0.2em] transition-all brutalist-shadow-hover ${
                filter === cat ? 'bg-black text-white' : 'bg-white hover:bg-zinc-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filtered.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col"
          >
            <div className="relative aspect-[4/5] bg-zinc-100 border-4 border-black overflow-hidden brutalist-shadow transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
              <Link to={`/shop/${product.id}`} className="block w-full h-full">
                <EditableImage 
                  id={`shop_img_${product.id}`}
                  defaultSrc={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <Link 
                  to={`/shop/${product.id}`}
                  className="bg-white p-3 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300"
                >
                  <Eye size={20} />
                </Link>
                <button 
                  onClick={() => addToCart({ ...product, quantity: 1, price: product.price, name: product.name, image: product.image, type: product.type })}
                  className="bg-white p-3 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 delay-75"
                >
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm text-white transform translate-y-full group-hover:translate-y-0 transition-all pointer-events-none z-10">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest">
                  <Editable id={`shop_desc_${product.id}`} defaultText={product.description} />
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-start px-2">
              <Link to={`/shop/${product.id}`} className="flex-grow">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                  <Editable id={`shop_type_${product.id}`} defaultText={product.type} />
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tighter mt-1 group-hover:italic transition-all">
                  <Editable id={`shop_name_${product.id}`} defaultText={product.name} />
                </h3>
              </Link>
              <div className="text-right">
                <p className="text-3xl font-black italic tracking-tighter">
                  €<Editable id={`shop_price_${product.id}`} defaultText={product.price.toString()} />
                </p>
                {idx === 0 && (
                  <div className="flex items-center gap-1 mt-2 justify-end">
                    <Star size={10} fill="black" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Featured</span>
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={() => addToCart({ ...product, quantity: 1, price: product.price, name: product.name, image: product.image, type: product.type })}
              className="mt-8 w-full bg-black text-white p-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-transparent hover:text-black border-4 border-black transition-all brutalist-shadow-hover flex items-center justify-center gap-4"
            >
              <span>Add_to_Bag</span>
              <ShoppingBag size={14} />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 bg-zinc-50 border-4 border-black p-12 md:p-24 brutalist-shadow relative overflow-hidden text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase">ARTIST_DROPS</h2>
        <p className="text-lg md:text-2xl font-mono max-w-2xl mx-auto opacity-70 font-bold leading-relaxed mb-12 uppercase">
          Are you a photographer, artist or model? Join the collective and sell your work through our curated platform.
        </p>
        <Link 
          to="/contact" 
          className="inline-block px-16 py-8 bg-black text-white text-base font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all brutalist-shadow"
        >
          Apply_to_Sell
        </Link>
      </div>
    </div>
  );
};

export default Shop;