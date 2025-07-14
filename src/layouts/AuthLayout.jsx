import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--primary-900) 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div style={{ 
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {/* Gradient Orbs */}
        <div 
          style={{ 
            position: 'absolute',
            top: '-160px',
            left: '-160px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, var(--primary-500) 0%, transparent 70%)',
            opacity: 0.2,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          style={{ 
            position: 'absolute',
            top: '50%',
            right: '-128px',
            width: '384px',
            height: '384px',
            borderRadius: '50%',
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, var(--secondary-500) 0%, transparent 70%)',
            opacity: 0.15,
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        <div 
          style={{ 
            position: 'absolute',
            bottom: '-128px',
            left: '33.333%',
            width: '288px',
            height: '288px',
            borderRadius: '50%',
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, var(--primary-400) 0%, transparent 70%)',
            opacity: 0.1,
            animation: 'float 30s ease-in-out infinite'
          }}
        />

        {/* Grid Pattern */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(var(--border-primary) 1px, transparent 1px), 
                             linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.03
          }}
        />

        {/* Floating Particles */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: 'var(--primary-400)',
                opacity: Math.random() * 0.5 + 0.2,
                animation: `floatUp ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div style={{ 
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '448px'
      }}>
        {children}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;