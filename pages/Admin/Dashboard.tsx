import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Folder, 
  Database, 
  Save, 
  CheckCircle, 
  AlertTriangle, 
  Share2, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';
import { APP_VERSION } from '../../constants';

const analyticsData = [
  { name: 'Jan', pv: 4000, uv: 2400 },
  { name: 'Feb', pv: 3000, uv: 1398 },
  { name: 'Mar', pv: 2000, uv: 9800 },
  { name: 'Apr', pv: 2780, uv: 3908 },
  { name: 'May', pv: 1890, uv: 4800 },
  { name: 'Jun', pv: 2390, uv: 3800 },
  { name: 'Jul', pv: 3490, uv: 4300 },
];

const AdminDashboard: React.FC = () => {
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success'>('idle');
  const [copying, setCopying] = useState(false);

  const handleSync = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('success');
      setTimeout(() => setSyncStatus('idle'), 3000);
    }, 1500);
  };

  const copyShareLink = () => {
    setCopying(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setCopying(false), 2000);
  };

  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div>
          <h1 className="text-7xl font-black uppercase tracking-tighter">Command Center</h1>
          <p className="text-lg font-mono opacity-60 mt-4 font-black">SYSTEM_STATE: STABLE — VERSION_MANIFEST V{APP_VERSION}</p>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={copyShareLink}
            className="bg-white border-4 border-black px-10 py-5 text-sm font-black uppercase tracking-widest flex items-center space-x-6 brutalist-shadow-hover transition-all"
          >
            <Share2 size={24} />
            <span>{copying ? 'LINK_COPIED' : 'COPY_SHARE_LINK'}</span>
          </button>
          <div className="bg-white border-4 border-black px-10 py-5 text-sm font-black uppercase tracking-widest flex items-center space-x-6 brutalist-shadow">
            <span className="w-4 h-4 bg-black rounded-full animate-pulse" />
            <span>Deployment Live</span>
          </div>
        </div>
      </div>

      {/* Production Readiness Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white border-4 border-black p-12 brutalist-shadow">
          <div className="flex items-center space-x-6 mb-12">
            <ShieldCheck size={40} className="text-black" />
            <h3 className="text-4xl font-black uppercase tracking-tighter">Production Readiness</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Offer Testing Page', status: true },
              { label: 'SEO Metadata (OG Tags)', status: true },
              { label: 'Mobile Responsive Audit', status: true },
              { label: 'Project Context Layer', status: true },
              { label: 'Analytics Integration', status: false },
              { label: 'Legal & Privacy Policy', status: false },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-8 border-4 border-black bg-white">
                <span className="text-sm font-black uppercase tracking-tight">{item.label}</span>
                {item.status ? (
                  <CheckCircle size={24} className="text-black" />
                ) : (
                  <div className="w-6 h-6 border-4 border-black/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white p-12 brutalist-shadow border-4 border-black flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <Globe size={32} />
              <h3 className="text-3xl font-black uppercase tracking-tighter">Share Build</h3>
            </div>
            <p className="text-lg font-mono opacity-60 mb-12 font-bold leading-relaxed uppercase">
              Distribute this build to stakeholders. Metadata is currently optimized for Slack, X, and LinkedIn.
            </p>
          </div>
          <button 
            onClick={copyShareLink}
            className="w-full bg-white text-black p-8 text-sm font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all border-4 border-white"
          >
            {copying ? 'URL_IN_CLIPBOARD' : 'ACTIVATE_SHARE_LINK'}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { label: 'Total Projects', val: '24', icon: Folder, change: '+2 THIS MONTH' },
          { label: 'Page Views', val: '12.4K', icon: Eye, change: '+12% GROWTH' },
          { label: 'Talent Roster', val: '42', icon: Users, change: '3 PENDING' },
          { label: 'Engagement', val: '8.2%', icon: TrendingUp, change: '+0.4% DIFF' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white border-4 border-black p-10 brutalist-shadow">
            <div className="flex justify-between items-start mb-10">
              <stat.icon size={40} className="opacity-100" />
              <span className="text-xs font-black text-black bg-zinc-100 px-4 py-2 uppercase border-2 border-black">{stat.change}</span>
            </div>
            <p className="text-7xl font-black tracking-tighter leading-none">{stat.val}</p>
            <p className="text-sm uppercase font-black tracking-[0.2em] opacity-50 mt-6">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* System Sync Panel */}
      <div className="bg-black text-white p-12 brutalist-shadow border-4 border-black font-mono uppercase">
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center space-x-6 text-2xl font-black uppercase tracking-[0.4em] mb-6">
              <Database size={32} />
              <span>Persistence_V{APP_VERSION}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm mb-2 opacity-50">
              <AlertTriangle size={20} />
              <p className="font-bold">NOTICE: Changes require commit to sync with version log.</p>
            </div>
          </div>
          <button 
            onClick={handleSync}
            disabled={syncStatus !== 'idle'}
            className={`px-12 py-5 border-4 border-white text-base font-black uppercase tracking-[0.3em] transition-all flex items-center space-x-8 ${
              syncStatus === 'idle' ? 'hover:bg-white hover:text-black' : 'opacity-50'
            }`}
          >
            {syncStatus === 'idle' && <Save size={24} />}
            {syncStatus === 'syncing' && <span className="animate-spin text-2xl">/</span>}
            {syncStatus === 'success' && <CheckCircle size={24} />}
            <span>{syncStatus === 'idle' ? 'COMMIT_STATE' : syncStatus === 'syncing' ? 'SYNCING...' : 'STATE_LOCKED'}</span>
          </button>
        </div>
        <div className="space-y-4 text-base opacity-90 overflow-hidden h-48 border-t-2 border-white/20 pt-8">
          <p className="font-black">> TARGET BUILD: V{APP_VERSION}</p>
          <p>> ANALYZING TYPOGRAPHY NODES... OK (20PX BASE_NAV)</p>
          <p>> OPTIMIZING MONOCHROME PALETTE: COMPLETED</p>
          <p>> DEPLOYING SEO MANIFEST: OG_TAGS_ACTIVE</p>
          {syncStatus === 'success' && <p className="font-black uppercase tracking-[0.4em] mt-8 p-6 border-4 border-white animate-bounce text-center bg-white text-black">> SUCCESS: SYSTEM_STATE_SYNCHRONIZED</p>}
          <p className="animate-pulse">_</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white border-4 border-black p-12 brutalist-shadow">
          <div className="flex justify-between items-center mb-16">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Traffic Overview</h3>
            <select className="text-sm font-black border-4 border-black px-8 py-4 uppercase focus:outline-none bg-transparent appearance-none brutalist-shadow-hover transition-all cursor-pointer">
              <option>LAST_30_DAYS</option>
              <option>LAST_6_MONTHS</option>
            </select>
          </div>
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" stroke="#000" fontSize={16} fontWeight="900" />
                <YAxis stroke="#000" fontSize={16} fontWeight="900" />
                <Tooltip 
                  cursor={{fill: '#f4f4f4'}}
                  contentStyle={{ backgroundColor: '#000', border: 'none', borderRadius: '0', color: '#fff', padding: '24px' }}
                  itemStyle={{ fontSize: '16px', color: '#fff', textTransform: 'uppercase', fontWeight: '900' }}
                />
                <Bar dataKey="uv" fill="#000" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-12 brutalist-shadow">
          <h3 className="text-4xl font-black uppercase mb-16 tracking-tighter">Activity_Log</h3>
          <div className="space-y-12">
            {[
              { type: 'SYS', action: `LAUNCHED_V${APP_VERSION}`, time: 'NOW' },
              { type: 'SEO', action: 'MONOCHROME_UPDATE', time: '1M_AGO' },
              { type: 'PRJ', action: 'OFFER_TIERS_LOCKED', time: '2H_AGO' },
              { type: 'BLG', action: 'DRAFT_COMMITTED', time: '4H_AGO' },
            ].map((activity, i) => (
              <div key={i} className="flex space-x-8 border-b-4 border-zinc-50 pb-8 last:border-0">
                <div className={`w-5 h-5 mt-2 ${i === 0 ? 'bg-black animate-pulse' : 'bg-zinc-200'}`} />
                <div>
                  <p className="text-xl font-black uppercase tracking-tighter">{activity.action}</p>
                  <p className="text-xs font-mono opacity-50 mt-3 font-bold uppercase tracking-widest">{activity.time} — {activity.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;