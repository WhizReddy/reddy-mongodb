import React from 'react';

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center"
      style={{ zIndex: 1100 }}  
    >
      <p>&copy; 2024 Your Name</p>
      <p>
        Find me on{' '}
        <a href="https://github.com/your-github" className="text-green-400">
          GitHub
        </a>{' '}
        and{' '}
        <a href="https://linkedin.com/in/your-linkedin" className="text-green-400">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
