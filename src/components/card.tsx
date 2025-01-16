import React, { ReactNode } from "react";
 
interface CardProps {
  children: ReactNode; // Content to be displayed inside the card
  className?: string; // Additional styles for customization
  onClick?: () => void; // Optional click handler
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
  const cardStyle ="flex flex-col w-full h-full bg-white dark:bg-dark border border-neutral-400/20 dark:border-neutral-600/10 rounded-3xl p-6 items-start justify-between";

  return (
    <div  
      className={`${cardStyle} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
