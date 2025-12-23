import React, { useState } from 'react';

const TextField = ({
  label,
  value,
  onChange,
  size = 'sm',
  variant = 'outlined',
  type = 'text',
  error,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  // Toggle between 'password' and 'text'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  // Sizes
  const sizeClasses =
    size === 'sm'
      ? 'px-3 py-2 text-sm rounded-md'
      : size === 'lg'
      ? 'px-5 py-4 text-lg rounded-xl'
      : 'px-4 py-3 text-base rounded-lg';

  // Variants
  const variantClasses =
    variant === 'outlined'
      ? 'border-2 border-gray-400 bg-transparent focus:ring-0 focus:outline-none'
      : variant === 'filled'
      ? 'bg-gray-100 border border-gray-300 focus:ring-0 focus:outline-none'
      : variant === 'ghost'
      ? 'border-b-2 border-gray-400 bg-transparent focus:outline-none'
      : 'border border-gray-300 bg-white focus:ring-0 focus:outline-none';

  const typeClasses =
    type === 'email'
      ? 'caret-blue-500'
      : type === 'number'
      ? 'caret-green-500 number-input'
      : 'caret-black';

  // Floating label
  const labelClasses = `absolute left-3 px-1 transition-all duration-200 pointer-events-none
    ${isFocused || value ? '-top-2 text-xs bg-black text-white' : 'top-1/2 -translate-y-1/2 text-gray-400'}`;

  return (
    <div className={`relative w-full flex flex-col ${className}`}>
      <div className="relative w-full flex items-center">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`${sizeClasses} ${variantClasses} ${typeClasses} w-full transition-all placeholder-transparent 
            ${isPassword ? 'pr-10' : ''} 
            ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
          {...props}
        />
        
        {label && <label className={labelClasses}>{label}</label>}

        {/* Eye Icon Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            )}
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default TextField;