"use client";

import React from "react";
import styles from './index.module.css'; // Import the CSS module

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string; // Optional for additional styling
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className, disabled }) => {
  return (
    <button 
      className={`${styles.button} ${className || ""}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
