/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
          light: '#4D94FF',
        },
        accent: {
          DEFAULT: '#FF3D00',
          dark: '#CC3100',
          light: '#FF704D',
        },
        background: {
          dark: '#0A0A0A',
          DEFAULT: '#121212',
          light: '#1A1A1A',
        },
        text: {
          light: '#FFFFFF',
          DEFAULT: '#F8F9FA',
          muted: '#A0AEC0',
        }
      },
      spacing: {
        'fluid-1': 'clamp(0.25rem, 1vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 2vw, 1rem)',
        'fluid-3': 'clamp(1rem, 3vw, 1.5rem)',
        'fluid-4': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-5': 'clamp(2rem, 5vw, 3rem)',
        'fluid-6': 'clamp(3rem, 6vw, 4rem)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: 'max(1rem, min(2rem, 5vw))',
          sm: 'max(1.5rem, min(3rem, 6vw))',
          lg: 'max(2rem, min(4rem, 8vw))',
        },
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        'screen-xs': '375px',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.grid-fluid': {
          display: 'grid',
          gap: theme('spacing.8'),
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        },
        '.p-fluid': {
          padding: 'var(--fluid-4)',
        },
        '.m-fluid': {
          margin: 'var(--fluid-4)',
        },
        '.gap-fluid': {
          gap: 'var(--fluid-4)',
        },
        '.text-fluid': {
          fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)',
        },
        '.text-fluid-lg': {
          fontSize: 'clamp(1.25rem, 2vw + 0.75rem, 1.5rem)',
        },
        '.text-fluid-xl': {
          fontSize: 'clamp(1.5rem, 2.5vw + 1rem, 2rem)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}