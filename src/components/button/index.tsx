import React from "react";
import { FiArrowRight } from "react-icons/fi"; // React icon for the right arrow
import classNames from "classnames"; // Optional utility for class composition

 
interface CardButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500",
        {
          "bg-dark text-light hover:bg-darker hover:text-lighter active:scale-95": !disabled,
          "bg-gray-300 text-gray-500 cursor-not-allowed": disabled,
        },
        "dark:bg-light dark:text-dark dark:hover:bg-lighter dark:hover:text-darker", // Dark mode styles
        className
      )}
    >
      {title}
      <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};

export default CardButton;

 

 