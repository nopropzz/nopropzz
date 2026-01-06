
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[15rem] font-black leading-none tracking-tighter italic outline-text">404</h1>
      <h2 className="text-4xl font-black mt-[-2rem] mb-10">PATHWAY NOT FOUND.</h2>
      <p className="text-sm font-mono opacity-50 max-w-sm mb-12">The digital material you are looking for has been moved or shredded into void components.</p>
      <Link 
        to="/" 
        className="px-10 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-black border-2 border-black transition-all brutalist-shadow"
      >
        Return to Core
      </Link>
      <style>{`
        .outline-text {
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
