import React from 'react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${className} animate-spin rounded-full border-2 border-t-transparent`}
      style={{ 
        borderColor: 'var(--primary-500)',
        borderTopColor: 'transparent'
      }}
    />
  );
};

export default LoadingSpinner; 