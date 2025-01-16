import React, { useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-[80px] h-[40px] rounded-full flex items-center cursor-pointer transition-all duration-300 shadow-md ${
        isDarkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-yellow-300 to-yellow-500"
      } ${className}`}
    >
      <div
        className={`absolute left-1 top-1 w-[38px] h-[38px] rounded-full flex items-center justify-center transition-transform duration-300 ${
          isDarkMode
            ? "transform translate-x-[40px] bg-gray-700 shadow-lg shadow-blue-500/50"
            : "bg-white shadow-lg shadow-yellow-400/50"
        }`}
      >
        {isDarkMode ? (
          <BsFillMoonStarsFill className="text-blue-400" size={20} />
        ) : (
          <BsFillSunFill className="text-yellow-500" size={20} />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
