import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6"
      style={{ 
        background: 'linear-gradient(135deg, var(--primary-900), var(--bg-primary))',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'var(--primary-500)' }}
        ></div>
        <div 
          className="absolute top-1/2 -right-10 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: 'var(--secondary-500)' }}
        ></div>
        <div 
          className="absolute -bottom-10 left-1/2 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'var(--primary-400)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md animate-slide-in">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout; 