import React, { useState } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Architecture', 'Fashion', 'Music', 'Visuals'];

  const filteredProjects = filter === 'All' 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <header className="mb-20 flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-16">
        <div>
          <h1 className="text-8xl md:text-[12rem] font-black leading-[0.8]">WORKS</h1>
          <p className="mt-10 text-lg max-w-md font-mono uppercase font-bold opacity-70">
            A chronological archive of creative output. 2022 — 2026.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-12 md:mt-0">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 border-2 border-black text-sm font-black uppercase tracking-[0.2em] transition-all brutalist-shadow ${
                filter === cat ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black">
        {filteredProjects.map((project) => (
          <Link 
            to={`/portfolio/${project.slug}`} 
            key={project.id}
            className="group relative aspect-[16/10] bg-white overflow-hidden"
          >
            <img 
              src={project.featured_image_url} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex flex-col justify-end p-12 text-white opacity-0 group-hover:opacity-100">
              <span className="text-sm uppercase tracking-[0.4em] font-black mb-4">{project.category}</span>
              <h3 className="text-6xl font-black tracking-tighter">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;