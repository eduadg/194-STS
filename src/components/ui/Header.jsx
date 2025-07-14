import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { SearchIcon, NotificationIcon, UserIcon } from './Icons';

const Header = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

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

  const notifications = [
    { id: 1, title: 'Nova tarefa atribuída', time: '5 min atrás', unread: true },
    { id: 2, title: 'Projeto finalizado', time: '1 hora atrás', unread: true },
    { id: 3, title: 'Comentário adicionado', time: '2 horas atrás', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header 
      className="header"
      style={{
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-primary)',
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-sticky)',
        height: 'var(--height-header)',
        minHeight: 'var(--height-header)',
        padding: '0 var(--space-6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Page Info */}
      <div className="flex-1" style={{ minWidth: 0 }}>
        <div className="flex items-center gap-3">
          <div>
            <h1 
              className="text-2xl lg:text-3xl font-bold" 
              style={{ 
                color: 'var(--text-primary)',
                lineHeight: 'var(--leading-tight)',
                margin: 0
              }}
            >
              {getPageTitle()}
            </h1>
            <p 
              className="text-sm mt-1" 
              style={{ 
                color: 'var(--text-muted)',
                lineHeight: 'var(--leading-normal)',
                margin: 0
              }}
            >
              {getPageDescription()}
            </p>
          </div>
          <div 
            className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0"
            style={{ 
              background: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
              color: 'var(--text-on-primary)',
              boxShadow: 'var(--shadow-colored)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            PRO
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
        {/* Search Bar - Hidden on mobile */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Buscar..."
            className="input"
            style={{ 
              width: '20rem',
              paddingLeft: '2.75rem',
              paddingRight: '3rem',
              height: '2.75rem',
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border-primary)',
              backdropFilter: 'blur(10px)',
              color: 'var(--text-primary)'
            }}
          />
          <SearchIcon 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2" 
            style={{ color: 'var(--text-muted)' }}
          />
          <kbd 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs rounded"
            style={{ 
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-secondary)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'monospace'
            }}
          >
            ⌘K
          </kbd>
        </div>

        {/* Mobile Search Button */}
        <button 
          className="lg:hidden p-2.5 rounded-lg transition-all duration-200"
          style={{ 
            color: 'var(--text-muted)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            minHeight: '2.75rem',
            minWidth: '2.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <SearchIcon size={22} />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 rounded-lg transition-all duration-200"
            style={{ 
              color: showNotifications ? 'var(--text-primary)' : 'var(--text-muted)',
              backgroundColor: showNotifications ? 'var(--bg-elevated)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              minHeight: '2.75rem',
              minWidth: '2.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              if (!showNotifications) {
                e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }
            }}
            onMouseLeave={(e) => {
              if (!showNotifications) {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-muted)';
              }
            }}
          >
            <NotificationIcon size={22} />
            {unreadCount > 0 && (
              <span 
                className="absolute top-1.5 right-1.5 text-xs font-bold rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: 'var(--error)',
                  color: 'white',
                  minWidth: '1.25rem',
                  height: '1.25rem',
                  fontSize: '0.6875rem',
                  boxShadow: '0 0 0 2px var(--bg-glass)'
                }}
              >
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div 
              className="absolute right-0 mt-2 w-80 rounded-xl shadow-2xl animate-scale-in"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <div 
                className="p-4 border-b" 
                style={{ borderColor: 'var(--border-primary)' }}
              >
                <div className="flex items-center justify-between">
                  <h3 
                    className="font-semibold" 
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Notificações
                  </h3>
                  {unreadCount > 0 && (
                    <span 
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: 'var(--error-bg)',
                        color: 'var(--error)',
                        border: '1px solid var(--error-border)'
                      }}
                    >
                      {unreadCount} não lidas
                    </span>
                  )}
                </div>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notif) => (
                  <div 
                    key={notif.id}
                    className="p-4 transition-colors cursor-pointer border-b last:border-b-0"
                    style={{ 
                      backgroundColor: notif.unread ? 'var(--primary-900)15' : 'transparent',
                      borderColor: 'var(--border-subtle)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = notif.unread ? 'var(--primary-900)15' : 'transparent';
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {notif.unread && (
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: 'var(--primary-500)' }}
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p 
                          className="text-sm font-medium" 
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {notif.title}
                        </p>
                        <p 
                          className="text-xs mt-1" 
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div 
                className="p-3 text-center border-t" 
                style={{ borderColor: 'var(--border-primary)' }}
              >
                <button 
                  className="text-sm font-medium transition-colors"
                  style={{ 
                    color: 'var(--primary-400)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary-300)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--primary-400)';
                  }}
                >
                  Ver todas as notificações
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 p-2 rounded-xl transition-all duration-200"
            style={{ 
              backgroundColor: showUserMenu ? 'var(--bg-elevated)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              minHeight: '2.75rem'
            }}
            onMouseEnter={(e) => {
              if (!showUserMenu) {
                e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
              }
            }}
            onMouseLeave={(e) => {
              if (!showUserMenu) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg flex-shrink-0"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))',
                boxShadow: 'var(--shadow-colored)'
              }}
            >
              <UserIcon size={20} />
            </div>
            <div className="hidden md:block text-left min-w-0">
              <p 
                className="text-sm font-medium truncate" 
                style={{ color: 'var(--text-primary)' }}
              >
                {user?.displayName || user?.email?.split('@')[0] || 'Usuário'}
              </p>
              <p 
                className="text-xs truncate" 
                style={{ color: 'var(--text-muted)' }}
              >
                {user?.email}
              </p>
            </div>
            <svg 
              className="w-4 h-4 hidden md:block transition-transform duration-200 flex-shrink-0"
              style={{ 
                color: 'var(--text-muted)',
                transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* User Dropdown */}
          {showUserMenu && (
            <div 
              className="absolute right-0 mt-2 w-64 rounded-xl shadow-2xl animate-scale-in"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <div 
                className="p-4 border-b" 
                style={{ borderColor: 'var(--border-primary)' }}
              >
                <p 
                  className="font-medium" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  {user?.displayName || user?.email?.split('@')[0] || 'Usuário'}
                </p>
                <p 
                  className="text-sm mt-1" 
                  style={{ color: 'var(--text-muted)' }}
                >
                  {user?.email}
                </p>
              </div>
              <div className="p-2">
                <button 
                  className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
                  style={{ 
                    color: 'var(--text-secondary)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  Meu Perfil
                </button>
                <button 
                  className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
                  style={{ 
                    color: 'var(--text-secondary)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  Configurações
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;