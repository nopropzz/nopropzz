import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Newspaper, 
  CalendarDays, 
  Users, 
  Settings, 
  LogOut,
  Bell
} from 'lucide-react';

interface AdminLayoutProps {
  onLogout: () => void;
  user: { name: string; email: string; role: string } | null;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout, user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Projects', path: '/admin/projects', icon: FolderKanban },
    { name: 'Blog Posts', path: '/admin/posts', icon: Newspaper },
    { name: 'Events', path: '/admin/events', icon: CalendarDays },
    { name: 'Talent', path: '/admin/talent', icon: Users },
  ];

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r-2 border-black flex flex-col">
        <div className="p-8 border-b-2 border-black">
          <Link to="/" className="text-xl font-black tracking-tighter normal-case">
            noPROPZZ <span className="text-[10px] font-normal opacity-50 uppercase">ADMIN</span>
          </Link>
        </div>

        <nav className="flex-grow p-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-4 p-3 text-xs font-bold uppercase tracking-widest border-2 transition-all ${
                  isActive ? 'bg-black text-white border-black' : 'border-transparent hover:border-black/10'
                }`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t-2 border-black space-y-2">
          <Link to="/admin/settings" className="flex items-center space-x-4 p-3 text-xs font-bold uppercase tracking-widest border-2 border-transparent hover:border-black/10 transition-all">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-4 p-3 text-xs font-bold uppercase tracking-widest text-red-600 border-2 border-transparent hover:bg-red-50 transition-all"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b-2 border-black flex items-center justify-between px-10">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-black flex items-center justify-center text-white text-xs font-bold">
              {user?.name.charAt(0)}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest">{user?.name}</p>
              <p className="text-[10px] font-mono opacity-50">{user?.role} status</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="relative p-2 hover:bg-gray-100 transition-all">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full" />
            </button>
            <Link to="/" className="text-[10px] font-bold uppercase underline tracking-widest">
              Live Site
            </Link>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;