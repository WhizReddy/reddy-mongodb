import React from 'react';
import { LiaCertificateSolid } from 'react-icons/lia'; 
import { useTheme } from '../App'; 

export default function Certificates() {
  const { darkMode } = useTheme();

  const certificates = [
    {
      id: 1,
      title: 'Next.js & React - The Complete Guide (incl. Two Paths!)',
    },
    {
      id: 2,
      title: 'NestJS Zero to Hero - Modern TypeScript Back-end Development',
    },
    {
      id: 3,
      title: 'The Web Developer Bootcamp',
    },
    {
      id: 4,
      title: 'React Native - The Practical Guide',
    },
    {
      id: 5,
      title: 'Moodle Developer Course for Beginners',
    },
    // Add more certificates as needed
  ];

  return (
    <div className={`p-6 ${darkMode ? 'bg-[#051E2C] text-white' : 'bg-white text-black'}`}>
      <h2 className="text-center text-2xl font-mono mb-4 inline-block bg-green-800 text-white px-4 py-2 rounded-lg mx-auto font-bold">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className={`flex items-center border-2 rounded-lg p-4 shadow-md ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <LiaCertificateSolid className={`text-3xl mr-4 ${darkMode ? 'text-white' : 'text-gray-500'}`} /> {/* Certificate icon */}
            <h3 className="text-lg font-mono">{certificate.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
