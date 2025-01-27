import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('accesToken');

  return token ? children : <Navigate to="/login" />;
};
