/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Add any other content paths you might have
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          DEFAULT: '#fbe79b', // This is the original 'golden' color
          light: '#fff5d1',   // This is the original 'goldenLight' color
          300: '#FFD700',
          500: '#D4AF37',
        },
      },
      fontFamily: {
        'protest-strike': ['"Protest Strike"', 'sans-serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
