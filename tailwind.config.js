// Phosphor City — Tailwind Config

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          void:     '#030A05',
          base:     '#0A1A0D',
          surface:  '#112215',
          elevated: '#1A3320',
        },
        green: {
          neon:   '#00FF5C',
          bright: '#00CC4A',
          mid:    '#009933',
          deep:   '#1A4A25',
          muted:  '#0D2B18',
        },
        amber: {
          glow: '#F0D060',
          mid:  '#C48A20',
          dim:  '#7A5510',
        },
        structure: {
          dark: '#151F12',
          wire: '#0D150A',
        },
        text: {
          body:    '#A8D4B0',
          caption: '#4A7A55',
          inverse: '#030A05',
        },
      },

      fontFamily: {
        display: ['"JetBrains Mono"', 'monospace'],
        body:    ['Inter', 'sans-serif'],
      },

      fontWeight: {
        light:   '300',
        body:    '500',
        display: '700',
      },

      boxShadow: {
        'glow-neon':  '0 0 12px #00FF5C55, 0 0 40px #00CC4A22',
        'glow-amber': '0 0 8px #F0D06066, 0 0 24px #C48A2033',
      },

      backgroundImage: {
        'sky-haze': 'radial-gradient(ellipse at top, #00CC4A18 0%, transparent 65%)',
      },

      backdropBlur: {
        frosted: '8px',
      },

      borderRadius: {
        sm:   '4px',
        md:   '8px',
        lg:   '16px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
