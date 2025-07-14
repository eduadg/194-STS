import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { ROUTES } from '../routes/constants';

export const useNavigation = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const goToLogin = () => navigate(ROUTES.LOGIN);
  const goToRegister = () => navigate(ROUTES.REGISTER);
  const goToDashboard = () => navigate(ROUTES.DASHBOARD);
  const goToProjects = () => navigate(ROUTES.PROJECTS);
  const goToTasks = () => navigate(ROUTES.TASKS);
  const goToAnalytics = () => navigate(ROUTES.ANALYTICS);
  const goToSettings = () => navigate(ROUTES.SETTINGS);
  const goToHome = () => navigate(ROUTES.HOME);

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
    goToProjects,
    goToTasks,
    goToAnalytics,
    goToSettings,
    goToHome,
    goToAuth
  };
}; 