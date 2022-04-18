module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sidebar: "var(--sidebar)",
        darkgray: "var(--darkgray)",
        lightBlue: "var(--lightBlue)",
        overlayColor: "var(--overlayColor)",
        redColor: "var(--redColor)",
        greenColor: "var(--greenColor)",
        muted:"var(--muted)"
      },
    },
  },
  plugins: [],
};
