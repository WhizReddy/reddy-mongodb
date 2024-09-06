import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Breadcrumbs from './components/Breadcrumbs';
import Tabs from './components/Tabs';
import MongoShell from './components/MongoShell';
import CV from './components/CV';
import Certificates from './components/Certificates';
import SocialMedia from './components/SocialMedia';
import Performance from './components/Performance';
import Settings from './components/Settings';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark bg-darkBackground text-white' : 'bg-white text-black'}>
        <Router>
          <div className="flex h-screen">
            <SideNav />

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col">
              {/* Fixed header with Tabs and Breadcrumbs */}
              <div className="fixed w-full z-10">
                <Tabs />
                <Breadcrumbs className="mt-2" />
              </div>

              {/* Scrollable Content Area with Tailwind Scrollbar Classes */}
              <div className="flex-1 mt-24 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded 
              scrollbar-thumb-lightScrollbarThumb scrollbar-track-lightScrollbarTrack 
              dark:scrollbar-thumb-darkScrollbarThumb dark:scrollbar-track-darkScrollbarTrack">
                <Routes>
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/" element={<Profile />} />
                  <Route path="/databases" element={<Profile />} />
                  <Route path="/admin" element={<Profile />} />
                  <Route path="/admin/cv" element={<CV />} />
                  <Route path="/admin/certificates" element={<Certificates />} />
                  <Route path="/admin/social-media" element={<SocialMedia />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
          </div>

          {/* MongoShell at the Bottom */}
          <MongoShell />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}
