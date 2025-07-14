import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardPage from '../pages/DashboardPage';
import ProjectsPage from '../pages/ProjectsPage';
import TasksPage from '../pages/TasksPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import SettingsPage from '../pages/SettingsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from './constants';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to={ROUTES.LOGIN} />;
}

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    <Route path={ROUTES.HOME} element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
      <Route index element={<DashboardPage />} />
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
      <Route path={ROUTES.TASKS} element={<TasksPage />} />
      <Route path={ROUTES.ANALYTICS} element={<AnalyticsPage />} />
      <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
    </Route>
    <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
  </Routes>
);

export default AppRoutes; 