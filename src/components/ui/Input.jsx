import React from 'react';

const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  className = "", 
  required = false,
  disabled = false,
  ...props 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`input ${className}`}
      {...props}
    />
  );
};

export default Input; 