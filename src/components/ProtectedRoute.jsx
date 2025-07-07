import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import LoadingSpinner from './ui/LoadingSpinner';

const ProtectedRoute = ({ children, fallback = null }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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