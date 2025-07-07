import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export const useNavigation = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');
  const goToDashboard = () => navigate('/dashboard');
  const goToHome = () => navigate('/');

  const goToAuth = () => {
    if (user) {
      goToDashboard();
    } else {
      goToLogin();
    }
  };

  return {
    goToLogin,
    goToRegister,
    goToDashboard,
    goToHome,
    goToAuth
  };
}; 