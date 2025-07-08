import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { SearchIcon, NotificationIcon, UserIcon } from './Icons';

const Header = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Determinar o título baseado na rota atual
  const getPageTitle = () => {
    const routes = {
      '/dashboard': 'Dashboard',
      '/projects': 'Projetos',
      '/tasks': 'Tarefas', 
      '/analytics': 'Análises',
      '/settings': 'Configurações'
    };
    return routes[location.pathname] || 'Dashboard';
  };

  const getPageDescription = () => {
    const descriptions = {
      '/dashboard': 'Visão geral das suas métricas e atividades',
      '/projects': 'Gerencie seus projetos e colaboradores',
      '/tasks': 'Organize suas tarefas e prazos',
      '/analytics': 'Análises detalhadas e relatórios',
      '/settings': 'Configurações do sistema e preferências'
    };
    return descriptions[location.pathname] || 'Bem-vindo ao sistema';
  };

  return (
    <header className="header px-8 py-6 flex items-center justify-between">
      {/* Page Info */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {getPageTitle()}
          </h1>
          <div className="px-2 py-1 rounded-md text-xs font-medium bg-opacity-20" 
               style={{ backgroundColor: 'var(--primary-500)', color: 'var(--primary-400)' }}>
            Beta
          </div>
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {getPageDescription()}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="input w-80 pl-10 pr-4 py-3"
            style={{ 
              backgroundColor: 'var(--bg-elevated)',
              borderColor: 'var(--border-primary)'
            }}
          />
          <SearchIcon 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2" 
            style={{ color: 'var(--text-muted)' }}
          />
        </div>

        {/* Notifications */}
        <button 
          className="relative p-3 rounded-lg transition-colors duration-200 hover:bg-opacity-10"
          style={{ 
            color: 'var(--text-muted)',
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-elevated)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <NotificationIcon size={22} />
          <span 
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
            style={{ backgroundColor: 'var(--error)' }}
          ></span>
        </button>

        {/* User Menu */}
        <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-opacity-10"
             onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-elevated)'}
             onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))' }}
          >
            <UserIcon size={20} />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              {user?.displayName || user?.email?.split('@')[0] || 'Usuário'}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 