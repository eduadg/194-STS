import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from './Icons';

const PasswordInput = ({ 
  placeholder, 
  value, 
  onChange, 
  className = "", 
  required = false,
  disabled = false,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`input pr-12 ${className}`}
        {...props}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors duration-200"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={(e) => e.target.style.color = 'var(--text-secondary)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeOffIcon size={18} />
        ) : (
          <EyeIcon size={18} />
        )}
      </button>
    </div>
  );
};

export default PasswordInput; 