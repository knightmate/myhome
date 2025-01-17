'use client'

import React from "react";
import classNames from "classnames";

interface SkillTagProps {
  skill: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, className }) => {
  return (
    <span
      className={classNames(
        "px-3 py-1 text-xs font-medium rounded-full cursor-pointer transition-all duration-300 transform", // Added `transform` for scaling
        "bg-black text-white hover:bg-gray-800 hover:text-gray-200 hover:scale-105", // Light mode styles with scaling
        "dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:scale-105", // Dark mode styles with scaling
        className
      )}
    >
      {skill}
    </span>
  );
};

export default SkillTag;
