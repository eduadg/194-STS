import React from 'react';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from './ui/LoadingSpinner';

const ProtectedRoute = ({ children, fallback = null }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return fallback || <div>Você precisa estar logado para acessar esta página.</div>;
  }

  return children;
};

export default ProtectedRoute; 