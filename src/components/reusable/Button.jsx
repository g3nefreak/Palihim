import React from 'react';

const Button = ({
  children,
  size = 'sm', // sm | md | lg
  variant = 'primary', // primary | secondary | danger | transparent
  onClick,
  className = '',
  fullWidth = false,
  ...props
}) => {
  // Size styles
  const sizeClasses =
    size === 'sm'
      ? 'px-3 py-1.5 text-sm'
      : size === 'lg'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-base'; // default md

  // Variant styles
  const variantClasses =
    variant === 'secondary'
      ? 'bg-gray-500 text-white hover:bg-gray-600'
      : variant === 'danger'
      ? 'bg-red-500 text-white hover:bg-red-600'
      : variant === 'transparent'
      ? 'bg-transparent border border-white text-white hover:bg-white/10'
      : 'bg-blue-600 text-white hover:bg-blue-700'; // default primary

  return (
    <button
      onClick={onClick}
      className={`rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500
        ${sizeClasses} ${variantClasses} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
