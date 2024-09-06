// src/components/Hero.js
import React from 'react';

export default function Hero() {
  return (
    <div className="bg-[#1d684a] text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">ReddyDB</h1>
      <p className="text-xl mb-6">Backend Developer & MongoDB Specialist</p>
      <div>
        <button className="bg-white text-[#1d684a] py-2 px-4 rounded mr-4">
          View My Work
        </button>
        <button className="bg-transparent border border-white py-2 px-4 rounded">
          Contact Me
        </button>
      </div>
    </div>
  );
}
