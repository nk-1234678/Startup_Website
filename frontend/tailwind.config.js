 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    extend: {
      colors: {
        'charcoal-ink': '#1F1F1F',
        'ash-gray': '#6B6B6B',
        'clay-orange': '#D35400',
        'saffron-gold': '#FFC300',
        'malachite-green': '#297B63',
        'indigo-night': '#2E3A59',
      }
    }
  },
   plugins: [],
 }