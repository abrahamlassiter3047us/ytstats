/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5383B",
        secondary: "#786868",
      },
      borderColor: {
        primary: "#E5383B",
      },
    },
  },
  plugins: [],
};
