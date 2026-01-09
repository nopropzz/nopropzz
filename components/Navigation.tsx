import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setCartOpen } = useCart();

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Offers', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Talent', path: '/talent' },
    { name: 'Radio', path: '/radio' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-3xl font-black tracking-tighter normal-case">
          noPROPZZ<span className="text-[10px] ml-0.5 font-bold tracking-normal align-top">©</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-tighter font-black hover:line-through transition-all ${
                isActive(link.path) ? 'line-through' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-zinc-100 transition-all border-2 border-transparent hover:border-black"
            >
              <ShoppingBag size={24} strokeWidth={2.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-4 border-black text-xs font-black uppercase tracking-widest bg-black text-white hover:bg-transparent hover:text-black transition-all brutalist-shadow"
            >
              Start Project
            </Link>
          </div>
        </div>

        {/* Sleek Mobile Toggle */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2"
          >
            <ShoppingBag size={20} strokeWidth={2.5} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            className="flex flex-col items-end justify-center gap-[6px] w-8 h-8 relative z-[60] group" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span 
              className={`h-[3px] bg-black transition-all duration-300 ease-in-out ${
                isOpen ? 'w-8 rotate-45 translate-y-[4.5px]' : 'w-5 group-hover:w-8'
              }`} 
            />
            <span 
              className={`h-[3px] bg-black transition-all duration-300 ease-in-out ${
                isOpen ? 'w-8 -rotate-45 -translate-y-[4.5px]' : 'w-8'
              }`} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 md:top-24 bg-white z-50 flex flex-col p-8 md:p-12 space-y-8 animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
          <div className="border-l-4 border-black pl-8 space-y-6 mt-4 overflow-y-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-8">CORE_NAVIGATION</p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-4xl md:text-7xl font-black uppercase tracking-tighter hover:italic transition-all leading-none"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-4xl md:text-7xl font-black uppercase tracking-tighter text-zinc-300 hover:text-black transition-all leading-none"
            >
              Inquire
            </Link>
          </div>
          
          <div className="mt-auto pt-12 border-t-4 border-black bg-zinc-50 -mx-8 -mb-8 md:-mx-12 md:-mb-12 p-8 md:p-12 brutalist-shadow">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">CONNECT_SYSTEM</p>
            <div className="flex flex-wrap gap-x-12 gap-y-6 mt-6">
              <span className="text-sm md:text-lg underline cursor-pointer font-black tracking-tighter hover:bg-black hover:text-white transition-colors">INSTA</span>
              <span className="text-sm md:text-lg underline cursor-pointer font-black tracking-tighter hover:bg-black hover:text-white transition-colors">X_COM</span>
              <span className="text-sm md:text-lg underline cursor-pointer font-black tracking-tighter hover:bg-black hover:text-white transition-colors">LINKEDIN</span>
            </div>
            <div className="mt-12 flex justify-between items-end">
              <p className="text-[9px] font-mono opacity-30 uppercase font-black tracking-widest">© 2026 noPROPZZ ESTONIA</p>
              <p className="text-[9px] font-mono opacity-30 uppercase font-black tracking-widest">BUILD_V1.4.0</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;