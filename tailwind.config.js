/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "grad-btn":"linear-gradient(to bottom, rgb(236 100 153), rgb(224, 40, 146))"
      }
    },
  },
  plugins: [],
};
