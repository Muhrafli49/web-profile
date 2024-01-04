/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#374151',
        dark: '#020617',
        secondary: '#64748b',
        third: '#1e293b',
        fourth: '#06b6d4',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

