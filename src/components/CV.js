import React from 'react';
import { ReactComponent as MongoDBCV } from '../assets/mongodb-cv.svg'; 
import { useTheme } from '../App';

export default function CV() {
  const { darkMode } = useTheme();

  return (
    <div className={`flex items-center justify-center h-screen relative ${darkMode ? 'bg-[#051E2C]' : 'bg-white'}`}>
      {/* Background SVG */}
      <MongoDBCV className="absolute inset-0 w-full h-full object-cover opacity-10" />

      {/* Download Button */}
      <div className="relative z-10">
        <a
          href="/cv.pdf" 
          download
          aria-label="Download my CV"
          className="bg-green-800 text-white px-6 py-3 rounded-lg text-xl font-mono hover:bg-green-700 font-bold transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
