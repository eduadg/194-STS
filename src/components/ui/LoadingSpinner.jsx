import React from 'react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: { width: '16px', height: '16px' },
    md: { width: '24px', height: '24px' },
    lg: { width: '32px', height: '32px' }
  };

  return (
    <div 
      className={className}
      style={{
        ...sizeStyles[size],
        borderRadius: '50%',
        border: '2px solid var(--primary-500)',
        borderTopColor: 'transparent',
        animation: 'spin 1s linear infinite'
      }}
    />
  );
};

export default LoadingSpinner; 