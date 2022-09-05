import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = localStorage.getItem('token');
  const location = useLocation();

  if (!auth) {
    return <Navigate to={'/login'} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
