import { useState, useEffect } from 'react';
import { AuthService } from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = AuthService.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setError(null);
    const result = await AuthService.login(email, password);
    
    if (!result.success) {
      setError(result.error);
    }
    
    return result;
  };

  const register = async (email, password, displayName) => {
    setError(null);
    const result = await AuthService.register(email, password, displayName);
    
    if (!result.success) {
      setError(result.error);
    }
    
    return result;
  };

  const logout = async () => {
    setError(null);
    const result = await AuthService.logout();
    
    if (!result.success) {
      setError(result.error);
    }
    
    return result;
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };
}; 