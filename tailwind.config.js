/** @type {import('tailwindcss').Config} */
      export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx,css}",
        ],
        darkMode: 'class',
        theme: {
          extend: {
            fontFamily: {
              'sans': ['"Playfair Display"', 'serif'],
              'inter': ['Inter', 'sans-serif'],
            },

            colors: {
              azulc:"#D8F6FB",
              azule:"#009BA8",
            }
      
          },
        },
        plugins: [],
      }