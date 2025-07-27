import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import DayView from './components/DayView';
import Footer from './components/Footer';
import { LanguageProvider } from './hooks/useLanguage';
import { BackgroundProvider } from './contexts/BackgroundContext';
import useScrollToTop from './hooks/useScrollToTop';
import './styles/App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Scroll to top on route changes
  useScrollToTop();

  // Handle responsive sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // On desktop, always keep sidebar open
        setSidebarOpen(true);
      } else {
        // On mobile, close by default
        setSidebarOpen(false);
      }
    };

    // Set initial state based on screen size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on route change (mobile only)
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    // Only allow toggle on mobile
    if (window.innerWidth < 768) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const closeSidebar = () => {
    // Only allow close on mobile
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <LanguageProvider>
      <BackgroundProvider>
        <div className="app">
          <Header onMenuClick={toggleSidebar} />
          <Sidebar
            isOpen={sidebarOpen}
            onClose={closeSidebar}
          />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/day/:dayNumber" element={<DayView />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BackgroundProvider>
    </LanguageProvider>
  );
}

export default App;
