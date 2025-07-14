import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardIcon,
  ProjectIcon,
  TaskIcon,
  AnalyticsIcon,
  SettingsIcon,
  LogoutIcon,
  UserIcon
} from './Icons';

const Sidebar = ({ collapsed = false, onToggle, isMobile = false }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
    { id: 'projects', label: 'Projetos', path: '/projects', icon: ProjectIcon },
    { id: 'tasks', label: 'Tarefas', path: '/tasks', icon: TaskIcon },
    { id: 'analytics', label: 'Análises', path: '/analytics', icon: AnalyticsIcon },
    { id: 'settings', label: 'Configurações', path: '/settings', icon: SettingsIcon },
  ];

  const handleItemClick = (item) => {
    navigate(item.path);
    // Fechar sidebar no mobile após navegação
    if (isMobile && onToggle) {
      onToggle();
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // Erro silencioso para melhor UX
    }
  };

  const sidebarWidth = collapsed ? 'var(--width-sidebar-collapsed)' : 'var(--width-sidebar-expanded)';

  return (
    <aside 
      className="sidebar"
      style={{
        width: sidebarWidth,
        transform: isMobile && collapsed ? 'translateX(-100%)' : 'translateX(0)',
        transition: isMobile 
          ? 'transform var(--transition-slow) var(--ease-in-out)' 
          : 'width var(--transition-slow) var(--ease-in-out)',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        zIndex: 'var(--z-fixed)',
        background: 'var(--bg-card)',
        borderRight: '1px solid var(--border-primary)',
        backdropFilter: 'blur(12px)',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Logo/Brand */}
      <div 
        className="p-6 border-b flex-shrink-0" 
        style={{ 
          borderColor: 'var(--border-primary)',
          padding: collapsed ? 'var(--space-4)' : 'var(--space-6)'
        }}
      >
        <div className="flex items-center justify-between">
          <div 
            className={`transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}
            style={{ 
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-gradient">194-STS</span>
            </h1>
            <p 
              className="text-xs font-medium mt-1" 
              style={{ color: 'var(--text-muted)' }}
            >
              Sistema de Gestão
            </p>
          </div>
          {!isMobile && (
            <button
              onClick={onToggle}
              className="p-2 rounded-lg transition-colors hover:bg-opacity-10 flex-shrink-0"
              style={{ 
                color: 'var(--text-muted)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              title={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav 
        className="flex-1 overflow-y-auto" 
        style={{ 
          padding: 'var(--space-4)',
          paddingBottom: 0
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`sidebar-item w-full flex items-center text-left font-medium transition-all duration-200 group ${
                  isActive ? 'active' : ''
                }`}
                style={{
                  padding: collapsed ? 'var(--space-3)' : 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  gap: collapsed ? '0' : 'var(--space-3)',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  position: 'relative',
                  minHeight: '2.75rem',
                  background: isActive 
                    ? 'linear-gradient(135deg, var(--primary-500), var(--primary-600))' 
                    : 'transparent',
                  color: isActive 
                    ? 'var(--text-on-primary)' 
                    : 'var(--text-secondary)',
                  border: 'none',
                  cursor: 'pointer'
                }}
                title={collapsed ? item.label : ''}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }
                }}
              >
                <IconComponent 
                  size={22} 
                  className="flex-shrink-0"
                  style={{ 
                    color: 'currentColor',
                    transition: 'color var(--transition-base)'
                  }}
                />
                <span 
                  className={`text-sm transition-all duration-300 ${
                    collapsed ? 'opacity-0 w-0' : 'opacity-100'
                  }`}
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.label}
                </span>
                {isActive && !collapsed && (
                  <div 
                    className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" 
                    style={{ backgroundColor: 'white' }}
                  />
                )}
                {/* Indicador ativo para sidebar colapsada */}
                {isActive && collapsed && (
                  <div 
                    style={{
                      position: 'absolute',
                      right: '-1px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '3px',
                      height: '60%',
                      background: 'var(--text-on-primary)',
                      borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)',
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Profile Section */}
      <div 
        className="border-t flex-shrink-0" 
        style={{ 
          borderColor: 'var(--border-primary)',
          padding: 'var(--space-4)'
        }}
      >
        <div className={`flex items-center mb-4 ${collapsed ? 'justify-center' : 'gap-3'}`}>
          <div 
            className="relative flex-shrink-0"
            style={{ 
              width: collapsed ? '40px' : '48px',
              height: collapsed ? '40px' : '48px'
            }}
          >
            <div 
              className="w-full h-full rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))',
                fontSize: collapsed ? '18px' : '20px'
              }}
            >
              <UserIcon size={collapsed ? 20 : 24} />
            </div>
            <div 
              className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2"
              style={{ 
                backgroundColor: 'var(--success)',
                borderColor: 'var(--bg-card)'
              }}
              title="Online"
            />
          </div>
          
          <div 
            className={`flex-1 min-w-0 transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}
            style={{
              overflow: 'hidden'
            }}
          >
            <p 
              className="text-sm font-semibold truncate" 
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
        </div>
        
        <button
          onClick={handleLogout}
          className={`btn btn-secondary w-full flex items-center justify-center transition-all duration-200 ${
            collapsed ? 'px-3' : 'gap-2'
          }`}
          style={{
            minHeight: '2.5rem',
            fontSize: '0.875rem'
          }}
          title={collapsed ? 'Sair' : ''}
        >
          <LogoutIcon size={18} />
          <span className={`transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            Sair
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;