import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../App'; // Import the theme context

export default function SocialMedia() {
  const { darkMode } = useTheme(); // Access dark mode from context

  const socialLinks = [
    { id: 1, icon: <FaInstagram />, url: 'https://www.instagram.com/rediballa__/', label: 'Instagram' },
    { id: 2, icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/redi-balla-04758529b/', label: 'LinkedIn' },
    { id: 3, icon: <FaGithub />, url: 'https://github.com/WhizReddy', label: 'GitHub' },
  ];

  return (
    <div className={`p-6 ${darkMode ? 'bg-[#051E2C] text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-mono mb-4 text-center font-bold">Follow Me on Social Media</h2>
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group hover:text-white transition duration-300 transform hover:-translate-y-2 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            <div
              className={`p-7 rounded shadow-lg group-hover:bg-green-600 transition duration-300 ${
                darkMode ? 'bg-[#1c3a3e]' : 'bg-green-800'
              }`}
            >
              {link.icon}
            </div>
            <p
              className={`font-mono mt-2 text-center text-sm transition duration-300 ${
                darkMode ? 'group-hover:text-green-300' : 'group-hover:text-green-600'
              }`}
            >
              {link.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
