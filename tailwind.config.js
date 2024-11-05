/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'left-4': '-4px -8px'
    },
    extend: {
      keyframes: {
        volumeExpand: {
          '0%': { opacity: '0', bottom: '-10px' },
          '100%': { opacity: '1', bottom: '10px' },
        },
        volumeShrink: {
          '0%': { opacity: '1', bottom: '10px' },
          '100%': { opacity: '0', bottom: '-10px' },
        },
        rollFromRight: {
          '0%': {
            transform: 'translateX(220px)',
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        rollFromLeft: {
          '0%': {
            transform: 'translateX(-220px)',
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        scale: {
          '0%': {
            transform: 'scale(0.7)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0.7)',
          }
        }
      },
      animation: {
        volumeExpand: 'volumeExpand 0.1s ease-out',
        volumeShrink: 'volumeShrink 0.1s ease-out',
        rollFromRight: 'rollFromRight 0.2s ease-out',
        rollFromLeft: 'rollFromLeft 0.2s ease-out',
        fadeIn: 'fadeIn 0.2s ease-out',
        scale: 'scale 0.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}

