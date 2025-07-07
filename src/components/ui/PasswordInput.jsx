import React, { useState } from 'react';
import { LockIcon, EyeIcon, EyeOffIcon } from './Icons';

const PasswordInput = ({ 
  placeholder = "Digite sua senha", 
  value, 
  onChange, 
  label = "Senha", 
  error,
  required = false,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LockIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            transition-colors duration-200
            ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
            placeholder:text-gray-400
          `}
          {...props}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          )}
        </button>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default PasswordInput; 