import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

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
  const [auth, setAuth] = useState<AuthState>(() => {
    const saved = localStorage.getItem('np_auth');
    return saved ? JSON.parse(saved) : { isAuthenticated: false, user: null };
  });

  useEffect(() => {
    localStorage.setItem('np_auth', JSON.stringify(auth));
  }, [auth]);

  const login = () => {
    setAuth({
      isAuthenticated: true,
      user: { name: 'Admin User', email: 'admin@nopropzz.com', role: 'admin' }
    });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <Router>
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
          {/* Legacy redirects for compatibility */}
          <Route path="/models" element={<Navigate to="/talent" replace />} />
          <Route path="/artists" element={<Navigate to="/talent" replace />} />
          <Route path="/locations" element={<Layout><Locations /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Admin Routes */}
          <Route 
            path="/admin/login" 
            element={!auth.isAuthenticated ? <AdminLogin onLogin={login} /> : <Navigate to="/admin/dashboard" />} 
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