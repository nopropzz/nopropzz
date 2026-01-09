import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../components/CartContext';
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

const ShopDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-black uppercase">Product_Not_Found</h2>
        <Link to="/shop" className="mt-8 underline font-black uppercase tracking-widest">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.availableSizes && !selectedSize) {
      alert('Please select a size before adding to bag.');
      return;
    }
    addToCart({ 
      ...product, 
      quantity: 1, 
      name: `${product.name}${selectedSize ? ` (${selectedSize})` : ''}` 
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-20">
      <Link to="/shop" className="inline-flex items-center space-x-4 text-sm font-black uppercase tracking-widest mb-12 md:mb-16 hover:opacity-50 transition-all border-b-2 border-black pb-2">
        <ArrowLeft size={18} />
        <span>Back to Art Studio</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Product Visual */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-4 border-black brutalist-shadow bg-zinc-100 aspect-[4/5] overflow-hidden sticky top-32"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>

        {/* Right: Product Interaction */}
        <div className="lg:col-span-5 space-y-12">
          <header>
            <span className="text-xs font-black uppercase tracking-[0.4em] opacity-30 block mb-4">{product.type}</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 italic">{product.name}</h1>
            <p className="text-4xl font-black tracking-tight mb-8">€{product.price}</p>
            <p className="text-lg font-mono font-bold leading-relaxed opacity-70 uppercase border-l-4 border-black pl-8">
              {product.description}
            </p>
          </header>

          {/* Size Matrix */}
          {product.availableSizes && (
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40">SELECT_MATRIX_DIMENSIONS</h4>
              <div className="grid grid-cols-3 gap-4">
                {product.availableSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 border-2 border-black text-xs font-black uppercase tracking-widest transition-all ${
                      selectedSize === size ? 'bg-black text-white brutalist-shadow' : 'bg-white hover:bg-zinc-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-black text-white p-8 text-sm font-black uppercase tracking-[0.4em] brutalist-shadow-hover transition-all flex justify-between items-center group"
            >
              <span>Add_to_Bag</span>
              <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
            </button>
            <p className="text-[9px] font-mono text-center opacity-30 font-bold tracking-widest uppercase italic">
              Production status: verified / shipping global
            </p>
          </div>

          {/* Art Story */}
          <section className="pt-12 border-t-4 border-black space-y-8">
            <h3 className="text-xl font-black uppercase tracking-tighter italic underline underline-offset-8 decoration-4">The_Story_of_the_Piece</h3>
            <p className="text-base font-mono font-bold leading-relaxed opacity-70 uppercase">
              {product.story || "This piece represents a specific moment in the noPropzz journey, captured during global production drops where real human connection meets the raw brutalist environment."}
            </p>
          </section>

          {/* Technical Specs */}
          <section className="pt-12 border-t-4 border-black space-y-8">
            <h3 className="text-xl font-black uppercase tracking-tighter">Technical_Specifications</h3>
            <ul className="grid grid-cols-1 gap-4">
              {product.specs?.map((spec, idx) => (
                <li key={idx} className="flex items-center space-x-4 text-[11px] font-black uppercase tracking-widest border-b border-black/5 pb-2">
                  <div className="w-1.5 h-1.5 bg-black" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Trust Flags */}
          <div className="grid grid-cols-3 gap-4 pt-12">
            <div className="flex flex-col items-center text-center space-y-3 opacity-40 hover:opacity-100 transition-opacity">
              <ShieldCheck size={24} />
              <span className="text-[8px] font-black uppercase tracking-widest">Museum_Grade</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 opacity-40 hover:opacity-100 transition-opacity">
              <Truck size={24} />
              <span className="text-[8px] font-black uppercase tracking-widest">Global_Transit</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 opacity-40 hover:opacity-100 transition-opacity">
              <RefreshCcw size={24} />
              <span className="text-[8px] font-black uppercase tracking-widest">Verified_Drop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Drop Section */}
      <section className="mt-40 border-t-4 border-black pt-24">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 italic">Related_From_The_Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {MOCK_PRODUCTS.filter(p => p.id !== id).slice(0, 3).map(related => (
            <Link to={`/shop/${related.id}`} key={related.id} className="group">
              <div className="aspect-[4/5] border-4 border-black overflow-hidden brutalist-shadow transition-all group-hover:shadow-none mb-6">
                <img src={related.image} alt={related.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter">{related.name}</h4>
              <p className="text-xs font-mono font-bold opacity-40 mt-1 uppercase tracking-widest">{related.type}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopDetail;