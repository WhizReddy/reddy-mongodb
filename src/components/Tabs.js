import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; 
import { useTheme } from "../App"; 

export default function Tabs() {
  const { darkMode } = useTheme();
  const location = useLocation(); 

  console.log(`Dark mode is ${darkMode ? 'enabled' : 'disabled'}`); 

  const tabs = [
    { id: 'databases', label: 'Databases', path: '/databases' },
    { id: 'cv', label: 'CV', path: '/admin/cv' },
    { id: 'certificates', label: 'Certificates', path: '/admin/certificates' },
    { id: 'social-media', label: 'Social Media', path: '/admin/social-media' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'settings', label: 'Settings', path: '/settings' },
  ];

  return (
    <div className={`w-full border-b ${darkMode ? 'bg-[#051E2C] border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
      <div className="flex space-x-0 mb-0">
        {tabs.map((tab, index) => {
          const isActive = location.pathname === tab.path; 
          
          if (isActive) {
            console.log(`Active tab: ${tab.label}`);  
          }

          return (
            <div key={tab.id} className="flex items-center">
              <NavLink
                to={tab.path}
                onClick={() => console.log(`Clicked on tab: ${tab.label}`)}  
                onMouseEnter={() => console.log(`Hovered over ${tab.label} in ${darkMode ? 'dark' : 'light'} mode`)} 
                onMouseLeave={() => console.log(`Stopped hovering over ${tab.label}`)}  
                className={`px-6 py-2 text-sm font-medium flex items-center w-40 justify-between transition-colors duration-300 ${
                  isActive
                    ? 'bg-gray text-green-600 border-b-2 border-green-600'  // Green when active
                    : darkMode 
                      ? 'bg-[#1c3a3e] text-gray-300 hover:bg-[#112734] hover:text-green-400' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-100 hover:text-green-600 hover:cursor-pointer'    
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <FaTimes
                    className="ml-2 text-gray-400 pointer-events-none" 
                  />
                )}
              </NavLink>
              {index < tabs.length  && (
                <div className={`border-l ${darkMode ? 'border-gray-600' : 'border-gray-300'} h-9 mx-0`}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
