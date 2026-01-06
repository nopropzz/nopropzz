
import React from 'react';
import { MOCK_POSTS } from '../../constants';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';

const AdminPosts: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black uppercase">Blog Posts</h1>
          <p className="text-xs font-mono opacity-50 mt-1">INSIGHTS & ANNOUNCEMENTS</p>
        </div>
        <button className="flex items-center space-x-3 bg-black text-white px-8 py-3 text-xs font-black uppercase tracking-widest hover:opacity-80 transition-all">
          <Plus size={18} />
          <span>New Post</span>
        </button>
      </div>

      <div className="bg-white border-2 border-black">
        <div className="p-6 border-b-2 border-black flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={16} />
            <input 
              type="text" 
              placeholder="FILTER POSTS..." 
              className="w-full border-2 border-black/10 p-3 pl-12 text-xs font-bold focus:border-black outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] font-black uppercase tracking-widest border-b border-black">
              <tr>
                <th className="p-6">Article</th>
                <th className="p-6">Date</th>
                <th className="p-6">Tags</th>
                <th className="p-6">Status</th>
                <th className="p-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_POSTS.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-all">
                  <td className="p-6">
                    <span className="text-xs font-black uppercase">{post.title}</span>
                  </td>
                  <td className="p-6 text-[10px] font-mono opacity-50">{post.published_at}</td>
                  <td className="p-6">
                    <div className="flex gap-2">
                      {post.tags.map(t => (
                        <span key={t} className="text-[8px] border border-black px-1 uppercase font-bold">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-2 py-1 bg-black text-white text-[8px] font-black uppercase tracking-widest">
                      {post.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex space-x-2">
                      <button className="p-2 border border-black/10 hover:bg-black hover:text-white transition-all"><Edit2 size={14} /></button>
                      <button className="p-2 border border-black/10 hover:bg-red-600 hover:text-white transition-all"><Trash2 size={14} /></button>
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

export default AdminPosts;
