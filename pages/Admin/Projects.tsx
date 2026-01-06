import React from 'react';
import { MOCK_PROJECTS } from '../../constants';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';

const AdminProjects: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter">Projects</h1>
          <p className="text-sm font-mono opacity-60 mt-2 font-bold uppercase tracking-widest">ARCHIVE_MANAGEMENT_UNIT</p>
        </div>
        <button className="flex items-center space-x-4 bg-black text-white px-10 py-4 text-sm font-black uppercase tracking-[0.2em] hover:opacity-80 transition-all brutalist-shadow">
          <Plus size={20} />
          <span>New_Project</span>
        </button>
      </div>

      <div className="bg-white border-4 border-black brutalist-shadow">
        <div className="p-8 border-b-4 border-black flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-30" size={20} />
            <input 
              type="text" 
              placeholder="SEARCH_BY_TITLE_OR_CLIENT..." 
              className="w-full border-4 border-black p-4 pl-16 text-sm font-black uppercase focus:bg-gray-50 outline-none"
            />
          </div>
          <div className="flex items-center space-x-6 w-full lg:w-auto">
            <span className="text-sm font-black uppercase tracking-widest opacity-60">Filter:</span>
            <select className="text-sm font-black border-4 border-black px-6 py-4 uppercase outline-none focus:bg-gray-50 cursor-pointer w-full lg:w-auto">
              <option>ALL_CATEGORIES</option>
              <option>ARCHITECTURE</option>
              <option>FASHION</option>
              <option>MUSIC</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-xs font-black uppercase tracking-[0.3em] border-b-4 border-black">
              <tr>
                <th className="p-8">PROJECT_ID</th>
                <th className="p-8">CATEGORY</th>
                <th className="p-8">CLIENT_NAME</th>
                <th className="p-8">YEAR</th>
                <th className="p-8">STATUS</th>
                <th className="p-8">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y-4 divide-black/5">
              {MOCK_PROJECTS.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-all">
                  <td className="p-8">
                    <div className="flex items-center space-x-6">
                      <div className="h-16 w-24 bg-gray-200 border-2 border-black overflow-hidden flex-shrink-0">
                        <img src={project.featured_image_url} alt={project.title} className="w-full h-full object-cover grayscale" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-tight">{project.title}</span>
                    </div>
                  </td>
                  <td className="p-8 text-xs font-black uppercase tracking-widest">{project.category}</td>
                  <td className="p-8 text-xs font-black uppercase opacity-60 tracking-widest">{project.client}</td>
                  <td className="p-8 text-sm font-mono font-bold">{project.year}</td>
                  <td className="p-8">
                    <span className="px-4 py-2 bg-green-100 text-green-800 text-xs font-black uppercase border-2 border-green-200">
                      {project.status}
                    </span>
                  </td>
                  <td className="p-8">
                    <div className="flex space-x-3">
                      <button className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all"><Eye size={18} /></button>
                      <button className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all"><Edit2 size={18} /></button>
                      <button className="p-3 border-2 border-black hover:bg-red-600 hover:text-white transition-all"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;