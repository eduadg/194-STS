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
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      border: 'border-blue-200',
      gradient: 'from-blue-50 to-blue-100'
    },
    green: {
      bg: 'bg-green-50',
      icon: 'text-green-600',
      border: 'border-green-200',
      gradient: 'from-green-50 to-green-100'
    },
    purple: {
      bg: 'bg-purple-50',
      icon: 'text-purple-600',
      border: 'border-purple-200',
      gradient: 'from-purple-50 to-purple-100'
    },
    orange: {
      bg: 'bg-orange-50',
      icon: 'text-orange-600',
      border: 'border-orange-200',
      gradient: 'from-orange-50 to-orange-100'
    }
  };

  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-green-600';
    if (changeType === 'negative') return 'text-red-600';
    return 'text-gray-600';
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

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} ${colors.border} border flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
              <div className={colors.icon}>
                {icon}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
          </div>
          
          {change && (
            <div className="flex items-center space-x-2">
              <div className={`flex items-center space-x-1 ${getChangeColor()}`}>
                {getChangeIcon()}
                <span className="text-sm font-medium">{change}</span>
              </div>
              {description && (
                <span className="text-sm text-gray-500">{description}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard; 