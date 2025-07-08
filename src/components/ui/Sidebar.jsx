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

const Sidebar = () => {
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
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <aside className="sidebar flex flex-col w-72 min-h-screen">
      {/* Logo/Brand */}
      <div className="p-8 border-b border-gray-700">
        <h1 className="text-gradient text-3xl font-black tracking-tight">194-STS</h1>
        <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
          Sistema de Gestão
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`sidebar-item w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 group ${
                  isActive ? 'active' : ''
                }`}
              >
                <IconComponent 
                  size={20} 
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}
                />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))' }}
          >
            <UserIcon size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
              {user?.displayName || 'Usuário'}
            </p>
            <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
              {user?.email}
            </p>
          </div>
        </div>
        
        <button
          onClick={handleLogout}
          className="btn btn-secondary w-full flex items-center justify-center gap-2 py-3 text-sm"
        >
          <LogoutIcon size={16} />
          Sair
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 