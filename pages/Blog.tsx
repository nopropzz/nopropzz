
import React from 'react';
import { MOCK_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black pb-12">
        <h1 className="text-9xl font-black leading-none tracking-tighter">BLOG</h1>
        <p className="mt-8 md:mt-0 max-w-sm text-sm font-mono opacity-60">Insights, theory, and project updates from the NoPropzz studio.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-32">
          {MOCK_POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-video bg-gray-100 overflow-hidden brutalist-border mb-8">
                <img src={post.featured_image_url} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4">
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
                <span>/</span>
                <div className="flex space-x-2">
                  {post.tags.map(t => <span key={t}>#{t}</span>)}
                </div>
              </div>
              <Link to={`/blog/${post.slug}`} className="block">
                <h2 className="text-6xl font-black mb-6 group-hover:underline underline-offset-8 transition-all">{post.title}</h2>
              </Link>
              <p className="text-xl font-mono leading-relaxed opacity-70 mb-8">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-2 hover:opacity-50 transition-all">
                Read Article
              </Link>
            </article>
          ))}
        </div>

        <aside className="lg:col-span-4 space-y-16 lg:pl-16 lg:border-l border-black/10">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {['Design', 'Studio', 'Architecture', 'Theory', 'Oslo', 'Digital'].map(tag => (
                <span key={tag} className="px-3 py-1 border border-black text-[10px] font-bold uppercase hover:bg-black hover:text-white transition-all cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full border-2 border-black p-4 text-xs font-bold uppercase focus:outline-none"
              />
              <button className="w-full bg-black text-white p-4 text-xs font-bold uppercase tracking-widest hover:opacity-80">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] opacity-40 mt-4 leading-relaxed font-mono italic">
              *We only send essential insights. No props, no filler.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
