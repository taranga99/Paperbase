/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "user-profile": "url('/src/assets/user-profile.jpg')",
      },
    },
  },
  plugins: [],
};
