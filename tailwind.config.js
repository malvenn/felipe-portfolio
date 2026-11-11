/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF9',
        cream: '#FAFAF9',
        surface: '#FFFFFF',
        soft: '#F5F5F4',
        border: '#E7E5E4',
        espresso: '#292524',
        stone: '#78716C',
        accent: '#4D6A4E',
        sage: '#4D6A4E',
        olive: '#3F5740',
        'sage-tint': '#EBF0EC',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}