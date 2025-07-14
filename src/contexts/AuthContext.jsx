import React, { createContext, useState, useEffect } from 'react';
import { AuthService } from '../services/authService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Observar mudanças no estado de autenticação
  useEffect(() => {
    const unsubscribe = AuthService.onAuthStateChange(async (firebaseUser) => {
      if (firebaseUser) {
        // Buscar dados adicionais do usuário no Firestore
        const userRef = doc(db, 'users', firebaseUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUser({ ...firebaseUser, ...userSnap.data() });
        } else {
          setUser(firebaseUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Função de login
  const login = async (email, password) => {
    setError(null);
    const result = await AuthService.login(email, password);
    if (!result.success) setError(result.error);
    return result;
  };

  // Função de registro
  const register = async (email, password, displayName, userType) => {
    setError(null);
    const result = await AuthService.register(email, password, displayName, userType);
    if (result.success) {
      // Buscar dados atualizados do usuário
      const userRef = doc(db, 'users', result.user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setUser({ ...result.user, ...userSnap.data() });
      } else {
        setUser(result.user);
      }
    } else {
      setError(result.error);
    }
    return result;
  };

  // Função de logout
  const logout = async () => {
    setError(null);
    const result = await AuthService.logout();
    if (!result.success) setError(result.error);
    return result;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      error, 
      login, 
      register, 
      logout, 
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

 