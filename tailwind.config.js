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
        muted: "var(--muted)",

        // -----e-tax colors-----------
        primary: "var(--primary)",
        primaryDark: "var(--primaryDark)",
        green: "var(--green)",
        teal: "var(--teal)",
        textColor: "var(--textColor)",
        primaryTransparent: "var(--primaryTransparent)"
      },
    },
  },
  plugins: [],
};
