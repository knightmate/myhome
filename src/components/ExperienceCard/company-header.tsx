import React from "react";
import Profile from "../Profile";

interface CompanyTitleProps {
  title: string; // The company or title name to display
  href?: string; // Optional link to navigate to
  className?: string; // Optional custom styles
}

const CompanyTitle: React.FC<CompanyTitleProps> = ({ title, href, className }) => {
    return (
      <div className="flex flex-row group/company items-center gap-2">
        <Profile/>
        <p
          onClick={() => href && window.open(href, "_blank")}
          className={`text-gray-900 dark:text-gray-100 font-normal text-sm truncate ${
            href ? "group-hover/company:underline cursor-pointer" : ""
          } ${className}`}
        >
          
          {title}
        </p>
      </div>
    );
  };

export default CompanyTitle;
