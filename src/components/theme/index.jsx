import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
const Theme = () => {
  //   const savedTheme = localStorage.getItem("theme") || "blue";
  //   const [theme, setTheme] = useState(savedTheme);

  //   const handleThemeChange = () => {
  //     const newTheme = theme === "blue" ? "red" : "blue";
  //     setTheme(newTheme);
  //     localStorage.setItem("theme", newTheme);
  //   };
  const [theme, setTheme] = useLocalStorage("theme", "black");
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "black" : "light");
  };

  return (
    <div className={`bg-${theme} flex justify-center items-center h-screen`}>
      <button
        onClick={() => handleThemeChange()}
        className={`p-3 font-extralight text-2xl border rounded-lg ${
          theme === "dark"
            ? "bg-white text-black hover:bg-black hover:text-white"
            : "bg-black text-white hover:bg-white hover:text-black"
        }`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Theme;
