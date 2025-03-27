/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        script: ['var(--font-kaushan-script)', 'cursive'],
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-shrikhand)', 'cursive'],
      },
    },
  },
  plugins: [],
};
