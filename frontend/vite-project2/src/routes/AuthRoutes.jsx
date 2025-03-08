import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../pages/auth/AuthPage';
import Dashboard from '../pages/Dashboard';
import CreatePortfolioForm from '../pages/CreatePortfolioForm';
import PrivateRoute from '../components/PrivateRoute';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/create-portfolio" element={
        <PrivateRoute companyOnly={true}>
          <CreatePortfolioForm />
        </PrivateRoute>
      } />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AuthRoutes;