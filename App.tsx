
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import ScrollToTop from './components/ScrollToTop';
import { supabase } from './lib/supabase';

// Providers
import { CartProvider } from './components/CartContext';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Radio from './pages/Radio';
import Events from './pages/Events';
import TalentPage from './pages/TalentPage';
import TalentDetail from './pages/TalentDetail';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminProjects from './pages/Admin/Projects';
import AdminPosts from './pages/Admin/Posts';

import { AuthState } from './types';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false, user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Check active sessions
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setAuth({
          isAuthenticated: true,
          user: { 
            name: session.user.email?.split('@')[0] || 'Admin', 
            email: session.user.email || '', 
            role: 'admin' 
          }
        });
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth({
          isAuthenticated: true,
          user: { 
            name: session.user.email?.split('@')[0] || 'Admin', 
            email: session.user.email || '', 
            role: 'admin' 
          }
        });
      } else {
        setAuth({ isAuthenticated: false, user: null });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    if (supabase) await supabase.auth.signOut();
    setAuth({ isAuthenticated: false, user: null });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-black border-t-transparent animate-spin" />
          <p className="text-[10px] font-black uppercase tracking-[0.4em]">INIT_SYSTEM...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/portfolio/:slug" element={<Layout><PortfolioDetail /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/shop/:id" element={<Layout><ShopDetail /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogDetail /></Layout>} />
          <Route path="/radio" element={<Layout><Radio /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/talent" element={<Layout><TalentPage /></Layout>} />
          <Route path="/talent/:slug" element={<Layout><TalentDetail /></Layout>} />
          <Route path="/locations" element={<Layout><Locations /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Admin Routes */}
          <Route 
            path="/admin/login" 
            element={!auth.isAuthenticated ? <AdminLogin /> : <Navigate to="/admin/dashboard" />} 
          />
          
          <Route 
            path="/admin" 
            element={auth.isAuthenticated ? <AdminLayout onLogout={logout} user={auth.user} /> : <Navigate to="/admin/login" />}
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="posts" element={<AdminPosts />} />
            <Route index element={<Navigate to="dashboard" />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
