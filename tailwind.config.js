/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#04070d',
        sand: '#f3efe6',
        clay: '#f08a5d',
        moss: '#7fb08a',
        gold: '#f0c674',
        night: '#0b1120',
        slate: '#111827',
        mist: '#cbd5e1',
        steel: '#1f2937',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 60px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(240,198,116,0.16), transparent 32%), radial-gradient(circle at 80% 0%, rgba(240,138,93,0.18), transparent 28%), radial-gradient(circle at 50% 100%, rgba(127,176,138,0.16), transparent 36%)',
      },
    },
  },
  plugins: [],
}
