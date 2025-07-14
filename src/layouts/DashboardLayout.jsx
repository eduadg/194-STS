import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/ui/Sidebar';
import Header from '../components/ui/Header';

const DashboardLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        isMobile={isMobile}
      />
      
      {/* Mobile overlay quando sidebar está aberta */}
      {isMobile && !sidebarCollapsed && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 'calc(var(--z-fixed) - 1)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
      
      {/* Main Content Area */}
      <div style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        position: 'relative',
        marginLeft: isMobile ? 0 : (sidebarCollapsed ? 'var(--width-sidebar-collapsed)' : 'var(--width-sidebar-expanded)'),
        transition: 'margin-left var(--transition-slow) var(--ease-in-out)',
        minHeight: '100vh'
      }}>
        {/* Background Pattern Sutil */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: `
              radial-gradient(circle at 20% 50%, var(--primary-900) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, var(--secondary-900) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, var(--primary-900) 0%, transparent 50%)
            `,
            opacity: 0.03,
            zIndex: 1
          }}
        />
        
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main style={{ 
          flex: 1,
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Container com padding responsivo */}
          <div style={{ 
            flex: 1,
            padding: isMobile 
              ? 'var(--space-4) var(--space-4) var(--space-8)' 
              : 'var(--space-6) var(--space-8) var(--space-12)',
            maxWidth: 'var(--width-content-max)',
            width: '100%',
            margin: '0 auto',
            minHeight: 'calc(100vh - var(--height-header))',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;