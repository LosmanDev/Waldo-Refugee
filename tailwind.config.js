/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#cc00ff',

          secondary: '#007c00',

          accent: '#00f8e2',

          neutral: '#0A0D11',

          'base-100': '#ffffff',

          info: '#00ffff',

          success: '#60A89D',

          warning: '#c48c00',

          error: '#f7003f',
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-green': '#56a399',
        'custom-cream': '#F7F6E2',
      },
    },
    keyFrames: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      fadeIn: 'fadeIn 2s ease-in-out',
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
};
