import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        construction: {
          primary: '#EAB308',
          secondary: '#F59E0B',
          dark: '#92400E',
          light: '#FEF3C7',
          accent: '#D97706'
        }
      },
      backgroundImage: {
        'construction-pattern': "url('/src/assets/construction-pattern.svg')",
        'hero-pattern': "url('/src/assets/hero-pattern.svg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.15)',
        'construction': '0 4px 6px -1px rgba(234, 179, 8, 0.1), 0 2px 4px -2px rgba(234, 179, 8, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
}