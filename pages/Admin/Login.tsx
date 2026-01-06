import React, { useState } from 'react';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLogin();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      {/* Top Back Navigation - Centered as per screenshot */}
      <Link to="/" className="mb-16 flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-100 transition-all opacity-40">
        <ArrowLeft size={14} />
        <span>Back to public site</span>
      </Link>

      {/* Main Login Container */}
      <div className="w-full max-w-[440px] bg-white border-4 border-black p-10 md:p-14 brutalist-shadow relative">
        <div className="flex justify-center mb-10">
          <div className="p-6 bg-black text-white brutalist-shadow relative">
            <Lock size={32} strokeWidth={1.5} />
            {/* Structural corner accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-3 tracking-tighter leading-none">SYSTEM ACCESS</h1>
          <p className="text-[10px] font-mono uppercase opacity-50 tracking-[0.4em]">noPROPZZ / SECURE_GATEWAY</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-4">Identifier</label>
            <input 
              required
              type="email" 
              placeholder="ADMIN@NOPROPZZ.COM" 
              className="w-full border-4 border-black p-5 text-sm font-black uppercase focus:bg-zinc-50 outline-none transition-all placeholder:opacity-20"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-4">Pass-Key</label>
            <input 
              required
              type="password" 
              placeholder="••••••••" 
              className="w-full border-4 border-black p-5 text-sm font-black uppercase focus:bg-zinc-50 outline-none transition-all placeholder:opacity-20"
            />
          </div>
          <button 
            disabled={loading}
            className="w-full bg-black text-white p-7 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-zinc-900 transition-all flex justify-center items-center brutalist-shadow active:translate-y-1 active:shadow-none"
          >
            {loading ? 'AUTHENTICATING...' : 'INITIATE LOGIN'}
          </button>
        </form>

        {/* Updated: Powered by Flowen AI OS */}
        <div className="mt-16 pt-10 border-t-4 border-zinc-50 flex flex-col items-center space-y-4">
          <p className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-400">POWERED BY FLOWEN AI OS</p>
          <div className="max-w-[280px]">
            <p className="text-[8px] font-mono text-center leading-relaxed opacity-30 font-bold uppercase tracking-widest">
              Unauthorized access attempts are logged for security.<br/>
              Session will expire after 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;