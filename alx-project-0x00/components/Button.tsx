import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles, handleClick }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center bg-blue-500 font-bold text-white transition-colors hover:bg-blue-700 ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
