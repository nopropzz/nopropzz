
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_VERSION } from '../constants';
import { Editable, useVisualEditor } from './VisualEditor';

const Footer: React.FC = () => {
  const { isEditing, showToast } = useVisualEditor();

  const handleLinkClick = (e: React.MouseEvent) => {
    if (isEditing) {
      if (!e.altKey) {
        e.preventDefault();
        showToast('NAVIGATION_LOCKED: HOLD_ALT_TO_JUMP', 'info');
      }
    }
  };

  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="max-w-[1440px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-6">
          <h2 className="text-7xl md:text-[8rem] font-black mb-12 leading-[0.8] tracking-tighter uppercase">
            <Editable id="footer_cta_heading" defaultText="LET'S BUILD THE FUTURE." />
          </h2>
          <div className="space-y-8">
            <div className="max-w-xl opacity-70 font-mono font-bold uppercase">
              <p className="text-xl md:text-3xl mb-10 leading-tight">
                <Editable id="footer_bio_main" defaultText="noPROPZZ is a Scandinavian creative agency, art studio, and global community built around real human stories." />
              </p>
              <div className="text-base md:text-lg leading-relaxed flex flex-col space-y-2 opacity-60 border-l-2 border-black/20 pl-6">
                <p><Editable id="footer_value_1" defaultText="Nordic sensibility. Human-first process." /></p>
                <p><Editable id="footer_value_2" defaultText="Tech-powered scale. Earth-conscious always." /></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 space-y-10">
          <h4 className="font-black text-xs uppercase tracking-[0.4em] opacity-30">NAVIGATION_MAP</h4>
          <ul className="space-y-4 text-xl md:text-2xl font-black uppercase tracking-tighter">
            <li><Link to={isEditing ? '#' : "/portfolio"} onClick={handleLinkClick} className="hover:line-through transition-all">Portfolio</Link></li>
            <li><Link to={isEditing ? '#' : "/services"} onClick={handleLinkClick} className="hover:line-through transition-all">Packages</Link></li>
            <li><Link to={isEditing ? '#' : "/shop"} onClick={handleLinkClick} className="hover:line-through transition-all">Shop</Link></li>
            <li><Link to={isEditing ? '#' : "/blog"} onClick={handleLinkClick} className="hover:line-through transition-all">Blog</Link></li>
            <li><Link to={isEditing ? '#' : "/talent"} onClick={handleLinkClick} className="hover:line-through transition-all">Talent</Link></li>
            <li><Link to={isEditing ? '#' : "/radio"} onClick={handleLinkClick} className="hover:line-through transition-all">Radio</Link></li>
            <li><Link to={isEditing ? '#' : "/about"} onClick={handleLinkClick} className="hover:line-through transition-all">About</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-10">
          <h4 className="font-black text-xs uppercase tracking-[0.4em] opacity-30">CONNECT_TERMINAL</h4>
          <ul className="space-y-4 text-xl md:text-2xl font-black uppercase tracking-tighter">
            <li><a href="#" onClick={handleLinkClick} className="hover:italic transition-all uppercase">Instagram</a></li>
            <li><a href="mailto:hello@nopropzz.com" onClick={handleLinkClick} className="hover:italic transition-all uppercase">Email</a></li>
            <li>
              <Link to={isEditing ? '#' : "/contact"} onClick={handleLinkClick} className="hover:underline underline-offset-8 transition-all uppercase">
                <Editable id="footer_start_btn" defaultText="Start Project" />
              </Link>
            </li>
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
