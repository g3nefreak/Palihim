import React from 'react';

export const Card = ({ 
  variant = 'default', 
  title, 
  description, 
  image, 
  footer,
  children,
  className = '' 
}) => {
  const baseStyles = "rounded-lg shadow-lg overflow-hidden w-full";
  
  const variants = {
    default: "bg-white border border-gray-200",
    transparent: "bg-transparent backdrop-blur-md border-2 border-white",
    dark: "bg-gray-800 border border-gray-700 text-white"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {title && (
          <h3 className={`text-4xl font-bold mb-4 uppercase text-center ${variant === 'transparent' ? 'text-white' : variant === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
        )}
        
        {description && (
          <p className={`text-sm mb-4 text-center ${variant === 'transparent' ? 'text-white/90' : variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
        
        {children && (
          <div className={variant === 'transparent' ? 'text-white/90' : variant === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
            {children}
          </div>
        )}
      </div>
      
      {footer && (
        <div className={`px-6 py-4 border-t ${variant === 'transparent' ? 'border-white/20' : variant === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
