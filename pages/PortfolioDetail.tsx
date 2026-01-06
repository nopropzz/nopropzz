import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PROJECTS } from '../constants';
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = MOCK_PROJECTS.find(p => p.slug === slug);

  if (!project) return <div className="p-20 text-center font-black">PROJECT_NOT_FOUND</div>;

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <Link to="/portfolio" className="inline-flex items-center space-x-4 text-sm font-black uppercase tracking-widest mb-20 hover:opacity-50 transition-all border-b-2 border-black pb-2">
        <ArrowLeft size={18} />
        <span>Return to Archive</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-8 space-y-20 lg:space-y-32">
          {/* Main Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-4 border-black brutalist-shadow bg-gray-200 aspect-[16/10] overflow-hidden"
          >
            <img src={project.featured_image_url} alt={project.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>

          {/* Deep-Dive Case Study Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] opacity-30 border-b-2 border-black pb-2">01_THE_BRIEF</h3>
              <p className="text-2xl font-mono font-bold leading-relaxed uppercase">
                {project.brief || "A radical departure from mainstream aesthetics was required to reach an avant-garde audience."}
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] opacity-30 border-b-2 border-black pb-2">02_OUR_STRATEGY</h3>
              <p className="text-lg font-mono opacity-70 leading-relaxed font-bold uppercase">
                {project.strategy || "We deployed a brutalist design system focused on raw honesty, high contrast, and rapid delivery."}
              </p>
            </div>
          </div>

          {/* Additional Images / Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-1 gap-12 md:gap-20">
              {project.images.map((img, idx) => (
                <div key={idx} className="border-4 border-black brutalist-shadow bg-zinc-100">
                  <img src={img} alt={`${project.title} detail ${idx}`} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
          )}

          {/* Result / ROI Section - High Impact */}
          <div className="bg-black text-white p-12 md:p-20 border-4 border-black brutalist-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 opacity-40">03_THE_RESULT</h3>
              <h4 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-[0.85]">
                {project.result || "Surpassed expectations for digital engagement by 40%."}
              </h4>
              <div className="w-20 h-2 bg-white mt-12 mb-4 group-hover:w-full transition-all duration-1000" />
              <p className="text-xs font-mono opacity-40 uppercase font-black">Performance_Audit_Verified</p>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <ArrowRight size={200} />
            </div>
          </div>

          {/* Testimonial Layer */}
          {project.testimonial && (
            <div className="py-20 border-t-4 border-black">
               <div className="flex items-start space-x-8">
                  <Quote size={48} className="text-black opacity-20 shrink-0" />
                  <div className="space-y-8">
                    <p className="text-2xl md:text-4xl font-black tracking-tight italic uppercase leading-tight">
                      "{project.testimonial.quote}"
                    </p>
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest">{project.testimonial.author}</p>
                      <p className="text-[10px] font-mono opacity-50 uppercase font-bold">{project.testimonial.role}</p>
                    </div>
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Sidebar Info - Sticky */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
          <div className="p-8 md:p-10 border-4 border-black bg-white brutalist-shadow">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">{project.title}</h1>
            <p className="text-lg opacity-80 leading-relaxed font-mono font-bold mb-10 italic uppercase">"{project.description}"</p>
            
            <div className="space-y-6 border-t-4 border-black pt-10">
              <div className="flex justify-between border-b-2 border-black/5 pb-4">
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Client</span>
                <span className="text-xs uppercase font-black">{project.client}</span>
              </div>
              <div className="flex justify-between border-b-2 border-black/5 pb-4">
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Expertise</span>
                <span className="text-xs uppercase font-black">{project.category}</span>
              </div>
              <div className="flex justify-between border-b-2 border-black/5 pb-4">
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Delivery</span>
                <span className="text-xs font-mono font-bold">{project.year}</span>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <button className="w-full flex justify-between items-center bg-black text-white p-6 text-[11px] font-black uppercase tracking-widest hover:opacity-80 transition-all active:translate-y-1">
                <span>View Live Site</span>
                <ExternalLink size={20} />
              </button>
              <Link to="/contact" className="w-full flex justify-between items-center border-4 border-black p-5 text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all active:translate-y-1">
                <span>Request Case Study</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="p-10 border-4 border-black bg-zinc-50 brutalist-shadow-hover transition-all">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-30">SOCIAL_CONTEXT</h4>
            <div className="flex space-x-6 text-[11px] font-black uppercase underline decoration-4 underline-offset-4">
              <span className="cursor-pointer hover:bg-black hover:text-white p-1">X_COM</span>
              <span className="cursor-pointer hover:bg-black hover:text-white p-1">INSTA</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PortfolioDetail;
