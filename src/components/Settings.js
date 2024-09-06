import React from 'react';
import { useTheme } from '../App';

export default function Settings() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#051E2C] text-white' : 'bg-white text-black'} flex flex-col items-center`}>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <button
        className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
        onClick={toggleTheme}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
