/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'shdw': 'rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        'hero': "url('/src/assets/hero.jpg')",
      },
      spacing: {
        'mfull' : '-100%' 
      }
    },
  },
  plugins: [],
}

