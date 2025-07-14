import React from 'react';

const Button = ({ 
  children, 
  type = "button", 
  onClick, 
  disabled = false, 
  variant = "primary", 
  size = "md",
  className = "",
  style = {},
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary';
      case 'ghost':
        return 'btn-ghost';
      case 'danger':
        return 'btn-danger';
      case 'primary':
      default:
        return 'btn-primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      case 'md':
      default:
        return '';
    }
  };

  const buttonClass = [
    'btn',
    getVariantClass(),
    getSizeClass(),
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');

  const buttonStyle = {
    ...style,
    ...(fullWidth && { width: '100%' })
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <svg 
            className="animate-spin"
            style={{ 
              width: size === 'sm' ? '16px' : size === 'lg' ? '24px' : '20px',
              height: size === 'sm' ? '16px' : size === 'lg' ? '24px' : '20px'
            }}
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
              style={{ opacity: 0.25 }}
            />
            <path 
              fill="currentColor" 
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {children && <span style={{ opacity: 0.8 }}>{children}</span>}
        </>
      );
    }

    return (
      <>
        {icon && iconPosition === 'left' && (
          <span className="flex items-center justify-center flex-shrink-0">
            {icon}
          </span>
        )}
        {children && <span>{children}</span>}
        {icon && iconPosition === 'right' && (
          <span className="flex items-center justify-center flex-shrink-0">
            {icon}
          </span>
        )}
      </>
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClass}
      style={buttonStyle}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button; 