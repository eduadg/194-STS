import React from 'react';

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon, 
  color = 'blue',
  description 
}) => {
  const colorStyles = {
    blue: {
      bg: 'rgba(59, 130, 246, 0.1)',
      icon: '#3b82f6',
      border: 'rgba(59, 130, 246, 0.2)',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2))'
    },
    green: {
      bg: 'rgba(34, 197, 94, 0.1)',
      icon: '#22c55e',
      border: 'rgba(34, 197, 94, 0.2)',
      gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.2))'
    },
    purple: {
      bg: 'rgba(147, 51, 234, 0.1)',
      icon: '#9333ea',
      border: 'rgba(147, 51, 234, 0.2)',
      gradient: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(147, 51, 234, 0.2))'
    },
    orange: {
      bg: 'rgba(249, 115, 22, 0.1)',
      icon: '#f97316',
      border: 'rgba(249, 115, 22, 0.2)',
      gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.2))'
    }
  };

  const getChangeColor = () => {
    if (changeType === 'positive') return 'var(--success)';
    if (changeType === 'negative') return 'var(--error)';
    return 'var(--text-muted)';
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      );
    }
    if (changeType === 'negative') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
      );
    }
    return null;
  };

  const colors = colorStyles[color] || colorStyles.blue;

  return (
    <div 
      className="card-elevated p-6"
      style={{
        borderRadius: 'var(--radius-xl)',
        transition: 'all var(--transition-base) ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-xl)',
                background: colors.gradient,
                border: `1px solid ${colors.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow var(--transition-base) ease'
              }}
            >
              <div style={{ color: colors.icon }}>
                {icon}
              </div>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                color: 'var(--text-secondary)',
                marginBottom: '4px'
              }}>
                {title}
              </h3>
              <p style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: 'var(--text-primary)'
              }}>
                {value}
              </p>
            </div>
          </div>
          
          {change && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                color: getChangeColor()
              }}>
                {getChangeIcon()}
                <span style={{ fontSize: '14px', fontWeight: '500' }}>{change}</span>
              </div>
              {description && (
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{description}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard; 