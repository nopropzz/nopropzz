import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setCartOpen, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-[110] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l-4 border-black z-[120] flex flex-col shadow-2xl"
          >
            <div className="p-8 border-b-4 border-black flex items-center justify-between bg-zinc-50">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Your Bag</h2>
              <button 
                onClick={() => setCartOpen(false)}
                className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-zinc-100 flex items-center justify-center border-2 border-black border-dashed">
                    <Trash2 size={32} strokeWidth={1.5} className="opacity-20" />
                  </div>
                  <p className="text-xs font-mono font-bold uppercase opacity-50 tracking-widest italic">Bag is empty_000</p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="px-8 py-4 border-4 border-black text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                  >
                    Go Shop
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 border-b-2 border-zinc-100 pb-8 last:border-0">
                    <div className="w-24 h-24 bg-zinc-100 border-2 border-black flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[10px] font-mono font-bold uppercase opacity-40">{item.type}</p>
                          <h4 className="text-lg font-black uppercase leading-none mt-1">{item.name}</h4>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="opacity-20 hover:opacity-100 hover:text-red-600 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border-2 border-black">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-zinc-100 transition-all px-2"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 text-xs font-black border-x-2 border-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-zinc-100 transition-all px-2"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-black tracking-tighter italic">€{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t-4 border-black bg-zinc-50 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
                    <span>Shipping_Estimate</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black uppercase tracking-tighter pt-4 border-t-2 border-black/5">
                    <span>Total</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-black text-white p-8 text-sm font-black uppercase tracking-[0.3em] flex justify-between items-center brutalist-shadow hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-none">
                  <span>Checkout Now</span>
                  <ArrowRight size={20} />
                </button>
                <p className="text-[8px] font-mono text-center opacity-30 font-bold tracking-widest">© 2026 NOPROPZZ / SECURE_PAYMENT_ENABLED</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
