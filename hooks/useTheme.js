import { useState, useEffect } from "react";

function useTheme() {
  // I tried implementing local storage but it keeps erroing 'undefine'
  // const [theme, setTheme] = useState(localStorage.theme);
  const [theme, setTheme] = useState("light");

  const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    // localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useTheme;
