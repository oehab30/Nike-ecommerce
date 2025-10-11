/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  // ✅ Disable Tailwind's Preflight reset:
  corePlugins: {
    preflight: false,
  },
};
