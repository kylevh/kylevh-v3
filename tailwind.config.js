/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Reddit Sans", "sans-serif"],
        sansCondensed: ["Reddit Sans Condensed", "sans-serif"],
        mono: ["Reddit Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

