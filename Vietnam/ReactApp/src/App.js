import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import DayView from './components/DayView';
import Footer from './components/Footer';
import { LanguageProvider } from './hooks/useLanguage';
import useScrollToTop from './hooks/useScrollToTop';
import './styles/App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route changes
  useScrollToTop();

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <LanguageProvider>
      <div className="app">
        <Header onMenuClick={toggleSidebar} />
        
        <div className="app-body">
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
          />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/day/:dayNumber" element={<DayView />} />
              <Route path="*" element={<Overview />} />
            </Routes>
          </main>
        </div>
        
        <Footer />
        
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
