module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Enable class-based dark mode switching
  theme: {
    extend: {
      colors: {
        darkBackground: '#051E2C',
        darkScrollbarTrack: '#1c3a3e', // Dark mode track
        darkScrollbarThumb: '#4CAF50', // Dark mode thumb
        lightScrollbarTrack: '#f0f0f0', // Light mode track
        lightScrollbarThumb: '#888',    // Light mode thumb
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Include the Tailwind scrollbar plugin
  ],
}
