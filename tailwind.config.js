/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        cream: '#FFFFFF',
        surface: '#FFFFFF',
        soft: '#FFFFFF',
        border: '#000000',
        espresso: '#000000',
        stone: '#000000',
        accent: '#000000',
        sage: '#000000',
        olive: '#000000',
        'sage-tint': '#FFFFFF',
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