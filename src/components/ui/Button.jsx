import React from 'react';

const Button = ({ 
  children, 
  type = "button", 
  onClick, 
  disabled = false, 
  variant = "primary", 
  className = "",
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary';
      case 'primary':
      default:
        return 'btn-primary';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${getVariantClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 