/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./app/pages/**/*.{vue,js,ts,jsx,tsx}",
    "./app/components/**/*.{vue,js,ts,jsx,tsx}",
    "./app/layouts/**/*.vue",
    "./app/app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          yellow: '#FFFF00',
          cyan: '#00FFFF',
          pink: '#FF00FF',
          orange: '#FF9000',
          green: '#00FF00',
          blue: '#3B82F6',
        }
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}
