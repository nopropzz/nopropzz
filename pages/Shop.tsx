
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { Editable, EditableImage, useVisualEditor } from '../components/VisualEditor';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingBag, Eye, Plus } from 'lucide-react';

const Shop: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  const { addToCart } = useCart();
  const { isEditing, getContent, updateContent } = useVisualEditor();
  const categories = ['All', 'Prints', 'Paintings'];

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

  const filteredOriginals = filter === 'All' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.category === filter);

  const handleLinkClick = (e: React.MouseEvent) => {
    if (isEditing) {
      if (!e.altKey) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-[0.4em] mb-4 block opacity-30">ART_STUDIO</span>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic">The_Shop</h1>
          <div className="mt-12 text-xl md:text-2xl font-mono leading-relaxed opacity-70 border-l-4 border-black pl-8 italic font-bold uppercase">
            <Editable id="shop_intro" defaultText="Prints by noPROPZZ founders' world travels. Limited paintings by our artist collaborators." />
          </div>
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
        {/* Original Mock Products */}
        {filteredOriginals.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col"
          >
            <div className="relative aspect-[4/5] bg-zinc-100 border-4 border-black overflow-hidden brutalist-shadow transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
              <Link 
                to={isEditing ? '#' : `/shop/${product.id}`} 
                onClick={handleLinkClick}
                className="block w-full h-full"
              >
                <EditableImage 
                  id={`shop_img_${product.id}`}
                  defaultSrc={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <Link 
                  to={isEditing ? '#' : `/shop/${product.id}`}
                  onClick={handleLinkClick}
                  className="bg-white p-3 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300"
                >
                  <Eye size={20} />
                </Link>
                <button 
                  onClick={() => addToCart({ ...product, quantity: 1, price: product.price, name: getContent(`shop_name_${product.id}`, product.name), image: getContent(`shop_img_${product.id}`, product.image), type: getContent(`shop_type_${product.id}`, product.type) })}
                  className="bg-white p-3 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 delay-75"
                >
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-start px-2">
              <div className="flex-grow">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                  <Editable id={`shop_type_${product.id}`} defaultText={product.type} />
                </span>
                <Link to={isEditing ? '#' : `/shop/${product.id}`} onClick={handleLinkClick}>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mt-1 group-hover:italic transition-all">
                    <Editable id={`shop_name_${product.id}`} defaultText={product.name} />
                  </h3>
                </Link>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black italic tracking-tighter">
                  €<Editable id={`shop_price_${product.id}`} defaultText={product.price.toString()} />
                </div>
              </div>
            </div>

            <button 
              onClick={() => addToCart({ ...product, quantity: 1, price: parseInt(getContent(`shop_price_${product.id}`, product.price.toString())), name: getContent(`shop_name_${product.id}`, product.name), image: getContent(`shop_img_${product.id}`, product.image), type: getContent(`shop_type_${product.id}`, product.type) })}
              className="mt-8 w-full bg-black text-white p-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-transparent hover:text-black border-4 border-black transition-all brutalist-shadow-hover flex items-center justify-center gap-4"
            >
              <span>Add_to_Bag</span>
              <ShoppingBag size={14} />
            </button>
          </motion.div>
        ))}

        {/* Dynamic User Products */}
        {extraProductsIds.map((id, idx) => (
          <motion.div 
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col relative"
          >
            {isEditing && (
              <button 
                onClick={() => removeProductSlot(id)}
                className="absolute -top-4 -right-4 bg-red-600 text-white p-2 border-2 border-black z-30 hover:bg-black transition-all"
              >
                <Plus className="rotate-45" size={16} />
              </button>
            )}
            <div className="relative aspect-[4/5] bg-zinc-100 border-4 border-black overflow-hidden brutalist-shadow transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
              <Link 
                to={isEditing ? '#' : `/shop/${id}`} 
                onClick={handleLinkClick}
                className="block w-full h-full"
              >
                <EditableImage 
                  id={`shop_img_${id}`}
                  defaultSrc="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800"
                  alt="New Product"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button 
                  onClick={() => addToCart({ id, quantity: 1, price: parseInt(getContent(`shop_price_${id}`, '0')), name: getContent(`shop_name_${id}`, 'New Entry'), image: getContent(`shop_img_${id}`, ''), type: 'Print' })}
                  className="bg-white p-3 border-2 border-black hover:bg-black hover:text-white transition-all transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 delay-75"
                >
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-start px-2">
              <div className="flex-grow">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                  <Editable id={`shop_type_${id}`} defaultText="Artist Drop" />
                </span>
                <Link to={isEditing ? '#' : `/shop/${id}`} onClick={handleLinkClick}>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mt-1 group-hover:italic transition-all">
                    <Editable id={`shop_name_${id}`} defaultText="New Entry" />
                  </h3>
                </Link>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black italic tracking-tighter">
                  €<Editable id={`shop_price_${id}`} defaultText="0" />
                </div>
              </div>
            </div>

            <button 
              onClick={() => addToCart({ id, quantity: 1, price: parseInt(getContent(`shop_price_${id}`, '0')), name: getContent(`shop_name_${id}`, 'New Entry'), image: getContent(`shop_img_${id}`, ''), type: 'Print' })}
              className="mt-8 w-full bg-black text-white p-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-transparent hover:text-black border-4 border-black transition-all brutalist-shadow-hover flex items-center justify-center gap-4"
            >
              <span>Add_to_Bag</span>
              <ShoppingBag size={14} />
            </button>
          </motion.div>
        ))}

        {/* Build Mode: Add New Product Button */}
        {isEditing && (
          <button 
            onClick={addProductSlot}
            className="aspect-[4/5] border-4 border-black border-dashed flex flex-col items-center justify-center space-y-4 hover:bg-white hover:border-solid transition-all group"
          >
            <div className="p-6 bg-black text-white rounded-full group-hover:scale-110 transition-transform">
              <Plus size={32} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest">Add_New_Product</span>
          </button>
        )}
      </div>

      <div className="mt-40 bg-zinc-50 border-4 border-black p-12 md:p-24 brutalist-shadow relative overflow-hidden text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase">ARTIST_DROPS</h2>
        <div className="text-lg md:text-2xl font-mono max-w-2xl mx-auto opacity-70 font-bold leading-relaxed mb-12 uppercase">
          <Editable id="shop_footer_callout" defaultText="Are you a photographer, artist or model? Join the collective and sell your work through our curated platform." />
        </div>
        <Link 
          to="/contact" 
          onClick={handleLinkClick}
          className="inline-block px-16 py-8 bg-black text-white text-base font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all brutalist-shadow"
        >
          Apply_to_Sell
        </Link>
      </div>
    </div>
  );
};

export default Shop;
