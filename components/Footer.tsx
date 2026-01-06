import React from 'react';
import { Link } from 'react-router-dom';
import { APP_VERSION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-black mt-40">
      <div className="max-w-[1440px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-6">
          <h2 className="text-7xl md:text-[8rem] font-black mb-12 leading-[0.8] tracking-tighter uppercase">LET'S BUILD<br/>THE FUTURE.</h2>
          <p className="text-xl md:text-2xl max-w-xl opacity-70 leading-relaxed font-mono font-bold uppercase">
            noPROPZZ is a Scandinavian creative collective lead by Marleen & Kätlin, orchestrated by Jürgen. We redefine the boundaries of Nordic design through raw brutalism.
          </p>
        </div>
        
        <div className="lg:col-span-3 space-y-10">
          <h4 className="font-black text-xs uppercase tracking-[0.4em] opacity-30">NAVIGATION_MAP</h4>
          <ul className="space-y-4 text-xl md:text-2xl font-black uppercase tracking-tighter">
            <li><Link to="/portfolio" className="hover:line-through transition-all">Portfolio</Link></li>
            <li><Link to="/services" className="hover:line-through transition-all">Packages</Link></li>
            <li><Link to="/events" className="hover:line-through transition-all">Events</Link></li>
            <li><Link to="/about" className="hover:line-through transition-all">About</Link></li>
            <li><Link to="/admin" className="text-zinc-300 hover:text-black hover:line-through transition-all">System_Login</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-10">
          <h4 className="font-black text-xs uppercase tracking-[0.4em] opacity-30">CONNECT_TERMINAL</h4>
          <ul className="space-y-4 text-xl md:text-2xl font-black uppercase tracking-tighter">
            <li><a href="#" className="hover:italic transition-all uppercase">Instagram</a></li>
            <li><a href="#" className="hover:italic transition-all uppercase">X_Studio</a></li>
            <li><a href="#" className="hover:italic transition-all uppercase">LinkedIn</a></li>
            <li><a href="mailto:hello@nopropzz.com" className="hover:underline underline-offset-8 transition-all uppercase">Email_Studio</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <span className="opacity-40">© 2026 noPROPZZ Creative Agency // V{APP_VERSION}</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
            <span>Deployment: ACTIVE</span>
          </div>
        </div>
        
        <div className="flex space-x-10 mt-8 md:mt-0 opacity-40">
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Privacy_Protocol</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">Terms_Manifesto</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;