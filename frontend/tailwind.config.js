/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home: "#f3f6fd",
        numbers: "#765ec2",
      },
    },
  },
  plugins: [],
};
