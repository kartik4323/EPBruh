// components/ui/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "font-medium rounded-md focus:outline-none transition duration-300 ease-in-out";

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2",
    text: "text-blue-600 hover:text-blue-800 underline px-2 py-1",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
