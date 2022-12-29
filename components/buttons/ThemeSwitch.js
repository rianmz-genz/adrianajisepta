import React, { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.querySelector("html")?.classList.contains("dark")) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    });
  }, []);
  return (
    <button
      itemProp="themeSwitcher"
      aria-label="Theme Switcher"
      className="text-2xl text-gray-600 dark:text-white hover:rotate-45 transition-all duration-500"
      onClick={() => {
        setIsDark(!isDark);
        document.querySelector("html")?.classList.toggle("dark");
      }}
    >
      {isDark ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default ThemeSwitch;
