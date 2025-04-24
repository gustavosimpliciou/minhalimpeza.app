import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface AuthGuardProps {
  children: ReactNode;
  requiresSubscription?: boolean;
}

export const AuthGuard = ({ children, requiresSubscription = false }: AuthGuardProps) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/register', { 
        state: { 
          from: location,
          message: 'Para acessar esta página, você precisa criar uma conta primeiro.' 
        }, 
        replace: true 
      });
    }
  }, [isAuthenticated, navigate, location]);

  if (!isAuthenticated) {
    return <Navigate to="/register" state={{ 
      from: location,
      message: 'Para acessar esta página, você precisa criar uma conta primeiro.'
    }} replace />;
  }

  if (requiresSubscription && !user?.plan) {
    return <Navigate to="/planos" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};